import { createTheme } from '@mui/material/styles';
import { addTypography } from './Typo';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    common: {
      black: '#000',
      white: '#fff',
    },
    test: {
      main: '#FF6E01',
      second: '#FF9201',
      third: '#FEAB41',
      four: '#FFD281',
      card: 'rgba(21,21,21,0.7)',
      background: 'rgba(15,23,46,0.5)',
    },
    primary: {
      main: '#FF9201',
      light: '#e3f2fd',
      dark: '#FEAB41',
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
      main: '#FF9201',
      light: '#FF9201',
      dark: '#FF9201',
      contrastText: '#000000de',
    },
    ageBadge: {
      ALL: '#07964B',
      '12세': '#EABD01',
      15: '#DC7317',
      18: '#D61D29',
    },
    text: {
      primary: '#FF9201',
      secondary: '#ffffff80',
      disabled: '#7c7c7c',
      icon: '#ffffff80',
    },
    divider: '#ffffff1f',
    background: {
      paper: '#484848',
      card: 'rgba(21, 21, 21, 0.9)',
      modal: '#151515',
      disabled: '#535353',
    },
  },
});

addTypography(darkTheme);

export default darkTheme;
