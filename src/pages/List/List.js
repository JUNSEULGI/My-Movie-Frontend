import React from 'react';
import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';
import { style } from '@mui/system';
import MyViewLayout from '../../layout/Layout';
import Aside from '../../components/Aside';
import MovieCard from './MovieCard/MovieCard';

function List() {
  function ListLayout() {
    return (
      <Box>
        <Typography>수인님의 인생영화</Typography>
        <MovieCard />
      </Box>
    );
  }
  return <MyViewLayout leftMenu={<Aside />} center={<ListLayout />} />;
}

export default List;
