import { useRef, useState, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil';
import { movieState, buttonState } from '../state';
import { API } from '../Modules/API';
import { fetcher } from '../Modules/fetcher';
import moment from 'moment';

export const useDelete = review_id => {
  const { pathname } = useLocation();
  const [button, setButton] = useRecoilState(buttonState);
  const resetMovie = useResetRecoilState(movieState);

  return useEffect(() => {
    if (!button.isDeleting) return;
    if (window.confirm('정말 삭제시겠습니까?')) {
      fetcher.delete(`${API.review}/${review_id}`).then(result => {
        if (result.status === 204) {
          setButton({ ...button, isDeleting: false });
          if (!/\/movie\/*/.test(pathname)) resetMovie();
          alert('삭제되었습니다.');
          window.location.replace(pathname);
        }
      });
    } else {
      alert('취소합니다.');
      setButton({ ...button, isDeleting: false });
    }
  }, [button.isDeleting]);
};

export const useSave = (review, textInput) => {
  const { pathname } = useLocation();
  const token = localStorage.getItem('access_token');
  const [button, setButton] = useRecoilState(buttonState);
  const movie = useRecoilValue(movieState);
  const resetMovie = useResetRecoilState(movieState);

  return useEffect(() => {
    if (!button.isSaving) return;
    if (review.rating === 0) {
      alert('평점을 매겨주세요');
      setButton({ ...button, isSaving: false });
      for (let i = 0; i < 5; i++) {
        textInput.current.children[i].children[2].focus();
      }
      return;
    }

    const formData = new FormData();
    formData.append('title', review.content.substr(0, 30));
    formData.append('content', review.content);
    formData.append(
      'watched_date',
      moment(review.watched_date).format('YYYY-MM-DD HH:mm:ss')
    );
    formData.append('place', review.place.mapx);
    formData.append('place', review.place.mapy);
    formData.append('place', review.place.name);
    formData.append('place', review.place.link);
    formData.append('with_user', review.with_user);
    formData.append('rating', review.rating);
    formData.append('movie_id', movie.id);

    if (review.review_id) {
      // 리뷰 아이디가 있으므로 이미 작성된 리뷰를 수정하는 중
      formData.append('review_id', review.review_id);

      fetcher
        .put(API.review, formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        })
        .then(res => res.data)
        .then(result => {
          if (result.message === 'SUCCESS') {
            setButton({ ...button, isSaving: false });
            if (!pathname.includes('movie')) resetMovie();
            window.location.replace(pathname);
          }
        });
    } else {
      // 리뷰 아이디가 없으므로 새로운 리뷰 저장하는 중

      fetcher
        .post(API.review, formData, {
          method: 'POST',
          headers: {
            Authorization: token,
          },
        })
        .then(res => res.data)
        .then(result => {
          if (result.message === 'SUCCESS') {
            setButton({ ...button, isSaving: false });
            if (!pathname.includes('movie')) resetMovie();
            window.location.replace(pathname);
          }
        });
    }
  }, [button.isSaving]);
};

export const useInfiniteScroll = targetEl => {
  const observerRef = useRef(null);
  const [intersecting, setIntersecting] = useState(false);
  console.log('targetEl', targetEl);
  console.log('observerRef', observerRef.current);

  const getObserver = useCallback(() => {
    console.log('usecl]lb');
    if (!observerRef.current) {
      observerRef.current = new IntersectionObserver(entries =>
        setIntersecting(entries.some(entry => entry.isIntersecting))
      );
    }
    return observerRef.current;
  }, [observerRef.current]);

  useEffect(() => {
    if (targetEl.current) getObserver().observe(targetEl.current);
    return () => {
      getObserver().disconnect();
    };
  }, [targetEl.current]);

  return intersecting;
};
