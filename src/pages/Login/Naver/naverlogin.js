import React from 'react';

const { naver } = window;

export const initializeNaverLogin = () => {
  const naverLogin = new naver.LoginWithNaverId({
    clientId: 'fAxuwH_vSTsRSIcvBdvp',
    callbackUrl: 'http://localhost:3000/',
    isPopup: false,
    loginButton: { color: 'green', type: 3, height: '44', width: '200' },
    callbackHandle: true,
  });
  naverLogin.init();
};
