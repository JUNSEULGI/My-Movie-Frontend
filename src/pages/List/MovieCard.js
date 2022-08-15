import React from 'react';
import { useResetRecoilState, useSetRecoilState } from 'recoil';
import { movieState } from '../../state';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { Box, Card, CardMedia, Typography, Rating, Chip } from '@mui/material';

function MovieCard({ data, setOpen }) {
  const navigate = useNavigate();
  const setMovie = useSetRecoilState(movieState);
  const resetMovie = useResetRecoilState(movieState);

  const showMovie = () => {
    navigate(`/movie/${data.movie.id}`);
  };

  const showReview = () => {
    setMovie({ id: data.movie.id, review_id: data.review_id });
    setOpen(true);
  };

  const addMovie = () => {
    resetMovie();
    setOpen(true);
  };

  return !data ? (
    <AddCardBox onClick={addMovie}>
      <AddBtn>+</AddBtn>
    </AddCardBox>
  ) : (
    <CardBox onClick={showReview}>
      <Poster component="img" image={data.movie.poster} />
      <Title onClick={showMovie}>{data.movie.title}</Title>
      <InfoContainer>
        <MovieInfo variant="menuItem">
          {data.movie.released.split('-')[0]} · {data.movie.country}
        </MovieInfo>
        <InfoContainer>
          <Star size="small" max={1} value={1} readOnly />
          <Number>
            <ThickNumber>{data.rating}</ThickNumber> / 5
          </Number>
        </InfoContainer>
      </InfoContainer>
      <GenreContainer>
        {data.movie.genre.map((item, index) => (
          <Genre key={index} label={item} color="warning" size="small" />
        ))}
      </GenreContainer>
    </CardBox>
  );
}

const CardBox = styled(Card)`
  padding: 14px;
  width: 270px;
  height: 460px;
  border-radius: 8px;
  background: ${({ theme }) => theme.palette.test.card};
  cursor: pointer;
`;

const AddCardBox = styled(CardBox)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.palette.background.disabled};
`;

const AddBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 121px;
  width: 121px;
  background-color: #ff6e01;
  border-radius: 50%;
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),
    0px 6px 10px rgba(0, 0, 0, 0.14), 0px 1px 18px rgba(0, 0, 0, 0.12);
  color: #2222248a;
  font-size: 30px;
  font-weight: 300;
`;

const Poster = styled(CardMedia)`
  width: 100%;
  border-radius: 8px;
`;

const InfoContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled(Typography)`
  margin: 10px 0 4px;
  font-weight: 700;
  color: ${({ theme }) => theme.palette.common.white};
  cursor: pointer;

  :hover {
    text-decoration: underline;
  }
`;

const MovieInfo = styled(Typography)`
  color: ${({ theme }) => theme.palette.common.white};
`;

const Star = styled(Rating)`
  color: ${({ theme }) => theme.palette.success.main};
`;

const Number = styled.span`
  font-size: 15px;
  color: ${({ theme }) => theme.palette.common.white};
`;

const ThickNumber = styled(Number)`
  font-weight: 700;
  margin-left: 8px;
`;

const GenreContainer = styled(Box)`
  display: flex;
  justify-content: flex-end;
  margin-top: 25px;
`;

const Genre = styled(Chip)`
  height: 14px;
  margin-left: 4px;
  font-size: 10px;
  font-weight: 700;
  color: ${({ theme }) => theme.palette.common.white};
`;

export default MovieCard;
