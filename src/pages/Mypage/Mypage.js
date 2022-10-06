import React from 'react';
import MyViewLayout from '../../layout/Layout';
import { Profile, WatchedMovie } from './index';
import { Box } from '@mui/material';
import styled from '@emotion/styled';

function Mypage() {
  function MypageContainer() {
    return (
      <>
        <MypageBox>
          <Profile />
          <WatchedMovie />
        </MypageBox>
      </>
    );
  }
  return <MyViewLayout center={<MypageContainer />} />;
}

export default Mypage;

const MypageBox = styled(Box)`
  display: flex;
  width: 100%;
  @media screen and (max-width: 600px) {
  }
  @media ${p => p.theme.deviceSize.mobile} {
    width: 100%;
    display: block;
  }
`;
