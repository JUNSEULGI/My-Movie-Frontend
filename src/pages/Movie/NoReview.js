import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Link, Typography } from '@mui/material';
import { CardContainer } from './CardContainer';
import AddReview from '../List/AddReview';

function NoReview({ title }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <CardContainer style={{ justifyContent: 'center' }}>
      <NoReviewMent variant="h6">
        남긴 후기가 없어요!
        <br />
        후기를 쓰고 &nbsp;
        <MyLink onClick={handleOpen}>{title}</MyLink>를 나의 영화 목록에
        추가해보세요!
      </NoReviewMent>
      <AddReview open={open} setOpen={setOpen} />
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
