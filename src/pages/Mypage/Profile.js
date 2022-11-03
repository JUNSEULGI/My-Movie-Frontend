import React from 'react';
import styled from '@emotion/styled';
import { CardContainer } from '../Movie';
import { useRecoilValue } from 'recoil';
import { userState } from '../../state';
import LongMenu from './Setting';
import { Typography, Avatar } from '@mui/material';

function Profile() {
  const userInfo = useRecoilValue(userState);

  return (
    <MypageCardContainer>
      <LongMenu />
      <Avatar
        src={userInfo.Profile_image}
        alt={userInfo.nickname}
        sx={{ width: 300, height: 300 }}
      />
      <UserName component="h2">
        영화를 사랑하는 <strong>{userInfo.nickname}</strong>님
      </UserName>
    </MypageCardContainer>
  );
}

export default Profile;

const MypageCardContainer = styled(CardContainer)`
  display: flex;
  position: relative;
  flex-direction: column;

  margin-top: 40px;
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

const UserName = styled(Typography)`
  text-align: end;
  margin: 20px 0;
  font-size: 24px;
  strong {
    font-weight: bold;
  }
`;
