import React from 'react';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { BASE_URL, NAVER_CALLBACK_URL, NAVER_ID } from '../../../Modules/API';
import { Box, Button, Container, Typography, Link } from '@mui/material';
import { atom } from 'recoil';
import naver from '../../../assets/images/naverLogin.png';

function NaverLogin() {
  const location = useLocation();
  //Naver 로그인 세팅

  // const initializeNaverLogin = () => {
  //   const { naver } = window;
  //   var naverLogin = new naver.LoginWithNaverId({
  //     //3번 새로고침시 페이지 오류난다.,
  //     clientId: `${NAVER_ID}`,
  //     callbackUrl: `${NAVER_CALLBACK_URL}`,
  //     isPopup: false,
  //     loginButton: { color: 'green', type: 3, height: 60 },
  //   });

  //   naverLogin.init();
  // };
  // useEffect(() => {
  //   initializeNaverLogin();
  // });
  //주소
  //https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id={개발자개정에서받은값}&redirect_uri={콜백주소}&state=state

  const access_code = location.search?.split('=')[1]?.split('&')[0];
  console.log('네이버 인증 코드', access_code);

  //백으로 인증 코드 주는 함수
  const sendNaverCode = () => {
    fetch(`${BASE_URL}?code=${access_code}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
      });
  };

  useEffect(() => {
    sendNaverCode();
  });

  return (
    <Link
      href={`https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_ID}&redirect_uri=${NAVER_CALLBACK_URL}&state=state`}
    >
      <img alt="네이버 로그인 버튼" src={naver} />
    </Link>
  );
}

export default NaverLogin;
