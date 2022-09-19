import React from 'react';
import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';

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
    <ProfileBox
      sx={{
        display: 'block',
      }}
    >
      {country && (
        <Profile>
          <Title>국적</Title>
          <Info>{country}</Info>
        </Profile>
      )}
      {birth && (
        <Profile>
          <Title>출생</Title>
          <Info>{birth}</Info>
        </Profile>
      )}
      {debut_year && (
        <Profile>
          <Title>데뷔</Title>
          <Info>
            {debut_year} {debut}
          </Info>
        </Profile>
      )}
      {agency && (
        <Profile>
          <Title>소속사</Title>
          <Info>{agency}</Info>
        </Profile>
      )}
      {height && (
        <Profile>
          {height === '' && weight === '' ? (
            ''
          ) : (
            <>
              <Title>신체</Title>
              <Info>
                {height}
                {weight}
              </Info>
            </>
          )}
        </Profile>
      )}{' '}
    </ProfileBox>
  );
}

const ProfileBox = styled(Box)`
  @media screen and (max-width: 600px) {
    font-size: 14px;
  }
`;

const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  margin-bottom: 4px;
`;

const Title = styled(Typography)`
  font-size: 1rem;
  font-weight: bold;
  width: 50px;

  @media screen and (max-width: 600px) {
    font-size: 14px;
  }
`;

const Info = styled(Typography)`
  margin: 0 8px 0 0;
  @media screen and (max-width: 600px) {
    font-size: 14px;
  }
`;

export default PeopleProfile;
