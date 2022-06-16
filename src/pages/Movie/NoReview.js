import React from 'react';
import styled from '@emotion/styled';
import { CardContainer } from './CardContainer';
import { Typography } from '@mui/material';

function NoReview({ title }) {
  return (
    <CardContainer style={{ justifyContent: 'center' }}>
      <NoReviewMent variant="h6">
        남긴 후기가 없어요!
        <br />
        후기를 쓰고 &nbsp;
        <a href="#">{title}</a>를 나의 영화 목록에 추가해보세요!
      </NoReviewMent>
    </CardContainer>
  );
}

export default NoReview;

const NoReviewMent = styled(Typography)`
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
