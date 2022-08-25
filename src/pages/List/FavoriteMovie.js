import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { Box, Card, Typography } from '@mui/material';

const FavoriteMovie = ({ topMovies }) => {
  const navigate = useNavigate();

  return (
    <Container>
      {topMovies?.map(item => (
        <BestMovie
          key={item.review_id}
          onClick={() => navigate(`/movie/${item.movie.id}`)}
        >
          <BackgroundPosterWrapper>
            <BackgroundPoster
              src={item.movie.poster}
              alt="poster of my best movie"
            />
            <Title variant="h1">{item.movie.title}</Title>
          </BackgroundPosterWrapper>
        </BestMovie>
      ))}
    </Container>
  );
};

const Container = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 250px 250px;
  gap: 18px 24px;

  & div:first-of-type {
    grid-column: 1 / 3;
    grid-row: 1 / 3;
    // 자기의 첫번째 div만 선택하는 게 아니라, 자식 요소들에도 첫번째 자식 div 죄다 선택되는 문제
  }
`;

const BestMovie = styled(Card)`
  padding: 20px;
  background: ${({ theme }) => theme.palette.test.card};
  border-radius: 8px;
  box-shadow: 5px 7px 20px -4px rgba(0, 0, 0, 0.6);
  cursor: pointer;
`;

const BackgroundPosterWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
`;

const BackgroundPoster = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all ease 0.4s;

  :hover {
    transform: scale(1.1);
  }
`;

const Title = styled(Typography)`
  position: absolute;
  bottom: 10px;
  left: 16px;
  color: ${({ theme }) => theme.palette.common.white};
  font-weight: bold;
  text-shadow: 4px 2px 4px black;
`;

export default FavoriteMovie;
