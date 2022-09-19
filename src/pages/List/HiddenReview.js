import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled/macro';
import { Box, Card, Typography } from '@mui/material';

const HiddenReview = ({ title, item, idx }) => {
  const [isHovering, setIsHovering] = useState(0);
  // console.log(topMovies);
  // const navigate = useNavigate();

  return (
    <>
      <BackgroundPosterWrapper>
        <BackgroundPoster
          src={item?.movie.poster}
          alt="poster of my best movie"
          onMouseOver={() => setIsHovering(1)}
          onMouseOut={() => setIsHovering(0)}
        />
        {isHovering ? (
          <TopReview hover={isHovering}>
            <br />
            {title}
          </TopReview>
        ) : (
          ''
        )}
        <Title variant="h1">
          <Rate>{idx + 1} </Rate>
          {item?.movie.title}
        </Title>
      </BackgroundPosterWrapper>
    </>
  );
};

export default HiddenReview;

const TopReview = styled(Box)`
  ::before {
    content: '나의 한줄평';
    color: white;
    font-size: 1rem;
  }
  top: 0px;
  padding: 20px;
  position: absolute;
  font-size: 1.35rem;
  font-weight: bold;
  text-shadow: 4px 2px 6px #515151;
`;

const BackgroundPosterWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
`;

const Title = styled(Typography)`
  display: flex;
  align-items: baseline;
  position: absolute;
  bottom: 10px;
  left: 16px;
  color: ${({ theme }) => theme.palette.common.white};
  font-weight: bold;
  text-shadow: 4px 2px 6px #515151;
`;

const BackgroundPoster = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all ease 0.4s;

  :hover {
    transform: scale(1.1);
    filter: grayscale(99%);
    opacity: 0.7;
  }
`;

const Rate = styled(Typography)`
  /* position: absolute; */
  /* z-index: 99; */
  margin-right: 8px;
  font-style: italic;
  font-size: 3rem;
  font-weight: bold;
  color: ${({ theme }) => theme.palette.test.second};
`;
