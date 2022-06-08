import React from 'react';
import styled from '@emotion/styled';
import { Card } from '@mui/material';

export const CardContainer = styled(Card)`
  display: flex;
  padding: 20px;
  margin-bottom: 22px;
  background: ${({ theme }) => theme.palette.test.card};
  color: ${({ theme }) => theme.palette.common.white};
  box-shadow: 5px 7px 20px -4px rgba(0, 0, 0, 0.6);
  border-radius: 8px;
`;
