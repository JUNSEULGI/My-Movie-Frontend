import React from 'react';
import styled from '@emotion/styled';
import Chip from '@mui/material/Chip';

function AgeBadge({ age, ageColor }) {
  console.log(ageColor);
  return <MovieBadge label={age} ageColor={ageColor} />;
}

export default AgeBadge;

const MovieBadge = styled(Chip)`
  color: white;
  font-weight: bold;
  width: 4em;
  height: 1.57em;
  background-color: ${props => props.ageColor};
`;
