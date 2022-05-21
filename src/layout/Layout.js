import React from 'react';
import styled from '@emotion/styled';
import Nav from '../components/Nav/Nav';

const MyViewLayout = ({ leftMenu, center, rightMenu }) => {
  return (
    <Layout>
      <Nav />
      <Main>
        <Left>{leftMenu}</Left>
        <Center>{center}</Center>
        <Right>
          <RightMenu>{rightMenu}</RightMenu>
        </Right>
      </Main>
      <Footer />
    </Layout>
  );
};

const Layout = styled.div`
  overflow: hidden;
  background-color: ${({ theme }) => theme.palette.background.paper};
`;

const Footer = styled.div``;

const Main = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 46px;
  margin: 0 auto;
  /* background-color: antiquewhite; */
`;

const Left = styled.aside`
  flex-shrink: 0;
  /* width: 280px; */
`;

/* 
const LeftMenu = styled.aside`
  ${({ leftMenu }) => leftMenu && 'display: none;'};
  position: fixed;
  top: 46px;
  width: 280px;
  height: calc(100% - 46px);
  overflow: scroll;
  //정수인 수정 0407
  padding: 32px 0 16px 0;
  box-shadow: -1px 0px 0px 0px #898d903d inset;
`; */

const Center = styled.main`
  flex-grow: 1;
  max-width: 815px;
  margin: 32px 60px 0;

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
//   @media screen and (max-width: ${({ theme }) =>
//       theme.breakpoints.values.sm}px) {
//     width: auto;
//     margin: 0 18px;
//   }
// `;

const RightMenu = styled.aside`
  position: fixed;
  top: 78px;
  width: 230px;
  right: 18px;
  border-radius: 10px;
  background-color: transparent;
`;

export default MyViewLayout;
