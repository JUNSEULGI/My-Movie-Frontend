// export const BASE_URL = 'http://localhost:8000/';
// export const BASE_URL = 'http://172.30.1.6:8080/';
export const BASE_URL = 'https://13.209.67.48:8000/';

export const API = {
  // 로그인
  login: '/user/login',
  login_back: '/user/login/background',
  // 유저
  users_list: '/user/list',
  users_info: '/user/info',
  // 리뷰
  review: '/review',
  review_movie: '/review/movie',
  review_list: '/review/list',
  review_top: 'review/top3',
  // 영화 정보
  actor: '/movie/actor/detail',
  movie_popular: '/movie/popular',
  movie_latest: '/movie/latest',
  movie_detail: '/movie/detail',
  actor_intimacy: '/movie/actor/intimacy',
  // 검색
  search_movie: '/movie',
  search_actor: '/movie/actor',
};

// 네이버
export const NAVER_ID = 'fAxuwH_vSTsRSIcvBdvp';
export const NAVER_CALLBACK_URL =
  'http://172.30.1.41:3000/login-callback/naver';
export const NAVER_STATE_STRING = '288539e2-9a6d-40ed-8a73-85b96ad91786';

// 카카오
export const KAKAO_ID = '899480d9080e0218f7afc0f284834b77';
export const KAKAO_CALLBACK_URL = 'http://localhost:3000/login-callback/kakao';
export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${KAKAO_ID}&redirect_uri=${KAKAO_CALLBACK_URL}`;
