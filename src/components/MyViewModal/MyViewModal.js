import React from 'react';
import styled from '@emotion/styled';
import { Box, Button, ButtonGroup, Modal } from '@mui/material';
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
    <MyModal open={open} onClose={closeModal} disableScrollLock={true}>
      <Container>
        <Step breadcrumbs={breadcrumbs}>{breadcrumbs}</Step>
        <Buttons variant="text">
          {selected.title && <ModalButton>Save</ModalButton>}
          <ModalButton onClick={closeModal}>Close</ModalButton>
        </Buttons>
        <Content>
          <Poster url="https://file2.nocutnews.co.kr/newsroom/image/2022/04/08/202204081311322351_0.jpg" />
          {selected.title ? (
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
  position: absolute;

  left: 10%;
  // display: flex;
  // justify-content: center;
  width: 100%;
  margin: 100px auto;
  margin-bottom: 300px;
`;

const Container = styled(Box)`
  position: relative;
  // top: 50%;
  // left: 50%;
  // transform: translate(-50%, -50%);
  width: 987px;
  // height: 530px;
  padding: 70px 60px;
  margin-bottom: 100px;
  background-color: ${({ theme }) => theme.palette.background.card};
  border-radius: 8px;
`;

const Content = styled(Box)`
  display: grid;
  grid-template-columns: 273px 1fr;
  // height: 100%;
`;

const Step = styled(Box)`
  ${({ breadcrumbs }) => !breadcrumbs && 'display:none;'}
  position: absolute;
  top: 35px;
  left: 60px;
`;

const Buttons = styled(ButtonGroup)`
  position: absolute;
  top: 30px;
  right: 60px;
  & .MuiButtonGroup-grouped:not(:last-of-type) {
    border-right: 0px;
  }
`;

const ModalButton = styled(Button)`
  text-transform: none;
  color: #fc6c2e;
`;

// const Poster = styled.div`
//   width: 242px;
//   height: 346px;
//   background-color: ${({ theme }) => theme.palette.background.disabled};
//   border-radius: 8px;
// `;

export default MyViewModal;
