import React from 'react';
import styled from '@emotion/styled';
import { Rating, Box } from '@mui/material';

function MovieRating({ rating }) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <MyRating
        readOnly
        name="size-small"
        max={1}
        defaultValue={1}
        size="medium"
      />
      <RatingNumber>
        <strong>{rating}</strong> / 5
      </RatingNumber>
    </Box>
  );
}

export default MovieRating;

const MyRating = styled(Rating)`
  margin-right: 8px;
  & .MuiRating-icon {
    color: ${({ theme }) => theme.palette.test.main};
  }
`;

const RatingNumber = styled.span`
  color: gray;
  font-size: 18px;
  font-weight: bold;

  strong {
    font-size: 18px;
    font-weight: bold;
    color: white;
  }
`;
