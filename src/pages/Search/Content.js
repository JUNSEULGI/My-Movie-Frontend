import React from 'react';
import styled from '@emotion/styled';
import { Typography, Box } from '@mui/material';
import { SearchPoster } from './SearchPoster';
import moment from 'moment';

function Content({ data }) {
  const { title, poster, country, release_date } = data;

  return (
    <Box>
      <SearchPoster src={poster} />
      <Title>{title}</Title>
      <SubTitle variant="subtitle2">
        {moment(release_date).format('yyyy')} · {country}
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
