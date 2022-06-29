import React from 'react';
import styled from '@emotion/styled';
import { CardMedia, Card, CardHeader, Typography } from '@mui/material';
import MovieImage from '../../assets/images/movie_image.jpeg';
import { CardContainer } from './CardContainer';
import { Box } from '@mui/system';
import SeeMoreButton from './SeeMoreButton';
import MovieRating from './MovieRating';
import AgeBadge from './AgeBadge';

function MovieInfo({ data }) {
  let age = data;
  const {
    title,
    en_title,
    description,
    release_date,
    country,
    category,
    ratings,
    running_time,
    genre,
    thumbnail_image_url,
  } = data;

  // \n을 <br/>로 바꿔주는
  function replaceBrTag(str) {
    if (str == undefined || str == null) {
      return { __html: '내용이 없습니다' };
    }

    str = str.replace(/\r\n/gi, '<br>');
    str = str.replace(/\\n/gi, '<br>');
    str = str.replace(/\n/gi, '<br>');
    return { __html: str };
  }

  let ageToString = age.age == 0 ? 'ALL' : age.age + '세';

  let ageColor = '';

  if (ageToString == 'ALL') {
    ageColor = '#07964B';
  } else if (ageToString == '12세') {
    ageColor = '#EABD01';
  } else if (ageToString == '15세') {
    ageColor = '#DC7317';
  } else {
    ageColor = '#D61D29';
  }

  return (
    <CardContainer>
      <MovieImg component="img" height="100%" image={thumbnail_image_url} />
      {/* <MovieImg component="img" height="100%" image={MovieImage} /> */}
      <Box sx={{ paddingLeft: '22px' }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <MovieTitle variant="h4">{title}</MovieTitle>
          <MovieRating rating={ratings} />
        </Box>
        <SubInfo variant="subtitle2">
          {en_title}
          <br />
          {release_date?.substr(0, 4)} · {country}
          {genre?.map((genreItems, index) => (
            <span id={index} style={{ marginRight: '10px' }}>
              {genreItems}
            </span>
          ))}
          <br />
          {running_time}분 · <AgeBadge age={ageToString} ageColor={ageColor} />
        </SubInfo>
        {/* 러닝 타임은 00:00:00 형태로 */}

        <Summary variant="subtitle1">줄거리</Summary>
        <SummaryContainer>
          <div dangerouslySetInnerHTML={replaceBrTag(description)} />
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

const Content = styled.p``;
