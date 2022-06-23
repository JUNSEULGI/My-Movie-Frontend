import React from 'react';
import styled from '@emotion/styled';
import { Box } from '@mui/material';

function PeopleProfile() {
  return (
    <Box
      sx={{
        display: 'block',
      }}
    >
      <Profile>
        <Title>국적</Title>
        <p>영국</p>
      </Profile>
      <Profile>
        <Title>출생</Title>
        <p>2022년 10월 23일</p>
      </Profile>
      <Profile>
        <Title>데뷔</Title>
        <p>바람의 전설, 2004년도</p>
      </Profile>
      <Profile>
        <Title>소속사</Title>
        <p>남우주연상</p>
      </Profile>
      <Profile>
        <Title>신체</Title>
        <p>183cm, 74kg</p>
      </Profile>
    </Box>
  );
}

const Profile = styled.div`
  display: flex;
  margin-left: 20px;

  p {
    margin: 0 8px 0 0;
  }
`;

const Title = styled.div`
  width: 50px;
`;

export default PeopleProfile;
