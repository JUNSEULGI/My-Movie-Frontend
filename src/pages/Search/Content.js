import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Container, Typography, Box } from '@mui/material';
import { API } from '../../Modules/API';
import { BASE_URL } from '../../Modules/API';
import { MovieRating } from '../Movie';
import { SearchPoster } from './SearchPoster';

function Content({ data }) {
  const { id, title, url, country, year } = data;
  const [value, setValue] = useState(0);
  const [loading, setLoading] = useState(true);
  const [backgroundInfo, setBackgroundInfo] = useState({});

  return (
    <Box>
      <SearchPoster src={url} />
      <Title>{title}</Title>
      <SubTitle variant="subtitle2">
        {year} · {country}
      </SubTitle>
      {/* <MovieRating /> */}
    </Box>
  );
}

export default Content;

// const ContainerTitle = styled(Typography)`
//   font-weight: bold;
//   margin: 80px 0 6px;
//   color: ${({ theme }) => theme.palette.common.white};
// `;

// const Movie = styled.div`
//   @media screen and (max-width: 600px) {
//     scroll-snap-align: start;
//   }
// `;

const SubTitle = styled(Typography)`
  color: ${({ theme }) => theme.palette.common.white};
`;

// const WatchedBox = styled(Box)`
//   @media screen and (max-width: 600px) {
//     overflow-x: scroll;
//     scroll-snap-type: x mandatory;
//   }
// `;

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

// const WatchedTime = styled.div``;

// const WatchedTimeTypo = styled(Typography)`
//   @media screen and (max-width: 600px) {
//     font-size: 16px;
//   }
// `;
