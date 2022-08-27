import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { movieState, userState } from '../../state';
import styled from '@emotion/styled';
import { Box, Typography, TextField, Rating, Paper } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import Poster from '../Poster/Poster';
import { AgeBadge } from '../../pages/Movie';
import LoadWrap from '../Loading/LoadWrap';
import { fetcher } from '../../Modules/fetcher';
import { API } from '../../Modules/API';
import { useDelete, useSave } from '../../util/hooks';

function ReviewBox() {
  const [isMovieLoading, setIsMovieLoading] = useState(true);
  const [isReviewLoading, setIsReviewLoading] = useState(true);
  const loading = isMovieLoading || isReviewLoading;
  const [movie, setMovie] = useRecoilState(movieState);
  const [review, setReview] = useState({
    review_id: '',
    title: '',
    content: '',
    watched_date: new Date(),
    place: { name: '', mapx: 0, mapy: 0, link: 'url' },
    with_user: '',
    rating: 0,
  });
  const { pathname } = useLocation();

  const getMovie = async () => {
    if (pathname.includes('movie')) {
      setIsMovieLoading(false);
      return;
    }

    setIsMovieLoading(true);
    try {
      const { data: res } = await fetcher(`${API.movies_detail}/${movie.id}`);
      setMovie(prev => {
        return { ...prev, ...res.movie_info };
      });
      setIsMovieLoading(false);
    } catch (error) {
      console.log('error', error);
    }
  };

  const getReview = async () => {
    setIsReviewLoading(true);
    try {
      const { data: res } = await fetcher(`${API.reviews_movie}/${movie.id}`);
      // 위 fetch에서 에러가 나지 않으면 즉, 리뷰 있으면 review에 저장하기
      const { result } = res;
      setReview({
        ...review,
        review_id: result.review_id,
        title: result.content.substr(0, 30),
        content: result.content,
        watched_date: new Date(result.watched_date),
        place: { ...result.place },
        with_user: result.with_user,
        rating: Number(result.rating),
      });
      // MyViewModal에서 delete 버튼이 적절하게 나타나기 위함
      if (!pathname.includes('movie')) {
        setMovie(prev => {
          return { ...prev, review_id: result.review_id };
        });
      }
      setIsReviewLoading(false);
    } catch (error) {
      console.log('error', error);
      if (error.response.data.message === 'REVIEW_DOSE_NOT_EXISTS')
        setIsReviewLoading(false);
    }
  };

  useEffect(() => {
    if (!movie.id) return;

    // 컴포넌트 최초 렌더링 시 리뷰를 작성할 영화에 대한 정보를 받아오는데, "movie 상세 페이지일 땐 필요 없음!!!"
    getMovie();
    // 이미 작성한 리뷰의 내용 가져오기
    getReview();
  }, []);

  return (
    <LoadWrap
      loading={loading}
      content={<ReviewBoxContent review={review} setReview={setReview} />}
    />
  );
}

function ReviewBoxContent({ review, setReview }) {
  const [userInfo] = useRecoilState(userState);
  const [movie] = useRecoilState(movieState);
  const ratingRef = useRef();
  const textInput = useRef(null);
  console.log(textInput);
  // 저장하기 버튼을 누르면 이때까지 반영된 리뷰 정보를 폼데이터로 담아 전송
  useSave(review, textInput);
  useDelete(review.review_id);
  console.log(textInput);
  return (
    <Column>
      <Poster url={movie.thumbnail_image_url} />
      <ReviewContainer>
        <RowBox>
          <Box>
            <MovieTitle variant="h1">{movie.title}</MovieTitle>
            <Box>
              <BoldText variant="subtitle2">{movie.en_title} </BoldText>
              <MovieInfo variant="subtitle2">
                2022 · {movie.country} ·{' '}
                {movie.genre?.map((genreItems, index) => (
                  // chip으로 수정 필요
                  <Genre key={index}>{genreItems}</Genre>
                ))}
              </MovieInfo>
              <BoldText variant="subtitle2">
                {movie.running_time}분 <AgeBadge age={movie.age} />
              </BoldText>
            </Box>
          </Box>
          <MyRating
            ref={textInput}
            value={review.rating}
            onChange={(e, newValue) => {
              setReview({ ...review, rating: newValue });
            }}
            precision={0.5}
            size="large"
          />
        </RowBox>
        <RowLabel variant="h2">{userInfo?.nickname}님의 솔직후기</RowLabel>
        <ReviewField
          label="리뷰를 남겨보세요."
          multiline
          minRows={3}
          maxRows={20}
          value={review.content}
          onChange={e => {
            setReview(prev => {
              return { ...prev, content: e.target.value };
            });
          }}
        />
        <RowLabel variant="h2">관람정보</RowLabel>
        <GridBox>
          <MBox>
            <WatchInfoLabel variant="subtitle1">when</WatchInfoLabel>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <WatchDate
                components={Mypaper}
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
          </MBox>
          <MBox>
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
          </MBox>
          <MBox>
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
          </MBox>
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
  @media screen and (max-width: 600px) {
    margin-left: 0px;
    overflow-y: scroll;
  }
`;

const RowBox = styled(Box)`
  display: flex;
  justify-content: space-between;
`;

const BoldText = styled(Typography)`
  color: ${({ theme }) => theme.palette.common.white};
  font-weight: bold;
`;

const MovieInfo = styled(BoldText)`
  @media screen and (max-width: 600px) {
    width: 160px;
  }
`;

const MovieTitle = styled(BoldText)`
  margin-bottom: 6px;
`;

const Genre = styled.span`
  margin-right: 10px;
`;

const MyRating = styled(Rating)`
  @media screen and (max-width: 600px) {
    margin-left: -40px;
    margin-top: 100px;
  }
`;

const MBox = styled(Box)`
  width: 100%;
`;

const RowLabel = styled(BoldText)`
  margin: 15px 0;
`;

const ReviewField = styled(TextField)`
  width: 100%;

  & .MuiInputBase-input {
    color: ${({ theme }) => theme.palette.common.white};
  }

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

const GridBox = styled(Box)`
  display: grid;
  grid-template-columns: 3fr 3fr 2fr;
  column-gap: 12px;
  @media screen and (max-width: 600px) {
    display: flex;
    flex-wrap: wrap;
    width: 273px;
    /* grid-template-columns: 1fr 1fr 1fr; */
  }
`;

const WatchInfoLabel = styled(BoldText)`
  margin-bottom: 15px;
`;

const WatchDate = styled(DateTimePicker)`
  .MuiCalendarPicker-root {
    background-color: white;
    .Mui-selected {
      font-weight: bold;
    }
  }

  @media screen and (max-width: 600px) {
    background-color: antiquewhite;
  }
`;

const Mypaper = styled(Paper)`
  background-color: white;
  .Mui-selected {
    font-weight: bold;
  }
`;

const WhiteTextField = styled(TextField)`
  & .MuiOutlinedInput-root {
    color: ${({ theme }) => theme.palette.common.white};
  }
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

const WatchInfoField = styled(ReviewField)`
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

export default ReviewBox;
