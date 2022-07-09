import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useResetRecoilState } from 'recoil';
import { movieState, reviewState, savingState } from '../state';
import { MK_URL } from '../Modules/API';

function useSave() {
  const [saving, setSaving] = useRecoilState(savingState);
  setSaving(true);
}

function useDelete() {
  const token = localStorage.getItem('access_token');
  const navigate = useNavigate();
  const [review, setReview] = useRecoilState(reviewState);
  const resetMovie = useResetRecoilState(movieState);
  const resetReview = useResetRecoilState(reviewState);

  const isDeleting = window.confirm('삭제하시겠습니까?');

  useEffect(() => {
    if (!isDeleting) return;
    // 리뷰 아이디로 특정 리뷰 삭제하기
    fetch(`${MK_URL}reviews/${review.review_id}`, {
      method: 'DELETE',
      headers: {
        Authorization: token,
      },
    })
      .then(res => res.json())
      .then(result => {
        if (result.message === 'SUCCESS') {
          resetMovie();
          resetReview();
          navigate('/list');
        }
      });
  }, []);
}

export const buttons = {
  save: {
    key: 1,
    name: 'Save',
    function: useSave,
  },
  delete: {
    key: 2,
    name: 'Delete',
    function: useDelete,
  },
};
