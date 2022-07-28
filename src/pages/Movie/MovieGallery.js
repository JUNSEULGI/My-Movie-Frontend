import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Masonry } from '@mui/lab';
import { Box, Modal, IconButton, Typography } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function MovieGallery({ movie_image }) {
  const [open, setOpen] = useState(false);
  const [imgindex, setImgindex] = useState(Number(0));

  console.log(movie_image);
  const handleOpen = index => {
    setImgindex(index.target.id);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);
  console.log(movie_image.length);

  const backImg = () => {
    Number(imgindex) === 0
      ? setImgindex(Number(movie_image.length) - 1)
      : setImgindex(Number(imgindex) - 1);
  };

  Number(imgindex) === 0
    ? console.log('뒤에 사진 없어')
    : console.log('사진 있음');

  const forwardImg = () => {
    setImgindex(Number(imgindex) + 1);
    if (imgindex === movie_image.length - 1) {
      setImgindex(0);
    }
  };

  console.log(imgindex);

  return (
    <>
      <Box sx={{ width: '100%', minHeight: 429 }}>
        <Masonry columns={4} spacing={2}>
          {movie_image?.map((item, index) => (
            <div key={index}>
              <MasonryImg
                id={index}
                src={`${item}?w=162&auto=format`}
                srcSet={`${item}?w=162&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
                onClick={handleOpen}
                style={{
                  borderRadius: 8,
                  borderBottomLeftRadius: 8,
                  borderBottomRightRadius: 8,
                  display: 'block',
                  width: '100%',
                  boxShadow: '5px 7px 20px -4px rgba(0, 0, 0, 0.6)',
                }}
              />
            </div>
          ))}
        </Masonry>
      </Box>
      <Box>
        <GalleryModal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          img={movie_image}
          imgindex={imgindex}
        >
          <ImgContainer>
            <GalleryButton sx={{ marginLeft: '-80px' }} onClick={backImg}>
              <ArrowBackIosIcon />
            </GalleryButton>

            <Img
              src={movie_image[imgindex]}
              img={movie_image}
              imgindex={imgindex}
            />

            <GalleryButton sx={{ marginLeft: '50px' }} onClick={forwardImg}>
              <ArrowForwardIosIcon />
            </GalleryButton>
            <Box sx={{ textAlign: 'center', marginTop: '10px' }}>
              <NowImg>{Number(imgindex) + 1}</NowImg>
              <TotalImg> /{movie_image.length}</TotalImg>
            </Box>
          </ImgContainer>
        </GalleryModal>
      </Box>
    </>
  );
}
export default MovieGallery;

const ImgContainer = styled(Box)`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 800px;
  box-shadow: 24px;
  padding: 40px;
  outline: none;
`;

const MasonryImg = styled.img`
  cursor: pointer;
  transition: all ease 0.5s;
  :hover {
    transform: scale(1.04, 1.04);
  }
`;

const Img = styled.img`
  border-radius: 16px;
  width: 100%;
`;

const GalleryButton = styled(IconButton)`
  position: absolute;
  top: 50%;
`;

const GalleryModal = styled(Modal)``;

const NowImg = styled(Typography)`
  display: inline;
  color: white;
  font-weight: bold;
`;
const TotalImg = styled(NowImg)``;
