import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Box, Typography, TextField, Rating } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

function ReviewBox() {
  const [rating, setRating] = useState(5);
  const [date, setDate] = useState();
  return (
    <Container>
      <RowBox>
        <Box>
          <MovieTitle variant="h3">
            닥터 스트레인지: 대혼돈의 멀티버스
          </MovieTitle>
          <BoldText variant="subtitle2">
            Doctor Strange in the Multiverse of Madness
            <br />
            2022 · 미국 · 액션 / 2시간 6분 · 12세
          </BoldText>
        </Box>
        <Rating
          value={rating}
          onChange={(e, newValue) => {
            setRating(newValue);
          }}
          precision={0.5}
          size="large"
        />
      </RowBox>
      <RowLabel variant="h4">수인님의 솔직후기</RowLabel>
      <ReviewField label="리뷰를 남겨보세요." multiline />
      <RowLabel variant="h4">관람정보</RowLabel>
      <GridBox>
        <Box>
          <BoldText variant="subtitle1">when</BoldText>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateTimePicker
              label="언제 보셨나요?"
              renderInput={params => <TextField {...params} />}
              value={date}
              onChange={newValue => {
                setDate(newValue);
              }}
            />
          </LocalizationProvider>
        </Box>
        <Box>
          <BoldText variant="subtitle1">where</BoldText>
          <InfoField label="어디서 보셨나요?" />
        </Box>
        <Box>
          <BoldText variant="subtitle1">with</BoldText>
          <InfoField label="누구랑 보셨나요?" />
        </Box>
      </GridBox>
    </Container>
  );
}

const Container = styled(Box)`
  margin-left: 28px;
`;

const RowBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`;

const BoldText = styled(Typography)`
  color: ${({ theme }) => theme.palette.common.white};
  font-weight: bold;
`;

const MovieTitle = styled(BoldText)`
  margin-bottom: 6px;
  font-size: 24px;
`;

const RowLabel = styled(BoldText)`
  // margin-bottom: 14px;
  font-size: 20px;
`;

const ReviewField = styled(TextField)`
  width: 100%;
  margin: 15px 0;

  & .MuiInputBase-input {
    color: white;
  }
`;

const GridBox = styled(Box)`
  display: grid;
  grid-template-columns: 3fr 2fr 2fr;
`;

const InfoField = styled(ReviewField)`
  margin-bottom: 0;
`;

export default ReviewBox;
