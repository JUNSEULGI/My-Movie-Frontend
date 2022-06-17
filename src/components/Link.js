import styled from '@emotion/styled';
import { Link } from '@mui/material';

export const Links = styled(Link)`
  color: white;
  text-decoration: none;
  transition: all 0.3s;
  :hover {
    color: ${({ theme }) => theme.palette.test.third};
  }
`;
