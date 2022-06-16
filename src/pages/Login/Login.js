import React from 'react';
import styled from '@emotion/styled';
import { Container, Typography } from '@mui/material';
import MyViewLayout from '../../layout/Layout';
import NaverLogin from './Naver/NaverLogin';
import KakaoLogin from './Kakao/KakaoLogin';

function Login() {
  function LoginContainer() {
    return (
      <LoginPage>
        <LoginBox>
          <MyView>My View</MyView>
          <Produce>소셜 로그인으로 더 간단하게 로그인하세요.</Produce>
          <SocialContainer>
            <LoginText>네이버로 로그인하기</LoginText>
            <NaverLogin />
            <LoginText>카카오로 로그인하기</LoginText>
            <KakaoLogin />
          </SocialContainer>
        </LoginBox>
      </LoginPage>
    );
  }

  return <MyViewLayout center={<LoginContainer />} />;
}

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

export default Login;
