import { createTheme, responsiveFontSizes } from '@mui/material';
import { red } from '@mui/material/colors';

export let theme = createTheme({
  typography: {
    fontFamily: 'Heebo, sans-serif',
  },
  palette: {},
  components: {
    MuiChip: {
      variants: [
        {
          props: { color: 'secondary' },
          style: {
            color: 'white',
            backgroundColor: '#142850',
            fontSize: 16,
            fontWeight: 'bold',
          },
        },
      ],
    },
  },
});

theme = responsiveFontSizes(theme);
