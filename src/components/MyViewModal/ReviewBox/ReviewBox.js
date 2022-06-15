import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { Box, Typography, TextField, Rating } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

function ReviewBox({ isSaving }) {
  const [rating, setRating] = useState(0);
  const [data, setData] = useState({
    review: '',
    date: new Date().toISOString(),
    place: '',
    people: '',
  });

  useEffect(() => {
    if (!isSaving) return;
    fetch('uri', {
      method: 'POST',
      body: JSON.stringify({ data }),
    });
  }, [isSaving]);

  console.log(data);

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
      <ReviewField
        label="리뷰를 남겨보세요."
        multiline
        minRows={3}
        value={data.review}
        onChange={e => {
          setData(prev => {
            return { ...prev, review: e.target.value };
          });
        }}
      />
      <RowLabel variant="h4">관람정보</RowLabel>
      <GridBox>
        <Box>
          <WatchInfoLabel variant="subtitle1">when</WatchInfoLabel>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <WatchDate
              label="언제 보셨나요?"
              inputFormat="yyyy.MM.dd hh:mm"
              disableFuture={true}
              renderInput={params => <WhiteTextField {...params} />}
              value={data.date}
              onChange={newValue => {
                setData(prev => {
                  return { ...prev, date: newValue.toISOString() };
                });
                console.log(newValue);
              }}
            />
          </LocalizationProvider>
        </Box>
        <Box>
          <WatchInfoLabel variant="subtitle1">where</WatchInfoLabel>
          <WatchInfoField
            label="어디서 보셨나요?"
            value={data.place}
            onChange={e => {
              setData(prev => {
                return { ...prev, place: e.target.value };
              });
            }}
          />
        </Box>
        <Box>
          <WatchInfoLabel variant="subtitle1">with</WatchInfoLabel>
          <WatchInfoField
            label="누구랑 보셨나요?"
            value={data.people}
            onChange={e => {
              setData(prev => {
                return { ...prev, people: e.target.value };
              });
            }}
          />
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
  margin: 15px 0;
  font-size: 20px;
`;

const ReviewField = styled(TextField)`
  width: 100%;

  & .MuiInputBase-input {
    color: ${({ theme }) => theme.palette.common.white};
  }
`;

const GridBox = styled(Box)`
  display: grid;
  grid-template-columns: 3fr 3fr 2fr;
  column-gap: 12px;
`;

const WatchInfoLabel = styled(BoldText)`
  margin-bottom: 15px;
`;

const WatchDate = styled(DateTimePicker)`
  & .MuiInputBase-input-MuiOutlinedInput-input {
    color: ${({ theme }) => theme.palette.common.white};
  }
`;

const WhiteTextField = styled(TextField)`
  color: ${({ theme }) => theme.palette.common.white};

  & .MuiInputBase-input-MuiOutlinedInput-input {
    color: ${({ theme }) => theme.palette.common.white};
  }
`;

const WatchInfoField = styled(ReviewField)``;

export default ReviewBox;
