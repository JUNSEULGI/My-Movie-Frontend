import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
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

function SearchBox() {
  const [movie, setMovie] = useRecoilState(movieState);
  const [titles, setTitles] = useState([]);
  const [ranks, setRanks] = useState([]);

  useEffect(() => {
    fetch('http://c340-221-147-33-186.ngrok.io/movies/simple')
      .then(res => res.json())
      .then(result => {
        if (result.message === 'SUCCESS') {
          // console.log(result);
          setTitles(result.titles);
          setRanks(result.rank);
        }
      });
  }, []);

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
            />
          )}
          autoSelect={true}
          onChange={(e, value, reason) => {
            // console.log(value);
            value.title && setMovie(value);
          }}
        />
        <Box>
          <NowRunning>지금 상영중인 영화</NowRunning>
          {ranks.map(movie => (
            <RankedMovie key={movie.id}>
              {movie.rank}. {movie.title}
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
`;

const SearchContainer = styled(Box)`
  margin-left: 110px;
`;

const SearchBar = styled(Autocomplete)`
  width: 478px;
  margin: 30px 0;

  & .MuiInputBase-input {
    color: ${({ theme }) => theme.palette.common.white};
  }
`;

const StyledPopper = styled(Popper)``;

const StyledPaper = styled(Paper)`
  color: white;
  font-weight: bold;
  background-color: darkgray;
  :focus {
    background-color: yellow;
  }
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

export default SearchBox;
