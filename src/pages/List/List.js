import React, { useState, useEffect } from 'react';
import { useRecoilState, useResetRecoilState } from 'recoil';
import { userState, movieState, reviewState, savingState } from '../../state';
import { Box, Typography } from '@mui/material';
import styled from '@emotion/styled';
import MyViewLayout from '../../layout/Layout';
import Aside from '../../components/Aside';
import MovieCard from './MovieCard';
import FavoriteMovie from './FavoriteMovie';
import MyViewModal from '../../components/MyViewModal/MyViewModal';
import MyStep from './MyStep';
import ReviewBox from '../../components/MyViewModal/ReviewBox';
import SearchBox from '../../components/MyViewModal/SearchBox';

function List() {
  function ListLayout() {
    const token = localStorage.getItem('access_token');
    const [userInfo, setUserInfo] = useRecoilState(userState);
    const [saving, setSaving] = useRecoilState(savingState);
    const [movie, setMovie] = useRecoilState(movieState);
    const [review, setReview] = useRecoilState(reviewState);
    const resetMovie = useResetRecoilState(movieState);
    const resetReview = useResetRecoilState(reviewState);
    const [reviews, setReviews] = useState([]);
    const [open, setOpen] = useState(false);

    const closeModal = (_, reason) => {
      if (reason === 'backdropClick') return;
      resetMovie();
      resetReview();
      setOpen(false);
      console.log(open);
    };

    const showReview = review => {
      setMovie({ ...movie, id: review.movie.id, title: review.movie.title });
      setReview({ ...review, review_id: review.review_id });
      setOpen(true);
    };

    useEffect(() => {
      fetch('http://c340-221-147-33-186.ngrok.io/reviews/list', {
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

    // const movies = [
    //   { title: '닥터스트레인지', rank: 1, id: 1 },
    //   { title: '어벤저스', rank: 2, id: 2 },
    //   { title: '블랙위도우', rank: 3, id: 3 },
    //   { title: '캡틴아메리카', rank: 4, id: 4 },
    //   { title: '토르', rank: 5, id: 5 },
    //   { title: '스파이더맨', rank: 6, id: 6 },
    //   { title: '아이언맨', rank: 7, id: 7 },
    // ];

    // 리뷰 아이디로 특정 리뷰 삭제하기
    // fetch(`http://c340-221-147-33-186.ngrok.io/reviews/38`, {
    //   method: 'DELETE',
    //   headers: {
    //     Authorization: token,
    //   },
    // }).then(res => console.log(res.json()));

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
              <MovieCard
                key={review.review_id}
                data={review}
                showReview={showReview(review)}
              />
            ))}
            <MovieCard setOpen={setOpen} />
          </CardContainer>
        </Section>
        <MyViewModal
          open={open}
          closeModal={closeModal}
          breadcrumbs={<MyStep />}
          buttons={
            movie.id && [
              {
                key: 1,
                name: 'Save',
                function: () => {
                  setSaving(true);
                },
              },
            ]
            // review.id가 있으면 삭제하기 버튼도 추가
          }
          children={movie.id ? <ReviewBox /> : <SearchBox />}
        />
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
