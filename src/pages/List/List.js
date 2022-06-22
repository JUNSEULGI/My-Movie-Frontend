import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import styled from '@emotion/styled';
import MyViewLayout from '../../layout/Layout';
import Aside from '../../components/Aside';
import MovieCard from './MovieCard';
import AddReview from './AddReview';

function List() {
  function ListLayout() {
    const [reviews, setReviews] = useState([]);
    const [open, setOpen] = useState(false);

    useEffect(() => {
      fetch('/reviews/id', {
        headers: {
          Authorization: 'token',
        },
      })
        .then(res => res.json())
        .then(result => {
          setReviews(result);
        });
    }, []);

    return (
      <>
        <Section>
          <SectionTitle>수인님의 인생 영화</SectionTitle>
        </Section>
        <Section>
          <SectionTitle>수인님이 저장한 영화 목록</SectionTitle>
          <CardContainer>
            {reviews.slice(0, 7).map(review => (
              <MovieCard key={review.id} data={review.data} />
            ))}
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard addCard={true} setOpen={setOpen} />
          </CardContainer>
        </Section>
        <AddReview open={open} setOpen={setOpen} />
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

const SectionTitle = styled.h3`
  margin: 12px 0;
  color: ${({ theme }) => theme.palette.common.white};
`;

export default List;
