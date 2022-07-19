import { atom } from 'recoil';

export default atom({
  key: 'movie',
  default: {
    id: '',
    title: '',
    thumbnail_image_url: '',
    country: '',
    genre: [],
    running_time: 0,
    age: 0,
    release_date: '',
    description: '',
    actor: [],
    video_url: [],
    image_url: [],
  },
});
