import React from 'react';
import { NAVER_CALLBACK_URL, NAVER_ID } from '../../Modules/API';
import { Link } from '@mui/material';
import naver from '../../assets/images/naverLogin.png';

function NaverLogin() {
  return (
    <Link
      href={`https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_ID}&redirect_uri=${NAVER_CALLBACK_URL}&state=state`}
    >
      <img alt="네이버 로그인 버튼" src={naver} />
    </Link>
  );
}

export default NaverLogin;
