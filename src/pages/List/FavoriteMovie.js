import React from 'react';
import styled from '@emotion/styled';
import { Box, Card, Typography } from '@mui/material';

const FavoriteMovie = ({ bestMovies }) => {
  return (
    <Container>
      {bestMovies.map(movie => (
        <BestMovie key={movie.id}>
          <BackgroundPoster img={movie.img}>
            <Title variant="h3">{movie.title}</Title>
          </BackgroundPoster>
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
    padding: 20px;
    // 자기의 첫번째 div만 선택하는 게 아니라, 자식 요소들에도 첫번째 자식 div 죄다 선택되는 문제
  }
`;

const BestMovie = styled(Card)`
  padding: 10px;
  border-radius: 8px;
`;

const BackgroundPoster = styled.div`
  display: flex;
  align-items: flex-end;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.img});
  background-size: cover;
  background-position: center;
  border-radius: 8px;
`;

const Title = styled(Typography)`
  color: white;
  font-weight: bold;
  font-size: 24px;
`;

export default FavoriteMovie;
