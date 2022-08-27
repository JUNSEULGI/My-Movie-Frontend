import React from 'react';
import styled from '@emotion/styled';
import Nav from '../components/Nav/Nav';
import { Typography } from '@mui/material';

console.log(window.location.pathname);
const MyViewLayout = ({
  leftMenu,
  movie,
  loginBack,
  background,
  center,
  rightMenu,
}) => {
  // const { image_url, title, description } = loginBack;
  return (
    <>
      <Layout img={loginBack?.image_url}>
        <Nav />
        <Main>
          <MovieScene movie img={background} />
          <LeftMenu leftMenu={leftMenu}>{leftMenu}</LeftMenu>
          <Center>{center}</Center>
          <Right>
            <RightMenu>{rightMenu}</RightMenu>
          </Right>
        </Main>
        {window.location.pathname == '/' && (
          <BackInfo>
            <Summary variant="body2">
              {loginBack?.description?.substr(0, 30)}
            </Summary>
            <BackTitle variant="subtitle2">- {loginBack?.title} -</BackTitle>
          </BackInfo>
        )}
      </Layout>
    </>
  );
};

const Layout = styled.div`
  overflow: scroll;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }
  &:before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    opacity: 0.4;
    display: ${({ img }) => (img ? '' : 'none')};
    background: ${({ img }) => `url(${img})  center center / cover no-repeat`};
  }
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
  /* background-color: antiquewhite; */
  overflow: scroll;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const MovieScene = styled.div`
  display: ${({ movie }) => (movie ? '' : 'none')};
  position: absolute;
  z-index: 0;
  width: 100%;
  height: 320px;
  background: ${({ img }) => `url(${img}) no-repeat`};
  background-size: cover;
  background-position: left -50px;
  /* @media screen and (min-width: 1440px) {
    width: 992px;
  } */
`;

const LeftMenu = styled.aside`
  display: ${({ leftMenu }) => (leftMenu ? 'flex' : 'none')};
  position: fixed;
  top: 64px;
  left: 0;
  width: 64px;
  height: calc(100% - 46px);
  justify-content: center;
  padding: 32px 0;
  overflow: scroll;
  box-shadow: -1px 0px 0px 0px #898d903d inset;
  /* background-color: black; */
`;

const Center = styled.main`
  z-index: 1;
  flex-grow: 1;
  max-width: 1152px;

  margin: 60px 60px 0;

  @media screen and (max-width: 1300px) {
    width: 640px;
  }

  @media screen and (max-width: 1200px) {
    width: 540px;
  }
  @media screen and (max-width: 1200px) {
    width: 540px;
  }
  @media screen and (max-width: 1199px) {
    width: 878px;
  }

  @media screen and (max-width: 1140px) {
    width: 680px;
  }
  @media screen and (max-width: 1000px) {
    width: 580px;
  }
  @media screen and (max-width: 900px) {
    width: 500px;
  }
  @media screen and (max-width: 770px) {
    width: 400px;
  }
  @media screen and (max-width: 600px) {
    width: 360px;
    padding: 0 16px;
    /* overflow-x: hidden; */
    scroll-behavior: smooth;
  }
`;

const Right = styled.aside`
  flex-shrink: 0;
  /* width: 230px; */
  /* margin: 32px 30px 0 0; */
`;

const RightMenu = styled.aside`
  position: fixed;
  top: 78px;
  width: 230px;
  right: 18px;
  border-radius: 10px;
`;

const BackInfo = styled(Typography)`
  position: absolute;
  right: 64px;
  bottom: 40px;
  display: inline-block;

  @media screen and (max-width: 600px) {
    right: 34px;
    bottom: 40px;
  }
`;

const BackTitle = styled(Typography)`
  text-align: end;
`;

const Summary = styled(Typography)`
  ::after {
    content: '...';
  }
`;

export default MyViewLayout;
