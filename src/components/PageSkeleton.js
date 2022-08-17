import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { Logo } from './Logo';

function PageSkeleton() {
  return <LoadLogo>My View!</LoadLogo>;
}

export default PageSkeleton;

const bounce = keyframes`
  from, 20%, 53%, 80%, to {
    transform: translate3d(0,0,0);
  }

  40%, 43% {
    transform: translate3d(0, -30px, 0);
  }

  70% {
    transform: translate3d(0, -15px, 0);
  }

  90% {

    transform: translate3d(0,-4px,0);
  }
`;

const LoadLogo = styled(Logo)`
  font-size: 5rem;
  position: absolute;
  top: 40%;
  left: 40%;
  animation: ${bounce} 1s ease infinite;
`;
