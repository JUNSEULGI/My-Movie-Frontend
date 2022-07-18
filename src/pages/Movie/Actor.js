import React from 'react';
import styled from '@emotion/styled';
import { Links } from '../../components/Link';
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';

function Actor({ actor }) {
  const { id, name, role_name, image, role } = actor;

  const navigate = useNavigate();

  return (
    <ActorCard key={id}>
      <ActorImg src={image} />
      <Links href={`/people/${id}`}>
        <ActorName variant="h3">{name}</ActorName>
      </Links>
      <Role variant="body1">
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

const ActorName = styled(Typography)`
  margin: 12px 0 0;
  font-weight: bold;
`;

const Role = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.disabled};
`;
