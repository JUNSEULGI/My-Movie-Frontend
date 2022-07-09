import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { Link } from '@mui/material';
import Kakao from '../../../assets/images/kakaoLogin.png';

function KakaoLogin() {
  const { search } = useLocation();
  const navigate = useNavigate();

  const REDIRECT_URI = 'http://localhost:3000/';
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.REACT_APP_KAKAO_KEY}&redirect_uri=${REDIRECT_URI}`;

  useEffect(() => {
    if (search) {
      const code = search.split('=')[1];
      fetch(`http://172.30.1.27:8000/users/login/kakao/callback?code=${code}`)
        .then(res => res.json())
        .then(data => {
          console.log(data);
          localStorage.setItem('access_token', data.access_token);
          navigate('/list');
        });
    }
  }, []);

  return (
    // 백엔드와 연결되지 않았을 때 임시 로그인
    // <Link href={KAKAO_AUTH_URL}>
    <Link href="/list">
      <KakaoBtn alt="kakao login button" src={Kakao} />
    </Link>
  );
}

const KakaoBtn = styled.img`
  cursor: pointer;
`;

export default KakaoLogin;
