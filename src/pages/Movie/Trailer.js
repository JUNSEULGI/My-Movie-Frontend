import React from 'react';
import styled from '@emotion/styled';

function Trailer() {
  return <MovieTrailer></MovieTrailer>;
}

export default Trailer;

const MovieTrailer = styled.div`
  height: 360px;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url('https://img.youtube.com/vi/L6JTC0t3n9U/0.jpg');
`;
