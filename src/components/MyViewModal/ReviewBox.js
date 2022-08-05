import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { movieState, userState } from '../../state';
import styled from '@emotion/styled';
import { Box, Typography, TextField, Rating } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import Poster from '../Poster/Poster';
import { AgeBadge } from '../../pages/Movie';
import { BASE_URL } from '../../Modules/API';
import { useDelete, useSave } from '../../util/hooks';

function ReviewBox() {
  const token = localStorage.getItem('access_token');
  const [movie, setMovie] = useRecoilState(movieState);
  const [userInfo] = useRecoilState(userState);
  const [review, setReview] = useState({
    review_id: '',
    title: '한줄평',
    content: '',
    watched_date: new Date(),
    place: { name: '', mapx: 0, mapy: 0, link: 'url' },
    with_user: '',
    rating: 0,
  });
  const { pathname } = useLocation();

  // 리뷰 관련 input의 값이 바뀌면 review에 반영
  const handleReview = e => {
    setReview(prev => {
      return { ...prev, content: e.target.value };
    });
  };

  useEffect(() => {
    if (!movie.id) return;
    // 컴포넌트 최초 렌더링 시 리뷰를 작성할 영화에 대한 정보를 받아오는데, movie 상세 페이지일 땐 필요 없음
    if (!pathname.includes('movie')) {
      fetch(`${BASE_URL}movies/detail/${movie.id}`)
        .then(res => res.json())
        .then(data => {
          setMovie(prev => {
            return { ...prev, ...data.movie_info };
          });
        });
    }
    // 이미 작성한 리뷰의 내용 가져오기
    fetch(`${BASE_URL}reviews/movie/${movie.id}`, {
      headers: {
        Authorization: token,
      },
    })
      .then(res => res.json())
      .then(data => {
        if (data.message === 'REVIEW_DOSE_NOT_EXISTS') return;
        // 리뷰 있으면 review에 저장하기
        const { result } = data;
        setReview({
          ...review,
          review_id: result.review_id,
          title: result.title,
          content: result.content,
          watched_date: new Date(result.watched_date),
          place: { ...result.place },
          with_user: result.with_user,
          rating: Number(result.rating),
        });
        // MyViewModal에서 delete 버튼이 적절하게 나타나기 위함
        setMovie(prev => {
          return { ...prev, review_id: result.review_id };
        });
      });
  }, []);

  // 저장하기 버튼을 누르면 이때까지 반영된 리뷰 정보를 폼데이터로 담아 전송
  useSave(review);
  useDelete(review.review_id);

  return (
    <Column>
      <Poster url={movie.thumbnail_image_url} />
      <ReviewContainer>
        <RowBox>
          <Box>
            <MovieTitle variant="h3">{movie.title}</MovieTitle>
            <Box>
              <BoldText variant="subtitle2">
                {movie.en_title} <br />
                2022 · {movie.country} ·{' '}
                {movie.genre?.map((genreItems, index) => (
                  // chip으로 수정
                  <span key={index} style={{ marginRight: '10px' }}>
                    {genreItems}
                  </span>
                ))}
                / {movie.running_time}분
              </BoldText>
              <AgeBadge age={movie.age} />
            </Box>
          </Box>
          <Rating
            value={review.rating}
            onChange={(e, newValue) => {
              setReview({ ...review, rating: newValue });
            }}
            precision={0.5}
            size="large"
          />
        </RowBox>
        <RowLabel variant="h4">{userInfo?.nickname}님의 솔직후기</RowLabel>
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
