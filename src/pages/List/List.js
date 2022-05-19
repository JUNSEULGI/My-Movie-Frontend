import React from 'react';
import styled from '@emotion/styled';
import MovieCard from './MovieCard/MovieCard';
import { Box, Typography } from '@mui/material';

function List() {
  return (
    <Box>
      <Typography>List</Typography>
      <MovieCard />
    </Box>
  );
}

export default List;
