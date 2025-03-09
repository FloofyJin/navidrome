import stylesheet from './lisha.css.js'

export default {
  themeName: 'Lisha',
  palette: {
    secondary: {
      light: '#eb918a',
      dark: '#dbaaa7',
      main: '#fce3e1',
      contrastText: '#fff',
    },
  },
  overrides: {
    MuiFilledInput: {
      root: {
        backgroundColor: 'rgba(252, 227, 225, 1)',
        '&$disabled': {
          backgroundColor: 'rgba(252, 227, 225, 1)',
        },
      },
    },
    NDLogin: {
      main: {
        '& .MuiFormLabel-root': {
          color: '#eb918a',
        },
        '& .MuiFormLabel-root.Mui-focused': {
          color: '#eb918a',
        },
        '& .MuiFormLabel-root.Mui-error': {
          color: '#f44336',
        },
        '& .MuiInput-underline:after': {
          borderBottom: '2px solid #eb918a',
        },
      },
      card: {
        minWidth: 300,
        marginTop: '6em',
        backgroundColor: '#fce3e1e6',
      },
      avatar: {},
      icon: {},
      button: {
        boxShadow: '3px 3px 5px #eb918aa3',
      },
      systemNameLink: {
        color: '#eb918a',
      },
    },
    NDMobileArtistDetails: {
      bgContainer: {
        background:
          'linear-gradient(to bottom, rgb(252 227 225 / 51%), rgb(250 250 250))!important',
      },
    },
  },
  player: {
    theme: 'lisha',
    stylesheet,
  },
} 