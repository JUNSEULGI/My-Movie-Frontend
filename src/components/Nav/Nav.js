import React from 'react';
import styled from '@emotion/styled';
import { Typography, AppBar, Toolbar, Avatar } from '@mui/material';

function Nav() {
  return (
    <NavBar>
      <MyToolbar>
        <a href="/list">
          <Logo component="h1">My View!</Logo>
        </a>
        {localStorage.access_token ? <Avatar /> : <SignUp />}
      </MyToolbar>
    </NavBar>
  );
}

const NavBar = styled(AppBar)`
  padding: 10px 40px;

  &.MuiPaper-root {
    background: none;

    &.MuiAppBar-root {
      box-shadow: none;
      background-color: transparent;
    }
  }
`;

const MyToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;

  a {
    text-decoration: none;
  }
`;

const Logo = styled(Typography)`
  /* color: #fe7d01; */
  color: ${({ theme }) => theme.palette.test.main};
  font-family: 'Galada', cursive;
  font-weight: bold;
  font-size: 32px;
`;

const SignUp = styled(Typography)`
  color: ${({ theme }) => theme.palette.common.white};
  font-weight: bold;
  font-size: 32px;
`;

export default Nav;
