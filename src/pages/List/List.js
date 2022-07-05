import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { tokenState, userState } from '../../state';
import { Box, Typography } from '@mui/material';
import styled from '@emotion/styled';
import MyViewLayout from '../../layout/Layout';
import Aside from '../../components/Aside';
import MovieCard from './MovieCard';
import FavoriteMovie from './FavoriteMovie';
import NewReview from './NewReview';

function List() {
  function ListLayout() {
    const [token, setToken] = useRecoilState(tokenState);
    const [userInfo, setUserInfo] = useRecoilState(userState);
    const [reviews, setReviews] = useState([]);
    const [open, setOpen] = useState(false);

    // useEffect(() => {
    //   fetch('http://172.30.1.26:8000/reviews/list', {
    //     headers: {
    //       Authorization: token,
    //     },
    //   })
    //     .then(res => res.json())
    //     .then(data => {
    //       console.log(data.result);
    //       setReviews(data.result);
    //     });
    // }, []);

    // 특정 리뷰 받아오기 테스트
    // useEffect(() => {
    //   fetch('http://192.168.228.159:8000/reviews/7', {
    //     headers: {
    //       Authorization: token,
    //     },
    //   })
    //     .then(res => res.json())
    //     .then(result => console.log(result));
    // }, []);

    const mockMovies = [
      {
        id: 1,
        title: '닥터 스트레인지',
        img: 'https://file2.nocutnews.co.kr/newsroom/image/2022/04/08/202204081311322351_0.jpg',
      },
      {
        id: 2,
        title: '블랙 위도우',
        img: 'https://file2.nocutnews.co.kr/newsroom/image/2022/04/08/202204081311322351_0.jpg',
      },
      {
        id: 3,
        title: '아이언맨',
        img: 'https://file2.nocutnews.co.kr/newsroom/image/2022/04/08/202204081311322351_0.jpg',
      },
    ];

    return (
      <>
        <Section>
          <SectionTitle variant="h3">
            {userInfo.nickname}님의 인생 영화
          </SectionTitle>
          <FavoriteMovie bestMovies={mockMovies} />
        </Section>
        <Section>
          <SectionTitle variant="h3">
            {userInfo.nickname}님이 저장한 영화 목록
          </SectionTitle>
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
  return (
    <MyViewLayout
      // leftMenu={<Aside />}
      center={<ListLayout />}
    />
  );
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
