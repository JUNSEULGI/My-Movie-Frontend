import { atom } from 'recoil';

export default atom({
  key: 'userInfo',
  default: {
    nickname: '슬기',
    email: 'myviewtest1234@naver.com',
    Profile_image:
      'https://images.velog.io/images/sdb016/post/34bdac57-2d63-43ce-a14c-8054e9e036de/test.png',
  },
});
