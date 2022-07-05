import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Typography, Box } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { CardContainer } from '../Movie/CardContainer';

function CountReview({ userInfo, peopleData }) {
  const { nickname, email, Profile_image } = userInfo;
  const { total_movie, watched_movie } = peopleData;

  const percent = (10 / (total_movie / watched_movie)) * 10;
  console.log('식 구현', percent);

  return (
    <>
      <CountCardContainer>
        <PeopleCardTitle>친밀도</PeopleCardTitle>
        <Box sx={{ textAlign: 'center' }}>
          <Box sx={{ position: 'relative', display: 'inline-flex' }}>
            <BackProgress variant="determinate" size={140} value={100} />
            <CountReviewCircularProgress
              variant="determinate"
              size={140}
              value={percent}
            />
            <CountTextCover>
              <CountText>
                {`${Math.round(watched_movie)}`}
                <p>/ {total_movie}</p>
              </CountText>
            </CountTextCover>
          </Box>
          <CountIntro>
            {nickname}님은 마동석님이 출연한 <strong>{watched_movie}</strong>
            개의 영화를 시청했습니다.
          </CountIntro>
        </Box>
      </CountCardContainer>
    </>
  );
}

export default CountReview;

const CountCardContainer = styled(CardContainer)`
  display: block;
  width: 470px;
`;

const PeopleCardTitle = styled.h3`
  margin: 0 0 6px 0;
`;

const CountReviewCircularProgress = styled(CircularProgress)`
  &.MuiCircularProgress-colorPrimary {
    color: orange;
  }
`;

const BackProgress = styled(CircularProgress)`
  position: absolute;
  opacity: 0.2;
  &.MuiCircularProgress-colorPrimary {
    color: darkgray;
  }
`;

const CountTextCover = styled.div`
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: end;
`;

const CountText = styled(Typography)`
  display: flex;
  align-items: baseline;
  color: orange;
  width: 100px;
  font-size: 26px;
  font-weight: bold;

  p {
    margin: 0 0 0 6px;
    font-size: 14px;
    color: darkgray;
  }
`;

const CountIntro = styled(Typography)`
  margin-top: 14px;
  font-weight: bold;
  font-size: 18px;
  letter-spacing: 0.4px;
  strong {
    font-size: 20px;
    color: orange;
  }
`;
