import styled from '@emotion/styled';
import { Box, Typography, Fab, IconButton } from '@mui/material';

export const ReviewIcon = styled(IconButton)`
  color: #ff9201;
  background: none;
  margin-bottom: 8px;
`;

export const FabContainer = styled.div`
  display: grid;
  position: absolute;
  top: 0;
  right: -60px;
`;

export default { ReviewIcon, FabContainer };
