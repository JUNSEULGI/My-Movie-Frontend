import React from 'react';
import styled from '@emotion/styled';
import { CardMedia, Card, CardHeader, Typography } from '@mui/material';
import MovieImage from '../../assets/images/movie_image.jpeg';
import { CardContainer } from './CardContainer';
import { Box } from '@mui/system';

function MovieCard() {
  return (
    <CardContainer>
      <MovieImg component="img" height="100%" image={MovieImage} />
      <Box sx={{ paddingLeft: '22px' }}>
        <MovieTitle variant="h6">닥터 스트레인지: 대혼돈의 멀티버스</MovieTitle>
        <SubInfo variant="subtitle2">
          Doctor Strange in the Multiverse of Madness
          <br /> 2022 · 미국 · 액션
          <br /> 2시간 6분 · 12세 별점
        </SubInfo>
        <br />
        줄거리
        <br />
        지금껏 본 적 없는 마블의 극한 상상력! <br /> 5월, 광기의 멀티버스가
        깨어난다! <br /> <br />
        끝없이 균열되는 차원과 뒤엉킨 시공간의 멀티버스가 열리며 오랜 동료들,{' '}
        <br />
        그리고 차원을 넘어 들어온 새로운 존재들을 맞닥뜨리게 된 `닥터 <br />
        스트레인지`. 대혼돈 속, 그는 예상치 못한 극한의 적과 맞서 싸워야만
        하는데….
      </Box>
    </CardContainer>
  );
}

export default MovieCard;

const MovieImg = styled(CardMedia)`
  width: 239px;
`;

const MovieTitle = styled(Typography)`
  font-weight: bold;
`;

const SubInfo = styled(Typography)`
  font-weight: bold;
`;
