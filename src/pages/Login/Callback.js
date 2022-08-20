import React, { useEffect } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../Modules/API';

function Callback() {
  const { id: params } = useParams();
  const { search } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!search) return;
    const access_code = search.split('=')[1];

    fetch(`${BASE_URL}users/login/${params}/callback?code=${access_code}`)
      .then(res => res.json())
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
  }, []);
  return <div />;
}

export default Callback;
