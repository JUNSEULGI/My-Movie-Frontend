import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
import { API } from '../../Modules/API';
import { fetcher } from '../../Modules/fetcher';
import LoadWrap from '../../components/Loading/LoadWrap';

function List() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [reviewList, setReviewList] = useState([]);
  const [topMovies, setTopMovies] = useState([]);

  const getReviewAndTopMovies = async () => {
    setLoading(true);
    try {
      await fetcher(API.reviews_list)
        .then(res => res.data)
        .then(data => {
          setReviewList(data.result);
        });
      await fetcher(API.reviews_top)
        .then(res => res.data)
        .then(data => {
          setTopMovies(data.result);
        });
      setLoading(false);
    } catch (error) {
      if (error.response.data.message === 'INVALID_TOKEN') {
        navigate('/');
      }
    }
  };

  useEffect(() => {
    getReviewAndTopMovies();
  }, []);

  function ListContent() {
    const [userInfo] = useRecoilState(userState);
    const movie = useRecoilValue(movieState);
    const resetMovie = useResetRecoilState(movieState);
    const [open, setOpen] = useState(false);

    const closeModal = (_, reason) => {
      if (reason === 'backdropClick') return;
      resetMovie();
      setOpen(false);
    };

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
            breadcrumbs={
              movie.id ? (
                <MyStep id={movie.id} check={true} />
              ) : (
                <MyStep review={reviewList.review_id} check={false} />
              )
            }
            content={movie.id ? <ReviewBox /> : <SearchBox />}
          />
        )}
      </>
    );
  }

  return (
    <MyViewLayout
      // leftMenu={<Aside />}
      center={<LoadWrap loading={loading} content={<ListContent />} />}
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
