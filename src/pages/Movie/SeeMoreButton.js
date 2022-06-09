import React from 'react';
import styled from '@emotion/styled';
import { Button } from '@mui/material';

function SeeMoreButton() {
  return <MoreButton>더 보기</MoreButton>;
}

export default SeeMoreButton;

const MoreButton = styled(Button)`
  color: ${({ theme }) => theme.palette.test.main};

  &.MuiButtonBase-root {
    &.MuiButton-root {
      height: 24px;
      align-self: flex-end;
    }
  }
`;
