import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#3276ff',
      light: '#6ba3ff',
      dark: '#0052cc',
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#2c3952',
      light: '#5a6b85',
      dark: '#1a2332',
      contrastText: '#ffffff'
    },
    background: {
      default: '#f6f6f8',
      paper: '#ffffff'
    },
    text: {
      primary: '#20242b',
      secondary: '#2c3952'
    },
    grey: {
      50: '#f6f6f8',
      100: '#e8eaed',
      200: '#d4d7dc',
      300: '#b8bcc4',
      400: '#9ca1ab',
      500: '#808692',
      600: '#656b78',
      700: '#4a505e',
      800: '#2f3544',
      900: '#20242b'
    },
    common: {
      black: '#000000',
      white: '#ffffff'
    },
    divider: '#d4d7dc'
  },
  typography: {
    fontFamily: '"Inter", "Space Grotesk", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    h1: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontWeight: 700,
      fontSize: '3.5rem',
      lineHeight: 1.2,
      letterSpacing: '-0.02em'
    },
    h2: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontWeight: 600,
      fontSize: '2.5rem',
      lineHeight: 1.3,
      letterSpacing: '-0.01em'
    },
    h3: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontWeight: 600,
      fontSize: '2rem',
      lineHeight: 1.4
    },
    h4: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontWeight: 500,
      fontSize: '1.5rem',
      lineHeight: 1.4
    },
    h5: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontWeight: 500,
      fontSize: '1.25rem',
      lineHeight: 1.5
    },
    h6: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontWeight: 500,
      fontSize: '1.125rem',
      lineHeight: 1.5
    },
    body1: {
      fontFamily: '"Inter", sans-serif',
      fontSize: '1rem',
      lineHeight: 1.6
    },
    body2: {
      fontFamily: '"Inter", sans-serif',
      fontSize: '0.875rem',
      lineHeight: 1.6
    },
    button: {
      fontFamily: '"Inter", sans-serif',
      fontWeight: 500,
      textTransform: 'none'
    }
  },
  shape: {
    borderRadius: 16
  },
  shadows: [
    'none',
    '0px 2px 4px rgba(32, 36, 43, 0.04)',
    '0px 4px 8px rgba(32, 36, 43, 0.06)',
    '0px 8px 16px rgba(32, 36, 43, 0.08)',
    '0px 12px 24px rgba(32, 36, 43, 0.1)',
    '0px 16px 32px rgba(32, 36, 43, 0.12)',
    '0px 20px 40px rgba(32, 36, 43, 0.14)',
    '0px 24px 48px rgba(32, 36, 43, 0.16)',
    '0px 32px 64px rgba(32, 36, 43, 0.18)',
    '0px 40px 80px rgba(32, 36, 43, 0.2)',
    '0px 48px 96px rgba(32, 36, 43, 0.22)',
    '0px 56px 112px rgba(32, 36, 43, 0.24)',
    '0px 64px 128px rgba(32, 36, 43, 0.26)',
    '0px 72px 144px rgba(32, 36, 43, 0.28)',
    '0px 80px 160px rgba(32, 36, 43, 0.3)',
    '0px 88px 176px rgba(32, 36, 43, 0.32)',
    '0px 96px 192px rgba(32, 36, 43, 0.34)',
    '0px 104px 208px rgba(32, 36, 43, 0.36)',
    '0px 112px 224px rgba(32, 36, 43, 0.38)',
    '0px 120px 240px rgba(32, 36, 43, 0.4)',
    '0px 128px 256px rgba(32, 36, 43, 0.42)',
    '0px 136px 272px rgba(32, 36, 43, 0.44)',
    '0px 144px 288px rgba(32, 36, 43, 0.46)',
    '0px 152px 304px rgba(32, 36, 43, 0.48)',
    '0px 160px 320px rgba(32, 36, 43, 0.5)'
  ]
});

export default theme;