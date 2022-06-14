import React from 'react';
import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { Typography, AppBar, Toolbar, Avatar } from '@mui/material';

function Nav() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const updateScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', updateScroll);
  });

  console.log(scrollPosition);
  return (
    <NavBar scrollPosition={scrollPosition}>
      <MyToolbar>
        <a href="/list">
          <Logo scrollPosition={scrollPosition} component="h1">
            My View!
          </Logo>
        </a>
        {localStorage.access_token ? <Avatar /> : <SignUp />}
      </MyToolbar>
    </NavBar>
  );
}

const NavBar = styled(AppBar)`
  padding: 10px 40px;
  /* top: 0; */

  &.MuiPaper-root {
    background: none;

    &.MuiAppBar-root {
      box-shadow: none;
      /* background-color: transparent;
      background-color: black; */
      background-color: ${props =>
        props.scrollPosition < 60 ? 'transparent' : 'black'};
      transition: all 0.3s;
    }
  }
`;
// border-top-right-radius: ${props => (props.border === 'top' ? '14px' : '')};
const MyToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;

  a {
    text-decoration: none;
  }
`;

const Logo = styled(Typography)`
  color: ${props => (props.scrollPosition < 60 ? '#FF6E01' : 'white')};
  transition: all 0.3s;
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
