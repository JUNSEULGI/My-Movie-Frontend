import React from 'react';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { NAVER_CALLBACK_URL, NAVER_ID } from '../../../Modules/API';
import { Box, Button, Container, Typography } from '@mui/material';
import { atom } from 'recoil';

function NaverLogin() {
  //Naver 로그인 세팅

  const initializeNaverLogin = () => {
    const { naver } = window;
    var naverLogin = new naver.LoginWithNaverId({
      //3번 새로고침시 페이지 오류난다.,
      clientId: `${NAVER_ID}`,
      callbackUrl: `${NAVER_CALLBACK_URL}`,
      isPopup: false,
      loginButton: { color: 'green', type: 3, height: 60 },
    });

    naverLogin.init();
  };
  useEffect(() => {
    initializeNaverLogin();
  });
  return <div id="naverIdLogin"></div>;
}

export default NaverLogin;
