import React from 'react';
import styled from '@emotion/styled';
import { Rating, Box } from '@mui/material';

function MovieRating({ rating }) {
  return (
    <RatingBox>
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
    </RatingBox>
  );
}

export default MovieRating;

const RatingBox = styled(Box)`
  display: flex;
  align-items: center;

  @media screen and (max-width: 380px) {
    display: block;
  }
`;

const MyRating = styled(Rating)`
  margin-right: 8px;
  & .MuiRating-icon {
    color: ${({ theme }) => theme.palette.test.main};
  }
  @media screen and (max-width: 380px) {
    font-size: 16px;
    margin-right: 4px;
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

  @media screen and (max-width: 380px) {
    font-size: 16px;

    strong {
      font-size: 16px;
    }
  }
`;
