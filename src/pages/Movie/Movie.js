import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from '@emotion/styled';
import MyViewLayout from '../../layout/Layout';
import { CardContainer } from './CardContainer';
import MovieInfo from './MovieInfo';
import Actor from './Actor';
import Trailer from './Trailer';
import NoReview from './NoReview';
import MyReview from './MyReview';
import MovieGallery from './MovieGallery';
import { DETAIL_URL } from '../../Modules/API';
import { Data } from './Mock/MovieData';

function Movie() {
  const params = useParams();
  const [movieData, setMovieData] = useState({});

  useEffect(() => {
    fetch(`${DETAIL_URL}${params.id}`)
      .then(res => res.json())
      .then(res => {
        setMovieData(res.movie_info);
      });
  }, []);

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

  //Mock Data
  const DATA = Data.movie_info;

  // Review Mock Data
  const ReviewData = {
    data: {
      oneline: '여기는 30글자까지 들어갑니다.',
      rating: '3.5',
      my_review:
        '자바스크립트에서 문자열을 자르기 위해서는 substr(), substring(), slice() 함수를 사용하면 된다. 문자열을 뒤에서부터 자르기 위해서는 slice() 함수를 사용하면 효율적이며 타 언어의 Right 함수와 비슷하다고 생각하면 된다. 세 가지의 함수 중 상황에 맞는 적절한 함수를 사용하면 된다.',
      reviewer: {
        profile_img: 'url',
        user_name: '리뷰쓴사람',
      },
    },
  };

  function MovieContainer() {
    return (
      <>
        <MovieBackGround>
          <MovieInfo data={DATA} />
          {/* // */}
          {DATA.actor?.length != 0 ? (
            //  <MovieInfo data={movieData} />
            //  {movieData.actor?.length != 0 ? (
            <>
              <ContainerTitle>출연/제작</ContainerTitle>
              <ActorContainer>
                {/* {actor?.map(actor => ( */}
                {DATA.actor?.map(actor => (
                  <Actor actor={actor} />
                ))}
              </ActorContainer>
            </>
          ) : (
            ''
          )}
          {/* // */}
          <ContainerTitle>리뷰</ContainerTitle>
          <MyReview review={ReviewData.data} />
          <NoReview title={DATA.title} />
          {/* // */}
          <ContainerTitle>예고편</ContainerTitle>
          <TrailerContainer>
            {DATA.video_url?.map((video, index) => (
              <Trailer key={index} video={video} />
            ))}
            {/* // */}
          </TrailerContainer>
          {/* // */}
          <ContainerTitle>갤러리</ContainerTitle>
          <MovieGallery movie_image={DATA.image_url} />
        </MovieBackGround>
      </>
    );
  }

  //이거 추가해
  // if (!movieData.image_url) return null;
  return (
    movieData && (
      <MyViewLayout
        movie
        background={DATA.image_url[0]}
        // background={image_url[0]}
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
