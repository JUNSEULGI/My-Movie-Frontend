import React from 'react';
import styled from '@emotion/styled';
import { Typography, Box } from '@mui/material';

function Character({ data }) {
  const { id, name, url, sort } = data;

  return (
    <FlexBox sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <PortraitWrapper>
        <Portrait src={url} />
      </PortraitWrapper>
      <Box style={{ flex: 2 }}>
        <TitleBox>
          <Title variant="h3">{name}</Title>
          <SubTitle variant="body">{sort}</SubTitle>
        </TitleBox>
      </Box>
    </FlexBox>
  );
}

const FlexBox = styled(Box)`
  display: flex;
  gap: 20px;
  padding-bottom: 40px;
`;

const PortraitWrapper = styled.div`
  flex: 1;
  aspect-ratio: 1/1;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 5px 7px 20px -4px rgba(0, 0, 0, 0.6);
  cursor: pointer;
`;

const Portrait = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const TitleBox = styled(Box)`
  display: flex;
  align-items: center;
`;

const SubTitle = styled(Typography)`
  margin-left: 10px;
  font-weight: bold;
  color: gray;
`;

const Title = styled(Typography)`
  font-weight: bold;
  color: ${({ theme }) => theme.palette.common.white};
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export default Character;
