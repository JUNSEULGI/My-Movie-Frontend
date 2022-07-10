import { atom } from 'recoil';

export default atom({
  key: 'button',
  default: {
    isSaving: false,
    isDeleting: false,
  },
});
