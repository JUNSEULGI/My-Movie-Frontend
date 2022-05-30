import React from 'react';
import styled from '@emotion/styled';
import ActorImage from '../../assets/images/actor.jpeg';

function Actor() {
  return (
    <ActorCard>
      <ActorImg src={ActorImage} />
      <ActorName>베네딕트 컴버배치</ActorName>
      <Role>주연 | 닥터 스트레인지</Role>
    </ActorCard>
  );
}

export default Actor;

const ActorCard = styled.div`
  margin-right: 22px;
  width: 175px;
`;

const ActorImg = styled.img`
  height: 175px;
  border-radius: 8px;
`;

const ActorName = styled.h3`
  margin: 12px 0 0;
  font-weight: bold;
`;

const Role = styled.span`
  color: ${({ theme }) => theme.palette.text.disabled};
`;
