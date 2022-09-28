import React from 'react';
import styled from '@emotion/styled';
import { CardContainer } from '../../components/CardContainer';
import { Typography } from '@mui/material';

export const NoResult = () => {
  return (
    <NoResultContainer>
      <Title variant="h2">
        검색 결과가 없습니다.
        <br />
        다른 검색을 입력해보세요.
      </Title>
    </NoResultContainer>
  );
};

const NoResultContainer = styled(CardContainer)`
  height: 300px;
  justify-content: center;
  align-items: center;
  margin-bottom: 120px;
`;

const Title = styled(Typography)`
  color: ${({ theme }) => theme.palette.primary.main};
  font-weight: bold;
  text-align: center;
  line-height: 1.6;
`;
