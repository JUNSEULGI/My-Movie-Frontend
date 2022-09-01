import React, { useState, useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { movieState } from '../../state';
import styled from '@emotion/styled';
import {
  Autocomplete,
  Popper,
  Paper,
  Box,
  Typography,
  TextField,
} from '@mui/material';
import Poster from '../Poster/Poster';
import { API } from '../../Modules/API';
import { fetcher } from '../../Modules/fetcher';

function SearchBox() {
  const setMovie = useSetRecoilState(movieState);
  const [search, setSearch] = useState('');
  const [titles, setTitles] = useState([]);
  const [ranks, setRanks] = useState([]);

  useEffect(() => {
    fetcher(API.movie_popular).then(({ data }) => {
      if (data.message === 'SUCCESS') setRanks(data.rank);
    });
  }, []);

  useEffect(() => {
    if (search === '') return;
    fetcher(`${API.movie}?q=${search}`).then(({ data }) => {
      console.log(data);
      if (data.message === 'SUCCESS') {
        setTitles(data.result);
      }
    });
  }, [search]);
  console.log(titles);
  return (
    <Column>
      <Poster />
      <SearchContainer>
        <SearchBar
          options={titles}
          getOptionLabel={option => option.title}
          PaperComponent={StyledPaper}
          PopperComponent={StyledPopper}
          renderInput={params => (
            <SearchInput
              {...params}
              color="success"
              label="등록할 영화를 검색하세요"
              onChange={e => {
                setSearch(e.target.value);
              }}
            />
          )}
          autoSelect={true}
          onChange={(e, value) => {
            value.title && setMovie(value);
          }}
        />
        <Box>
          <NowRunning variant="subtitle1">지금 상영중인 영화</NowRunning>
          {ranks.map((movie, index) => (
            <RankedMovie
              key={movie.id}
              variant="subtitle2"
              onClick={() => {
                setMovie(movie);
              }}
            >
              {index + 1}. {movie.title}
            </RankedMovie>
          ))}
        </Box>
      </SearchContainer>
    </Column>
  );
}

const Column = styled(Box)`
  display: grid;
  grid-template-columns: 273px 1fr;
  // 컨테이너가 늘어나면서 높이를 100%로 고정할 수 없게 됨.
  // height: 100%;
  /* 
  @media screen and (max-width: 600px) {
    width: 300px;
  } */
`;

const SearchContainer = styled(Box)`
  margin-left: 110px;
  /* @media screen and (max-width: 600px) {
    margin-left: 0px;
  } */
`;

const SearchBar = styled(Autocomplete)`
  /* background-color: red; */
  width: 98%;
  margin: 30px 0;

  & .MuiInputBase-input {
    color: ${({ theme }) => theme.palette.common.white};
  }
`;

const StyledPopper = styled(Popper)`
  color: white;
`;

const StyledPaper = styled(Paper)`
  font-weight: bold;
  color: white;
`;

const SearchInput = styled(TextField)`
  color: ${({ theme }) => theme.palette.common.white};
`;

const NowRunning = styled(Typography)`
  margin-bottom: 2px;
  color: ${({ theme }) => theme.palette.common.white};
  font-weight: 700;
`;

const RankedMovie = styled(Typography)`
  color: ${({ theme }) => theme.palette.common.white};
  cursor: pointer;

  :hover {
    color: ${({ theme }) => theme.palette.test.main};
  }
`;

export default SearchBox;
