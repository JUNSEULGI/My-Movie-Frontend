import React from 'react';
import styled from '@emotion/styled';
import { Typography, Box } from '@mui/material';
import { SearchPoster } from './SearchPoster';

function Content({ data }) {
  const { id, title, poster, country, release_date } = data;

  return (
    <Box>
      <SearchPoster src={poster} />
      <Title>{title}</Title>
      <SubTitle variant="subtitle2">
        {release_date} · {country}
      </SubTitle>
    </Box>
  );
}

export default Content;

const SubTitle = styled(Typography)`
  color: ${({ theme }) => theme.palette.common.white};
`;

const Title = styled(Typography)`
  margin: 8px 0 3px;
  font-weight: bold;
  color: ${({ theme }) => theme.palette.common.white};
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  text-overflow: ellipsis;
`;
