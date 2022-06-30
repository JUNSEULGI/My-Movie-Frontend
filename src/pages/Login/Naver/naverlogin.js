import React from 'react';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { BASE_URL, NAVER_CALLBACK_URL, NAVER_ID } from '../../../Modules/API';
import { Box, Button, Container, Typography, Link } from '@mui/material';
import { atom } from 'recoil';
import naver from '../../../assets/images/naverLogin.png';

function NaverLogin() {
  const navigate = useNavigate();
  const location = useLocation();

  const access_code = location.search?.split('=')[1]?.split('&')[0];
  console.log('네이버 인증 코드', access_code);

  //백으로 인증 코드 주는 함수
  useEffect(() => {
    fetch(
      `http://172.30.1.25:8000/users/login/naver/callback?code=${access_code}`,
      {
        method: 'GET',
      }
    )
      .then(res => res.json())
      .then(data => {
        console.log(data);
        localStorage.setItem('access_token', data.token_info.access_token);
        // localStorage.setItem('user_name', data.user_info.user_name);
        // localStorage.setItem('profile', data.user_info.user_name.profile);
        {
          localStorage.access_token
            ? navigate('/list')
            : alert('정보가 바르지 않습니다');
        }
      });
  }, []);

  return (
    <Link
      href={`https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_ID}&redirect_uri=${NAVER_CALLBACK_URL}&state=state`}
    >
      <img alt="네이버 로그인 버튼" src={naver} />
    </Link>
  );
}

export default NaverLogin;
