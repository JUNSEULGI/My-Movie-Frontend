import React from 'react';
import styled from '@emotion/styled';
import { Card, CardMedia, CardHeader, Box } from '@mui/material';

function MovieCard() {
  return (
    <Card>
      <CardMedia image="https://file2.nocutnews.co.kr/newsroom/image/2022/04/08/202204081311322351_0.jpg" />
      <CardHeader title="닥터 스트레인지" />
    </Card>
  );
}

// const CardBox = styled(Box)``;

export default MovieCard;
