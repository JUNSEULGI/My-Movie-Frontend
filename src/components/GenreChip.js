import { Chip } from '@mui/material';
import styled from '@emotion/styled';

export const GenreChip = styled(Chip)`
  margin-left: 4px;
  color: white;
  background-color: ${({ colorcode }) => (colorcode ? colorcode : 'black')};
`;
