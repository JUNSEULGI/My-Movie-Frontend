import React from 'react';
import styled from '@emotion/styled';
import MovieImage from '../../assets/images/movie_image.jpeg';

import { CardContainer } from './CardContainer';
import { Box, Typography } from '@mui/material';
import { MoviePoster } from './MoviePoster';
import { style } from '@mui/system';

function MyReview() {
  return (
    <MyReviewContainer>
      <Logo>My View!</Logo>
      <Box sx={{ display: 'flex' }}>
        <MyBox>
          <MyReviewTitle variant="h6">
            안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요
          </MyReviewTitle>
        </MyBox>
        <p>star Rating</p>
      </Box>
      <MyReviewContent>
        호러적 상상력의 접목이 눈길을 사로잡기는 한다.
      </MyReviewContent>
    </MyReviewContainer>
  );
}

const MyReviewContainer = styled(CardContainer)`
  display: block;
  width: 70%;
  border: 2px solid ${({ theme }) => theme.palette.test.second};
  box-shadow: 5px 7px 20px -4px #ff9201;
`;

const MyBox = styled.div`
  width: 88%;
`;

const MyReviewTitle = styled(Typography)`
  font-weight: bold;
`;

const Logo = styled(Typography)`
  /* color: #fe7d01; */
  color: ${({ theme }) => theme.palette.test.main};
  font-family: 'Galada', cursive;
  font-weight: bold;
  font-size: 20px;
`;

const MyReviewContent = styled(Typography)`
  overflow: hidden;
  text-align: end;
  text-overflow: ellipsis;
  white-space: wrap;
`;

export default MyReview;
