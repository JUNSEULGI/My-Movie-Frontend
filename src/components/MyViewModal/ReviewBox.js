import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { tokenState, movieState, reviewState, savingState } from '../../state';
import styled from '@emotion/styled';
import { Box, Typography, TextField, Rating } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import Poster from '../Poster/Poster';
import { timestamp } from '../../util/timestamp';

function ReviewBox() {
  const [token, setToken] = useRecoilState(tokenState);
  const [movie, setMovie] = useRecoilState(movieState);
  const [saving, setSaving] = useRecoilState(savingState);
  const [review, setReview] = useRecoilState(reviewState);

  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [rating, setRating] = useState(0);

  // 리뷰 관련 input의 값이 바뀌면 "review" 리코일에 반영
  const handleReview = e => {
    setReview(prev => {
      return { ...prev, content: e.target.value };
    });
  };

  // 컴포넌트 최초 렌더링 시 리뷰를 작성할 영화에 대한 정보를 받아옴
  useEffect(() => {
    if (movie.title) {
      fetch(`http://172.30.1.25:8000/movies/detail/${movie.id}`)
        .then(res => res.json())
        .then(data => {
          console.log(data);
          setMovie({ ...movie, ...data.movie_info });
        });
    }
  }, []);

  // 사용자 이름을 알아내기 위해 유저 정보 요청(로그인 시 리코일로 저장하는 것으로 수정 필요)
  useEffect(() => {
    fetch('http://172.30.1.26:8000/users/info', {
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

  // 저장하기 버튼을 누르면 이때까지 반영된 리뷰 정보를 폼데이터로 담아 전송
  useEffect(() => {
    if (!saving) return;

    const saveData = {
      ...review,
      watched_date: timestamp(review.watched_date),
      rating,
      movie_id: movie.id,
      // tag: [],
    };
    console.log(saveData);

    const formData = new FormData();
    formData.append('data', JSON.stringify(saveData));
    // console.log(formData);

    fetch(`http://172.30.1.26:8000/reviews`, {
      method: 'POST',
      headers: {
        Authorization: token,
      },
      body: formData,
    })
      .then(res => res.json())
      .then(result => {
        if (result.message === 'SUCCESS') {
          setSaving(false);
          navigate('/');
        }
      });
  }, [saving]);

  console.log(saving, review);

  return (
    <Column>
      <Poster url={movie.thumbnail_image_url} />
      <ReviewContainer>
        <RowBox>
          <Box>
            <MovieTitle variant="h3">{movie.title}</MovieTitle>
            <BoldText variant="subtitle2">
              {movie.en_title} <br />
              2022 · {movie.country} ·{' '}
              {movie.genre?.map((genreItems, index) => (
                <span key={index} style={{ marginRight: '10px' }}>
                  {genreItems}
                </span>
              ))}{' '}
              / {movie.running_time}분 · {movie.age}세
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
        <RowLabel variant="h4">{user?.nickname}님의 솔직후기</RowLabel>
        <ReviewField
          label="리뷰를 남겨보세요."
          multiline
          minRows={3}
          maxRows={20}
          value={review.content}
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
                value={review.watched_date}
                onChange={newValue => {
                  console.log(newValue);
                  setReview(prev => {
                    return { ...prev, watched_date: newValue };
                  });
                }}
              />
            </LocalizationProvider>
          </Box>
          <Box>
            <WatchInfoLabel variant="subtitle1">where</WatchInfoLabel>
            <WatchInfoField
              label="어디서 보셨나요?"
              value={review.place.name}
              onChange={e => {
                setReview(prev => {
                  return {
                    ...prev,
                    place: { ...review.place, name: e.target.value },
                  };
                });
              }}
            />
          </Box>
          <Box>
            <WatchInfoLabel variant="subtitle1">with</WatchInfoLabel>
            <WatchInfoField
              label="누구랑 보셨나요?"
              value={review.with_user}
              onChange={e => {
                setReview(prev => {
                  return { ...prev, with_user: e.target.value };
                });
              }}
            />
          </Box>
        </GridBox>
      </ReviewContainer>
    </Column>
  );
}

const Column = styled(Box)`
  display: grid;
  grid-template-columns: 273px 1fr;
  // 컨테이너가 늘어나면서 높이를 100%로 고정할 수 없게 됨.
  // height: 100%;
`;

const ReviewContainer = styled(Box)`
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
