import React from 'react';
import styled from '@emotion/styled';
import { Links } from '../../components/Link';
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';

function Actor({ actor }) {
  const { id, name, role_name, image, role } = actor;

  const navigate = useNavigate();

  const actorImage =
    image == ''
      ? 'https://kangsblackbeltacademy.com/wp-content/uploads/2017/04/default-image.jpg'
      : image;

  return (
    <ActorCard key={id}>
      <ActorImg src={actorImage} onClick={() => navigate(`/people/${id}`)} />
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
  transition: all ease 0.5s;
  :hover {
    transform: translateY(-10px);
  }
  margin-right: 22px;
  width: 175px;
  scroll-snap-align: start;
`;

const ActorImg = styled.img`
  width: 116.66px;
  height: 175px;
  border-radius: 8px;
  cursor: pointer;
  overflow-x: hidden;
`;

const ActorName = styled(Typography)`
  margin: 12px 0 0;
  font-weight: bold;
`;

const Role = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.disabled};
`;
