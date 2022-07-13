import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from '@emotion/styled';
import { useRecoilState, useResetRecoilState } from 'recoil';
import {
  userState,
  buttonState,
  movieState,
  reviewState,
  hasReviewState,
} from '../../state';

import MyViewLayout from '../../layout/Layout';
import { MK_URL } from '../../Modules/API';
import { Data } from './Mock/MovieData';
import {
  CardContainer,
  MovieInfo,
  Actor,
  Trailer,
  NoReview,
  MyReview,
  MovieGallery,
} from '../Movie';
import { Message } from '@mui/icons-material';

function Movie() {
  const params = useParams();
  const access_token = localStorage.getItem('access_token');
  const [reviewData, setReviewData] = useState({});
  const [myReview, setMyReview] = useRecoilState(reviewState);

  const [hasReview, setHasReview] = useRecoilState(hasReviewState);
  const [movieData, setMovieData] = useState({});

  useEffect(() => {
    fetch(`${MK_URL}reviews/movie/${params.id}`, {
      headers: {
        Authorization: access_token,
      },
    })
      .then(res => res.json())
      .then(res => {
        setReviewData(res.result);
      });
  }, []);

  console.log(hasReview);
  console.log(reviewData);

  reviewData?.review_id ? setHasReview(true) : setHasReview(false);

  useEffect(() => {
    fetch(`${MK_URL}movies/detail/${params.id}`, {
      headers: {
        Authorization: access_token,
      },
    })
      .then(res => res.json())
      .then(res => {
        setMovieData(res.movie_info);
      });
  }, []);

  //Mock Data
  // const movieData = Data.movie_info;

  //데이터 구조분해
  const {
    title,
    description,
    release_date,
    country,
    category,
    genre,
    actor,
    video_url,
    image_url,
  } = movieData;

  function MovieContainer() {
    return (
      <>
        <MovieBackGround>
          <MovieInfo data={movieData} />
          {/* // */}
          {movieData.actor?.length != 0 ? (
            <>
              <ContainerTitle>출연/제작</ContainerTitle>
              <ActorContainer>
                {actor?.map(actor => (
                  <Actor actor={actor} />
                ))}
              </ActorContainer>
            </>
          ) : (
            ''
          )}
          <ContainerTitle>리뷰</ContainerTitle>
          {hasReview == true ? (
            <MyReview review={reviewData} />
          ) : (
            <NoReview title={movieData.title} />
          )}
          {/* <MyReview
            hasReview={hasReview}
            setHasReview={setHasReview}
            review={reviewData}
          /> */}

          <ContainerTitle>예고편</ContainerTitle>
          <TrailerContainer>
            {movieData.video_url?.map((video, index) => (
              <Trailer key={index} video={video} />
            ))}
          </TrailerContainer>
          <ContainerTitle>갤러리</ContainerTitle>
          <MovieGallery movie_image={movieData.image_url} />
        </MovieBackGround>
      </>
    );
  }

  //이거 추가해
  if (!movieData.image_url) return null;
  return (
    movieData && (
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

const ContainerTitle = styled.h4`
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
