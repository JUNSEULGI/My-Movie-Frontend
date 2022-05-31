import React from 'react';
import styled from '@emotion/styled';
import MyViewLayout from '../../layout/Layout';
import { CardContainer } from './CardContainer';
import MovieCard from './MovieCard';
import Actor from './Actor';
import Trailer from './Trailer';
import { Container } from '@mui/material';
import { Box } from '@mui/system';

function Movie() {
  function MovieContainer() {
    return (
      <>
        <MovieBackGround>
          <MovieCard />
          <ActorContainer>
            <ContainerTitle>출연/제작</ContainerTitle>
            <Box sx={{ display: 'flex', overflow: 'scroll' }}>
              <Actor />
              <Actor />
              <Actor />
              <Actor />
              <Actor />
              <Actor />
              <Actor />
              <Actor />
              <Actor />
              <Actor />
            </Box>
          </ActorContainer>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <TrailerContainer>
              <ContainerTitle>예고편</ContainerTitle>
              <Trailer />
            </TrailerContainer>
            <GalleryContainer>
              <ContainerTitle>갤러리</ContainerTitle>
              <Trailer />
            </GalleryContainer>
          </Box>
        </MovieBackGround>
      </>
    );
  }

  return <MyViewLayout center={<MovieContainer />} />;
}

export default Movie;

const MovieBackGround = styled.div`
  padding: 30px;
  /* background-color: white; */
`;

const ContainerTitle = styled.h4`
  /* margin-bottom: 37px; */
  margin: 0;
`;

const ActorContainer = styled(CardContainer)`
  display: block;
`;

const TrailerContainer = styled(ActorContainer)`
  width: 49%;
`;

const GalleryContainer = styled(ActorContainer)`
  width: 49%;
`;
