import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import styled from '@emotion/styled';
import { useRecoilState, useResetRecoilState } from 'recoil';
import {
  userState,
  buttonState,
  movieState,
  reviewState,
  hasReviewState,
} from '../../state';
import { CardContainer } from './CardContainer';
import { Box, Typography, Fab, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import MovieRating from './MovieRating';
import { Logo } from './ContentLogo';
import { ReviewIcon, FabContainer } from './MyIconButton';
import { MK_URL } from '../../Modules/API';

function MyReview({ review }) {
  // const { content, rating, title, review_id } = review; // 여기서 오류남 데이터가 없어서..
  // const [myReview, setMyReview] = useRecoilState(reviewState);
  const location = useLocation();
  const params = useParams();
  const [hasReview, setHasReview] = useRecoilState(hasReviewState);
  const resetReview = useResetRecoilState(hasReviewState);
  const [status, setStatus] = useState({});
  const [button, setButton] = useRecoilState(buttonState);
  const access_token = localStorage.getItem('access_token');
  console.log(',영화', review);

  const handleDelete = () => {
    console.log('delete 누름');
    setButton({ ...button, isDeleting: true });
  };
  // MyReview 컴포넌트 삭제
  const DeleteReview = () => {
    if (window.confirm('정말 삭제시겠습니까?')) {
      alert('삭제되었습니다.'); //true
      fetch(`${MK_URL}reviews/${review.review_id}`, {
        method: 'DELETE',
        headers: {
          Authorization: access_token,
        },
      });
      resetReview();
      window.location.replace(`/movie/${params.id}`); //자동새로고침
    } else {
      alert('취소합니다.'); //false
    }
  };

  if (!review?.content) return null;
  return (
    <MyReviewContainer>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Logo>My View!</Logo>
        <MovieRating rating={review.rating} />
      </Box>
      <MyBox>
        <MyReviewTitle variant="h5">{review.title}</MyReviewTitle>
      </MyBox>
      <MyReviewContent>{review.content}</MyReviewContent>
      <FabContainer>
        <EditButton onClick={() => console.log('edit')}>
          <EditIcon />
        </EditButton>
        <DeleteButton onClick={() => DeleteReview()}>
          <DeleteIcon />
        </DeleteButton>
      </FabContainer>
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

const MyReviewContent = styled(Typography)`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: wrap;
`;

const Reviewer = styled.div``;

const DeleteButton = styled(ReviewIcon)`
  :hover {
    background-color: red;
  }
`;
const EditButton = styled(ReviewIcon)`
  :hover {
    color: white;
    background-color: #ff9201;
  }
`;

export default MyReview;
