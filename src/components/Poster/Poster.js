import React from 'react';
import styled from '@emotion/styled';
import { Card, CardMedia } from '@mui/material';
import { Logo } from '../../components/Logo';

function Poster({ url }) {
  return url ? (
    <Image component="img" image={url} />
  ) : (
    <NoImage>
      <Logo style={{ fontSize: '30px' }}>MY VIEW</Logo>
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

export default Poster;
