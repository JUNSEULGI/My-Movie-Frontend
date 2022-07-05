import React from 'react';
import styled from '@emotion/styled';
import { Box, Card, Typography } from '@mui/material';
import { Poster } from './MovieCard';

const FavoriteMovie = ({ bestMovies }) => {
  return (
    <Container>
      {bestMovies.map(movie => (
        <BestMovie key={movie.id}>
          <BackgroundPoster img={movie.img} />
          <Title>닥터스트레인지</Title>
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

  & :first-of-type {
    grid-column: 1 / 3;
    grid-row: 1 / 3;
    padding: 20px;
  }
`;

const BestMovie = styled(Card)`
  padding: 10px;
  border-radius: 8px;
`;

const BackgroundPoster = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${props => props.img});
  background-size: cover;
  border-radius: 8px;
`;

export default FavoriteMovie;
