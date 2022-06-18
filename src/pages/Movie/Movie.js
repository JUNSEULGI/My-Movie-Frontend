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
  const Data = {
    movie_info: {
      title: '버즈 라이트이어',
      en_title: 'Lightyear',
      description:
        '우주 저 너머 운명을 건 미션,\n무한한 모험이 시작된다!\n\n미션 #1 \n나, 버즈 라이트이어. 인류 구원에 필요한 자원을 감지하고 현재 수많은 과학자들과 미지의 행성으로 향하고 있다. 이번 미션은 인류의 역사를 새롭게 쓸 것이라 확신한다. \n\n미션 #2\n잘못된 신호였다. 이곳은 삭막하고 거대한 외계 생물만이 살고 있는 폐허의 땅이다. 나의 실수로 모두가 이곳에 고립되고 말았다. 모두를 구하기 위해서 모든 것을 제자리에 돌려 놔야 한다. \n\n미션 #3\n실수를 바로잡기 위한 탈출 미션을 위해 1년의 준비를 마쳤다. 어쩌다 한 팀이 된 정예 부대와 이 미션을 수행할 예정이다. 우주를 집어삼킬 ‘저그 황제’와 대규모 로봇 군사의 위협이 계속되지만 나는 절대 포기할 수 없다. 그런데… 여긴 또 어디지? 시간 속에 갇힌 건가?',
      running_time: 100,
      age: 0,
      ratings: '4.0',
      release_date: '2022-06-15',
      country: '미국',
      category: 'movie',
      genre: ['모험'],
      actor: [
        {
          id: 6,
          name: '크리스 에반스',
          country: '미국',
          image:
            'https://myviewjjky.s3.ap-northeast-2.amazonaws.com/image/actor/%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%84%89%E1%85%B3+%E1%84%8B%E1%85%A6%E1%84%87%E1%85%A1%E1%86%AB%E1%84%89%E1%85%B3.jpg',
          role: '주연',
          role_name: '버즈 라이트이어',
        },
        {
          id: 7,
          name: '타이카 와이티티',
          country: '미국',
          image:
            'https://myviewjjky.s3.ap-northeast-2.amazonaws.com/image/actor/%E1%84%90%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%8F%E1%85%A1+%E1%84%8B%E1%85%AA%E1%84%8B%E1%85%B5%E1%84%90%E1%85%B5%E1%84%90%E1%85%B5.jpg',
          role: '주연',
          role_name: '타이카',
        },
        {
          id: 8,
          name: '피터 손',
          country: '미국',
          image:
            'https://myviewjjky.s3.ap-northeast-2.amazonaws.com/image/actor/%E1%84%91%E1%85%B5%E1%84%90%E1%85%A5+%E1%84%89%E1%85%A9%E1%86%AB.jpg',
          role: '주연',
          role_name: '피터',
        },
      ],
      thumbnail_image_url:
        'https://myviewjjky.s3.ap-northeast-2.amazonaws.com/image/thumbnail/%E1%84%87%E1%85%A5%E1%84%8C%E1%85%B3%E1%84%85%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%90%E1%85%B3%E1%84%8B%E1%85%B5%E1%84%8B%E1%85%A5_thumbnail.jpeg',
      image_url: [
        'https://myviewjjky.s3.ap-northeast-2.amazonaws.com/image/gallery/Z8jafJT0TOkoU1C0Z5xo_Q.jpeg',
        'https://myviewjjky.s3.ap-northeast-2.amazonaws.com/image/gallery/yymKC7-5asM_KEH8oxIdyg.jpeg',
        'https://myviewjjky.s3.ap-northeast-2.amazonaws.com/image/gallery/XvOdKXuyw4ES5L83Y1qvtw.jpeg',
        'https://myviewjjky.s3.ap-northeast-2.amazonaws.com/image/gallery/UwEF-X2__wDZg2WHiFQ7Tg.jpeg',
        'https://myviewjjky.s3.ap-northeast-2.amazonaws.com/image/gallery/UOcFw-BDSh-yoR0gmc35tQ.jpeg',
      ],
      video_url: [
        'https://myviewjjky.s3.ap-northeast-2.amazonaws.com/video/movie/%EB%B2%84%EC%A6%88_%EB%9D%BC%EC%9D%B4%ED%8A%B8%EC%9D%B4%EC%96%B4.MOV',
        'https://myviewjjky.s3.ap-northeast-2.amazonaws.com/video/movie/%EB%B2%84%EC%A6%88_%EB%9D%BC%EC%9D%B4%ED%8A%B8%EC%9D%B4%EC%96%B4.MOV',
        'https://myviewjjky.s3.ap-northeast-2.amazonaws.com/video/movie/%EB%B2%84%EC%A6%88_%EB%9D%BC%EC%9D%B4%ED%8A%B8%EC%9D%B4%EC%96%B4.MOV',
      ],
    },
  };

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
