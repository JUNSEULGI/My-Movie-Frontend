import React from 'react';
import styled from '@emotion/styled';
import { Typography, AppBar, Toolbar, Avatar } from '@mui/material';
import { style } from '@mui/system';
import Netflix from '../assets/images/Netflix_Symbol_RGB.png';

function Aside() {
  return (
    <AsideContainer>
      <OTTLogo alt="" src={Netflix} />
      <OTTLogo alt="" src={Netflix} />
      <OTTLogo alt="" src={Netflix} />
    </AsideContainer>
  );
}

export default Aside;

const OTTLogo = styled(Avatar)`
  padding: 4px;
  margin-bottom: 16px;
  background-color: gray;
`;

const AsideContainer = styled.div``;
