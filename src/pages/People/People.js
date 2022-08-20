import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userState } from '../../state';
import styled from '@emotion/styled';
import MyViewLayout from '../../layout/Layout';
import { Box, Typography } from '@mui/material';
import { BASE_URL, API } from '../../Modules/API';
import { CardContainer, ActorImg } from '../Movie';
import { PeopleProfile, MovieTable, CountReview } from '../People';
import LoadWrap from '../../components/Loading/LoadWrap';
import { fetcher } from '../../Modules/fetcher';

function People() {
  const params = useParams();
  const userInfo = useRecoilValue(userState);
  const [loading, setLoading] = useState(true);

  // Real DATA
  const [peopleData, setPeopleData] = useState({});
  const [intimacyData, setIntimacyData] = useState({});

  const intimacyDataApi = async () => {
    setLoading(true);
    try {
      const response = await fetcher(`${API.actor_intimacy}/${params.id}`);
      const result = response.data;
      setIntimacyData(result.data);
      setLoading(false);
    } catch (error) {
      console.log('error', error);
    }
  };

  //전체 데이터
  // useEffect(() => {
  //   fetch(`${BASE_URL}movies/actor/${params.id}`)
  //     .then(res => res.json())
  //     .then(res => {
  //       setPeopleData(res.actor_info);
  //     });
  // }, []);

  const peopleDataApi = async () => {
    setLoading(true);
    try {
      const response = await fetcher(`${API.actor}/${params.id}`);
      const result = response.data;
      setPeopleData(result.actor_info);
      setLoading(false);
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    intimacyDataApi();
    peopleDataApi();
  }, [params.id]);

  const { starring_list } = peopleData;

  let watched_count = 0;

  const checkAddMyReview = (intimacyData, starring_list) => {
    for (let i = 0; i < starring_list?.length; i++) {
      for (let z = 0; z < intimacyData?.length; z++) {
        if (starring_list[i].movie_id === intimacyData[z].movie_id) {
          starring_list[i].myrating = intimacyData[z].rating;
          watched_count += 1;
        }
      }
    }
    return starring_list;
  };

  checkAddMyReview(intimacyData, starring_list);

  function PeopleLayout() {
    return (
      <PeopleLayoutContainer>
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
          userInfo={userInfo}
          actor={peopleData.name}
          starring_list={starring_list}
          watched_count={watched_count}
        />
        <Right>
          <MovieTable reviewdata={intimacyData} movie={starring_list} />
        </Right>
      </PeopleLayoutContainer>
    );
  }
  return (
    <MyViewLayout
      background={peopleData.background_image}
      center={<LoadWrap loading={loading} content={<PeopleLayout />} />}
    />
  );
}

const PeopleLayoutContainer = styled.div`
  padding-top: 40px;
`;

const PeopleImg = styled(ActorImg)``;

const PeopleCard = styled(CardContainer)`
  width: 440px;
  height: 210px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const PeopleName = styled(Typography)`
  margin: 0 0 0 20px;
`;
const Job = styled(Typography)`
  margin: 0 0 0 8px;
`;

const Right = styled.div``;

export default People;
