import React from 'react';
import styled from '@emotion/styled';

function Nav() {
  return (
    <Header>
      <Logo>My View!</Logo>
    </Header>
  );
}

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  height: 46px;
  padding: 0 16px;
  margin-bottom: 300px;
  background-color: ${({ theme }) => theme.palette.background.paper};
  border-bottom: 1px solid rgba(137, 141, 144, 0.24);
  z-index: 50;
`;

const Logo = styled.h1`
  color: ${({ theme }) => theme.palette.common.white};
`;

export default Nav;
