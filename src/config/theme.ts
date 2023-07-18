import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

export default function createMyTheme(mode: 'light' | 'dark') {
  return createTheme({
    palette: {
      mode,
      secondary: {
        main: '#19857b',
      },
      error: {
        main: red.A400,
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
          },
        },
      },
    },
  });
}
