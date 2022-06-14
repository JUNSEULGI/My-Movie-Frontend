import React from 'react';
import styled from '@emotion/styled';
import { CardContainer } from './CardContainer';
import { Box, Typography } from '@mui/material';
import MovieRating from './MovieRating';

function MyReview({ review }) {
  const { oneline, rating, my_review, reviewer } = review;
  return (
    <MyReviewContainer>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Logo>My View!</Logo>
        <MovieRating rating={rating} />
      </Box>
      <MyBox>
        <MyReviewTitle variant="h5">{oneline}</MyReviewTitle>
      </MyBox>
      <MyReviewContent>{my_review} </MyReviewContent>
    </MyReviewContainer>
  );
}

const MyReviewContainer = styled(CardContainer)`
  display: block;
  border: 2px solid ${({ theme }) => theme.palette.test.second};
  box-shadow: 5px 7px 20px -4px #ff9201;
  position: relative;
  margin-bottom: 2em;
  overflow: unset;

  ::after {
    content: ' ';
    position: absolute;
    bottom: -2em;
    right: 30px;
    border-width: 1em;
    border-style: solid;
    border-color: #ff9201 transparent transparent transparent;
  }
`;

const MyBox = styled.div``;

const MyReviewTitle = styled(Typography)`
  margin-bottom: 8px;
  font-weight: bold;
`;

const Logo = styled(Typography)`
  /* color: #fe7d01; */
  color: ${({ theme }) => theme.palette.test.main};
  font-family: 'Galada', cursive;
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 8px;
`;

const MyReviewContent = styled(Typography)`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: wrap;
`;

const Reviewer = styled.div``;

export default MyReview;
