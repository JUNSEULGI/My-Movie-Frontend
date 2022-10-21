import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { Typography, Box } from '@mui/material';
import { SearchPoster } from '../../components/Poster/SearchPoster';
import { MyLink } from '../../components/Link';
import moment from 'moment';
import Star from '../../components/Star';

function NewMovie({ data }) {
  const { id, title, poster, country, ratings, release_date } = data;
  return (
    <FlexBox>
      <Box style={{ flex: 1 }}>
        <Link to={`/movie/${id}`}>
          <SearchPoster src={poster || '/images/no-image.svg'} />
        </Link>
      </Box>
      <Box style={{ flex: 2 }}>
        <MyLink to={`/movie/${id}`}>
          <Title component="span">{title}</Title>
        </MyLink>
        <SubTitle variant="subtitle2">{country}</SubTitle>
        <SubTitle variant="subtitle2">
          {moment(release_date).format('yyyy.MM.DD')} 개봉
        </SubTitle>
        <FlexBox>
          <Star /> <SubTitle variant="subtitle2">{ratings}</SubTitle>
        </FlexBox>
      </Box>
    </FlexBox>
  );
}

const FlexBox = styled(Box)`
  display: flex;
  gap: 10px;
`;

const SubTitle = styled(Typography)`
  color: ${({ theme }) => theme.palette.common.white};
`;

const Title = styled(Typography)`
  margin: 8px 0 3px;
  font-weight: bold;
  color: ${({ theme }) => theme.palette.common.white};
`;

export default NewMovie;
