import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Box, Button, ButtonGroup, Modal } from '@mui/material';
import SearchBox from './SearchBox/SearchBox';
import Poster from '../Poster/Poster';
import ReviewBox from './ReviewBox/ReviewBox';

function MyViewModal({
  open,
  closeModal,
  breadcrumbs,
  titles,
  nowRunning,
  setSelected,
  selected,
  movieDetail,
}) {
  const [isSaving, setIsSaving] = useState(false);

  return (
    <MyModal
      open={open}
      onClose={closeModal}
      disableScrollLock={true}
      disableEscapeKeyDown={true}
    >
      <Container>
        <Step breadcrumbs={breadcrumbs}>{breadcrumbs}</Step>
        <Buttons variant="text">
          {selected.title && (
            <ModalButton
              onClick={() => {
                setIsSaving(true);
              }}
            >
              Save
            </ModalButton>
          )}
          <ModalButton onClick={closeModal}>Close</ModalButton>
        </Buttons>
        <Content>
          <Poster url={movieDetail.thumbnail_image_url} />
          {selected.title ? (
            <ReviewBox isSaving={isSaving} movieDetail={movieDetail} />
          ) : (
            <SearchBox
              titles={titles}
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
  // display: flex;
  // justify-content: center;
  width: 100%;
  margin: 100px auto;
  margin-bottom: 300px;
`;

const Container = styled(Box)`
  position: relative;
  // top: 50%;
  left: 50%;
  transform: translate(-50%, 0);
  width: 987px;
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
