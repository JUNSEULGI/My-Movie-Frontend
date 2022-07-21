import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { userState } from '../../state';
import styled from '@emotion/styled';
import MyViewLayout from '../../layout/Layout';
import { Box, Typography } from '@mui/material';
import { BASE_URL } from '../../Modules/API';
import { CardContainer, ActorImg } from '../Movie';
import { PeopleProfile, MovieTable, CountReview } from '../People';
import { people } from './MockData';

function People() {
  const params = useParams();
  const access_token = localStorage.getItem('access_token');

  const [userInfo, setUserInfo] = useRecoilState(userState);

  // Real DATA
  const [peopleData, setPeopleData] = useState({});
  const [intimacyData, setIntimacyData] = useState({});

  // 친밀도 DATA
  useEffect(() => {
    fetch(`${BASE_URL}movies/actor/intimacy/${params.id}`, {
      headers: {
        Authorization: access_token,
      },
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
        setIntimacyData(res.data);
      });
  }, []);
  //전체 데이터
  useEffect(() => {
    fetch(`${BASE_URL}movies/actor/${params.id}`)
      .then(res => res.json())
      .then(res => {
        setPeopleData(res.actor_info);
      });
  }, []);

  console.log(intimacyData);
  // Mock DATA
  // const peopleData = people.actor_info;

  function PeopleLayout() {
    return (
      <DDD>
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
              {peopleData.job?.map(job => {
                return <Job variant="body1">{job}</Job>;
              })}
            </Box>
            <PeopleProfile profile={peopleData} />
          </Info>
        </PeopleCard>
        <CountReview
          userInfo={userInfo}
          actor={peopleData.name}
          intimacyData={intimacyData}
        />
        <Right>
          <MovieTable reviewdata={intimacyData} movie={peopleData} />
        </Right>
      </DDD>
    );
  }
  return (
    <MyViewLayout
      background={peopleData.background_image}
      center={<PeopleLayout />}
    />
  );
}

const DDD = styled.div`
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
