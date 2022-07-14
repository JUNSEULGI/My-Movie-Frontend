import { useEffect } from 'react';
import { useRecoilState, useResetRecoilState } from 'recoil';
import { movieState, reviewState, buttonState } from '../state';
import { BASE_URL } from '../Modules/API';

export default function useDelete() {
  const token = localStorage.getItem('access_token');
  const [button, setButton] = useRecoilState(buttonState);
  const [review] = useRecoilState(reviewState);
  const resetMovie = useResetRecoilState(movieState);
  const resetReview = useResetRecoilState(reviewState);

  useEffect(() => {
    if (!button.isDeleting) return;
    fetch(`${BASE_URL}reviews/${review.review_id}`, {
      method: 'DELETE',
      headers: {
        Authorization: token,
      },
    })
      // .then(res => res.json())
      .then(result => {
        console.log(result);
        // if (result.message === 'SUCCESS') {
        setButton({ ...button, isDeleting: false });
        resetMovie();
        resetReview();
        // window.location.replace(`/list`);
        // }
      });
  }, [button.isDeleting]);
}
