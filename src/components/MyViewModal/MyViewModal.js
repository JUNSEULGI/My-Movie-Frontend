import React from 'react';
import styled from '@emotion/styled';
import { useRecoilState, useRecoilValue } from 'recoil';
import { buttonState, movieState } from '../../state';
import { Box, Button, Modal, IconButton } from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

function MyViewModal({ open, closeModal, breadcrumbs, content, review }) {
  const movie = useRecoilValue(movieState);
  const [button, setButton] = useRecoilState(buttonState);

  return (
    <MyModal
      open={open}
      onClose={closeModal}
      disableScrollLock={true}
      disableEscapeKeyDown={true}
    >
      <Container>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '10px',
          }}
        >
          <Step breadcrumbs={breadcrumbs}>{breadcrumbs}</Step>
          <IconButton onClick={closeModal}>
            <HighlightOffIcon />
          </IconButton>
        </Box>
        {content}
        <Buttons>
          {movie?.review_id && (
            <ModalButton
              variant="outlined"
              onClick={() => setButton({ ...button, isDeleting: true })}
            >
              삭제
            </ModalButton>
          )}
          {movie.id && (
            <SaveButton
              variant="contained"
              onClick={() => setButton({ ...button, isSaving: true })}
            >
              저장
            </SaveButton>
          )}
        </Buttons>
      </Container>
    </MyModal>
  );
}

const MyModal = styled(Modal)`
  width: 100%;
  margin: 100px auto;
  // 위아래 코드 모두 margin-bottom 먹지 않음.
  // margin-bottom: 300px;
  /* @media screen and (max-width: 600px) {
    overflow-y: hidden;
    overflow-y: scroll;
    scroll-behavior: smooth;
    ::-webkit-scrollbar {
      display: none;
    }
  } */
`;

const Container = styled(Box)`
  position: absolute;
  // breadcrumbs나 버튼을 위해 relative로 했었음.
  // position: relative;
  // 세로 중앙 정렬 위해 top 했으나 바닥에서 띄우는 거 먼저 해결해야 함.
  // top: 50%;
  outline: none;
  left: 50%;
  transform: translate(-50%, 0);
  width: 987px;
  min-height: 540px;
  padding: 20px 30px;
  background-color: ${({ theme }) => theme.palette.background.modal};
  border-radius: 8px;

  /* @media screen and (max-width: 600px) {
    position: relative;
    width: 320px;
    padding: 20px 20px;
  } */
`;

const Step = styled(Box)`
  ${({ breadcrumbs }) => !breadcrumbs && 'display:none;'}
`;

const Buttons = styled(Box)`
  display: flex;
  justify-content: flex-end;
  margin: 20px 0 10px;

  & .MuiButtonGroup-grouped:not(:last-of-type) {
    border-right: 0px;
  }

  /* @media screen and (max-width: 600px) {
    display: flex;
    justify-content: end;
    position: relative;
    margin-top: 20px;
    right: 0;
    margin-right: 10px;
  } */
`;

const ModalButton = styled(Button)`
  text-transform: none;
  font-weight: 600;
  color: #fc6c2e;
  padding: 5px 22px;
`;

const SaveButton = styled(ModalButton)`
  margin-left: 10px;
  background-color: white;
  font-weight: bold;

  :hover {
    color: white;
  }
`;

// Poster 컴포넌트 사용하지 않았을 때
// const Poster = styled.div`
//   width: 242px;
//   height: 346px;
//   background-color: ${({ theme }) => theme.palette.background.disabled};
//   border-radius: 8px;
// `;

export default MyViewModal;
