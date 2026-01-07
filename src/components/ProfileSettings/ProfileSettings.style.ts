import { makeStyles } from '@mui/styles'
import type { Theme } from '@mui/material/styles'

export const useStyles = makeStyles((theme: Theme) => ({
  // Full page overlay
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#EEF1F4',
    zIndex: 1300,
    overflow: 'auto',
    borderRadius: '8px',
    [theme.breakpoints.down('sm')]: {
      backgroundColor: '#F5F7FB',
      borderRadius: 0,
    },
  },
  // Header section
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '24px 155px',
    height: '72px',
    borderBottom: `1px solid #E4EBEF`,
    [theme.breakpoints.down('sm')]: {
      padding: '16px',
      height: '44px',
    },
  },
  headerTitle: {
    fontFamily: 'OpenSauceOne-Bold !important',
    color: theme.palette.navy[500],
    lineHeight: 1.2,
    [theme.breakpoints.down('sm')]: {
      fontFamily: 'OpenSauceOne-SemiBold',
    },
  },
  closeButton: {
    cursor: 'pointer',
    color: '#1C1B1F !important',
    '&:hover': {
      opacity: 0.7,
    },
  },
  // User info section
  userInfoSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    padding: '24px 155px',
    [theme.breakpoints.down('sm')]: {
      padding: '24px 16px',
      justifyContent: 'flex-start',
    },
  },
  userAvatar: {
    width: '64px',
    height: '64px',
    borderRadius: '100px',
    backgroundColor: theme.palette.orange[500],
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  userAvatarText: {
    fontSize: '23px !important',
    fontFamily: 'OpenSauceOne-Medium !important',
    color: theme.palette.common.white,
    lineHeight: 1.13,
  },
  userDetails: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  },
  userName: {
    fontFamily: 'OpenSauceOne-Bold !important',
    color: theme.palette.navy[500],
    lineHeight: 1.2,
  },
  userEmailRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: '4px',
    },
  },
  userEmail: {
    fontFamily: 'Roboto, sans-serif !important',
    fontWeight: '400 !important',
    color: theme.palette.common.black,
    lineHeight: 'normal',
  },
  editLink: {
    fontFamily: 'OpenSauceOne-Bold !important',
    color: theme.palette.blue[500],
    lineHeight: 1.13,
    cursor: 'pointer',
    '&:hover': {
      textDecoration: 'underline',
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  // Content area with cards
  contentArea: {
    display: 'flex',
    gap: '24px',
    padding: '0 155px 24px',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      gap: '16px',
      padding: '0 16px 24px 16px',
      maxWidth: '361px',
      margin: '0 auto',
      width: '100%',
    },
  },
  // Card styles
  card: {
    flex: 1,
    backgroundColor: theme.palette.common.white,
    border: `1px solid #E4EBEF`,
    borderRadius: '8px',
    padding: '24px',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    [theme.breakpoints.down('sm')]: {
      padding: '16px',
      flex: 'none',
      width: '100%',
    },
  },
  cardTitle: {
    color: theme.palette.navy[500],
    lineHeight: 1.2,
  },
  // Form styles
  formContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  },
  formRow: {
    display: 'flex',
    gap: '24px',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      gap: '24px',
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

        '& .MuiInputAdornment-root button': {
            padding: '0px',
            '& svg': {
                width: '16px',
                height: '16px',
                color: theme.palette.navy[300],
            },
            '&:focus': {
                outline: 'none',
            }
        },
        '&.Mui-focused': {
            borderColor: theme.palette.blue[500],
        }
    }
  },
  inputField: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
    flex: 1,
  },
  inputFieldHalf: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  inputLabel: {
    color: theme.palette.navy[500],
    lineHeight: 1.2,
  },
  inputWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '40px',
    padding: '0 8px',
    backgroundColor: theme.palette.common.white,
    border: `1px solid ${theme.palette.navy[200]}`,
    borderRadius: '4px',
    '&:focus-within': {
      borderColor: theme.palette.blue[500],
    },
  },
  inputWrapperFocused: {
    borderColor: theme.palette.blue[500],
  },
  input: {
    flex: 1,
    border: 'none',
    outline: 'none',
    fontSize: '14px',
    fontFamily: 'OpenSauceOne-Regular',
    color: theme.palette.navy[500],
    lineHeight: 1.2,
    backgroundColor: 'transparent',
    '&::placeholder': {
      color: theme.palette.navy[300],
    },
  },
  visibilityIcon: {
    cursor: 'pointer',
    color: theme.palette.navy[300],
    display: 'flex',
    alignItems: 'center',
    '&:hover': {
      color: theme.palette.navy[500],
    },
  },
  // Info message
  infoMessage: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '4px',
    [theme.breakpoints.down('sm')]: {
      alignItems: 'flex-start',
    },
  },
  infoIcon: {
    color: theme.palette.navy[300],
    flexShrink: 0,
  },
  infoText: {
    color: theme.palette.navy[300],
    lineHeight: 1.3,
    [theme.breakpoints.down('sm')]: {
      flex: 1,
    },
  },
  // Password criteria
  passwordCriteria: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    marginTop: '8px',
  },
  criteriaTitle: {
    color: theme.palette.navy[500],
    lineHeight: 1.2,
  },
  criteriaItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
  },
  criteriaCheckIcon: {
    width: '16px',
    height: '16px',
    borderRadius: '50%',
    backgroundColor: theme.palette.green[500],
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  criteriaUncheckedIcon: {
    width: '16px',
    height: '16px',
    borderRadius: '50%',
    backgroundColor: theme.palette.neutral[300],
  },
  criteriaText: {
    color: theme.palette.navy[500],
    lineHeight: 1.2,
  },
  // Button styles
  buttonRow: {
    display: 'flex',
    gap: '16px',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'row',
    },
  },
  saveButton: {
    width: '100px',
    height: '40px',
    backgroundColor: theme.palette.blue[500],
    border: `1px solid ${theme.palette.blue[500]}`,
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: theme.palette.blue[600],
    },
  },
  saveButtonDisabled: {
    width: '100px',
    height: '40px',
    backgroundColor: '#A1C4F1',
    border: 'none',
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'not-allowed',
  },
  saveButtonText: {
    color: theme.palette.common.white,
    lineHeight: 1.13,
  },
  saveButtonTextDisabled: {
    color: '#D9E7F7',
    lineHeight: 1.13,
  },
  cancelButton: {
    width: '100px',
    height: '40px',
    backgroundColor: 'transparent',
    border: `1px solid ${theme.palette.blue[500]}`,
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: theme.palette.blue[50],
    },
  },
  cancelButtonText: {
    color: theme.palette.blue[500],
    lineHeight: 1.13,
  },
  // Change Email Popup styles
  changeEmailOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1400,
  },
  changeEmailModal: {
    backgroundColor: theme.palette.common.white,
    border: '1px solid #E4EBEF',
    borderRadius: '8px',
    padding: '24px',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    width: '553px',
    maxWidth: '90vw',
    [theme.breakpoints.down('sm')]: {
      width: 'calc(100% - 32px)',
      maxWidth: '361px',
      padding: '16px',
    },
  },
}))
