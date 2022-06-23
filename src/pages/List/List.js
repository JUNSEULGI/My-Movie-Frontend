import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import MyViewLayout from '../../layout/Layout';
import Aside from '../../components/Aside';
import MovieCard from './MovieCard';
import AddReview from './AddReview';

function List() {
  function ListLayout() {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Box>
          <Typography>수인님의 인생영화</Typography>
          <Box sx={{ display: 'flex' }}>
            <MovieCard />

            <MovieCard addCard={true} setOpen={setOpen} />
          </Box>
        </Box>
        <AddReview open={open} setOpen={setOpen} />
      </>
    );
  }
  return (
    <MyViewLayout
      // leftMenu={<Aside />}
      center={<ListLayout />}
    />
  );
}

export default List;
