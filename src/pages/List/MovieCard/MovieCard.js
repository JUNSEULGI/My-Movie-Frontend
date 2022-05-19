import React from 'react';
import styled from '@emotion/styled';
import { Card, CardMedia, CardHeader } from '@mui/material';

function MovieCard() {
  return (
    <CardBox>
      <Poster src="https://file2.nocutnews.co.kr/newsroom/image/2022/04/08/202204081311322351_0.jpg" />
      <Title title="닥터 스트레인지: 대혼돈의 멀티버스" />
    </CardBox>
  );
}

const CardBox = styled(Card)`
  width: 270px;
`;
const Poster = styled.img`
  width: 242px;
`;
const Title = styled(CardHeader)`
  font-size: 14px;
`;

export default MovieCard;
