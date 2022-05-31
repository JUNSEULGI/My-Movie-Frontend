import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';
import MyViewLayout from '../../layout/Layout';
import Aside from '../../components/Aside';
import MovieCard from './MovieCard/MovieCard';
import Search from './Search/Search';

function List() {
  function ListLayout() {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Box>
          <Typography>수인님의 인생영화</Typography>
          <Box>
            <MovieCard />
            <MovieCard addCard={true} setOpen={setOpen} />
          </Box>
        </Box>
        <Search open={open} setOpen={setOpen} />
      </>
    );
  }
  return <MyViewLayout leftMenu={<Aside />} center={<ListLayout />} />;
}

export default List;
