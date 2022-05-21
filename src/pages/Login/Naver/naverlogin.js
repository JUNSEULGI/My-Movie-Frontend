import React from 'react';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { NAVER_CALLBACK_URL, NAVER_ID } from '../../../Modules/API';
import { Box, Button, Container, Typography } from '@mui/material';
import { atom } from 'recoil';

function NaverLogin() {
  //Naver 로그인 세팅
  const naverScript = document.createElement('script');
  naverScript.src =
    'https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.2.js';
  naverScript.type = 'text/javascript';
  document.head.appendChild(naverScript);

  const initializeNaverLogin = () => {
    var naverLogin = new window.naver.LoginWithNaverId({
      //3번 새로고침시 페이지 오류난다.,
      clientId: `${NAVER_ID}`,
      callbackUrl: `${NAVER_CALLBACK_URL}`,
      isPopup: false,
      loginButton: { color: 'green', type: 3, height: 60 },
    });
    /* (4) 네아로 로그인 정보를 초기화하기 위하여 init을 호출 */
    naverLogin.init();
  };
  useEffect(() => {
    initializeNaverLogin();
  });
  return <div id="naverIdLogin"></div>;
}

export default NaverLogin;

// const LoginPage = styled(Container)`
//   margin: 0 auto;
//   height: 100vh;
//   background-color: ${({ theme }) => theme.palette.background.paper};
// `;

// const LoginBox = styled.div`
//   box-sizing: border-box;
//   margin: 0 auto;
//   padding: 40px 20px;
//   text-align: center;
//   width: 760px;
//   height: 580px;
//   background-color: ${({ theme }) => theme.palette?.background.card};
//   border-radius: 8px;
// `;

// const MyView = styled(Typography)`
//   color: ${({ theme }) => theme.palette?.common.white};
//   font-size: 32px;
//   font-weight: bold;
// `;

// const Produce = styled(Typography)`
//   color: ${({ theme }) => theme.palette?.common.white};
// `;

// const SocialContainer = styled(Container)`
//   margin-top: 40px;
//   padding: 40px;
// `;

// const LoginText = styled.div`
//   margin: 20px 0;
//   color: white;
// `;
