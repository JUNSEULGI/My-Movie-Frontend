import React from 'react';
import { useParams } from 'react-router-dom';
import styled from '@emotion/styled';
import { Box } from '@mui/material';
import { CardContainer } from '../Movie/CardContainer';
import { ActorImg } from '../Movie/ActorImage';
import MyViewLayout from '../../layout/Layout';
import PeopleProfile from './PeopleProfile';

function People() {
  const params = useParams();

  const people = {
    actor_info: {
      id: 1,
      name: '마동석',
      image_url:
        'https://myviewjjky.s3.ap-northeast-2.amazonaws.com/image/actor/%E1%84%86%E1%85%A1%E1%84%83%E1%85%A9%E1%86%BC%E1%84%89%E1%85%A5%E1%86%A8.jpeg',
      country: '한국',
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
          ratings: '0',
          platform: '넷플릭스',
        },
      ],
    },
  };

  function PeopleLayout() {
    return (
      <>
        <DDD>
          <PeopleCard>
            <PeopleImg src="https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F609%2F2022%2F05%2F11%2F202205111644321510_1_20220511164504190.jpg&type=sc960_832" />
            <Info>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'baseline',
                }}
              >
                <PeopleName>마동석</PeopleName>
                <Job>배우</Job>
              </Box>
              <PeopleProfile />
            </Info>
          </PeopleCard>
          <Right></Right>
        </DDD>
      </>
    );
  }
  return (
    <MyViewLayout
      // leftMenu={<Aside />}
      center={<PeopleLayout />}
    />
  );
}

const DDD = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PeopleImg = styled(ActorImg)``;

const PeopleCard = styled(CardContainer)`
  width: 440px;
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

const Right = styled(CardContainer)`
  width: 680px;
`;

export default People;
