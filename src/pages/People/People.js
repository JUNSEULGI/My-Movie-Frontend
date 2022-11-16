import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userState } from '../../state';
import styled from '@emotion/styled';
import MyViewLayout from '../../layout/Layout';
import { Box, Typography } from '@mui/material';
import { API } from '../../Modules/API';
import { CardContainer, ActorImg } from '../Movie';
import { PeopleProfile, MovieTable, CountReview } from '../People';
import LoadWrap from '../../components/Loading/LoadWrap';
import { fetcher } from '../../Modules/fetcher';

function People() {
  const params = useParams();
  const userInfo = useRecoilValue(userState);
  const [loading, setLoading] = useState(true);
  const [peopleData, setPeopleData] = useState({});
  const [starringList, setStarringList] = useState([]);
  const [page, setPage] = useState(0);
  const observer = useRef(null);
  const [intersecting, setIntersecting] = useState(false);

  const fetchMoreEl = useCallback(
    node => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(
        entries => {
          setIntersecting(entries.some(entry => entry.isIntersecting));
          if (intersecting) {
            setPage(page + 1);
          }
        },
        { rootMargin: '500px 0px 0px 0px' }
      );
      if (node) observer.current.observe(node);
    },
    [intersecting]
  );

  const getPeople = async () => {
    setLoading(true);
    try {
      const { data: result } = await fetcher(
        `${API.actor}?actor_id=${params.id}&page=${page}`
      );
      setPeopleData(result.actor_info);
      setStarringList(result.actor_info.starring_list);
      setLoading(false);
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    // loading
    if (page === 0) {
      getPeople();
      return;
    }
  }, []);

  useEffect(() => {
    // pagination
    if (page === 0) return;
    if (peopleData && page > peopleData.total_page) return;
    fetcher(`${API.actor}?actor_id=${params.id}&page=${page}`).then(
      ({ data }) => {
        setStarringList(prev => [...prev, ...data.actor_info.starring_list]);
        observer.current = null;
      }
    );
    return;
  }, [page]);

  let watched_count = 0;

  function PeopleContent() {
    return (
      <PeopleContentContainer>
        <PeopleCard>
          <PeopleImg src={peopleData.image_url} />
          <Info>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'baseline',
              }}
            >
              <PeopleName variant="h3">{peopleData.name}</PeopleName>
              {peopleData.job?.map((job, index) => {
                return (
                  <Job key={index} variant="body1">
                    {job}
                  </Job>
                );
              })}
            </Box>
            <PeopleProfile profile={peopleData} />
          </Info>
        </PeopleCard>
        <CountReview
          peopleData={peopleData}
          userInfo={userInfo}
          actor={peopleData.name}
          starring_list={starringList}
          watched_count={watched_count}
        />
        <Right>
          <MovieTable movie={starringList} />
        </Right>
        <OOO sx={{ border: '1px solid white' }} ref={fetchMoreEl} />
      </PeopleContentContainer>
    );
  }
  return (
    <MyViewLayout
      background={peopleData.background_image}
      center={<LoadWrap loading={loading} content={<PeopleContent />} />}
    />
  );
}

const PeopleContentContainer = styled.div`
  padding-top: 40px;
`;

const PeopleImg = styled(ActorImg)`
  @media screen and (max-width: 600px) {
    height: 120px;
  }
`;

const PeopleCard = styled(CardContainer)`
  width: 440px;
  height: 210px;
  @media screen and (max-width: 600px) {
    width: 100%;
    height: fit-content;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */

  @media screen and (max-width: 600px) {
    display: flex;
    justify-content: start;
  }
`;

const PeopleName = styled(Typography)`
  margin: 0 0 10px 20px;
  @media screen and (max-width: 600px) {
    margin-bottom: 10px;
  }
`;
const Job = styled(Typography)`
  margin: 0 0 0 8px;
  @media screen and (max-width: 600px) {
    font-size: 14px;
  }
`;

const Right = styled.div`
  @media screen and (max-width: 600px) {
    padding: 0px;
  }
`;

const OOO = styled.div`
  background-color: beige;
`;

export default People;
