export const addTypography = theme => {
  theme.typography = {
    ...theme.typography,

    h1: {
      fontFamily: theme.typography.fontFamily,
      fontWeight: theme.typography.fontWeightBold,
      fontSize: '1.5rem', //24px
      letterSpacing: 0,
      // [theme.breakpoints.down('sm')]: {
      //   fontSize: '2rem',
      // },
    },

    h2: {
      fontFamily: theme.typography.fontFamily,
      fontWeight: theme.typography.fontWeightBold,
      fontSize: '1.25rem', //20px
      letterSpacing: 0,
      // [theme.breakpoints.down('sm')]: {
      //   fontSize: '1.640625rem',
      // },
    },

    h3: {
      fontFamily: theme.typography.fontFamily,
      fontWeight: theme.typography.fontWeightBold,
      fontSize: '1.125rem', //18px
      letterSpacing: 0,
      // [theme.breakpoints.down('sm')]: {
      //   fontSize: '1.3125rem',
      // },
    },

    subtitle1: {
      fontFamily: theme.typography.fontFamily,
      fontWeight: theme.typography.fontWeightBold,
      fontSize: '1rem', //16px
      letterSpacing: 0,
      // [theme.breakpoints.down('sm')]: {
      //   fontSize: '0.875rem',
      // },
    },

    subtitle2: {
      fontFamily: theme.typography.fontFamily,
      fontWeight: theme.typography.fontWeightBold,
      fontSize: '0.875rem', //14px
      letterSpacing: 0,
      // [theme.breakpoints.down('sm')]: {
      //   fontSize: '0.765625rem',
      // },
    },

    body1: {
      fontFamily: theme.typography.fontFamily,
      fontWeight: theme.typography.fontWeightRegular,
      fontSize: '1rem',
      letterSpacing: 0,
      // [theme.breakpoints.down('sm')]: {
      //   fontSize: '0.875rem',
      // },
    },

    body2: {
      fontFamily: theme.typography.fontFamily,
      fontWeight: theme.typography.fontWeightRegular,
      fontSize: '0.875rem',
      letterSpacing: 0,
      // [theme.breakpoints.down('sm')]: {
      //   fontSize: '0.765625rem',
      // },
    },

    menuItem: {
      fontFamily: theme.typography.fontFamily,
      fontSize: '0.8125rem',
      fontWeight: theme.typography.fontWeightMedium,
      dense: {
        fontSize: '0.75rem',
      },
    },

    inputText: {
      fontFamily: theme.typography.fontFamily,
      fontSize: '1rem',
      fontWeight: theme.typography.fontWeightRegular,
    },
  };
};
