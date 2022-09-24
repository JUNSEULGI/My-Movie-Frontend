import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from '@emotion/styled';
import { constSelector, useRecoilState } from 'recoil';
import { movieState } from '../../state';
import MyViewLayout from '../../layout/Layout';
import { API } from '../../Modules/API';
import MyStep from '../List/MyStep';
import {
  CardContainer,
  MovieInfo,
  Actor,
  Trailer,
  NoReview,
  MyReview,
  MovieGallery,
} from '../Movie';
import MyViewModal from '../../components/MyViewModal/MyViewModal';
import ReviewBox from '../../components/MyViewModal/ReviewBox';
import { Button, Typography, Box } from '@mui/material';
import LoadWrap from '../../components/Loading/LoadWrap';
import { fetcher } from '../../Modules/fetcher';

function Movie() {
  const params = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useRecoilState(movieState);
  const [review, setReview] = useState();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const observer = useRef(null);
  const [page, setPage] = useState(0);
  const [intersecting, setIntersecting] = useState(false);
  const [actorList, setActorList] = useState([]);

  const fetchMoreEl = useCallback(
    node => {
      console.log('sssssadadasdasdasdasasd');
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(entries => {
        setIntersecting(entries.some(entry => entry.isIntersecting));
        if (intersecting) {
          setPage(page + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [intersecting]
  );

  const openModal = () => {
    if (!localStorage.access_token) {
      if (
        window.confirm(`로그인한 유저만 이용이 가능합니다. 로그인하시겠습니까?`)
      ) {
        navigate('/');
      }
    } else {
      setOpen(true);
    }
  };

  const closeModal = (_, reason) => {
    if (reason === 'backdropClick') return;
    setOpen(false);
  };

  const getReview = async () => {
    // setLoading(true);
    try {
      const { data: res } = await fetcher(`${API.review_movie}/${params.id}`);
      if (res.message === 'REVIEW_DOSE_NOT_EXISTS') return;
      setReview(res.result);
      setMovie(prev => {
        return { ...prev, review_id: res.result.review_id };
      });
      // setLoading(false);
    } catch (error) {
      console.log('error', error);
    }
  };

  const getMovie = async () => {
    setLoading(true);
    try {
      const { data: res } = await fetcher(
        `${API.movie_detail}?movie_id=${params.id}&page=${page}`
      );
      setMovie(prev => {
        return { ...prev, ...res.movie_info };
      });
      setActorList(res.movie_info.actor);
      setLoading(false);
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    if (page === 0) return;
    if (page > total_page) return;
    fetcher(`${API.movie_detail}?movie_id=${params.id}&page=${page}`).then(
      ({ data }) => {
        // console.log(movie_info);
        setActorList(prev => [...prev, ...data.movie_info.actor]);
        observer.current = null;
      }
    );
    return;
  }, [page]);
  console.log('page', page);
  console.log('actorList', actorList);

  useEffect(() => {
    getMovie();
    getReview();
  }, [params.id]);

  const { title, actor, video_url, image_url, total_page } = movie;
  console.log('movie', movie);

  const background = image_url?.[0] || '#e2e2e2';

  const [imageCount, setImageCount] = useState(8);

  const aa = [...new Set(image_url)];
  aa.length = imageCount;
  // const imageList = (image_url.length = imageCount);
  [...new Set(image_url)].length = imageCount;

  function MovieContent() {
    return (
      <MovieBackGround>
        {movie.id && <MovieInfo />}
        {actor?.length > 0 ? (
          <>
            <ContainerTitle>출연/제작</ContainerTitle>
            <ActorContainer>
              {actorList?.map((actor, index) => (
                <Actor key={index} actor={actor} />
              ))}
              <NextActor ref={fetchMoreEl}>next</NextActor>
            </ActorContainer>
          </>
        ) : (
          ''
        )}
        <ContainerTitle>리뷰</ContainerTitle>
        {review?.review_id ? (
          <MyReview openModal={openModal} review={review} />
        ) : (
          <NoReview title={title} openModal={openModal} />
        )}
        <MyViewModal
          open={open}
          breadcrumbs={
            movie.id ? (
              <MyStep id={movie.id} check={true} />
            ) : (
              <MyStep check={false} />
            )
          }
          closeModal={closeModal}
          content={<ReviewBox />}
        />
        {video_url.length === 0 ? (
          ''
        ) : (
          <>
            <ContainerTitle>예고편</ContainerTitle>
            <TrailerContainer>
              {/* {video_url.map((video, index) => (
                // <Trailer key={index} video={video} />
              ))} */}
            </TrailerContainer>
          </>
        )}
        {image_url.length === 0 ? (
          ''
        ) : (
          <>
            <ContainerTitle>갤러리</ContainerTitle>
            <MovieGallery movie_image={aa} />
            {imageCount >= image_url.length ? (
              ''
            ) : (
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Button
                  sx={{ margin: '16px' }}
                  onClick={() => setImageCount(imageCount + 8)}
                  variant="contained"
                >
                  더 보기
                </Button>
              </Box>
            )}
          </>
        )}
      </MovieBackGround>
    );
  }

  //이거 추가해
  if (!image_url) return null;
  return (
    movie && (
      <MyViewLayout
        movie
        background={background}
        center={<LoadWrap loading={loading} content={<MovieContent />} />}
      />
    )
  );
}

export default Movie;

const MovieBackGround = styled.div`
  padding: 80px;
  @media screen and (max-width: 380px) {
    margin-top: 20px;
    padding: 0;
    overflow-x: hidden;
  }
`;

const ContainerTitle = styled(Typography)`
  font-weight: bold;
  margin: 80px 0 6px;
  color: ${({ theme }) => theme.palette.common.white};
`;

const ActorContainer = styled(CardContainer)`
  padding-top: 40px;
  display: flex;
  overflow-x: scroll;
  -ms-overflow-style: none; /* Explorer */
  scrollbar-width: none; /* Firefox */
  /* scroll-snap-type: x mandatory; */
  ::-webkit-scrollbar {
    display: none; /* Chrome */
  }
`;

const TrailerContainer = styled.div`
  display: flex;
  overflow-x: scroll;
  -ms-overflow-style: none; /* Explorer */
  scrollbar-width: none; /* Firefox */
  ::-webkit-scrollbar {
    display: none; /* Chrome */
  }

  @media screen and (max-width: 380px) {
    width: 360px;
    /* overflow-x: ;/ */
  }
`;

const NextActor = styled(Button)``;
