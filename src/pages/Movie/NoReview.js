import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Box, Link, Typography } from '@mui/material';
import { CardContainer } from './CardContainer';
import { ReviewIcon, FabContainer } from './MyIconButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AddIcon from '@mui/icons-material/Add';
import MyViewModal from '../../components/MyViewModal/MyViewModal';

function NoReview({ title }) {
  const [reviews, setReviews] = useState([]);
  const [open, setOpen] = useState(false);

  return (
    <>
      <Box sx={{ position: 'relative' }}>
        <CardContainer style={{ justifyContent: 'center' }}>
          <NoReviewMent variant="h6">
            남긴 후기가 없어요!
            <br />
            후기를 쓰고 &nbsp;
            <MyLink onClick={() => console.log('add')}>{title}</MyLink>를 나의
            영화 목록에 추가해보세요!
          </NoReviewMent>
        </CardContainer>
        <NoReviewFabContainer>
          <AddReviewButton onClick={() => console.log('add')}>
            <AddCircleOutlineIcon fontSize="large" />
          </AddReviewButton>
        </NoReviewFabContainer>
      </Box>
    </>
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

  &:hover {
    color: orange;
  }
`;

const NoReviewFabContainer = styled(FabContainer)``;

const AddReviewButton = styled(ReviewIcon)`
  padding: 6px;
  &:hover {
    color: white;
    background-color: #ff9201;
  }
`;
