import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilState, useResetRecoilState } from 'recoil';
import styled from '@emotion/styled';
import { movieState, buttonState, reviewState } from '../../state';
import { Box, Link, Typography } from '@mui/material';
import { CardContainer } from './CardContainer';
import { ReviewIcon, FabContainer } from './MyIconButton';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import MyViewModal from '../../components/MyViewModal/MyViewModal';
import ReviewBox from '../../components/MyViewModal/ReviewBox';

function NoReview({ title }) {
  const { id } = useParams();
  const [movie, setMovie] = useRecoilState(movieState);
  const [button, setButton] = useRecoilState(buttonState);
  const resetMovie = useResetRecoilState(movieState);
  const resetReview = useResetRecoilState(reviewState);
  const [review, setReview] = useState([]);
  const [open, setOpen] = useState(false);

  const handleSave = () => setButton({ ...button, isSaving: true });
  const handleDelete = () => setButton({ ...button, isDeleting: true });

  const closeModal = (_, reason) => {
    if (reason === 'backdropClick') return;
    resetMovie();
    resetReview();
    setOpen(false);
  };

  return (
    <Box sx={{ position: 'relative' }}>
      <CardContainer style={{ justifyContent: 'center' }}>
        <NoReviewMent variant="h6">
          남긴 후기가 없어요!
          <br />
          후기를 쓰고 &nbsp;
          <MyLink
            onClick={() => {
              setOpen(true);
            }}
          >
            {title}
          </MyLink>
          를 나의 영화 목록에 추가해보세요!
        </NoReviewMent>
      </CardContainer>
      <NoReviewFabContainer>
        <AddReviewButton
          onClick={() => {
            setMovie({ ...movie, id: id });
            setOpen(true);
          }}
        >
          <AddCircleOutlineIcon fontSize="large" />
        </AddReviewButton>
        <MyViewModal
          open={open}
          closeModal={closeModal}
          children={<ReviewBox />}
          buttons={
            movie.id && review.review_id
              ? [
                  {
                    key: 1,
                    name: 'Save',
                    function: handleSave,
                  },
                  {
                    key: 2,
                    name: 'Delete',
                    function: handleDelete,
                  },
                ]
              : [
                  {
                    key: 1,
                    name: 'Save',
                    function: handleSave,
                  },
                ]
          }
        />
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
