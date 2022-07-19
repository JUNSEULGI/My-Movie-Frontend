import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from '@emotion/styled';
import { useRecoilState, useResetRecoilState } from 'recoil';
import { reviewState, movieState } from '../../state';
import MyViewLayout from '../../layout/Layout';
import { BASE_URL } from '../../Modules/API';
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
import OnlyMovieReview from './OnlyMovieReview';

function Movie() {
  const params = useParams();
  const access_token = localStorage.getItem('access_token');
  const [review, setReview] = useRecoilState(reviewState);
  const [movie, setMovie] = useRecoilState(movieState);
  const resetMovie = useResetRecoilState(movieState);
  const resetReview = useResetRecoilState(reviewState);
  const [open, setOpen] = useState(false);

  const openModal = () => setOpen(true);
  const closeModal = (_, reason) => {
    if (reason === 'backdropClick') return;
    resetMovie();
    resetReview();
    setOpen(false);
  };

  useEffect(() => {
    fetch(`${BASE_URL}reviews/movie/${params.id}`, {
      headers: {
        Authorization: access_token,
      },
    })
      .then(res => res.json())
      .then(res => {
        if (res.message === 'REVIEW_DOSE_NOT_EXISTS') return;
        setReview(res.result);
      });
  }, [params.id]);

  useEffect(() => {
    fetch(`${BASE_URL}movies/detail/${params.id}`, {
      headers: {
        Authorization: access_token,
      },
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
        setMovie(res.movie_info);
      });
  }, []);
  console.log(movie.id);

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
          <MyReview openModal={openModal} />
        ) : (
          <NoReview title={title} openModal={openModal} />
        )}
        <MyViewModal
          open={open}
          closeModal={closeModal}
          content={<OnlyMovieReview />}
        />

        <ContainerTitle>예고편</ContainerTitle>
        <TrailerContainer>
          {video_url?.map((video, index) => (
            <Trailer key={index} video={video} />
          ))}
        </TrailerContainer>
        <ContainerTitle>갤러리</ContainerTitle>
        <MovieGallery movie_image={image_url} />
      </MovieBackGround>
    );
  }
  console.log('나는 무비');

  //이거 추가해
  if (!image_url) return null;
  return (
    movie && (
      <MyViewLayout
        movie
        background={image_url[0]}
        center={<MovieContainer />}
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
