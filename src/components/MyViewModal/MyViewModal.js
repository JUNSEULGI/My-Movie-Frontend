import React from 'react';
import styled from '@emotion/styled';
import { Box, Modal } from '@mui/material';
import SearchBox from './SearchBox/SearchBox';
import Poster from '../Poster/Poster';
import ReviewBox from './ReviewBox/ReviewBox';

function MyViewModal({
  open,
  closeModal,
  breadcrumbs,
  movies,
  nowRunning,
  setSelected,
  selected,
}) {
  return (
    <MyModal open={open} onClose={closeModal}>
      <Container>
        <Step breadcrumbs={breadcrumbs}>{breadcrumbs}</Step>
        <Content>
          <Poster
          // url="https://file2.nocutnews.co.kr/newsroom/image/2022/04/08/202204081311322351_0.jpg"
          />
          {selected ? (
            <ReviewBox />
          ) : (
            <SearchBox
              movies={movies}
              nowRunning={nowRunning}
              setSelected={setSelected}
            />
          )}
        </Content>
      </Container>
    </MyModal>
  );
}

const MyModal = styled(Modal)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled(Box)`
  position: relative;
  width: 956px;
  height: 488px;
  padding: 70px 60px;
  background-color: ${({ theme }) => theme.palette.background.card};
`;

const Content = styled(Box)`
  display: grid;
  grid-template-columns: 240px 1fr;
  height: 100%;
`;

const Step = styled(Box)`
  // ${({ breadcrumbs }) => !breadcrumbs && 'display:none;'}
  position: absolute;
  top: 35px;
  left: 60px;
`;

// const Poster = styled.div`
//   width: 242px;
//   height: 346px;
//   background-color: ${({ theme }) => theme.palette.background.disabled};
//   border-radius: 8px;
// `;

export default MyViewModal;
