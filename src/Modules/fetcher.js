import axios from 'axios';
import { API } from './API';

const fetcher = (url, callback) => axios.get(url).then(callback());

export const getUserInfo = fetcher(API.users_info);
