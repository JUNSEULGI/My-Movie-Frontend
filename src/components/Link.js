import styled from '@emotion/styled';
import MuiLink from '@mui/material/Link';
import { Link } from 'react-router-dom';

export const Links = styled(MuiLink)`
  color: ${({ theme }) => theme.palette.common.white};
  text-decoration: none;
  transition: all 0.3s;
`;

export const MyLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  span:hover {
    text-decoration: underline;
  }
`;
