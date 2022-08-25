import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from '@emotion/styled';
import { Typography, Breadcrumbs } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import darkTheme from '../../styles/theme';
import { API } from '../../Modules/API';
import { fetcher } from '../../Modules/fetcher';

function MyStep({ check, id }) {
  const [review, setReview] = useState({});
  const { content } = review;
  const getReview = async () => {
    // setLoading(true);
    try {
      const { data: res } = await fetcher(`${API.reviews_movie}/${id}`);
      if (res.message === 'REVIEW_DOSE_NOT_EXISTS') return;
      setReview(res.result);
      // setLoading(false);
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    getReview();
  }, [id]);

  const breadcrumbs = [
    <Step key="1" color={darkTheme.palette.common.white}>
      영화 검색
    </Step>,
    <SaveStep key="2" check={check}>
      리뷰 {content ? '수정' : '저장'}
    </SaveStep>,
  ];

  return (
    <MyBreadcrumbs
      check={check}
      separator={<Next fontSize="small" />}
      aria-label="breadcrumb"
    >
      {breadcrumbs}
    </MyBreadcrumbs>
  );
}

export default MyStep;

const Step = styled(Typography)`
  font-weight: 600;
`;

const SaveStep = styled(Step)`
  color: ${({ check }) => (check ? 'white' : 'gray')};
`;

const Next = styled(NavigateNextIcon)``;

const MyBreadcrumbs = styled(Breadcrumbs)`
  padding-top: 10px;
  & .MuiBreadcrumbs-separator {
    svg {
      fill: ${({ check }) => (check ? 'white' : 'gray')};
    }
  }
`;
