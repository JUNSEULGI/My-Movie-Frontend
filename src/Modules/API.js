import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://nid.naver.com/oauth2.0/',
});

export const BASE_URL = 'http://390b-175-193-80-187.ngrok.io/';

export const API = {
  // 유저
  users_list: BASE_URL + 'users/list',
  users_info: BASE_URL + 'users/info',
  // 리뷰
  review: BASE_URL + 'review',
  review_list: BASE_URL + 'review/list',
  reviews_list: BASE_URL + 'reviews/list',
  // 영화 상세
  actor: BASE_URL + 'movies/actor',
  movies: BASE_URL + 'movies',
  movies_detail: BASE_URL + 'movies/detail',
  actor_intimacy: BASE_URL + 'movies/actor/intimacy',
};

// 네이버
export const NAVER_ID = 'fAxuwH_vSTsRSIcvBdvp';
export const NAVER_CALLBACK_URL = 'http://localhost:3000/login-callback/naver';
export const NAVER_STATE_STRING = '288539e2-9a6d-40ed-8a73-85b96ad91786';

export const KAKAO_ID = '899480d9080e0218f7afc0f284834b77';
export const KAKAO_CALLBACK_URL = 'http://localhost:3000/login-callback/kakao';
