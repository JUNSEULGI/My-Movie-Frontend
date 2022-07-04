import { atom } from 'recoil';

export default atom({
  key: 'review',
  default: {
    title: '한줄평',
    content: '',
    watched_date: new Date(),
    place: { name: '', mapx: 0, mapy: 0, link: '' },
    with_user: '',
  },
});
