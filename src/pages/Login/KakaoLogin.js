import React from 'react';
import styled from '@emotion/styled';
import { Link } from '@mui/material';
import Kakao from '../../assets/images/kakaoLogin.png';
import { KAKAO_AUTH_URL } from '../../Modules/API';

function KakaoLogin() {
  return (
    <Link href={KAKAO_AUTH_URL}>
      <KakaoBtn alt="kakao login button" src={Kakao} />
    </Link>
  );
}

const KakaoBtn = styled.img`
  cursor: pointer;
`;

export default KakaoLogin;
