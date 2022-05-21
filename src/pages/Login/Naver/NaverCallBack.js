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
  const naverScript = document.createElement('script');
  naverScript.src =
    'https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.2.js';
  naverScript.type = 'text/javascript';
  document.head.appendChild(naverScript);
  // //Naver 로그인 세팅
  // const { naver } = window;

  // const naverScript = document.createElement('script');
  // naverScript.src =
  //   'https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.2.js';
  // naverScript.type = 'text/javascript';
  // document.head.appendChild(naverScript);

  // const initializeNaverLogin = () => {
  //   var naverLogin = new window.naver.LoginWithNaverId({
  //     //3번 새로고침시 페이지 오류난다.,
  //     clientId: `${NAVER_ID}`,
  //     callbackUrl: `${NAVER_CALLBACK_URL}`,
  //     isPopup: false,
  //     loginButton: { color: 'green', type: 3, height: 60 },
  //   });
  //   /* (4) 네아로 로그인 정보를 초기화하기 위하여 init을 호출 */
  //   naverLogin.init();
  // };

  // useEffect(() => {
  //   initializeNaverLogin();
  // }, []);
  const location = useLocation();

  const initializeNaverLogin = () => {
    var naverLogin = new window.naver.LoginWithNaverId({
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

  // useEffect(() => {
  //   instance
  //     .get(`/163/category/${params.id}`)
  //     //313 변수처리`${id}`
  //     .then(response => {
  //       // 성공 핸들링
  //       console.log(response);
  //     })
  //     .catch(error => {
  //       // 에러 핸들링
  //       console.log(error);
  //     });
  // });

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
