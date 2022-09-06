import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Container, Typography, Tabs, Tab, Box } from '@mui/material';
import { API } from '../../Modules/API';
import { BASE_URL } from '../../Modules/API';
import { MovieRating } from '../Movie';

function Content() {
  const [value, setValue] = useState(0);
  const [loading, setLoading] = useState(true);
  const [backgroundInfo, setBackgroundInfo] = useState({});

  return (
    <Movie>
      <PPoster
        src="https://an2-img.amz.wtchn.net/image/v2/5pL_uFIH7pb9V5X3w5g5Uw.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk5Ea3dlRGN3TUhFNE1DSmRMQ0p3SWpvaUwzWXlMM04wYjNKbEwybHRZV2RsTHpFMk5USTJOakl6TVRVNU1EVTVOemd5TnpVaWZRLnhkRnhjTUFucS1fWFFBZjIyUHBBMWd1WDhuSlpLNDItTG9aWWtqV3Jmclk"
        id="1"
      />
      <Title>제목</Title>
      <Box sx={{ display: 'flex', justifyContent: 'end' }}>
        <MovieRating />
      </Box>
    </Movie>
  );
}

export default Content;

const ContainerTitle = styled(Typography)`
  font-weight: bold;
  margin: 80px 0 6px;
  color: ${({ theme }) => theme.palette.common.white};
`;

const Movie = styled.div`
  margin-right: 16px;

  @media screen and (max-width: 600px) {
    scroll-snap-align: start;
  }
`;
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

const PPoster = styled.img`
  width: 131.594px;
  height: 192.203px;
  background-color: aliceblue;
  border-radius: 8px;
  box-shadow: 5px 7px 20px -4px rgba(0, 0, 0, 0.6);
  cursor: pointer;
`;

const Title = styled.p`
  font-weight: bold;
  text-align: end;
  margin: 8px 0 0 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const WatchedTime = styled.div``;

const WatchedTimeTypo = styled(Typography)`
  @media screen and (max-width: 600px) {
    font-size: 16px;
  }
`;
