import React from 'react';
import styled from '@emotion/styled';
import ActorImage from '../../assets/images/actor.jpeg';

function Actor({ actor }) {
  const { id, name, role_name, role } = actor;
  return (
    <ActorCard id={id}>
      <ActorImg src={ActorImage} />
      <ActorName>{name}</ActorName>
      <Role>
        {role} | {role_name}
      </Role>
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
