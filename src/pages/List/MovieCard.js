import React from 'react';
import { useResetRecoilState, useSetRecoilState } from 'recoil';
import { movieState } from '../../state';
import styled from '@emotion/styled';
import { Box, Card, Typography, Rating, Chip } from '@mui/material';
import darkTheme from '../../styles/theme';
import { SearchPoster } from '../../components/Poster/SearchPoster';
import { MyLink } from '../../components/Link';
import { GenreChip } from '../../components/GenreChip';

function MovieCard({ data, setOpen, genreChip }) {
  const setMovie = useSetRecoilState(movieState);
  const resetMovie = useResetRecoilState(movieState);

  const showReview = () => {
    setMovie({ id: data.movie.id, review_id: data.review_id });
    setOpen(true);
  };

  const addMovie = () => {
    resetMovie();
    setOpen(true);
  };

  const tagTheme = darkTheme.palette.tag;
  let tagBase = [];
  for (let key in tagTheme) {
    tagBase.push(key);
  }

  console.log(genreChip);

  return !data ? (
    <AddCardBox onClick={addMovie}>
      <AddBtn>+</AddBtn>
    </AddCardBox>
  ) : (
    <CardBox onClick={showReview}>
      <SearchPoster src={data.movie.poster} />
      <Box style={{ height: '100%' }}>
        <MyLink to={`/movie/${data.movie.id}`}>
          <Title component="span">{data.movie.title}</Title>
        </MyLink>
        <InfoContainer>
          <MovieInfo variant="menuItem">
            {data.movie.released.split('-')[0]} · {data.movie.country}
          </MovieInfo>
          <InfoContainer style={{ width: 75 }}>
            <Star size="small" max={1} value={1} readOnly />
            <Number>
              <ThickNumber>{data.rating}</ThickNumber> / 5
            </Number>
          </InfoContainer>
        </InfoContainer>
      </Box>
      <GenreContainer>
        {genreChip.map((item, index) => (
          <GenreChip
            key={index}
            colorcode={item.color_code}
            label={item.name}
            size="small"
          />
        ))}
      </GenreContainer>
    </CardBox>
  );
}

const CardBox = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  padding: 14px;
  width: 270px;
  min-height: 490px;
  border-radius: 8px;
  background: ${({ theme }) => theme.palette.test.card};
  box-shadow: 5px 7px 20px -4px rgba(0, 0, 0, 0.6);
  cursor: pointer;
  transition: all ease 0.3s;

  :hover {
    background: rgb(48 48 48 / 70%);
  }

  @media screen and (max-width: 600px) {
    scroll-snap-align: start;
  }
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
  transition: all ease 0.4s;
  &:hover {
    background-color: ${({ theme }) => theme.palette.test.second};
  }
`;

const InfoContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled(Typography)`
  margin-bottom: 4px;
  font-weight: 700;
  color: ${({ theme }) => theme.palette.common.white};
`;

const MovieInfo = styled(Typography)`
  color: ${({ theme }) => theme.palette.common.white};
`;

const Star = styled(Rating)`
  color: ${({ theme }) => theme.palette.success.main};
`;

const Number = styled.span`
  font-size: 15px;
  color: ${({ theme }) => theme.palette.text.disabled};
`;

const ThickNumber = styled(Number)`
  font-weight: 700;
  margin-left: 8px;
  color: ${({ theme }) => theme.palette.common.white};
`;

const GenreContainer = styled(Box)`
  display: flex;
  justify-content: flex-end;
`;

const Genre = styled(Chip)`
  height: 20px;
  margin-left: 4px;
  background-color: ${({ randomtag }) => randomtag};
  font-weight: 700;
  color: ${({ theme }) => theme.palette.common.white};
`;

export default MovieCard;
