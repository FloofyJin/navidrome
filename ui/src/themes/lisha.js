import stylesheet from './lisha.css.js'

export default {
  themeName: 'Lisha',
  palette: {
    type: 'light',
    background: {
      default: '#f1dbdc', // Overall background
    },
    primary: {
      main: '#ec9999', // Navbar, toolbar, bottom bar, etc.
    },
    secondary: {
      main: '#ff69b4', // Accent color (bright pink)
      contrastText: '#fff',
    },
  },
  overrides: {
    // Example override for the top AppBar
    MuiAppBar: {
      positionFixed: {
        backgroundColor: '#ec9999 !important',
        color: '#fff',
      },
    },

    // Example override for the Navidrome login card
    NDLogin: {
      main: {
        // If you need the entire login background tinted
        boxShadow: 'inset 0 0 0 2000px #f1dbdc',
      },
      card: {
        backgroundColor: '#f1dbdc',
      },
      button: {
        // Accent color on hover or for shadows
        boxShadow: '3px 3px 5px #ff69b473',
      },
      systemNameLink: {
        color: '#ff69b4',
      },
    },

    // Example override for the mobile artist details background
    NDMobileArtistDetails: {
      bgContainer: {
        background:
          'linear-gradient(to bottom, rgba(241, 219, 220, 0.7), rgb(241, 219, 220)) !important',
      },
    },

    // Example audio player styling overrides
    NDAudioPlayer: {
      player: {
        backgroundColor: '#ec9999',
      },
    },
  },
  player: {
    theme: 'lisha',
    stylesheet,
  },
}