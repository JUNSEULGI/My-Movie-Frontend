import React from 'react';
import styled from '@emotion/styled';
import { useRecoilValue } from 'recoil';
import { movieState } from '../../state';
import { CardMedia, Typography } from '@mui/material';
import { CardContainer, MovieRating, AgeBadge } from '../Movie';
import { Box } from '@mui/system';
import { replaceBrTag } from '../../util/replaceBrTag';
import { Title } from '@mui/icons-material';

function MovieInfo() {
  const movie = useRecoilValue(movieState);
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

  // const floorRating = ratings.substr(0, 3);
  return (
    <MovieInfoContainer>
      <MovieImg component="img" height="100%" image={thumbnail_image_url} />
      <Box sx={{ paddingLeft: '22px' }}>
        <TitleRatingBox
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <MovieTitle variant="h2">{title}</MovieTitle>
          {/* <MovieRating rating={floorRating} /> */}
        </TitleRatingBox>
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
        <SummaryBox>
          <Summary variant="subtitle1">줄거리</Summary>
          <SummaryContainer>
            <Content
              variant="body1"
              dangerouslySetInnerHTML={replaceBrTag(description)}
            />
          </SummaryContainer>
        </SummaryBox>
      </Box>
    </MovieInfoContainer>
  );
}

export default MovieInfo;

const MovieInfoContainer = styled(CardContainer)`
  @media screen and (max-width: 380px) {
    margin-top: 70px;
  }
`;

const MovieImg = styled(CardMedia)`
  width: 239px;
  @media screen and (max-width: 380px) {
    width: 125px;
  }
`;

const TitleRatingBox = styled(Box)``;
const MovieTitle = styled(Typography)`
  font-weight: bold;

  @media screen and (max-width: 380px) {
    font-size: 1rem;
  }
`;

const SubInfo = styled(Typography)`
  margin-top: 10px;
  line-height: 1.2rem;
  font-weight: bold;
`;

const SummaryBox = styled(Box)`
  @media screen and (max-width: 380px) {
    display: none;
  }
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
`;

const Summary = styled(Typography)`
  font-weight: bold;
  margin-top: 100px;
`;

const Content = styled(Typography)``;
