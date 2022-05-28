import React from 'react';
import styled from '@emotion/styled';
import Nav from '../components/Nav/Nav';

const MyViewLayout = ({ leftMenu, center, rightMenu }) => {
  return (
    <Layout>
      <Nav />
      <Main>
        <LeftMenu>{leftMenu}</LeftMenu>
        <Center>{center}</Center>
        <Right>
          <RightMenu>{rightMenu}</RightMenu>
        </Right>
      </Main>
    </Layout>
  );
};

const Layout = styled.div`
  overflow: hidden;
  background-image: url('https://s3-alpha-sig.figma.com/img/0ebc/355c/ff07e8e1ebeefabee3d59dab8779772d?Expires=1653868800&Signature=PUb-QB7dSntXX~wzIIhZIBTagDb2EqbAQChpOzkf3U2pn5djtoMUcBqFtw7TX3EeO0TjVfq2gJz5n3C~L~HpK~Hihv1AAq-AljS5BtdqbScEYKqXab9nlu5kbsikw9Vws-lUcjd2viHel6FCDHDrtl-ubFhoPhnIxVAG9Zjhy4qwwPJWgOgNpgBKuHinhdNEx91GibGRrF5Xf0RL5WLJDtWeafMqoz0WnDKUaS23liRO2vKkx0vOohQMvP7BUHjq4wtF8NqpcJlBGuS-MkuAGeSzYWHSRjX2gCr5Pu13uZmRS~81A4UpVy3Z67yf5FEcwxuEQBVkdQJf8IeNl3jjTg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA');
  background-size: cover;
  background-position-y: 10%;
`;

const Footer = styled.div``;

const Main = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 80px;

  /* background-color: antiquewhite; */
`;

// const Left = styled.aside`
//   flex-shrink: 0;
//   width: 280px;
//   background-color: yellow;
// `;

const LeftMenu = styled.aside`
  position: fixed;
  top: 64px;
  left: 0;
  width: 64px;
  height: calc(100% - 46px);
  display: flex;
  justify-content: center;
  padding: 32px 0;
  overflow: scroll;
  //정수인 수정 0407
  box-shadow: -1px 0px 0px 0px #898d903d inset;
  background-color: black;
`;

const Center = styled.main`
  flex-grow: 1;
  max-width: 1152px;
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
