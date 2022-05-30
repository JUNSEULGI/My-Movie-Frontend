import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    common: {
      black: '#000',
      white: '#fff',
    },
    primary: {
      main: '#90caf9',
      light: '#e3f2fd',
      dark: '#42a5f5',
      contrastText: '#000000de',
    },
    secondary: {
      main: '#ce93d8',
      light: '#f3e5f5',
      dark: '#ab47bc',
      contrastText: '#000000de',
    },
    error: {
      main: '#f44336',
      light: '#e57373',
      dark: '#d32f2f',
      contrastText: '#fff',
    },
    warning: {
      main: '#ffa726',
      light: '#ffb74d',
      dark: '#f57c00',
      contrastText: '#000000de',
    },
    info: {
      main: '#29b6f6',
      light: '#4fc3f7',
      dark: '#0288d1',
      contrastText: '#000000de',
    },
    success: {
      main: '#02C685',
      light: '#81c784',
      dark: '#388e3c',
      contrastText: '#000000de',
    },
    text: {
      primary: '#000000b3',
      secondary: '#ffffff80',
      disabled: '#ffffff80',
      icon: '#ffffff80',
    },
    divider: '#ffffff1f',
    background: {
      paper: '#2F3437',
      card: 'rgba(21, 21, 21, 0.9)',
      disabled: '#555555',
    },
  },
});

export default darkTheme;
