import React, { useEffect, useState } from 'react';
import MyViewLayout from '../../layout/Layout';
import styled from '@emotion/styled';
import { ReviewIcon, FabContainer } from '../Movie/MyIconButton';
import { CardContainer, ActorImg } from '../Movie';
import { useRecoilState } from 'recoil';
import { userState } from '../../state';
import LongMenu from './Setting';
import {
  IconButton,
  MenuItem,
  Menu,
  Tooltip,
  Typography,
  Avatar,
  Box,
} from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';

function Profile() {
  const [userInfo, setUserInfo] = useRecoilState(userState);

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

const SettingContainer = styled(FabContainer)`
  top: 10px;
  right: 10px;
`;
const MySetting = styled(ReviewIcon)``;
