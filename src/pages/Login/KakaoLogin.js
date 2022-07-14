import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { Link } from '@mui/material';
import Kakao from '../../assets/images/kakaoLogin.png';
import { BASE_URL, KAKAO_ID, KAKAO_CALLBACK_URL } from '../../Modules/API';

function KakaoLogin() {
  const { search } = useLocation();
  const navigate = useNavigate();

  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${KAKAO_ID}&redirect_uri=${KAKAO_CALLBACK_URL}`;

  // useEffect(() => {
  //   if (!search) return;
  //   const code = search.split('=')[1];
  //   fetch(`${BASE_URL}users/login/kakao/callback?code=${code}`)
  //     .then(res => res.json())
  //     .then(data => {
  //       if (!data) {
  //         alert('정보가 바르지 않습니다');
  //         return;
  //       }
  //       console.log(data);
  //       localStorage.setItem('access_token', data.token_info.access_token);
  //       navigate('/list');
  //     });
  // }, []);

  return (
    // 백엔드와 연결되지 않았을 때 임시 로그인
    // <Link href="/list">
    <Link href={KAKAO_AUTH_URL}>
      <KakaoBtn alt="kakao login button" src={Kakao} />
    </Link>
  );
}

const KakaoBtn = styled.img`
  cursor: pointer;
`;

export default KakaoLogin;
