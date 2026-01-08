import { makeStyles } from "@mui/styles";
import { type Theme } from '@mui/material';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: '100vh',
    width: '100vw',
    padding: '24px 0',
    overflowY: 'auto',
    overflowX: 'hidden',
    background: `radial-gradient(60% 50% at bottom center,rgba(92, 159, 249, 0.78) 0%, #EEF1F4 100%)`,
  },
  mainBox: {
    width: '438px',
    border: '1px solid #E4EBEF',
    background: theme.palette.common.white,
    color: theme.palette.navy[500],
    borderRadius: '8px',
    padding: '24px',
    margin: '100px auto 0',
  },
  topBox: {
    marginBottom: '32px',
    '& h2': {
      fontFamily: 'OpenSauceOne-Bold',
      marginBottom: '8px',
    },
  },
  formControl: {
    width: '100%',
    display: 'flex',
    gap: '4px',
    '& label': {
      fontFamily: 'OpenSauceOne-Medium',
      fontSize: '13px',
      color: theme.palette.navy[500],
    },
    '& .MuiInputBase-formControl': {
      border: `1px solid ${theme.palette.navy[200]}`,
      borderRadius: '4px',
      height: '40px',
      '& input': {
        fontFamily: 'OpenSauceOne-Regular',
        fontSize: '14px',
        padding: ' 0px 8px',
        color: theme.palette.navy[500],
        caretColor: theme.palette.blue[500],
        '&::placeholder': {
          color: theme.palette.navy[300],
          opacity: 1,
        },
        '&:-webkit-autofill': {
          WebkitBoxShadow: '0 0 0 100px #fff inset',
          WebkitTextFillColor: theme.palette.navy[500],
          transition: 'background-color 9999s ease-in-out 0s',
        },
      },
      '& fieldset': {
        display: 'none',
      },
      '&.Mui-focused': {
        borderColor: theme.palette.blue[500],
      }
    }
  },
  btnBox: {
    marginTop: '24px',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    '& h6': {
      fontSize: '14px',
      color: '#00000',
      textAlign: 'center'
    },

  },
  Link: {
    '&.MuiLink-root': {
      textDecoration: 'none',
      fontSize: '14px',
      color: theme.palette.blue[500],
      fontFamily: 'OpenSauceOne-Bold',

    },

  },
  submitBtn: {
    '&.MuiButton-root': {
      height: '40px',
      borderRadius: '4px',
      textTransform: 'capitalize',
      backgroundColor: theme.palette.blue[500],
      color: theme.palette.common.white,
      '&.Mui-disabled': {
        color: '#D9E7F7',
        background: '#A1C4F1'
      },
      '&:focus': {
        outline: 'none',
      }
    },
  },
  errorRow: {
    display: 'flex',
    alignItems: 'top',
    gap: '4px',
    color: theme.palette.red[500],
    '& svg': {
      fontSize: '16px'
    },
    '& a': {
      color: theme.palette.red[500],
      textDecorationColor: "red",
    },
    '& h5': {
      fontSize: '12px'
    }
  },
}));
export default useStyles;