import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { tokenState } from '../../state';
import { Box, Typography } from '@mui/material';
import styled from '@emotion/styled';
import MyViewLayout from '../../layout/Layout';
import Aside from '../../components/Aside';
import MovieCard from './MovieCard';
import NewReview from './NewReview';

function List() {
  function ListLayout() {
    const [token, setToken] = useRecoilState(tokenState);
    const [reviews, setReviews] = useState([]);
    const [open, setOpen] = useState(false);

    useEffect(() => {
      fetch('http://192.168.228.159:8000/reviews', {
        headers: {
          Authorization: token,
        },
      })
        .then(res => res.json())
        .then(data => {
          console.log(data.result);
          setReviews(data.result);
        });
    }, []);

    // 작성한 리뷰 받아오기 테스트
    // useEffect(() => {
    //   fetch('http://192.168.228.159:8000/reviews/7', {
    //     headers: {
    //       Authorization: token,
    //     },
    //   })
    //     .then(res => res.json())
    //     .then(result => console.log(result));
    // }, []);

    return (
      <>
        <Section>
          <SectionTitle variant="h3">수인님의 인생 영화</SectionTitle>
        </Section>
        <Section>
          <SectionTitle variant="h3">수인님이 저장한 영화 목록</SectionTitle>
          <CardContainer>
            {reviews.slice(0, 7).map(review => (
              <MovieCard key={review.review_id} data={review} />
            ))}
            <MovieCard setOpen={setOpen} />
          </CardContainer>
        </Section>
        <NewReview open={open} setOpen={setOpen} />
      </>
    );
  }
  return <MyViewLayout leftMenu={<Aside />} center={<ListLayout />} />;
}

const Section = styled(Box)`
  margin: 80px 0;
`;

const CardContainer = styled(Box)`
  display: grid;
  grid-template-columns: repeat(4, 270px);
  gap: 24px;
`;

const SectionTitle = styled(Typography)`
  margin: 15px 0;
  color: ${({ theme }) => theme.palette.common.white};
  font-size: 24px;
  font-weight: bold;
`;

export default List;
