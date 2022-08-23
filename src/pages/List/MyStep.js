import React from 'react';
import { Typography, Breadcrumbs } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { stepState } from '../../state';
import { useRecoilState } from 'recoil';

function MyStep() {
  const [step, setStep] = useRecoilState(stepState);
  const breadcrumbs = [
    <Typography
      key="1"
      color="inherit"
      // onClick={handleClick}
    >
      영화 검색
    </Typography>,
    <Typography key="2" color="text.secondary">
      리뷰 저장
    </Typography>,
  ];

  return (
    <Breadcrumbs
      separator={<NavigateNextIcon fontSize="small" />}
      aria-label="breadcrumb"
    >
      {breadcrumbs}
    </Breadcrumbs>
  );
}

export default MyStep;
