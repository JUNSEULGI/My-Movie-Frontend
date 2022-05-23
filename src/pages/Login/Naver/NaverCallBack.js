import React from 'react';

import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  instance,
  NAVER_CALLBACK_URL,
  NAVER_CLIENT_SECRET,
  NAVER_ID,
} from '../../../Modules/API';

function NaverCallBack() {
  const location = useLocation();

  const initializeNaverLogin = () => {
    const { naver } = window;
    var naverLogin = new naver.LoginWithNaverId({
      clientId: `${NAVER_ID}`,
      callbackUrl: `${NAVER_CALLBACK_URL}`,
      isPopup: false,
      loginButton: { color: 'white', type: 1, height: '47' },
    });
    naverLogin.init();
  };

  const token = location.hash.split('=')[1].split('&')[0];
  console.log('네이버토큰', token);

  useEffect(() => {
    initializeNaverLogin();
    // getNaverToken();
  });

  const removeNaverToken = () => {
    fetch(`https://openapi.naver.com/v1/nid/me`, {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
      });
  };

  //백으로 접근 토큰 주는 함수

  return (
    <>
      <div id="naverIdLogin"></div>
      <div onClick={() => removeNaverToken()}>토큰 삭제</div>
    </>
  );
}

export default NaverCallBack;
