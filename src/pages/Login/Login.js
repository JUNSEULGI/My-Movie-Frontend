import React from 'react';
import { useEffect } from 'react';
import styled from '@emotion/styled';
import { Box, Button, Typography } from '@mui/material';
import { initializeNaverLogin } from './Naver/naverlogin';
import { atom } from 'recoil';

function Login() {
  useEffect(() => {
    initializeNaverLogin();
  }, []);

  return (
    <div>
      <LoginBox>
        <MyView variant="h1">My View</MyView>
        {/* <LoginButton variant="outlined">Text</LoginButton> */}
        <div id="naverIdLogin"></div>
      </LoginBox>
    </div>
  );
}

const LoginBox = styled.div`
  box-sizing: border-box;
  margin: 0 auto;
  padding: 40px 20px;
  text-align: center;
  width: 760px;
  height: 580px;
  background-color: ${({ theme }) => theme.palette?.background.card};
  border-radius: 8px;
`;

const MyView = styled(Typography)`
  color: ${({ theme }) => theme.palette?.common.white};
  font-size: 32px;
`;

// const LoginButton = styled(Button)`
//   color: ${({ theme }) => theme.palette.common.white};
//   background-color: ${({ theme }) => theme.palette.error.main};
//   border-color: ${({ theme }) => theme.palette.error.main};

//   &:hover {
//     background-color: ${({ theme }) => theme.palette.error.dark};
//     border-color: ${({ theme }) => theme.palette.error.main};
//   }
// `;

export default Login;
