import React from 'react';
import styled from '@emotion/styled';
import { Typography, Box } from '@mui/material';
import { SearchPoster } from './SearchPoster';

function NewMovie({ data }) {
  const { id, title, url, country, year } = data;

  return (
    <FlexBox>
      <Box style={{ flex: 1 }}>
        <SearchPoster src={url} />
      </Box>
      <Box style={{ flex: 2 }}>
        <Title>{title}</Title>
        <SubTitle variant="subtitle2">
          {year} · {country}
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
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export default NewMovie;
