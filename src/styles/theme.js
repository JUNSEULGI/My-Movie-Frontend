import { createTheme } from '@mui/material/styles';
import deepOrange from '@mui/material/colors/deepOrange';
import grey from '@mui/material/colors/grey';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',

    // // palette values for dark mode
    // primary: deepOrange,
    // divider: deepOrange[700],
    // background: {
    //   default: deepOrange[900],
    //   paper: deepOrange[900],
    // },
    // text: {
    //   primary: '#fff',
    //   secondary: grey[500],
    // },
  },
});

export default darkTheme;
