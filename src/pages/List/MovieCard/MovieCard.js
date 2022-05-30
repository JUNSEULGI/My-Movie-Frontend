import React from 'react';
import styled from '@emotion/styled';
import { Box, Card, CardMedia, Typography, Rating, Chip } from '@mui/material';

function MovieCard() {
  return (
    <CardBox>
      <Poster
        component="img"
        image="https://file2.nocutnews.co.kr/newsroom/image/2022/04/08/202204081311322351_0.jpg"
      />
      <Title>닥터 스트레인지: 대혼돈의 멀티버스</Title>
      <InfoContainer>
        <MovieInfo>2022 · 미국</MovieInfo>
        <InfoContainer>
          <Star size="small" max={1} value={1} readOnly />
          <Number>
            <ThickNumber>2.5</ThickNumber> / 5
          </Number>
        </InfoContainer>
      </InfoContainer>
      <GenreContainer>
        <Genre label="모험" color="warning" size="small" />
        <Genre label="판타지" color="success" size="small" />
      </GenreContainer>
    </CardBox>
  );
}

const CardBox = styled(Card)`
  padding: 14px;
  width: 270px;
  height: 460px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.palette.background.card};
`;

const Poster = styled(CardMedia)`
  width: 100%;
  border-radius: 8px;
`;

const InfoContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled(Typography)`
  margin: 4px 0;
  font-size: 14px;
  font-weight: 700;
  color: ${({ theme }) => theme.palette.common.white};
`;

const MovieInfo = styled(Typography)`
  font-size: 12px;
  color: ${({ theme }) => theme.palette.common.white};
`;

const Star = styled(Rating)`
  color: ${({ theme }) => theme.palette.success.main};
`;

const Number = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.palette.common.white};
`;

const ThickNumber = styled(Number)`
  font-weight: 700;
`;

const GenreContainer = styled(Box)`
  display: flex;
  justify-content: flex-end;
  margin-top: 25px;
`;

const Genre = styled(Chip)`
  height: 14px;
  margin-left: 4px;
  font-size: 10px;
  font-weight: 700;
  color: ${({ theme }) => theme.palette.common.white};
`;

export default MovieCard;
