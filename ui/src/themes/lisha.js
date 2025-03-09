import stylesheet from './lisha.css.js'

export default {
  themeName: 'Lisha',
  palette: {
    secondary: {
      light: '#daa09f',
      dark: '#9a5a5a',
      main: '#f8eae8',
      contrastText: '#fff',
    },
  },
  overrides: {
    MuiFilledInput: {
      root: {
        backgroundColor: 'rgba(255, 182, 193, 0.04)', // Light pink background
        '&$disabled': {
          backgroundColor: 'rgba(255, 182, 193, 0.04)',
        },
      },
    },
    NDLogin: {
      main: {
        '& .MuiFormLabel-root': {
          color: '#9a5a5a',
        },
        '& .MuiFormLabel-root.Mui-focused': {
          color: '#daa09f',
        },
        '& .MuiFormLabel-root.Mui-error': {
          color: '#f44336',
        },
        '& .MuiInput-underline:after': {
          borderBottom: '2px solid #daa09f',
        },
      },
      card: {
        minWidth: 300,
        marginTop: '6em',
        backgroundColor: '#f8eae8e6',
      },
      avatar: {},
      icon: {},
      button: {
        boxShadow: '3px 3px 5px #9a5a5aa3',
      },
      systemNameLink: {
        color: '#daa09f',
      },
    },
    NDMobileArtistDetails: {
      bgContainer: {
        background:
          'linear-gradient(to bottom, rgb(255 235 238 / 51%), rgb(250 250 250))!important',
      },
    },
  },
  player: {
    theme: 'lisha',
    stylesheet,
  },
} 