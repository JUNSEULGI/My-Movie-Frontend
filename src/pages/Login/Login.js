import React from 'react';
import styled from '@emotion/styled';
import Button from '@mui/material/Button';
import { atom } from 'recoil';

function Login() {
  return (
    <div>
      <LoginButton variant="text">Text</LoginButton>
      <h1>asdada</h1>
    </div>
  );
}

const LoginButton = styled(Button)`
  color: ${({ theme }) => theme.palette.text.secondary};
  background-color: ${({ theme }) => theme.palette.error.dark};
`;

export default Login;
