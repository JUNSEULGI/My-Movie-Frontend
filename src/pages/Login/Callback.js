import React, { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { API } from '../../Modules/API';
import { fetcher } from '../../Modules/fetcher';

function Callback() {
  const { id: params } = useParams();
  const { search } = useLocation();

  useEffect(() => {
    if (!search) return;
    const access_code = search.split('=')[1];

    fetcher(`${API.login}/${params}/callback?code=${access_code}`)
      .then(res => res.data)
      .then(data => {
        if (!data) {
          alert('정보가 바르지 않습니다');
          return;
        }
        localStorage.setItem('access_token', data.token_info.access_token);
        localStorage.access_token
          ? window.location.replace('/list')
          : alert('정보가 바르지 않습니다');
      });
  }, [params, search]);
  return <div />;
}

export default Callback;
