import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { Typography, Container, Button, Box } from '@mui/material';
import MyViewLayout from '../../layout/Layout';

function NotFound() {
  const navigate = useNavigate();
  function NotFoundContainer() {
    return (
      <NotFoundPage>
        <MTypo>
          <Typography variant="h1"> NotFound</Typography>
          <Typography sx={{ fontSize: '10rem' }}> 404</Typography>
          <MTypography variant="h1">
            이 URL은 존재하지 않는 URL입니다.
          </MTypography>
        </MTypo>
        <Button
          sx={{
            marginTop: '20px',
            fontSize: '1.5rem',
            color: 'white',
            fontWeight: 'bold',
          }}
          onClick={() => navigate('/')}
          variant="contained"
        >
          돌아가기
        </Button>
      </NotFoundPage>
    );
  }
  return <MyViewLayout center={<NotFoundContainer />} />;
}

export default NotFound;

const NotFoundPage = styled(Container)`
  /* background-color: antiquewhite; */
  width: 720px;
  margin: 200px auto;
  text-align: center;

  @media screen and (max-width: 600px) {
    width: 320px;
    overflow: hidden;
    /* background-color: antiquewhite; */
    margin-top: 50px;
    padding: 0;
  }
`;

const MTypo = styled(Box)``;

const MTypography = styled(Typography)`
  @media screen and (max-width: 600px) {
    font-size: 16px;
  }
`;
