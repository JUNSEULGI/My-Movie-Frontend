import { atom } from 'recoil';

export default atom({
  key: 'movie',
  default: {
    id: '',
    title: '',
  },
});
