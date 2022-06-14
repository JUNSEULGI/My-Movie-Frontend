import React from 'react';
import styled from '@emotion/styled';
import { CardMedia, Card, CardHeader, Typography } from '@mui/material';
import MovieImage from '../../assets/images/movie_image.jpeg';
import { CardContainer } from './CardContainer';
import { Box } from '@mui/system';
import SeeMoreButton from './SeeMoreButton';

function MovieInfo({ data }) {
  const { title, description, release_date, country, category, genre } = data;
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

        <SummaryContainer>
          <p>{description}</p>
        </SummaryContainer>
        <Box sx={{ display: 'flex', justifyContent: 'end' }}>
          {<SeeMoreButton />}
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
  -webkit-line-clamp: 5;
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
