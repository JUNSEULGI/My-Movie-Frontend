import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { CardContainer } from '../Movie';
import { BASE_URL } from '../../Modules/API';
import { MovieRating } from '../Movie';
import { useRecoilValue } from 'recoil';
import { userState } from '../../state';
// import LinearProgress from '@mui/material/LinearProgress';
import { Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { fetcher } from '../../Modules/fetcher';

function WatchedMovie() {
  const navigate = useNavigate();
  const [watched, setWatched] = useState([]);
  const userInfo = useRecoilValue(userState);

  useEffect(() => {
    fetcher(`${BASE_URL}review/list`).then(({ data: res }) => {
      setWatched(res.result);
    });
  }, []);

  let total_watched = 0;
  for (let i = 0; i < watched.length; i++) {
    total_watched += watched[i].movie.running_time;
  }

  const moveMoviePage = id => navigate(`/movie/${id}`);

  if (watched.length === 0) return null;
  return (
    <MypageCardContainer>
      <WatchedTime>
        <WatchedTimeTypo
          variant="h2"
          sx={{ marginBottom: '20px', strong: { color: 'orange' } }}
        >
          {userInfo.nickname}님은 총 <strong>{watched.length}</strong>개의 영화,
          <strong> {total_watched}</strong>
          분을 시청하셨어요!{' '}
        </WatchedTimeTypo>
      </WatchedTime>
      <SubTitle variant="subtitle1">시청한 영화</SubTitle>
      <WatchedBox sx={{ display: 'flex' }}>
        {watched.map(watchedMovie => {
          const { rating, movie } = watchedMovie;
          const { id, poster } = movie;
          return (
            <Movie key={id}>
              <PPoster src={poster} id={id} onClick={() => moveMoviePage(id)} />
              <Title>{movie.title} </Title>
              <Box sx={{ display: 'flex', justifyContent: 'end' }}>
                <MovieRating rating={rating} />
              </Box>
            </Movie>
          );
        })}
      </WatchedBox>
    </MypageCardContainer>
  );
}

export default WatchedMovie;

const MypageCardContainer = styled(CardContainer)`
  display: block;
  position: relative;
  width: 800px;
  margin: 40px 0 20px 20px;
  @media screen and (max-width: 600px) {
    margin-left: 0px;
    width: 100%;
  }
`;

const Movie = styled.div`
  margin-right: 16px;
  scroll-snap-align: start;
`;

const SubTitle = styled(Typography)`
  margin-bottom: 20px;

  @media screen and (max-width: 600px) {
    font-size: 14px;
    margin-bottom: 6px;
  }
`;

const WatchedBox = styled(Box)`
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  ::-webkit-scrollbar {
    display: none;
  }
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
  width: 131.594px;
  font-weight: bold;
  text-align: start;
  margin: 8px 0 0 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const WatchedTime = styled.div``;

const WatchedTimeTypo = styled(Typography)`
  @media screen and (max-width: 600px) {
    font-size: 16px;
  }
`;

// const BorderLinearProgress = styled(LinearProgress)`
//   height: 10px;
//   border-radius: 5px;
//   background-color: lightgrey;

//   .MuiLinearProgress-barColorPrimary {
//     background-color: orange;
//   }
// `;
