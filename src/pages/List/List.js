import React, { useState, useEffect } from 'react';
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil';
import { userState, movieState } from '../../state';
import { Box, Typography } from '@mui/material';
import styled from '@emotion/styled';
import MyViewLayout from '../../layout/Layout';
// import Aside from '../../components/Aside';
import MovieCard from './MovieCard';
import FavoriteMovie from './FavoriteMovie';
import MyViewModal from '../../components/MyViewModal/MyViewModal';
import MyStep from './MyStep';
import ReviewBox from '../../components/MyViewModal/ReviewBox';
import SearchBox from '../../components/MyViewModal/SearchBox';
import { BASE_URL, API } from '../../Modules/API';
import { fetcher } from '../../Modules/fetcher';
import LoadWrap from '../../components/Loading/LoadWrap';

function List() {
  const [loading, setLoading] = useState(true);
  function ListLayout() {
    const token = localStorage.getItem('access_token');
    const [userInfo] = useRecoilState(userState);
    const movie = useRecoilValue(movieState);
    const resetMovie = useResetRecoilState(movieState);
    const [reviewList, setReviewList] = useState([]);
    const [topMovies, setTopMovies] = useState([]);
    const [open, setOpen] = useState(false);

    const closeModal = (_, reason) => {
      if (reason === 'backdropClick') return;
      resetMovie();
      setOpen(false);
    };

    // const getData = async (url, state) => {
    //   setLoading(true);
    //   try {
    //     const response = await fetcher(`/${url}`);
    //     const result = response.data;
    //     // const {result.data} = result
    //     state(result.data);
    //     setLoading(false);
    //   } catch (error) {
    //     console.log(`error_${url}`, error);
    //   }
    // };

    useEffect(() => {
      fetcher(API.reviews_list)
        .then(res => res.data)
        .then(data => {
          setReviewList(data.result);
        });

      // getData(reviews_top, setTopMovies);
      fetcher(API.reviews_top)
        .then(res => res.data)
        .then(data => {
          setTopMovies(data.result);
        });
    }, []);
    console.table(topMovies);

    // const mockMovies = [
    //   {
    //     id: 1,
    //     title: '외계+인 1부',
    //     img: 'https://img.cgv.co.kr/Movie/Thumbnail/StillCut/000085/85997/85997204141_727.jpg',
    //   },
    //   {
    //     id: 2,
    //     title: '한산-용의 출현',
    //     img: 'https://img.cgv.co.kr/Movie/Thumbnail/StillCut/000083/83280/83280202413_727.jpg',
    //   },
    //   {
    //     id: 3,
    //     title: '탑건-메버릭',
    //     img: 'https://img.cgv.co.kr/Movie/Thumbnail/StillCut/000082/82120/82120202950_727.jpg',
    //   },
    // ];

    return (
      <>
        {topMovies?.length > 0 && (
          <Section>
            <SectionTitle variant="h1">
              {userInfo.nickname}님의 인생 영화
            </SectionTitle>
            <FavoriteMovie topMovies={topMovies} />
          </Section>
        )}
        <Section>
          <SectionTitle variant="h1">
            {userInfo.nickname}님이 저장한 영화 목록
          </SectionTitle>
          <CardContainer>
            {reviewList.length > 0 &&
              reviewList
                .slice(0, 7)
                .map(review => (
                  <MovieCard
                    key={review.review_id}
                    data={review}
                    setOpen={setOpen}
                  />
                ))}
            <MovieCard setOpen={setOpen} />
          </CardContainer>
        </Section>
        {open && (
          <MyViewModal
            open={open}
            closeModal={closeModal}
            breadcrumbs={<MyStep />}
            content={movie.id ? <ReviewBox /> : <SearchBox />}
          />
        )}
      </>
    );
  }

  return (
    <MyViewLayout
      // leftMenu={<Aside />}
      center={<LoadWrap content={<ListLayout />} />}
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
  font-weight: bold;
`;

export default List;
