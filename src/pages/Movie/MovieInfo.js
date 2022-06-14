import React from 'react';
import styled from '@emotion/styled';
import { CardMedia, Card, CardHeader, Typography } from '@mui/material';
import MovieImage from '../../assets/images/movie_image.jpeg';
import { CardContainer } from './CardContainer';
import { Box } from '@mui/system';
import SeeMoreButton from './SeeMoreButton';

function MovieInfo({ data }) {
  const { title, descriotion, release_date, country, category, genre } = data;

  return (
    <CardContainer>
      <MovieImg component="img" height="100%" image={MovieImage} />
      <Box sx={{ paddingLeft: '22px' }}>
        <MovieTitle variant="h6">{title}</MovieTitle>
        <SubInfo variant="subtitle2">
          Doctor Strange in the Multiverse of Madness//영문(원) 제목
          <br />
          {release_date.substr(0, 4)} · {country} ·{' '}
          {genre?.map(genreItems => (
            <span style={{ marginRight: '10px' }}>{genreItems}</span>
          ))}
          <br /> 2시간 6분 · 12세 별점 //러닝 타임
        </SubInfo>

        <Summary variant="subtitle1">줄거리 //필요</Summary>
        <Box sx={{ display: 'flex' }}>
          <SummaryContainer>
            <p>
              지금껏 본 적 없는 마블의 극한 상상력! <br /> 5월, 광기의
              멀티버스가 깨어난다! <br /> <br />
              끝없이 균열되는 차원과 뒤엉킨 시공간의 멀티버스가 열리며 오랜
              동료들, <br />
              그리고 차원을 넘어 들어온 새로운 존재들을 맞닥뜨리게 된 `닥
              <br />
              스트레인지`. 대혼돈 속, 그는 예상치 못한 극한의 적과 맞서 싸워야만
              하는 스트레인지`. 대혼돈 속, 그는 예상치 못한 극한의 적과 맞서
              싸워야만 하는 스트레인지`. 대혼돈 속, 그는 예상치 못한 극한의 적과
              맞서 싸워야만 하는 스트레인지`. 대혼돈 속, 그는 예상치 못한 극한의
              적과 맞서 싸워야만 하는.
            </p>
          </SummaryContainer>
          <SeeMoreButton />
        </Box>
      </Box>
    </CardContainer>
  );
}

export default MovieInfo;

const MovieImg = styled(CardMedia)`
  width: 239px;
`;

const MovieTitle = styled(Typography)`
  font-weight: bold;
`;

const SubInfo = styled(Typography)`
  font-weight: bold;
`;

const SummaryContainer = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
  overflow: hidden;

  p {
    width: 600px;
    margin: 0;
    padding: 0;
  }
`;

const Summary = styled(Typography)`
  font-weight: bold;
  margin-top: 70px;
`;
