import React from 'react';
import styled from '@emotion/styled';
import Button from '@mui/material/Button';
import { atom } from 'recoil';

function Login() {
  return (
    <div>
      <LoginButton variant="outlined">Text</LoginButton>
      <h1>asdada</h1>
    </div>
  );
}

const LoginButton = styled(Button)`
  color: ${({ theme }) => theme.palette.common.white};
  background-color: ${({ theme }) => theme.palette.error.main};
  border-color: ${({ theme }) => theme.palette.error.main};

  &:hover {
    background-color: ${({ theme }) => theme.palette.error.dark};
    border-color: ${({ theme }) => theme.palette.error.main};
  }
`;

export default Login;
