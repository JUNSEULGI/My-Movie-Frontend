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
          <BackgroundPoster img={item.movie.poster}>
            <Title variant="h1">{item.movie.title}</Title>
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
  margin: 10px 16px;
  color: ${({ theme }) => theme.palette.common.white};
  font-weight: bold;
`;

export default FavoriteMovie;
