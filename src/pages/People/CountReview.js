import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { Typography, Box, CircularProgress } from '@mui/material';
import { CardContainer } from '../Movie';
import { ReviewIcon } from '../Movie/MyIconButton';
import CloseIcon from '@mui/icons-material/Close';

function CountReview({ userInfo, intimacyData }) {
  const [countReview, setCountReview] = useState(0);
  const [close, setClose] = useState(true);
  const { nickname, email, Profile_image } = userInfo;
  const access_token = localStorage.getItem('access_token');

  // const { total_count, viewed_count } = intimacyData;
  console.log(intimacyData);
  const percent =
    (10 / (intimacyData?.total_count / intimacyData?.viewed_count)) * 10;

  useEffect(() => {
    setCountReview(percent);
  }, []);

  if (!access_token) return null;
  return (
    <>
      {close ? (
        <CountCardContainer>
          <PeopleCardTitle variant="h3">친밀도</PeopleCardTitle>
          <Box sx={{ textAlign: 'center' }}>
            <Box sx={{ position: 'relative', display: 'inline-flex' }}>
              <BackProgress variant="determinate" size={140} value={100} />
              <CountReviewCircularProgress
                variant="determinate"
                size={140}
                value={countReview}
              />
              <CountTextCover>
                <CountText>
                  {`${Math.round(intimacyData?.viewed_count)}`}
                  <p>/ {intimacyData?.total_count}</p>
                </CountText>
              </CountTextCover>
            </Box>
            <CountIntro variant="h3">
              {nickname}님은 마동석님이 출연한{' '}
              <strong>{intimacyData?.viewed_count}</strong>
              개의 영화를 시청했습니다.
            </CountIntro>
          </Box>

          <CloseButton onClick={() => setClose(false)}>
            <CloseIcon />
          </CloseButton>
        </CountCardContainer>
      ) : (
        ''
      )}
    </>
  );
}

export default CountReview;

const CountCardContainer = styled(CardContainer)`
  position: relative;
  display: block;
  width: 470px;
`;

const PeopleCardTitle = styled(Typography)`
  margin: 0 0 6px 0;
`;

const CountReviewCircularProgress = styled(CircularProgress)`
  &.MuiCircularProgress-colorPrimary {
    color: orange;
  }
  stroke-linecap: round;
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
  position: absolute;
  top: 50%;
  left: 48%;
  margin: -20px 0 0 -20px;
  display: flex;
  align-items: baseline;
  color: orange;
  width: 100px;
  font-size: 1.625rem;
  font-weight: bold;

  p {
    margin: 0 0 0 6px;
    font-size: 0.875rem;
    color: darkgray;
  }
`;

const CountIntro = styled(Typography)`
  margin-top: 14px;
  letter-spacing: 0.4px;
  strong {
    font-size: 20px;
    color: orange;
  }
`;

const CloseButton = styled(ReviewIcon)`
  position: absolute;
  top: 10px;
  right: 10px;
`;
