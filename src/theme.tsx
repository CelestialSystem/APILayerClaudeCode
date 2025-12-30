import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontSize: 14,
    h1: {
      fontSize: '32px',
      fontFamily: 'OpenSauceOne-SemiBold',
    },
    h2: {
      fontSize: '20px',
      fontFamily: 'OpenSauceOne-SemiBold',
    },
    h3: {
      fontSize: '16px',
      fontFamily: 'OpenSauceOne-SemiBold',
    },
    h4: {
      fontSize: '14px',
      fontFamily: 'OpenSauceOne-SemiBold',
    },
    h5: {
      fontSize: '14px',
      fontFamily: 'OpenSauceOne-Regular',
    },
    h6: {
      fontSize: '12px',
      fontFamily: 'OpenSauceOne-Medium',
    },
    body1: {
      fontSize: '12px',
      fontFamily: 'OpenSauceOne-Regular',
    },
    body2: {
      fontSize: '10px',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 767,
      md: 1024,
      lg: 1450,
      xl: 1600,
    },
  },

  palette: {
    bg: {
      main: "#F5F7FB",
    },

    blue: {
      50: "#e6eefa",
      100: "#b0c9ef",
      200: "#8aafe8",
      300: "#548bdd",
      400: "#3375d6",
      500: "#0052cc",
      600: "#004bba",
      700: "#003a91",
      800: "#002d70",
      900: "#002256",
    },

    navy: {
      50: "#e9ebed",
      100: "#bcc0c7",
      200: "#9ca2ac",
      300: "#6e7786",
      400: "#525d6e",
      500: "#27344a",
      600: "#232f43",
      700: "#1c2535",
      800: "#151d29",
      900: "#10161f",
    },

    neutral: {
      50: "#fdfdfe",
      100: "#fcfdfd",
      200: "#f9fafb",
      300: "#edeff2",
      400: "#d5d7da",
      500: "#bebfc2",
      600: "#b2b3b6",
      700: "#8e8f91",
      800: "#6b6c6d",
      900: "#535455",
    },

    red: {
      50: "#ffebec",
      100: "#fec1c4",
      200: "#fda3a7",
      300: "#fc787f",
      400: "#fc5e66",
      500: "#fb3640",
      600: "#e4313a",
      700: "#b2262d",
      800: "#8a1e23",
      900: "#69171b",
    },

    green: {
      50: "#e9f3f2",
      100: "#bad4d7",
      200: "#99c9c4",
      300: "#6ab0a9",
      400: "#4da198",
      500: "#21897e",
      600: "#1e7d73",
      700: "#176159",
      800: "#124b45",
      900: "#0e3a35",
    },

    orange: {
      50: "#fff1eb",
      100: "#fed4c1",
      200: "#fdbfa3",
      300: "#fca278",
      400: "#fc905e",
      500: "#fb7436",
      600: "#e46a31",
      700: "#b25226",
      800: "#8a401e",
      900: "#693117",
    },
    common: {
      white: "#FFFFFF",
      black: "#000000",
    },
  },
});

export default theme;
