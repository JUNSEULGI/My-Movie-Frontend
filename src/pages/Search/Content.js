import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Container, Typography, Box } from '@mui/material';
import { API } from '../../Modules/API';
import { BASE_URL } from '../../Modules/API';
import { MovieRating } from '../Movie';

function Content({ data }) {
  const { id, title, url, country, year } = data;
  const [value, setValue] = useState(0);
  const [loading, setLoading] = useState(true);
  const [backgroundInfo, setBackgroundInfo] = useState({});

  return (
    <Box>
      <Poster src={url} />
      <Title>{title}</Title>
      <MovieRating />
    </Box>
  );
}

export default Content;

const ContainerTitle = styled(Typography)`
  font-weight: bold;
  margin: 80px 0 6px;
  color: ${({ theme }) => theme.palette.common.white};
`;

// const Movie = styled.div`
//   @media screen and (max-width: 600px) {
//     scroll-snap-align: start;
//   }
// `;

const SubTitle = styled(Typography)`
  margin-bottom: 20px;

  @media screen and (max-width: 600px) {
    font-size: 14px;
    margin-bottom: 6px;
  }
`;

const WatchedBox = styled(Box)`
  @media screen and (max-width: 600px) {
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
  }
`;

const Poster = styled.img`
  width: 100%;
  aspect-ratio: 11/16;
  background-color: aliceblue;
  border-radius: 8px;
  box-shadow: 5px 7px 20px -4px rgba(0, 0, 0, 0.6);
  cursor: pointer;
`;

const Title = styled.p`
  font-weight: bold;
  margin-top: 8px;
  /* overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis; */
`;

const WatchedTime = styled.div``;

const WatchedTimeTypo = styled(Typography)`
  @media screen and (max-width: 600px) {
    font-size: 16px;
  }
`;
