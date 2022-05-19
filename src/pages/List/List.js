import React from 'react';
import styled from '@emotion/styled';
import MovieCard from './MovieCard/MovieCard';
import { Box, Typography } from '@mui/material';

function List() {
  return (
    <Box>
      <Typography>수인님의 인생영화</Typography>
      <MovieCard />
    </Box>
  );
}

export default List;
