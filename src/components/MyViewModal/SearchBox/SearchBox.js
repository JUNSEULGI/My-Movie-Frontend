import React from 'react';
import styled from '@emotion/styled';
import { Autocomplete, Box, Typography, TextField } from '@mui/material';

function SearchBox({ titles, nowRunning, setSelected }) {
  return (
    <SearchContainer>
      <SearchBar
        options={titles}
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
          console.log(value);
          value.title && setSelected(value);
        }}
      />
      <Box>
        <NowRunning>지금 상영중인 영화</NowRunning>
        {nowRunning.map(movie => (
          <RankedMovie key={movie.id}>
            {movie.ranking}. {movie.title}
          </RankedMovie>
        ))}
      </Box>
    </SearchContainer>
  );
}

const SearchContainer = styled(Box)`
  margin-left: 110px;
`;

const SearchBar = styled(Autocomplete)`
  width: 478px;
  margin: 30px 0;

  // & .MuiAutocomplete-listbox .MuiAutocomplete-option {
  //   color: ${({ theme }) => theme.palette.common.white};
  // }

  & .MuiInputBase-input {
    color: ${({ theme }) => theme.palette.common.white};
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
