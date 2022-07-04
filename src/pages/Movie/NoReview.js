import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Link, Typography } from '@mui/material';
import { CardContainer } from './CardContainer';
import MyViewModal from '../../components/MyViewModal/MyViewModal';

function NoReview({ title }) {
  const [reviews, setReviews] = useState([]);
  const [open, setOpen] = useState(false);

  return (
    <CardContainer style={{ justifyContent: 'center' }}>
      <NoReviewMent variant="h6">
        남긴 후기가 없어요!
        <br />
        후기를 쓰고 &nbsp;
        <MyLink>{title}</MyLink>를 나의 영화 목록에 추가해보세요!
      </NoReviewMent>
    </CardContainer>
  );
}

export default NoReview;

const NoReviewMent = styled(Typography)`
  font-weight: bold;
  text-align: center;
`;

const MyLink = styled(Link)`
  color: ${({ theme }) => theme.palette.test.main};
  text-decoration: none;
  cursor: pointer;
  :hover {
    color: orange;
  }
`;
