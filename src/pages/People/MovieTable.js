import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { CardContainer } from '../Movie/CardContainer';
import { CardMedia, Typography } from '@mui/material';
import { OTTLogo } from '../../components/PlatformAvatar';
import { Logo } from '../Movie/ContentLogo';

function MovieTable({ movie }) {
  const navigate = useNavigate();
  const { starring_list } = movie;

  const moveMoviePage = id => {
    navigate(`/movie/${id}`);
  };

  return (
    <>
      <RowTitle>
        <Year variant="subtitle1">연혁</Year>
        <MoviePoster variant="subtitle1"></MoviePoster>
        <MoiveTitle variant="subtitle1">제목</MoiveTitle>
        <InRole variant="subtitle1">역할</InRole>
        <Rating variant="subtitle1">평가</Rating>
        <Platform variant="subtitle1">감상 서비스</Platform>
      </RowTitle>
      <Table>
        {starring_list?.map(movie => {
          const {
            movie_id,
            title,
            release,
            thumbnail_image_url,
            movie_image_url,
            role_name,
            ratings,
            platform,
            platform_logo_image,
          } = movie;

          const floorRatings = ratings.slice(0, 3);
          return (
            <BackCover key={movie_id} back={movie_image_url}>
              <Row>
                <Year>{release}</Year>
                <MoviePoster>
                  <MovieImg
                    component="img"
                    height="100%"
                    image={thumbnail_image_url}
                  />
                </MoviePoster>
                <MoiveTitle
                  variant="subtitle1"
                  onClick={() => moveMoviePage(movie_id)}
                  movie_id
                >
                  {title}
                </MoiveTitle>
                <InRole>{role_name}</InRole>
                <Rating>
                  {ratings ? (
                    <>
                      <Logo>My View</Logo>
                      <ReviewRating>{floorRatings}</ReviewRating>
                    </>
                  ) : (
                    '평가 하시겠어요?'
                  )}
                </Rating>
                <Platform>
                  {/* {platform}  */}
                  <MovieTableOTT alt={platform} src={platform_logo_image} />
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
`;

const Year = styled(Typography)`
  grid-column: span 1 / auto;
  margin-right: 8px;
`;

const MoviePoster = styled(Typography)`
  grid-column: span 1 / auto;
`;

const MoiveTitle = styled(Typography)`
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.palette.test.second};
  }
`;

const InRole = styled(Typography)``;

const Rating = styled(Typography)``;

const ReviewRating = styled.p`
  margin: 0;
  font-weight: bold;
  color: ${({ theme }) => theme.palette.test.main};
`;

const Platform = styled(Typography)`
  display: flex;
  justify-content: center;
`;

const MovieImg = styled(CardMedia)`
  border-radius: 8px;
`;

const MovieTableOTT = styled(OTTLogo)`
  margin: 0 6px 0 0;
`;
