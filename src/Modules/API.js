import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://nid.naver.com/oauth2.0/',
});

export const NAVER_ID = 'fAxuwH_vSTsRSIcvBdvp';
export const NAVER_CLIENT_SECRET = 'fAxuwH_vSTsRSIcvBdvp';
export const NAVER_CALLBACK_URL = 'http://localhost:3000/navercallback';
export const NAVER_STATE_STRING = '288539e2-9a6d-40ed-8a73-85b96ad91786';
