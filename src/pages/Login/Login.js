import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { Container, Typography } from '@mui/material';
import { CardContainer } from '../Movie/CardContainer';
import { Logo } from '../../components/Logo';
import { API } from '../../Modules/API';
import { fetcher } from '../../Modules/fetcher';
import MyViewLayout from '../../layout/Layout';
import NaverLogin from './NaverLogin';
import KakaoLogin from './KakaoLogin';
import LoadWrap from '../../components/Loading/LoadWrap';
import { Title } from '@mui/icons-material';

function Login() {
  const [loading, setLoading] = useState(true);
  const [backgroundInfo, setBackgroundInfo] = useState({});

  const getBackgroundInfo = async () => {
    setLoading(true);
    try {
      await fetcher(API.login_back)
        .then(res => res.data)
        .then(data => {
          setBackgroundInfo(data.data);
        });
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBackgroundInfo();
  }, []);

  console.log(backgroundInfo);
  function LoginContainer() {
    return (
      <LoginPage>
        <LoginBox>
          <LoginLogo>My View</LoginLogo>
          <Produce>
            <strong>소셜 로그인</strong>으로 <strong>더 간단하게 로그인</strong>
            하세요.
          </Produce>
          <SocialContainer>
            <LoginText>네이버로 로그인하기</LoginText>
            <NaverLogin />
            <LoginText>카카오로 로그인하기</LoginText>
            <KakaoLogin />
          </SocialContainer>
        </LoginBox>
        {/* <BackInfo>
          <Summary>어어어어엉</Summary>
          <BackTitle>스물하나, 스물다섯</BackTitle>
        </BackInfo> */}
      </LoginPage>
    );
  }

  return (
    <MyViewLayout
      loginBack={backgroundInfo}
      center={<LoadWrap loading={loading} content={<LoginContainer />} />}
    />
  );
}

export default Login;

const LoginPage = styled(Container)`
  position: fixed;
  margin: 0 auto;
  height: 100vh;
`;

const LoginBox = styled(CardContainer)`
  display: block;
  box-sizing: border-box;
  position: absolute;
  left: 50%;
  top: 50%;
  margin: -380px 0 0 -380px;
  padding: 40px 20px;
  width: 760px;
  height: 580px;
  text-align: center;
  border-radius: 16px;
`;

const LoginLogo = styled(Logo)`
  font-size: 32px;
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
  color: ${({ theme }) => theme.palette?.common.white};
`;

const BackInfo = styled(Typography)`
  position: absolute;
  right: 0;
  bottom: 100px;
  display: inline-block;
`;

const BackTitle = styled(Typography)``;

const Summary = styled(Typography)``;
