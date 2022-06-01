import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { Autocomplete, Box, Modal, Typography, TextField } from '@mui/material';

function Search({ open, setOpen }) {
  const token = localStorage.getItem('token');

  const [selected, setSelected] = useState('');
  // const [movies, setMovies] = useState({});

  // useEffect(() => {
  //   fetch('영화 목록 받는 api')
  //     .then(res => res.json)
  //     .then(data => setMovies(data));
  // }, []);

  // useEffect(() => {
  //   if (selected.length > 0) {
  //     fetch('영화 정보 api', {
  //       method: 'POST',
  //       headers: {
  //         Authorization: token;
  //       }
  //       body: JSON.stringify({ title: selected }),
  //     });
  //   }
  // }, [selected]);

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

  const nowRunning = movies;

  return (
    <SearchModal open={open} onClose={closeModal}>
      <SearchBox>
        <StepBox>
          <StepText>영화</StepText>
          <StepText>영화 검색</StepText>
          <StepText>영화 저장</StepText>
        </StepBox>
        <Content>
          <Poster />
          <Box>
            <SearchBar
              options={movies}
              getOptionLabel={option => option.title}
              renderInput={params => (
                <SearchInput
                  {...params}
                  color="success"
                  label="등록할 영화를 검색하세요"
                />
              )}
              autoSelect={true}
              onChange={(e, value, reason) => {
                if (reason === 'selectOption') {
                  console.log(value, reason);
                  setSelected(value.title);
                }
              }}
            />
            <Box>
              <NowRunning>지금 상영중인 영화</NowRunning>
              {nowRunning.map(movie => (
                <RankedMovie key={movie.rank}>
                  {movie.rank}. {movie.title}
                </RankedMovie>
              ))}
            </Box>
          </Box>
        </Content>
      </SearchBox>
    </SearchModal>
  );
}

const SearchModal = styled(Modal)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SearchBox = styled(Box)`
  width: 956px;
  height: 488px;
  padding: 32px 60px;
  background-color: ${({ theme }) => theme.palette.background.card};
`;

const StepBox = styled(Box)`
  display: flex;
  margin-bottom: 14px;
`;

const StepText = styled(Typography)`
  font-size: 12px;
  color: ${({ theme }) => theme.palette.common.white};
`;

const Content = styled(Box)`
  display: flex;
  justify-content: space-between;
`;

const Poster = styled.div`
  width: 242px;
  height: 346px;
  background-color: ${({ theme }) => theme.palette.background.disabled};
  border-radius: 8px;
`;

const SearchBar = styled(Autocomplete)`
  width: 478px;
  margin: 30px 0;
  color: ${({ theme }) => theme.palette.common.white};
`;

const SearchInput = styled(TextField)`
  color: ${({ theme }) => theme.palette.common.white};
`;

const RankedMovie = styled(Typography)`
  font-size: 14px;
  color: ${({ theme }) => theme.palette.common.white};
`;

const NowRunning = styled(RankedMovie)`
  margin-bottom: 2px;
  font-weight: 700;
  font-size: 16px;
`;

export default Search;
