import React from 'react';
import styled from '@emotion/styled';
import { Card, CardMedia, Typography } from '@mui/material';

function Poster({ url }) {
  return url ? (
    <Image component="img" image={url} />
  ) : (
    <NoImage>
      <MyView>MY VIEW</MyView>
    </NoImage>
  );
}

const Image = styled(CardMedia)`
  width: 100%;
  border-radius: 8px;
`;

const NoImage = styled(Card)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 390px;
  background-color: ${({ theme }) => theme.palette.background.disabled};
  border-radius: 8px;
`;

const MyView = styled(Typography)`
  font-size: 34px;
  color: #fc6c2e;
`;

export default Poster;
