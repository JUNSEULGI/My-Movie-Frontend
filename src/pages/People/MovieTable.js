import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { CardContainer } from '../../components/CardContainer';
import { CardMedia, Typography, Box } from '@mui/material';
import { OTTLogo } from '../../components/PlatformAvatar';
import { Logo } from '../../components/Logo';

function MovieTable({ movie, reviewdata }) {
  const access_token = localStorage.getItem('access_token');
  const navigate = useNavigate();

  const moveMoviePage = id => {
    navigate(`/movie/${id}`);
  };

  console.log(movie);
  return (
    <>
      <RowTitle>
        <Year variant="subtitle1">연혁</Year>
        <MoviePoster variant="subtitle1" />
        <MoiveTitle variant="subtitle1">제목</MoiveTitle>
        <InRole variant="subtitle1">역할</InRole>
        <Rating variant="subtitle1">평가</Rating>
        <Platform variant="subtitle1">감상 서비스</Platform>
      </RowTitle>
      <Table>
        {movie?.map(movie => {
          const {
            movie_id,
            title,
            release,
            thumbnail_image_url,
            movie_image_url,
            role_name,
            ratings,
            platform,
            myrating,
            platform_logo_image,
            background_image_url,
            id,
          } = movie;

          const floorRatings = ratings;
          return (
            <BackCover key={id} back={background_image_url}>
              <Row>
                <Year>{release}</Year>
                <MoviePoster>
                  {thumbnail_image_url ? (
                    <MovieImg
                      component="img"
                      height="100%"
                      image={thumbnail_image_url}
                    />
                  ) : (
                    <MovieImg
                      component="img"
                      height="100%"
                      image="https://kangsblackbeltacademy.com/wp-content/uploads/2017/04/default-image.jpg"
                    />
                  )}
                </MoviePoster>
                <MoiveTitle
                  variant="subtitle1"
                  onClick={() => moveMoviePage(id)}
                >
                  {title}
                </MoiveTitle>
                <InRole>{role_name}</InRole>
                <Rating>
                  {access_token ? (
                    ratings.review ? (
                      <>
                        <MLogo>My View</MLogo>
                        <ReviewRating>{ratings.rating}</ReviewRating>
                      </>
                    ) : (
                      <AverageRating>{ratings.rating}</AverageRating>
                    )
                  ) : (
                    <AverageRating>{ratings}</AverageRating>
                  )}
                </Rating>
                <Platform>
                  <MovieTableOTT alt={platform} src={platform} />
                </Platform>
              </Row>
            </BackCover>
          );
        })}
      </Table>
    </>
  );
}

export default MovieTable;

const Table = styled(CardContainer)`
  display: block;
  padding: 0;
`;

const BackCover = styled.div`
  position: relative;
  transition: all 0.5s;
  border-bottom: 1px solid #818181;
  :last-child {
    border-bottom: none;
  }
  &:hover {
    opacity: 1;
    transition: all 0.5s;
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      width: 100%;
      height: 100%;
      opacity: 0.5;
      background: ${({ back }) => `url(${back}) no-repeat`};
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      background-position-y: 800;
    }
  }
`;
const Row = styled.div`
  display: grid;
  padding: 0 20px;
  height: 138px;
  align-items: center;
  text-align: center;
  -webkit-box-align: center;
  grid-template-columns: 60px 82px 1fr 149px 140px 125px;
`;

const RowTitle = styled(Row)`
  margin-bottom: 18px;
  padding: 0 20px;
  height: 40px;
  color: white;
  font-weight: bold;
  color: ${({ theme }) => theme.palette.test.second};
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.palette.test.second};
  -webkit-box-align: center;
  cursor: inherit;

  &:hover {
    div {
      cursor: inherit;
      color: ${({ theme }) => theme.palette.test.second};
    }
  }

  @media screen and (max-width: 600px) {
    display: none;
  }
`;

const Year = styled(Typography)`
  grid-column: span 1 / auto;
  margin-right: 8px;
  @media screen and (max-width: 600px) {
    position: absolute;
    left: 101px;
    top: 40px;
    font-size: 14px;
  }
`;

const MoviePoster = styled(Typography)`
  grid-column: span 1 / auto;

  @media screen and (max-width: 600px) {
    position: absolute;
    left: 10px;
    width: 80px;
  }
`;

const MoiveTitle = styled(Typography)`
  cursor: pointer;
  text-align: center;
  margin: auto;
  width: fit-content;
  overflow-x: scroll;

  &:hover {
    color: ${({ theme }) => theme.palette.test.second};
  }
  @media screen and (max-width: 600px) {
    position: absolute;
    left: 100px;
    top: 16px;
    /* width: 80px; */
  }
`;

const InRole = styled(Typography)`
  @media screen and (max-width: 600px) {
    position: absolute;
    left: 140px;
    top: 40px;
    font-size: 14px;
    font-weight: 600;

    ::before {
      content: '| ';
      /* margin-left: 20px; */
    }
  }
`;

const Rating = styled(Box)``;

const ReviewRating = styled.p`
  margin: 0;
  font-weight: bold;
  color: ${({ theme }) => theme.palette.test.main};
  @media screen and (max-width: 600px) {
    position: absolute;
    right: 10px;
    top: 40px;
    font-size: 16px;
    /* width: 80px; */
  }
`;

const MLogo = styled(Logo)`
  @media screen and (max-width: 600px) {
    position: absolute;
    right: 10px;
    top: 16px;
    font-size: 16px;
    /* width: 80px; */
  }
`;
const AverageRating = styled(ReviewRating)`
  color: white;
  @media screen and (max-width: 600px) {
    ::before {
      content: '평균 점수';
      border: 1px solid #696969;
      border-radius: 2px;
      margin-right: 4px;
      font-size: 12px;
      padding: 2px;
    }
    position: absolute;
    left: -40px;
    top: 60px;
    font-size: 14px;
    padding-top: 2px;
    /* width: 80px; */
  }
`;

const Platform = styled(Box)`
  display: flex;
  justify-content: center;
`;

const MovieImg = styled(CardMedia)`
  border-radius: 8px;
`;

const MovieTableOTT = styled.img`
  margin: 0 6px 0 0;
  border-radius: 50px;
  width: 35px;

  @media screen and (max-width: 600px) {
    position: absolute;
    right: 0;
    bottom: 8px;
  }
`;
