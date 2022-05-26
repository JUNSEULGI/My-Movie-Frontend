import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import Kakao from '../../../assets/images/kakao_login_medium_narrow.png';

function KakaoLogin() {
  const { search } = useLocation();
  const navigate = useNavigate();

  // const REST_API_KEY = '095e154f9ca806fa28053d419b7cbbbd';
  const REDIRECT_URI = 'http://localhost:3000';
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.REACT_APP_KAKAO_KEY}&redirect_uri=${REDIRECT_URI}`;

  console.log('rest api key is :' + process.env.REACT_APP_KAKAO_KEY);

  useEffect(() => {
    if (search) {
      console.log(search);
      const code = search.split('=')[1];
      console.log(code);
      fetch(`http://172.30.1.27:8000/users/login/kakao/callback?code=${code}`)
        .then(res => res.json())
        .then(data => {
          console.log(data);
          localStorage.setItem('access_token', data.access_token);
          // localStorage.setItem('username', data.username);
          // localStorage.setItem('profile', data.profile);
          navigate('/list');
        });
    }
  }, []);

  return (
    <a href={KAKAO_AUTH_URL}>
      <KakaoBtn alt="kakao login button" src={Kakao} />
    </a>
  );
}

const KakaoBtn = styled.img`
  cursor: pointer;
`;

export default KakaoLogin;
