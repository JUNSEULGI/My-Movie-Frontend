import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from '@emotion/styled';
import { useRecoilState } from 'recoil';
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

function Movie() {
  const params = useParams();
  const access_token = localStorage.getItem('access_token');
  const [review, setReview] = useRecoilState(reviewState);
  const [movie, setMovie] = useRecoilState(movieState);

  useEffect(() => {
    fetch(`${BASE_URL}reviews/movie/${params.id}`, {
      headers: {
        Authorization: access_token,
      },
    })
      .then(res => res.json())
      .then(res => {
        console.log(res.result);
        setReview(res.result);
      });
  }, []);

  console.log(review);

  useEffect(() => {
    fetch(`${BASE_URL}movies/detail/${params.id}`, {
      headers: {
        Authorization: access_token,
      },
    })
      .then(res => res.json())
      .then(res => {
        setMovie(res.movie_info);
      });
  }, []);

  //Mock Data
  // const movie = Data.movie_info;

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
  } = movie;

  function MovieContainer() {
    return (
      <MovieBackGround>
        <MovieInfo data={movie} />
        {movie.actor?.length > 0 ? (
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
        {review.review_id ? <MyReview /> : <NoReview title={movie.title} />}
        {/* <MyReview
            hasReview={hasReview}
            setHasReview={setHasReview}
            review={review}
          /> */}

        <ContainerTitle>예고편</ContainerTitle>
        <TrailerContainer>
          {movie.video_url?.map((video, index) => (
            <Trailer key={index} video={video} />
          ))}
        </TrailerContainer>
        <ContainerTitle>갤러리</ContainerTitle>
        <MovieGallery movie_image={movie.image_url} />
      </MovieBackGround>
    );
  }

  //이거 추가해
  if (!movie.image_url) return null;
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
