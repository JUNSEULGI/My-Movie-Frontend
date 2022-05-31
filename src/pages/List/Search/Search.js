import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Box, Modal, Typography } from '@mui/material';
import { style } from '@mui/system';

function Search({ open, setOpen }) {
  const closeModal = () => {
    setOpen(false);
  };

  return (
    <SearchModal open={open} onClose={closeModal}>
      <SearchBox>
        <StepBox>
          <StepText>영화</StepText>
          <StepText>영화 검색</StepText>
          <StepText>영화 저장</StepText>
        </StepBox>
        <Box>
          <Poster />
        </Box>
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

const Poster = styled.div`
  width: 242px;
  height: 346px;
  background-color: ${({ theme }) => theme.palette.background.disabled};
  border-radius: 8px;
`;

export default Search;
