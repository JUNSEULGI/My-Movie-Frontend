import { atom } from 'recoil';

export default atom({
  key: 'step',
  default: {
    isSearching: false,
    isSaving: false,
  },
});
