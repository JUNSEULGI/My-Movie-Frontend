import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { CardContainer } from '../Movie/CardContainer';
import { CardMedia } from '@mui/material';
import { OTTLogo } from '../../components/PlatformAvatar';

function MovieTable({ movie }) {
  const navigate = useNavigate();
  const { starring_list } = movie;

  const moveMoviePage = id => {
    navigate(`/movie/${id}`);
  };

  return (
    <>
      <RowTitle>
        <Year>연혁</Year>
        <MoviePoster></MoviePoster>
        <MoiveTitle>제목</MoiveTitle>
        <InRole>역할</InRole>
        <Rating>평가</Rating>
        <Platform>감상 서비스</Platform>
      </RowTitle>
      <Table>
        {starring_list?.map(movie => {
          const {
            id,
            title,
            release,
            thumbnail_image_url,
            role_name,
            ratings,
            platform,
            platform_logo_image,
          } = movie;

          return (
            <BackCover>
              <Row>
                <Year>{release}</Year>
                <MoviePoster>
                  <MovieImg
                    component="img"
                    height="100%"
                    image={thumbnail_image_url}
                  />
                </MoviePoster>
                <MoiveTitle onClick={() => moveMoviePage(id)} id>
                  {title}
                </MoiveTitle>
                <InRole>{role_name}</InRole>
                <Rating>
                  {ratings ? (
                    <ReviewRating>{ratings}</ReviewRating>
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
        <Row>
          <Year>2023</Year>
          <MoviePoster>사진</MoviePoster>
          <MoiveTitle>제목</MoiveTitle>
          <InRole>역할</InRole>
          <Rating>평가</Rating>
          <Platform>감상 서비스</Platform>
        </Row>
      </Table>
    </>
  );
}

export default MovieTable;

const Table = styled(CardContainer)`
  /* background-color: #626262; */
  display: block;

  padding: 0;
`;
const BackCover = styled.div`
  position: relative;
  transition: all 0.5s;

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
      background-image: url('https://myviewjjky.s3.ap-northeast-2.amazonaws.com/image/gallery/Z8jafJT0TOkoU1C0Z5xo_Q.jpeg');
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      transition: all 0.5s;
    }
  }
`;
const Row = styled.div`
  display: grid;
  height: 138px;
  align-items: center;
  text-align: center;
  -webkit-box-align: center;
  grid-template-columns: 60px 82px 1fr 149px 140px 125px;
  border-bottom: 1px solid #818181;
  padding: 0 20px;
`;

const RowTitle = styled(Row)`
  margin-bottom: 18px;
  padding: 0 20px;
  height: 40px;
  color: white;
  font-weight: bold;
  background-color: #424262;
  border: none;
  border-radius: 10px;
  -webkit-box-align: center;

  /* border-top: 1px solid #818181; */
  /* background-color: antiquewhite; */
`;

const Year = styled.div`
  grid-column: span 1 / auto;
  margin-right: 8px;
`;

const MoviePoster = styled.div`
  grid-column: span 1 / auto;
`;

const MoiveTitle = styled.div`
  font-weight: bold;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.palette.test.second};
  }
`;

const InRole = styled.div``;

const Rating = styled.div``;

const ReviewRating = styled.p`
  font-weight: bold;
  color: ${({ theme }) => theme.palette.test.main}; ;
`;

const Platform = styled.div`
  display: flex;
  justify-content: center;
`;

const MovieImg = styled(CardMedia)`
  border-radius: 8px;
`;

const MovieTableOTT = styled(OTTLogo)`
  margin: 0 6px 0 0;
`;
