import React from 'react';

import styled from '@emotion/styled';
import Avatar from '@mui/material/Avatar';

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

  //받아와야 할 유저 정보
  const [userProfile, setUserProfile] = useState({});
  const {
    id,
    nickname,
    name,
    email,
    age,
    gender,
    birthday,
    mobile,
    profile_image,
  } = userProfile;

  // const initializeNaverLogin = () => {
  //   const { naver } = window;
  //   var naverLogin = new naver.LoginWithNaverId({
  //     clientId: `${NAVER_ID}`,
  //     callbackUrl: `${NAVER_CALLBACK_URL}`,
  //     isPopup: false,
  //     loginButton: { color: 'white', type: 1, height: '47' },
  //   });
  //   naverLogin.init();
  // };

  // const access_token = location.search.split('=')[1].split('&')[0];
  // console.log('네이버토큰', access_token);
  // localStorage.setItem('access_token', access_token);
  localStorage.setItem('test', 'test');

  useEffect(() => {
    // initializeNaverLogin();
    // getNaverToken();
  });

  //토큰(리프레쉬, 우리 서버 토큰)과 받아오는 함수
  const getMyviewToken = () => {
    fetch(`받아올 은지님 서버`, {
      method: 'POST',
      // headers: {},
    })
      .then(res => res.json())
      .then(res => {
        if (res.refresh_token) {
          localStorage.setItem(`토큰이름이 뭔지 모르겠넹..`);
        }
      });
  };

  //백으로 접근 토큰 주는 함수
  const sendNaverToken = () => {
    fetch(`은지님 서버`, {
      method: 'GET',
      headers: {
        Authorization: localStorage.getItem('access_token'),
      },
    });
  };

  //유저 정보 받아오는 함수
  const getUserProfile = () => {
    fetch(`은지님 서버`, {
      method: 'GET',
      headers: {
        Authorization: localStorage.getItem('access_token'),
      },
    })
      .then(res => res.json())
      .then(res => {
        setUserProfile(res.result);
      });
  };

  //토큰 지워서 로그아웃하기
  const removeToken = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('test');
  };
  return (
    <>
      <div id="naverIdLogin"></div>
      <Test>
        <h2>유저정보 확인 </h2>
        <TestDiv>
          <p>프로필 사진 |</p>
          <Avatar alt={id} src={profile_image} />
        </TestDiv>
        <TestDiv>
          <p>유저 이름, 아이디 |</p>
          <p>
            {name}, {id}
          </p>
        </TestDiv>
        <TestDiv>
          <p>이메일, 생일 |</p>
          <p>
            {email}, {birthday}
          </p>
        </TestDiv>
        <div onClick={() => removeToken()}>토큰 삭제</div>
      </Test>
    </>
  );
}

export default NaverCallBack;

const Test = styled.div`
  color: white;
`;

const TestDiv = styled.div`
  display: flex;
  border: 2px solid yellow;
`;
