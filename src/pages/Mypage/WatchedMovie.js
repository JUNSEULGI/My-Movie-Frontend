import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { CardContainer } from '../Movie';
import { BASE_URL } from '../../Modules/API';
import { MovieRating } from '../Movie';

import { Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function WatchedMovie() {
  const navigate = useNavigate();

  const access_token = localStorage.getItem('access_token');
  const [watched, setWatched] = useState([]);

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
  console.log(watched);

  const moveMoviePage = id => {
    navigate(`/movie/${id}`);
  };

  if (watched.length == 0) return null;
  return (
    <MypageCardContainer>
      <SubTitle component="h2">시청한 영화</SubTitle>
      <TT>
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
      </TT>
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

const TT = styled.div`
  display: flex;
`;

const Movie = styled.div`
  margin-right: 16px;
`;
const SubTitle = styled(Typography)`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 40px;
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
