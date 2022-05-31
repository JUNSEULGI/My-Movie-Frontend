import React from 'react';
import styled from '@emotion/styled';
import { Typography, AppBar, Toolbar, Avatar } from '@mui/material';

function Nav() {
  return (
    <NavBar>
      <MyToolbar>
        <Logo component="h1">My View!</Logo>

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
    }
  }
`;

const MyToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
`;

// const Header = styled.header`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   position: fixed;
//   top: 0;
//   width: 100%;
//   height: 46px;
//   padding: 0 16px;
//   margin-bottom: 300px;
//   background-color: ${({ theme }) => theme.palette.background.paper};
//   border-bottom: 1px solid rgba(137, 141, 144, 0.24);
//   z-index: 50;
// `;

const Logo = styled(Typography)`
  /* color: #fe7d01; */
  color: ${({ theme }) => theme.palette.common.white};
  font-weight: bold;
  font-size: 32px;
`;

const SignUp = styled(Typography)`
  color: ${({ theme }) => theme.palette.common.white};
  font-weight: bold;
  font-size: 32px;
`;

export default Nav;
