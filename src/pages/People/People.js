import React from 'react';
import { useParams } from 'react-router-dom';
import styled from '@emotion/styled';
import { Box } from '@mui/material';
import { CardContainer } from '../Movie/CardContainer';
import { ActorImg } from '../Movie/ActorImage';
import MyViewLayout from '../../layout/Layout';
import PeopleProfile from './PeopleProfile';
import MovieTable from './MovieTable';

function People() {
  const params = useParams();

  const people = {
    actor_info: {
      id: 1,
      name: '마동석',
      country: '한국',
      birth: '2022년도 10월 23일',
      body: '183cm, 74kg',
      debut: '2004년, 바람의 전설',
      agency: '키이스트',
      role: '배우',
      best_image_url:
        'https://myviewjjky.s3.ap-northeast-2.amazonaws.com/image/gallery/Z8jafJT0TOkoU1C0Z5xo_Q.jpeg',
      image_url:
        'https://myviewjjky.s3.ap-northeast-2.amazonaws.com/image/actor/%E1%84%86%E1%85%A1%E1%84%83%E1%85%A9%E1%86%BC%E1%84%89%E1%85%A5%E1%86%A8.jpeg',
      starring_list: [
        {
          title: '범죄도시2',
          release: '2022',
          thumbnail_image_url:
            'https://myviewjjky.s3.ap-northeast-2.amazonaws.com/image/thumbnail/%E1%84%87%E1%85%A5%E1%86%B7%E1%84%8C%E1%85%AC%E1%84%83%E1%85%A9%E1%84%89%E1%85%B52_thumbnail.jpeg',
          role_name: '주연',
          ratings: '5.0',
          platform: '넷플릭스',
        },
        {
          title: '악인전',
          release: '2019',
          thumbnail_image_url:
            'https://myviewjjky.s3.ap-northeast-2.amazonaws.com/image/thumbnail/%E1%84%8B%E1%85%A1%E1%86%A8%E1%84%8B%E1%85%B5%E1%86%AB%E1%84%8C%E1%85%A5%E1%86%AB.jpeg',
          role_name: '주연',
          ratings: '',
          platform: '넷플릭스',
        },
      ],
    },
  };

  const PeopleData = people.actor_info;

  function PeopleLayout() {
    return (
      <>
        <DDD>
          <PeopleCard>
            <PeopleImg src={PeopleData.image_url} />
            <Info>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'baseline',
                }}
              >
                <PeopleName>{PeopleData.name}</PeopleName>
                <Job>{PeopleData.role}</Job>
              </Box>
              <PeopleProfile profile={PeopleData} />
            </Info>
          </PeopleCard>
          <Right>
            <MovieTable movie={PeopleData} />
          </Right>
        </DDD>
      </>
    );
  }
  return (
    <MyViewLayout
      // leftMenu={<Aside />}
      background={PeopleData.best_image_url}
      center={<PeopleLayout />}
    />
  );
}

const DDD = styled.div`
  padding-top: 40px;
  /* display: flex; */
  /* justify-content: space-between; */
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

const PeopleName = styled.h3`
  margin: 0 0 0 20px;
`;
const Job = styled.p`
  margin: 0 0 0 8px;
`;

const Right = styled.div`
  /* width: 680px; */
`;

export default People;
