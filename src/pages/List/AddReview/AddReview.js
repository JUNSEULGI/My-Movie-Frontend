import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import MyViewModal from '../../../components/MyViewModal/MyViewModal';
import MyStep from './MyStep';

function AddReview({ open, setOpen }) {
  const token = localStorage.getItem('token');

  // const [movies, setMovies] = useState([]);
  const [selected, setSelected] = useState({});
  const [movieDetail, setMovieDetail] = useState({});

  // useEffect(() => {
  //   fetch('영화 목록 받는 api')
  //     .then(res => res.json)
  //     .then(data => setMovies(data));
  // }, []);

  // useEffect(() => {
  //   if (selected.length > 0) {
  //   fetch(`영화 정보 받는 api/${selected.id}`)
  //     .then(res => res.json)
  //     .then(data => setMovieDetail(data));
  //   }
  // }, [selected]);

  const uploadReview = () => {
    fetch('리뷰 업로드 api', {
      method: 'POST',
      headers: {
        Authorization: token,
      },
      body: JSON.stringify({
        rating: 4.0,
        content: '리뷰 내용오오오옹',
        date: 'Wed Jun 01 2022 14:51:08 GMT+0900 (한국 표준시)',
        place: 'CGV 성신여대점',
        movie_id: 1,
      }),
    });
  };

  const closeModal = () => {
    setOpen(false);
  };

  const movies = [
    { title: '닥터스트레인지', rank: 1 },
    { title: '어벤저스', rank: 2 },
    { title: '블랙위도우', rank: 3 },
    { title: '캡틴아메리카', rank: 4 },
    { title: '토르', rank: 5 },
    { title: '스파이더맨', rank: 6 },
    { title: '아이언맨', rank: 7 },
  ];

  return (
    <MyViewModal
      open={open}
      onClose={closeModal}
      movies={movies}
      nowRunning={movies}
      selected={selected}
      setSelected={setSelected}
      breadcrumbs={<MyStep />}
    />
  );
}

// const StepBox = styled(Box)`
//   display: flex;
//   margin-bottom: 14px;
// `;

export default AddReview;
