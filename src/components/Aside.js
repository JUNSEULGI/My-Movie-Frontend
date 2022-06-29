import React from 'react';
import styled from '@emotion/styled';
import { OTTLogo } from './PlatformAvatar';
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

const AsideContainer = styled.div``;

export default Aside;
