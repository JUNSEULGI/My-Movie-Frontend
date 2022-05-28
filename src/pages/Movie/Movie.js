import React from 'react';
import styled from '@emotion/styled';
import MyViewLayout from '../../layout/Layout';

function Movie() {
  function MovieContainer() {
    return (
      <>
        <MovieBackGround>
          <Test>adsas</Test>
        </MovieBackGround>
      </>
    );
  }

  return <MyViewLayout center={<MovieContainer />} />;
}

export default Movie;

const MovieBackGround = styled.div`
  background-color: white;
  color: white;
`;

const Test = styled.div`
  background-color: aqua;
`;
