import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from '@emotion/styled';
import { useRecoilState } from 'recoil';
import { movieState } from '../../state';
import MyViewLayout from '../../layout/Layout';
import { API } from '../../Modules/API';
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
import { Typography } from '@mui/material';
import LoadWrap from '../../components/Loading/LoadWrap';
import { fetcher } from '../../Modules/fetcher';

function Movie() {
  const params = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useRecoilState(movieState);
  const [review, setReview] = useState();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);

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

  const reviewDataApi = async () => {
    setLoading(true);
    try {
      const response = await fetcher(`${API.reviews_movie}/${params.id}`);
      const result = response.data;
      if (result.message === 'REVIEW_DOSE_NOT_EXISTS') return;
      setReview(result.result);
      setMovie(prev => {
        return { ...prev, review_id: result.result.review_id };
      });
      setLoading(false);
    } catch (error) {
      console.log('error', error);
    }
  };

  const movieDataApi = async () => {
    setLoading(true);
    try {
      const response = await fetcher(`${API.movies_detail}/${params.id}`);
      const result = response.data;
      setMovie(prev => {
        return { ...prev, ...result.movie_info };
      });
      setLoading(false);
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    movieDataApi();
    reviewDataApi();
  }, [params.id]);

  const { title, actor, video_url, image_url } = movie;

  function MovieContainer() {
    return (
      <MovieBackGround>
        {movie.id && <MovieInfo />}
        {actor?.length > 0 ? (
          <>
            <ContainerTitle>출연/제작</ContainerTitle>
            <ActorContainer>
              {actor?.map((actor, index) => (
                <Actor key={index} actor={actor} />
              ))}
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
          closeModal={closeModal}
          content={<ReviewBox />}
        />

        <ContainerTitle>예고편</ContainerTitle>
        <TrailerContainer>
          {video_url.map((video, index) => (
            <Trailer key={index} video={video} />
          ))}
        </TrailerContainer>
        <ContainerTitle>갤러리</ContainerTitle>
        <MovieGallery movie_image={image_url} />
      </MovieBackGround>
    );
  }

  //이거 추가해
  if (!image_url) return null;
  return (
    movie && (
      <MyViewLayout
        movie
        background={image_url[0]}
        center={<LoadWrap loading={loading} content={<MovieContainer />} />}
      />
    )
  );
}

export default Movie;

const MovieBackGround = styled.div`
  padding: 80px;
`;

const ContainerTitle = styled(Typography)`
  font-weight: bold;
  font-size: 1rem;
  margin: 20px 0 6px;
  color: ${({ theme }) => theme.palette.common.white};
`;

const ActorContainer = styled(CardContainer)`
  padding-top: 40px;
  display: flex;
  overflow-x: scroll;
  -ms-overflow-style: none; /* Explorer */
  scrollbar-width: none; /* Firefox */
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
`;
