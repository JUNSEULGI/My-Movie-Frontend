import React from 'react';
import styled from '@emotion/styled';
import { Box } from '@mui/material';

function PeopleProfile({ profile }) {
  const {
    country,
    height,
    weight,
    birth,
    body,
    debut,
    debut_year,
    agency,
    role,
  } = profile;

  return (
    <Box
      sx={{
        display: 'block',
      }}
    >
      <Profile>
        <Title>국적</Title>
        <p>{country}</p>
      </Profile>
      <Profile>
        <Title>출생</Title>
        <p>{birth}</p>
      </Profile>
      <Profile>
        {debut_year == 0 ? (
          ''
        ) : (
          <>
            <Title>데뷔</Title>
            <p>
              {debut_year} {debut}
            </p>
          </>
        )}
      </Profile>
      <Profile>
        <Title>소속사</Title>
        <p>{agency}</p>
      </Profile>
      <Profile>
        {/* {height},{weight} */}
        {height === '' && weight === '' ? (
          ''
        ) : (
          <>
            <Title>신체</Title>
            <p>
              {height}
              {weight}
            </p>
          </>
        )}
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
