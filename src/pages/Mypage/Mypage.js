import React from 'react';
import MyViewLayout from '../../layout/Layout';
import { Profile, WatchedMovie } from './index';
import { Box } from '@mui/material';

function Mypage() {
  function MypageContainer() {
    return (
      <>
        <Box sx={{ display: 'flex' }}>
          <Profile />
          <WatchedMovie />
        </Box>
      </>
    );
  }
  return <MyViewLayout center={<MypageContainer />} />;
}

export default Mypage;
