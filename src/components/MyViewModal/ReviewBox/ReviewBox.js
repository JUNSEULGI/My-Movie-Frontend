import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { Box, Typography, TextField, Rating } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

function ReviewBox({ isSaving, movieDetail }) {
  // const token = localStorage.getItem('token');
  const token =
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTAsImV4cCI6MTY1NTM5NzczOH0.CvG5oNklqcKavT7xMl0pVFEfP9eg5MkM9SyCHroi0NY';
  const [user, setUser] = useState({});
  const [rating, setRating] = useState(0);
  const [data, setData] = useState({
    content: '',
    date: new Date(),
    place: '',
    people: '',
  });

  const handleReview = e => {
    setData(prev => {
      return { ...prev, content: e.target.value };
    });
  };
  useEffect(() => {
    fetch('http://172.30.1.39:8000/users/info', {
      headers: {
        Authorization: token,
      },
    })
      .then(res => res.json())
      .then(data => {
        console.log(data.result);
        setUser(data.result);
      });
  }, []);

  useEffect(() => {
    if (!isSaving) return;

    const saveData = {
      ...data,
      date: timestamp(data.date),
      rating,
      // with_user: data.people,
      tag: [],
      movie_id: movieDetail.id,
    };
    console.log(saveData);
    const formData = new FormData();
    formData.append('data', JSON.stringify(saveData));

    fetch('http://172.30.1.39:8000/reviews', {
      method: 'POST',
      headers: {
        Authorization: token,
      },
      body: formData,
    });
  }, [isSaving]);

  const timestamp = date => {
    const koDate = new Date(date.setHours(date.getHours() + 9));
    console.log(date, koDate);
    return koDate.toISOString().replace('T', ' ').substring(0, 19);
  };

  console.log(movieDetail);

  return (
    <Container>
      <RowBox>
        <Box>
          <MovieTitle variant="h3">{movieDetail.title}</MovieTitle>
          <BoldText variant="subtitle2">
            {movieDetail.en_title} <br />
            2022 · {movieDetail.country} ·{' '}
            {movieDetail.genre?.map((genreItems, index) => (
              <span key={index} style={{ marginRight: '10px' }}>
                {genreItems}
              </span>
            ))}{' '}
            / {movieDetail.running_time}분 · {movieDetail.age}세
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
      <RowLabel variant="h4">{user.nickname}님의 솔직후기</RowLabel>
      <ReviewField
        label="리뷰를 남겨보세요."
        multiline
        minRows={3}
        maxRows={20}
        value={data.content}
        onChange={e => handleReview(e)}
      />
      <RowLabel variant="h4">관람정보</RowLabel>
      <GridBox>
        <Box>
          <WatchInfoLabel variant="subtitle1">when</WatchInfoLabel>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <WatchDate
              label="언제 보셨나요?"
              inputFormat="yyyy.MM.dd HH:mm"
              mask="____.__.__ __:__"
              disableFuture={true}
              renderInput={params => <WhiteTextField {...params} />}
              value={data.date}
              onChange={newValue => {
                console.log(newValue);
                setData(prev => {
                  return { ...prev, date: newValue };
                });
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

const WatchDate = styled(DateTimePicker)``;

const WhiteTextField = styled(TextField)`
  & .MuiOutlinedInput-root {
    color: ${({ theme }) => theme.palette.common.white};
  }
`;

const WatchInfoField = styled(ReviewField)``;

export default ReviewBox;
