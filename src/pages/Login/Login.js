import React from 'react';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Button, Container, Typography } from '@mui/material';
import { atom } from 'recoil';
import MyViewLayout from '../../layout/Layout';
import NaverLogin from './Naver/Naverlogin';
import KakaoLogin from './Kakao/KakaoLogin';
import ReactDOM from 'react-dom';

function Login() {
  function LoginContainer() {
    return (
      <>
        <LoginPage>
          <LoginBox>
            <MyView>My View</MyView>
            <Produce>소셜 로그인으로 더 간단하게 로그인하세요.</Produce>
            <SocialContainer>
              {/* Naver 로그인 버튼 */}
              <LoginText>네이버로 로그인하기</LoginText>
              <NaverLogin />
              {/* Kakao 로그인 버튼 */}
              <LoginText>카카오로 로그인하기</LoginText>
              <KakaoLogin />
            </SocialContainer>
          </LoginBox>
        </LoginPage>
      </>
    );
  }

  return <MyViewLayout center={<LoginContainer />} />;
}

export default Login;

const LoginPage = styled(Container)`
  margin: 0 auto;
  height: 100vh;
  /* background-color: antiquewhite; */
`;

const LoginBox = styled.div`
  box-sizing: border-box;
  margin: 0 auto;
  padding: 40px 20px;
  text-align: center;
  width: 760px;
  height: 580px;
  background-color: rgba(21, 21, 21, 0.97);
  border-radius: 8px;
`;

const MyView = styled(Typography)`
  color: ${({ theme }) => theme.palette?.common.white};
  font-size: 32px;
  font-weight: bold;
`;

const Produce = styled(Typography)`
  color: ${({ theme }) => theme.palette?.common.white};
`;

const SocialContainer = styled(Container)`
  margin-top: 40px;
  padding: 40px;
`;

const LoginText = styled.div`
  margin: 20px 0;
  color: white;
`;
