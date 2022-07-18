import React from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import styled from '@emotion/styled';
import { movieState } from '../../state';
import { Box, Link, Typography } from '@mui/material';
import { CardContainer } from './CardContainer';
import { ReviewIcon, FabContainer } from './MyIconButton';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

function NoReview({ title, openModal }) {
  const { id } = useParams();
  const [movie, setMovie] = useRecoilState(movieState);

  return (
    <Box sx={{ position: 'relative' }}>
      <CardContainer style={{ justifyContent: 'center' }}>
        <NoReviewMent variant="h2">
          남긴 후기가 없어요!
          <br />
          후기를 쓰고 &nbsp;
          <MyLink onClick={() => openModal()}>{title}</MyLink>를 나의 영화
          목록에 추가해보세요!
        </NoReviewMent>
      </CardContainer>
      <NoReviewFabContainer>
        <AddReviewButton
          onClick={() => {
            setMovie({ ...movie, id: id });
            openModal();
          }}
        >
          <AddCircleOutlineIcon fontSize="large" />
        </AddReviewButton>
      </NoReviewFabContainer>
    </Box>
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
