import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { Typography, Box } from '@mui/material';
import { SearchPoster } from './SearchPoster';

function NewMovie({ data }) {
  const { id, title, poster, country, release_date } = data;

  return (
    <FlexBox>
      <Box style={{ flex: 1 }}>
        <Link to={`/movie/${id}`}>
          <SearchPoster src={poster} />
        </Link>
      </Box>
      <Box style={{ flex: 2 }}>
        <Link to={`/movie/${id}`}>
          <Title>{title}</Title>
        </Link>
        <SubTitle variant="subtitle2">
          {release_date} · {country}
        </SubTitle>
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
