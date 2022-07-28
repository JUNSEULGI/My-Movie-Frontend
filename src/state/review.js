import { atom } from 'recoil';

export default atom({
  key: 'review',
  default: {
    review_id: '',
    title: '한줄평',
    content: '',
    watched_date: new Date(),
    place: { name: '', mapx: 0.0, mapy: 0.0, link: 'url' },
    with_user: '',
  },
});
