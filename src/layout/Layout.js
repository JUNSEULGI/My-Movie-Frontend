import React from 'react';
import styled from '@emotion/styled';
import Nav from '../components/Nav/Nav';

const MyViewLayout = ({ leftMenu, movie, center, rightMenu }) => {
  return (
    <Layout>
      <Nav />
      <Main>
        <MovieScene movie={movie} />
        <LeftMenu leftMenu={leftMenu}>{leftMenu}</LeftMenu>
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

const Main = styled.div`
  display: flex;
  /* padding-top: 90px; */
  justify-content: center;
  background-color: #080d18;
`;
const MovieScene = styled.div`
  display: ${({ movie }) => (movie ? '' : 'none')};
  position: absolute;
  z-index: 0;
  width: 100%;
  height: 300px;
  background-color: black;
  background-image: url('https://m.media-amazon.com/images/M/MV5BOTIxN2FiNzYtZDk4YS00MGI3LTk1MDctNDg1OGJhYzdjOTU4XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1280_.jpg');
  background-repeat: no-repeat;
  background-size: cover;
`;

// const Left = styled.aside`
//   flex-shrink: 0;
//   width: 280px;
//   background-color: yellow;
// `;

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
  background-color: black;
`;

const Center = styled.main`
  z-index: 1;
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
