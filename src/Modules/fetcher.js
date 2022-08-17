import axios from 'axios';
import { BASE_URL } from './API';

const access_token = localStorage.getItem('access_token');

export const fetcher = axios.create({
  baseURL: BASE_URL,
  headers: { Authorization: access_token },
  responseType: 'json',
});

// const axiosEnvelope = async fetcher => {
//   let response = fetcher()
//     .then(res => res.data)
//     .catch(error => console.log(error));
//   return response;
// };

// const postRequest = (url, data) => fetcher({ url, method: 'post', data });

// export const getUserInfo = async () => {
//   if (!access_token) return;
//   return await axiosEnvelope(() => fetcher.get(API.users_info));
// };
