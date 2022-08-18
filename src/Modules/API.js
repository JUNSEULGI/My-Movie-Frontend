// export const BASE_URL = 'http://localhost:8000/';
export const BASE_URL = 'http://6a3a-221-147-33-141.ngrok.io/';
export const API = {
  // 유저
  users_list: '/users/list',
  users_info: '/users/info',
  // 리뷰
  reviews: '/reviews',
  reviews_movie: '/reviews/movie',
  review_list: '/review/list',
  reviews_list: '/reviews/list',
  reviews_top: 'reviews/top3',
  // 영화 정보
  actor: '/movies/actor',
  movies: '/movies',
  movies_simple: '/movies/simple',
  movies_detail: '/movies/detail',
  actor_intimacy: '/movies/actor/intimacy',
};

// 네이버
export const NAVER_ID = 'fAxuwH_vSTsRSIcvBdvp';
export const NAVER_CALLBACK_URL = 'http://localhost:3000/login-callback/naver';
export const NAVER_STATE_STRING = '288539e2-9a6d-40ed-8a73-85b96ad91786';

// 카카오
export const KAKAO_ID = '899480d9080e0218f7afc0f284834b77';
export const KAKAO_CALLBACK_URL = 'http://localhost:3000/login-callback/kakao';
export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${KAKAO_ID}&redirect_uri=${KAKAO_CALLBACK_URL}`;
