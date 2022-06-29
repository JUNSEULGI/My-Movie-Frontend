import React from 'react';
import styled from '@emotion/styled';
import Nav from '../components/Nav/Nav';

const MyViewLayout = ({ leftMenu, movie, background, center, rightMenu }) => {
  return (
    <>
      <Nav />
      <Main>
        <MovieScene movie img={background} />
        <LeftMenu leftMenu={leftMenu}>{leftMenu}</LeftMenu>
        <Center>{center}</Center>
        <Right>
          <RightMenu>{rightMenu}</RightMenu>
        </Right>
      </Main>
    </>
  );
};

const Layout = styled.div`
  /* background-color: gray; */
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
  /* background-color: #080d18; */
`;

const MovieScene = styled.div`
  display: ${({ movie }) => (movie ? '' : 'none')};
  position: absolute;
  z-index: 0;
  width: 100%;
  height: 300px;
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

export default MyViewLayout;
