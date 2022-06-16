import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import MyViewLayout from '../../layout/Layout';
import { CardContainer } from './CardContainer';
import MovieInfo from './MovieInfo';
import Actor from './Actor';
import Trailer from './Trailer';
import NoReview from './NoReview';
import MyReview from './MyReview';
import MovieGallery from './MovieGallery';
import { Container } from '@mui/material';
import { Box } from '@mui/system';
import { DETAIL_URL } from '../../Modules/API';

function Movie() {
  const [movieData, setMovieData] = useState({});

  useEffect(() => {
    fetch(`${DETAIL_URL}2`)
      .then(res => res.json())
      .then(res => {
        console.log(res);
        setMovieData(res.movie_info);
      });
  }, []);
  console.log(movieData);

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

  console.log(image_url);
  const Data = {
    movie_info: {
      title: '범죄도시2',
      en_title: '미구현',
      description:
        '“느낌 오지? 이 놈 잡아야 하는 거”\n\n가리봉동 소탕작전 후 4년 뒤, 금천서 강력반은 베트남으로 도주한 용의자를 인도받아 오라는 미션을 받는다. 괴물형사 ‘마석도’(마동석)와 ‘전일만’(최귀화) 반장은 현지 용의자에게서 수상함을 느끼고, 그의 뒤에 무자비한 악행을 벌이는 ‘강해상’(손석구)이 있음을 알게 된다. ‘마석도’와 금천서 강력반은 한국과 베트남을 오가며 역대급 범죄를 저지르는 ‘강해상’을 본격적으로 쫓기 시작하는데...\n\n나쁜 놈들 잡는 데 국경 없다!\n통쾌하고 화끈한 범죄 소탕 작전이 다시 펼쳐진다!',
      running_time: '미구현',
      age: '미구현',
      ratings: '미구현',
      release_date: '2022-05-30',
      country: '한국',
      category: 'movie',
      genre: ['코미디', '액션'],
      actor: [
        {
          id: 1,
          name: '마동석',
          country: '한국',
          image:
            'https://myviewjjky.s3.ap-northeast-2.amazonaws.com/image/actor/%E1%84%86%E1%85%A1%E1%84%83%E1%85%A9%E1%86%BC%E1%84%89%E1%85%A5%E1%86%A8.jpeg',
          role: '주연',
          role_name: '마석도',
        },
        {
          id: 2,
          name: '최귀화',
          country: '한국',
          image:
            'https://myviewjjky.s3.ap-northeast-2.amazonaws.com/image/actor/%E1%84%87%E1%85%A1%E1%86%A8%E1%84%8C%E1%85%B5%E1%84%92%E1%85%AA%E1%86%AB.jpeg',
          role: '주연',
          role_name: '강해상',
        },
        {
          id: 3,
          name: '박지환',
          country: '한국',
          image:
            'https://myviewjjky.s3.ap-northeast-2.amazonaws.com/image/actor/%E1%84%89%E1%85%A9%E1%86%AB%E1%84%89%E1%85%A5%E1%86%A8%E1%84%80%E1%85%AE.jpeg',
          role: '주연',
          role_name: '전일만',
        },
        {
          id: 4,
          name: '손석구',
          country: '한국',
          image:
            'https://myviewjjky.s3.ap-northeast-2.amazonaws.com/image/actor/%E1%84%8E%E1%85%AC%E1%84%80%E1%85%B1%E1%84%92%E1%85%AA.jpeg',
          role: '조연',
          role_name: '장이수',
        },
        {
          id: 5,
          name: '허동원',
          country: '한국',
          image:
            'https://myviewjjky.s3.ap-northeast-2.amazonaws.com/image/actor/%E1%84%92%E1%85%A5%E1%84%83%E1%85%A9%E1%86%BC%E1%84%8B%E1%85%AF%E1%86%AB.jpeg',
          role: '조연',
          role_name: '오동균',
        },
      ],
      thumbnail_image_url:
        'https://myviewjjky.s3.ap-northeast-2.amazonaws.com/image/thumbnail/%E1%84%87%E1%85%A5%E1%86%B7%E1%84%8C%E1%85%AC%E1%84%83%E1%85%A9%E1%84%89%E1%85%B52_thumbnail.jpeg',
      image_url: [
        'https://myviewjjky.s3.ap-northeast-2.amazonaws.com/image/gallery/2t-e9p_pooN0OuqB5EjNmA.jpeg',
        'https://myviewjjky.s3.ap-northeast-2.amazonaws.com/image/gallery/ajkHDQJ4jmU6T5QGUgK3Hw.jpeg',
        'https://myviewjjky.s3.ap-northeast-2.amazonaws.com/image/gallery/UwEF-X2__wDZg2WHiFQ7Tg.jpeg',
        'https://myviewjjky.s3.ap-northeast-2.amazonaws.com/image/gallery/XvOdKXuyw4ES5L83Y1qvtw.jpeg',
        'https://myviewjjky.s3.ap-northeast-2.amazonaws.com/image/gallery/yymKC7-5asM_KEH8oxIdyg.jpeg',
      ],
      video_url: [
        'https://myviewjjky.s3.ap-northeast-2.amazonaws.com/video/movie/%EB%B2%94%EC%A3%84%EB%8F%84%EC%8B%9C2.MOV',
        'https://myviewjjky.s3.ap-northeast-2.amazonaws.com/video/movie/%EB%B2%94%EC%A3%84%EB%8F%84%EC%8B%9C2.MOV',
        'https://myviewjjky.s3.ap-northeast-2.amazonaws.com/video/movie/%EB%B2%94%EC%A3%84%EB%8F%84%EC%8B%9C2.MOV',
        'https://myviewjjky.s3.ap-northeast-2.amazonaws.com/video/movie/%EB%B2%94%EC%A3%84%EB%8F%84%EC%8B%9C2.MOV',
        'https://myviewjjky.s3.ap-northeast-2.amazonaws.com/video/movie/%EB%B2%94%EC%A3%84%EB%8F%84%EC%8B%9C2.MOV',
      ],
    },
  };

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

  // const [mockData, setMockData] = useState({});

  const DATA = Data.movie_info;

  function MovieContainer() {
    return (
      <>
        <MovieBackGround>
          <MovieInfo data={movieData} rating={ReviewData.data.rating} />
          {movieData.actor?.length != 0 ? (
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
          <ContainerTitle>리뷰</ContainerTitle>

          <MyReview review={ReviewData.data} />

          <NoReview title={title} />

          <ContainerTitle>예고편</ContainerTitle>
          <TrailerContainer>
            {Data.movie_info.video_url?.map((video, index) => (
              <Trailer key={index} video={video} />
            ))}
          </TrailerContainer>

          <ContainerTitle>갤러리</ContainerTitle>
          <MovieGallery movie_image={DATA.image_url} />
        </MovieBackGround>
      </>
    );
  }
  // console.log(image_url[0]);
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
