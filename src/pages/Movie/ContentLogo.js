import styled from '@emotion/styled';
import { Typography } from '@mui/material';

export const Logo = styled(Typography)`
  /* color: #fe7d01; */
  color: ${({ theme }) => theme.palette.test.main};
  font-family: 'Galada', cursive;
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 8px;
`;
