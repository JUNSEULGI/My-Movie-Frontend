import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { CardContainer } from '../Movie';
import { BASE_URL } from '../../Modules/API';
import { MovieRating } from '../Movie';
import { useRecoilState } from 'recoil';
import { userState } from '../../state';
import LinearProgress, {
  linearProgressClasses,
} from '@mui/material/LinearProgress';

import { Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import movie from '../../state/movie';

function WatchedMovie() {
  const navigate = useNavigate();

  const access_token = localStorage.getItem('access_token');
  const [watched, setWatched] = useState([]);
  const [userInfo, setUserInfo] = useRecoilState(userState);

  useEffect(() => {
    fetch(`${BASE_URL}reviews/list`, {
      headers: {
        Authorization: access_token,
      },
    })
      .then(res => res.json())
      .then(res => {
        setWatched(res.result);
      });
  }, []);

  let total_watched = 0;
  for (let i = 0; i < watched.length; i++) {
    total_watched += watched[i].movie.running_time;
  }

  const moveMoviePage = id => {
    navigate(`/movie/${id}`);
  };

  if (watched.length == 0) return null;
  return (
    <MypageCardContainer>
      <WatchedTime>
        <Typography
          variant="h2"
          sx={{ marginBottom: '20px', strong: { color: 'orange' } }}
        >
          {userInfo.nickname}님은 총 <strong>{watched.length}</strong>개의 영화,{' '}
          <strong> {total_watched}</strong>
          분을 시청하셨어요!{' '}
        </Typography>
      </WatchedTime>
      <SubTitle variant="subtitle1">시청한 영화</SubTitle>
      <Box sx={{ display: 'flex' }}>
        {watched.map(watchedMovie => {
          const { rating, movie } = watchedMovie;
          const { id, poster } = movie;
          return (
            <Movie>
              <PPoster src={poster} id={id} onClick={() => moveMoviePage(id)} />
              <Title>{movie.title} </Title>
              <Box sx={{ display: 'flex', justifyContent: 'end' }}>
                <MovieRating rating={rating} />
              </Box>
            </Movie>
          );
        })}
      </Box>
    </MypageCardContainer>
  );
}

export default WatchedMovie;

const MypageCardContainer = styled(CardContainer)`
  display: block;
  position: relative;
  width: fit-content;
  margin: 40px 0 20px 20px;
`;

const Movie = styled.div`
  margin-right: 16px;
`;
const SubTitle = styled(Typography)`
  margin-bottom: 20px;
`;

const PPoster = styled.img`
  width: 131.594px;
  height: 192.203px;
  background-color: aliceblue;
  border-radius: 8px;
  box-shadow: 5px 7px 20px -4px rgba(0, 0, 0, 0.6);
  cursor: pointer;
`;

const Title = styled.p`
  font-weight: bold;
  text-align: end;
  margin: 8px 0 0 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const WatchedTime = styled.div``;

const BorderLinearProgress = styled(LinearProgress)`
  height: 10px;
  border-radius: 5px;
  background-color: lightgrey;

  .MuiLinearProgress-barColorPrimary {
    background-color: orange;
  }
`;
