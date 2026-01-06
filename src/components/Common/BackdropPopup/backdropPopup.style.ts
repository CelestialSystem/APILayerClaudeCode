import { makeStyles } from "@mui/styles";
import { type Theme } from '@mui/material'

const useStyles = makeStyles((theme: Theme) => ({
  backdrop: {
    '& .MuiBackdrop-root': {
      background: 'rgba(0, 0, 0, 0.2);'
    }
  },
  modal: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: '600px',
    backgroundColor: theme.palette.common.white,
    borderRadius: '8px',
    padding: "24px 24px 32px",
    textAlign: "center",
    outline: "none",
    color: theme.palette.navy[500],
    '& h5': {
      lineHeight: "18px",
      margin: '0 auto 24px',
      maxWidth: '80%',
      textAlign: 'center',
    },
    '&.blueRadial .radialIcon': {
      background: "radial-gradient(circle at center, #73AEFF 0%, #027BFF 100%)",
    },
    '&.greenRadial .radialIcon': {
      background: "radial-gradient(circle at center, #44CDB1 0%, #26A597 100%)",
    },
    '&.redRadial .radialIcon': {
      background: "radial-gradient(circle at center, #F773A3 0%, #D31245 100%)",
    },
    '&.greyRadial': {
      '& div': {
        border: '1px solid rgba(251, 54, 64, 0.1)'
      },
      '& .radialIcon': {
        background: "radial-gradient(circle at center, #FFFFFF 0%, #EEF1F4 100%)",
        border: 'none',
        '& svg': {
          color: theme.palette.red[500],
        }
      }
    }
  },

  iconWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: 'center',
    height: '168px',
    width: '168px',
    margin: '0 auto 16px',
    borderRadius: '50%',
    border: '1px solid rgba(6, 124, 255, 0.15)',
  },

  outerCircle: {
    width: '146px',
    height: '146px',
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  middleCircle: {
    width: '116px',
    height: '116px',
    borderRadius: "50%",
    border: '1px solid rgba(255, 255, 255, 0.15)',
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  innerCircle: {
    width: '76px',
    height: '76px',
    borderRadius: "50%",
    border: '1px solid rgba(255, 255, 255, 0.15)',
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    '& svg': {
      fontSize: '48px',
      color: theme.palette.common.white,
    }
  },

  title: {
    '&&': {
      fontFamily: 'OpenSauceOne-Bold',
      marginBottom: '12px',
      textTransform: 'none',
    }
  },
  actionBtn: {
    '&.MuiButton-root': {
      width: '230px',
      height: '40px',
      borderRadius: '4px',
      textTransform: 'capitalize',
      fontFamily: 'OpenSauceOne-Regular',
      backgroundColor: theme.palette.blue[500],
      color: theme.palette.common.white,
      padding: '0 16px',
      '&:focus': {
        outline: 'none',
      }
    },
    '&.outlineBtn': {
      backgroundColor: theme.palette.common.white,
      border: '1px solid #0052CC',
      color: theme.palette.blue[500],
      fontFamily:'OpenSauceOne-Medium',
    }
  },
  discountBox: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px dashed  #0052CC',
    borderRadius: '4px',
    height: '56px',
    padding: '8px',
    gap: '24px',
    background: theme.palette.blue[50],
    '& button': {
      width: 'auto !important'
    },
    '& span': {
      fontSize: '18px'
    }
  },
}));

export default useStyles;
