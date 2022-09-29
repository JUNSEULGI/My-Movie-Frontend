import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import {
  Typography,
  Box,
  CircularProgress,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  createTheme,
} from '@mui/material';
import { ReviewIcon } from '../Movie/MyIconButton';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function CountReview({ userInfo, starring_list, actor, watched_count }) {
  const [countReview, setCountReview] = useState(0);
  const [close, setClose] = useState(true);
  const { nickname } = userInfo;
  const access_token = localStorage.getItem('access_token');

  const total_count = starring_list?.length;

  const percent = (10 / (total_count / watched_count)) * 10;

  useEffect(() => {
    setCountReview(percent);
  }, []);

  if (!access_token) return null;

  return (
    <>
      <MAccordion disableGutters elevation={0}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ margin: '0px' }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <PeopleCardTitle variant="h3">친밀도</PeopleCardTitle>
        </AccordionSummary>

        <AccordionDetails>
          <Box sx={{ textAlign: 'center' }}>
            <Box sx={{ position: 'relative', display: 'inline-flex' }}>
              <BackProgress variant="determinate" size={140} value={100} />
              <CountReviewCircularProgress
                variant="determinate"
                size={140}
                value={countReview}
              />
              <CountTextCover>
                <div>
                  {/* 여기 스타일 수정~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
                  <CountText>{`${Math.round(watched_count)}`}</CountText>
                  <p>/ {total_count}</p>
                </div>
              </CountTextCover>
            </Box>
            <CountIntro>
              {nickname}님은 {actor}님이 출연한 <strong>{watched_count}</strong>
              개의 영화를 시청했습니다.
            </CountIntro>
          </Box>
        </AccordionDetails>
      </MAccordion>
    </>
  );
}

export default CountReview;

const MyAccordion = styled(Accordion)(({ theme }) => ({
  '&:before': { display: 'none' },
  display: 'block',
  position: 'relative',
  padding: '20px',
  margin: '40px 0 22px 0',
  width: '470px',
  boxShadow: '5px 7px 20px -4px rgba(0, 0, 0, 0.6)',
  borderRadius: '8px',
  background: `${theme.palette.test.card}`,
  '.MuiPaper-root-MuiAccordion-root.Mui-expanded': {
    margin: '0',
  },
  '.MuiPaper-root': {
    margin: '0',
    '.MuiAccordion-root': {
      margin: '0',
      '.Mui-expanded': {
        margin: '0',
      },
    },
  },
  '.MuiButtonBase-root.MuiAccordionSummary-root.Mui-expanded': {
    minHeight: '24px',
  },
  '.MuiAccordionSummary-root': {
    color: 'white',
    padding: '0',
    minHeight: '24px',
    '.MuiTypography-root': {
      margin: '0',
      minHeight: '24px',
    },
    '.Mui-expanded': {
      minHeight: '24px',
      margin: '0',
    },
    '.MuiAccordionSummary-content': {
      margin: '0',
    },
  },
  '.MuiAccordionDetails-root': {
    color: 'white',
  },
}));

const MAccordion = styled(MyAccordion)`
  @media screen and (max-width: 600px) {
    width: 100%;
  }
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
