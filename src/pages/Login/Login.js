import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { Container, Typography } from '@mui/material';
import { CardContainer } from '../../components/CardContainer';
import { Logo } from '../../components/Logo';
import { API } from '../../Modules/API';
import { fetcher } from '../../Modules/fetcher';
import MyViewLayout from '../../layout/Layout';
import NaverLogin from './NaverLogin';
import KakaoLogin from './KakaoLogin';
import LoadWrap from '../../components/Loading/LoadWrap';
import { useRecoilValue } from 'recoil';
import { userState } from '../../state';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [loading, setLoading] = useState(true);
  const [backgroundInfo, setBackgroundInfo] = useState({});
  const user = useRecoilValue(userState);
  const navigate = useNavigate();

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
    if (user.nickname) navigate('/list');
    getBackgroundInfo();
  }, []);

  function LoginContainer() {
    return (
      <>
        <LoginPage>
          <LoginBox>
            <LoginLogo>My View</LoginLogo>
            <Produce>
              <strong>소셜 로그인</strong>으로{' '}
              <strong>더 간단하게 로그인</strong>
              하세요.
            </Produce>
            <SocialContainer>
              <LoginText>네이버로 로그인하기</LoginText>
              <NaverLogin />
              <LoginText>카카오로 로그인하기</LoginText>
              <KakaoLogin />
            </SocialContainer>
          </LoginBox>
        </LoginPage>
      </>
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
  @media ${p => p.theme.deviceSize.mobile} {
    width: 360px;
    position: relative;
    height: 100vh;
    /* margin: 0 auto; */
    left: 60px;
    /* background-color: antiquewhite; */
  }
`;

const LoginBox = styled(CardContainer)`
  display: block;
  box-sizing: border-box;
  position: absolute;
  left: 50%;
  top: 50%;
  margin: -380px 0 0 -430px;
  padding: 40px 20px;
  width: 760px;
  height: 580px;
  text-align: center;
  border-radius: 16px;
  @media screen and (max-width: 600px) {
    left: 30%;
    margin: -90px 0 0 -165px;
    width: 320px;
    height: 430px;
    top: 20%;
  }
`;

const LoginLogo = styled(Logo)`
  font-size: 32px;
`;

const Produce = styled(Typography)`
  color: ${({ theme }) => theme.palette.common.white};

  @media screen and (max-width: 600px) {
    font-size: 14px;
  }
`;

const SocialContainer = styled(Container)`
  margin-top: 40px;
  padding: 30px;

  @media screen and (max-width: 600px) {
    margin-top: 10px;
  }
`;

const LoginText = styled.div`
  margin: 20px 0;
  color: ${({ theme }) => theme.palette?.common.white};
`;
