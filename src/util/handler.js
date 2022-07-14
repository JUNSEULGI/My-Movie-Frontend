import { useRecoilState } from 'recoil';
import { buttonState } from '../state';

export const useSave = () => {
  const [button, setButton] = useRecoilState(buttonState);

  setButton({ ...button, isSaving: true });
};

export const useDelete = () => {
  const [button, setButton] = useRecoilState(buttonState);

  setButton({ ...button, isDeleting: true });
};
