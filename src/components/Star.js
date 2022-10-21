import React from 'react';
import styled from '@emotion/styled';
import { Rating } from '@mui/material';
import { StarRounded } from '@mui/icons-material';

export default function Star() {
  return (
    <CustomRating
      size="small"
      max={1}
      value={1}
      readOnly
      icon={<StarRounded fontSize="inherit" />}
    />
  );
}

const CustomRating = styled(Rating)`
  color: ${({ theme }) => theme.palette.success.main};
`;
