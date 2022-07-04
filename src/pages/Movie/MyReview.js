import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { CardContainer } from './CardContainer';
import { Box, Typography, Fab, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import MovieRating from './MovieRating';
import { Logo } from './ContentLogo';

function MyReview({ review, setHasReview, hasReview }) {
  const { oneline, rating, my_review, reviewer } = review;
  const [status, setStatus] = useState({});

  // MyReview 컴포넌트 삭제
  const DeleteReview = () => {
    if (window.confirm('정말 삭제시겠습니까?')) {
      alert('삭제되었습니다.'); //true
      setHasReview(false);
    } else {
      alert('취소합니다.'); //false
      setHasReview(true);
    }
  };

  //삭제 했을 때, Back과 통신해야함.
  // useEffect(() => {
  //   fetch(`http://6b44-110-11-194-32.ngrok.io/reviews/1`, {
  //     headers: {
  //       // Authorization: token,
  //     },
  //   }).then(res => {
  //     console.log(res);
  //   });
  // }, []);

  return (
    <MyReviewContainer>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Logo>My View!</Logo>
        <MovieRating rating={rating} />
      </Box>
      <MyBox>
        <MyReviewTitle variant="h5">{oneline}</MyReviewTitle>
      </MyBox>
      <MyReviewContent>{my_review}</MyReviewContent>
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

const FabContainer = styled.div`
  display: grid;
  position: absolute;
  top: 0;
  right: -60px;
`;

const ReviewIcon = styled(IconButton)`
  color: #ff9201;
  background: none;
  margin-bottom: 8px;
  :hover {
    background-color: black;
  }
`;

const DeleteButton = styled(ReviewIcon)`
  :hover {
    background-color: red;
  }
`;
const EditButton = styled(ReviewIcon)`
  :hover {
    background-color: #ff9201;
  }
`;

export default MyReview;
