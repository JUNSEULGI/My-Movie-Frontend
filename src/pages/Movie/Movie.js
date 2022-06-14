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

function Movie() {
  const [movieData, setMovieData] = useState({});

  useEffect(() => {
    fetch('http://172.30.1.11:8000/movies/1')
      .then(res => res.json())
      .then(res => {
        // console.log(res.data);
        setMovieData(res.data);
      });
  }, []);

  const { title, description, release_date, country, category, genre, actor } =
    movieData;

  // console.log(movieData);
  const Data = {
    data: {
      title: '범죄도시',
      description:
        '자바스크립트에서 문자열을 자르기 위해서는 substr(), substring(), slice() 함수를 사용하면 된다. 문자열을 뒤에서부터 자르기 위해서는 slice() 함수를 사용하면 효율적이며 타 언어의 Right 함수와 비슷하다고 생각하면 된다. 세 가지의 함수 중 상황에 맞는 적절한 함수를 사용하면 된다.세 가지의 함수 중 상황에 맞는 적절한 함수를 사용하면 된다.세 가지의 함수 중 상황에 맞는 적절한 함수를 사용하면 된다.세 가지의 함수 중 상황에 맞는 적절한 함수를 사용하면 된다.세 가지의 함수 중 상황에 맞는 적절한 함수를 사용하면 된다.세 가지의 함수 중 상황에 맞는 적절한 함수를 사용하면 된다.세 가지의 함수 중 상황에 맞는 적절한 함수를 사용하면 된다.세 가지의 함수 중 상황에 맞는 적절한 함수를 사용하면 된다.',
      release_date: '2022-01-01',
      country: 'korea',
      category: 'movie',
      genre: ['멜로', '로맨틱 코미디'],
      actor: [
        {
          id: 1,
          name: '마동석',
          role_name: '마석도',
          role: '주연',
        },
        {
          id: 2,
          name: '윤계상',
          role_name: '장첸',
          role: '주연',
        },
        {
          id: 3,
          name: '진선규',
          role_name: '위성락',
          role: '조연',
        },
        {
          id: 4,
          name: '김성규',
          role_name: '양 타에',
          role: '조연',
        },
        {
          id: 5,
          name: '허성태',
          role_name: '독사',
          role: '조연',
        },
      ],
      thumbnail_image: 'manager',
      movie_image: [
        'https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20220420_22%2F16504370785559wHfw_JPEG%2Fmovie_image.jpg',
        'https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20220426_19%2F16509365610560EIGm_JPEG%2Fmovie_image.jpg',
        'https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20220426_19%2F16509365610560EIGm_JPEG%2Fmovie_image.jpg',
        'https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20220426_19%2F16509365610560EIGm_JPEG%2Fmovie_image.jpg',
        'https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20220426_19%2F16509365610560EIGm_JPEG%2Fmovie_image.jpg',
        'https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20220426_19%2F16509365610560EIGm_JPEG%2Fmovie_image.jpg',
        'https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20220426_19%2F16509365610560EIGm_JPEG%2Fmovie_image.jpg',
        'https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20220426_19%2F16509365610560EIGm_JPEG%2Fmovie_image.jpg',
        'https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20220426_19%2F16509365610560EIGm_JPEG%2Fmovie_image.jpg',
        'https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20220426_19%2F16509365610560EIGm_JPEG%2Fmovie_image.jpg',
        'https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20220426_19%2F16509365610560EIGm_JPEG%2Fmovie_image.jpg',
        'https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20220426_19%2F16509365610560EIGm_JPEG%2Fmovie_image.jpg',
        'https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20220426_19%2F16509365610560EIGm_JPEG%2Fmovie_image.jpg',
        'https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20220426_19%2F16509365610560EIGm_JPEG%2Fmovie_image.jpg',
        'https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20220426_19%2F16509365610560EIGm_JPEG%2Fmovie_image.jpg',
        'https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20220426_19%2F16509365610560EIGm_JPEG%2Fmovie_image.jpg',
      ],
      trailer: [
        'https://www.youtube.com/embed/OEZc_c7A7Ko',
        'https://www.youtube.com/embed/OEZc_c7A7Ko',
        'https://www.youtube.com/embed/OEZc_c7A7Ko',
      ],
    },
  };

  const ReviewData = {
    data: {
      oneline: '여기는 30글자까지 들어갑니다.',
      rating: '여기는 별점',
      my_review:
        '자바스크립트에서 문자열을 자르기 위해서는 substr(), substring(), slice() 함수를 사용하면 된다. 문자열을 뒤에서부터 자르기 위해서는 slice() 함수를 사용하면 효율적이며 타 언어의 Right 함수와 비슷하다고 생각하면 된다. 세 가지의 함수 중 상황에 맞는 적절한 함수를 사용하면 된다.',
      reviewer: {
        profile_img: 'url',
        user_name: '리뷰쓴사람',
      },
    },
  };

  // const [mockData, setMockData] = useState({});

  function MovieContainer() {
    return (
      <>
        <MovieBackGround>
          <MovieInfo data={Data.data} />
          {Data.data.actor.length != 0 ? (
            <>
              <ContainerTitle>출연/제작</ContainerTitle>
              <ActorContainer>
                <Box sx={{ display: 'flex', overflow: 'scroll' }}>
                  {/* {actor?.map(actor => ( */}
                  {Data.data.actor?.map(actor => (
                    <Actor actor={actor} />
                  ))}
                </Box>
              </ActorContainer>
            </>
          ) : (
            ''
          )}
          <ContainerTitle>리뷰</ContainerTitle>
          {Object.entries(ReviewData).length ? (
            <MyReview review={ReviewData.data} />
          ) : (
            <NoReview />
          )}
          {Data.data.trailer.length != 0 ? (
            <>
              <ContainerTitle>예고편</ContainerTitle>
              <TrailerContainer>
                {Data.data.trailer.map(video => (
                  <Trailer video={video} />
                ))}
              </TrailerContainer>
            </>
          ) : (
            ''
          )}
          {Data.data.movie_image.length != 0 ? (
            <>
              <ContainerTitle>갤러리</ContainerTitle>
              <MovieGallery movie_image={Data.data.movie_image} />
            </>
          ) : (
            ''
          )}
        </MovieBackGround>
      </>
    );
  }

  return (
    <MyViewLayout
      movie
      background={Data.data.movie_image[1]}
      center={<MovieContainer />}
    />
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
  display: block;
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
