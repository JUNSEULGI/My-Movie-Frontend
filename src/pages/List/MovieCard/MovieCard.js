import React from 'react';
import styled from '@emotion/styled';
import {
  Box,
  Card,
  CardMedia,
  CardHeader,
  Typography,
  Rating,
  Badge,
} from '@mui/material';

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
            <Number>2.5 / </Number>5
          </Number>
        </InfoContainer>
      </InfoContainer>
      <BadgeContainer>
        <GenreBadge badgeContent="모험" color="warning" width={32} />
        <GenreBadge badgeContent={<span>판타지</span>} color="primary" />
      </BadgeContainer>
    </CardBox>
  );
}

const CardBox = styled(Card)`
  padding: 14px;
  width: 270px;
  height: 460px;
  border-radius: 8px;
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
`;
const MovieInfo = styled(Typography)`
  font-size: 12px;
`;
const Star = styled(Rating)`
  color: #02c685;
`;
const Number = styled.span`
  font-size: 14px;
`;
const BadgeContainer = styled(Box)`
  background-color: yellow;
  position: relative;
`;
const GenreBadge = styled(Badge)`
  position: absolute;
  right: 0;
  width: 41px;
  color: white;
  font-size: 10px;
`;

export default MovieCard;
