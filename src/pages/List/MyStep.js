import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { Typography, Breadcrumbs } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import darkTheme from '../../styles/theme';
import { API } from '../../Modules/API';
import { fetcher } from '../../Modules/fetcher';

function MyStep({ ischecked, id }) {
  const [review, setReview] = useState({});
  const { content } = review;

  useEffect(() => {
    if (!id) return;
    fetcher(`${API.review_movie}/${id}`).then(({ data: res }) => {
      if (res.message === 'REVIEW_DOSE_NOT_EXISTS') return;
      setReview(res.result);
    });
  }, [id]);

  const breadcrumbs = [
    <Step key="1" color={darkTheme.palette.common.white}>
      영화 검색
    </Step>,
    <SaveStep key="2" ischecked={ischecked}>
      리뷰 {content ? '수정' : '저장'}
    </SaveStep>,
  ];

  return (
    <MyBreadcrumbs
      ischecked={ischecked}
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
  color: ${({ ischecked }) => (ischecked ? 'white' : 'gray')};
`;

const Next = styled(NavigateNextIcon)``;

const MyBreadcrumbs = styled(Breadcrumbs)`
  padding-top: 10px;
  & .MuiBreadcrumbs-separator {
    svg {
      fill: ${({ ischecked }) => (ischecked ? 'white' : 'gray')};
    }
  }
`;
