import React from 'react';
import styled from '@emotion/styled';
import MovieImage from '../../assets/images/movie_image.jpeg';

import { CardContainer } from './CardContainer';
import { Typography } from '@mui/material';
import { MoviePoster } from './MoviePoster';
import { style } from '@mui/system';

function MyReview() {
  return (
    <MyReviewContainer>
      <MyReviewMent variant="h6">
        호러적 상상력의 접목이 눈길을 사로잡기는 한다.
      </MyReviewMent>
    </MyReviewContainer>
  );
}

const MyReviewContainer = styled(CardContainer)`
  justify-content: center;
  border: 2px solid ${({ theme }) => theme.palette.test.second};
  box-shadow: 5px 7px 20px -4px #ff9201;
`;

const MyReviewMent = styled(Typography)`
  font-weight: bold;
  text-align: center;

  a {
    color: ${({ theme }) => theme.palette.test.main};
    text-decoration: none;

    :hover {
      color: orange;
    }
  }
`;

export default MyReview;
