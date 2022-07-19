import React from 'react';
import styled from '@emotion/styled';
import { useRecoilState } from 'recoil';
import { movieState } from '../../state';
import { CardMedia, Typography } from '@mui/material';
import { CardContainer, MovieRating, AgeBadge } from '../Movie';
import { Box } from '@mui/system';
import { replaceBrTag } from '../../util/replaceBrTag';

function MovieInfo() {
  const [movie, setMovie] = useRecoilState(movieState);
  const {
    title,
    age,
    en_title,
    description,
    release_date,
    country,
    ratings,
    running_time,
    genre,
    thumbnail_image_url,
  } = movie;

  const floorRating = ratings.substr(0, 3);
  return (
    <CardContainer>
      <MovieImg component="img" height="100%" image={thumbnail_image_url} />
      <Box sx={{ paddingLeft: '22px' }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <MovieTitle variant="h2">{title}</MovieTitle>
          <MovieRating rating={floorRating} />
        </Box>
        <SubInfo variant="subtitle2">
          {en_title}
          <br />
          {release_date?.substr(0, 4)} · {country}
          {genre?.map((genreItems, index) => (
            <span key={index} style={{ marginRight: '10px' }}>
              {genreItems}
            </span>
          ))}
          <br />
          {running_time}분 · <AgeBadge age={age} />
        </SubInfo>
        <Summary variant="subtitle1">줄거리</Summary>
        <SummaryContainer>
          <Content
            variant="body1"
            dangerouslySetInnerHTML={replaceBrTag(description)}
          />
        </SummaryContainer>
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
  -ms-overflow-style: none; /* Explorer */
  scrollbar-width: none; /* Firefox */
  ::-webkit-scrollbar {
    display: none; /* Chrome */
  }
  display: -webkit-box;
  -webkit-line-clamp: 7;
  -webkit-box-orient: vertical;
  overflow-y: scroll;

  p {
    /* width: 600px; */
    margin: 0;
    padding: 0;
  }
`;

const Summary = styled(Typography)`
  font-weight: bold;
  margin-top: 30px;
`;

const Content = styled(Typography)``;
