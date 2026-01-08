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
        display: 'flex',
        gap: '24px',
        alignItems: 'flex-start',
        justifyContent: 'center',
        width: '78.4%',
        margin: '91px auto 0px'
    },
    signupBox: {
        width: '438px',
        border: '1px solid #E4EBEF',
        background: theme.palette.common.white,
        color: theme.palette.navy[500],
        borderRadius: '8px',
        padding: '24px',
    },
    TopBoxBtns: {
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        '& h2': {
            fontFamily: 'OpenSauceOne-Bold',
        }
    },
    signUpBtns: {
        display: 'flex',
        gap: '16px',
        paddingRight: '12px',
        '& button': {
            height: '40px',
            fontFamily: "Inter-SemiBold",
            fontSize: '14px',
            width: 'calc((100% - 16px) / 2)',
            textTransform: 'none',
            borderRadius: '4px',
            outline: 'none',
            gap: '8px',
            letterSpacing: '0px',
            '& .MuiButton-startIcon': {
                marginRight: '0px'
            },
            '&:nth-child(1)': {
                background: '#212528 !important',
                color: theme.palette.common.white,
            },
            '&:nth-child(2)': {
                border: '1px solid #747775',
                color: '#1f1f1f',
                background: theme.palette.common.white,
            }
        }

    },
    form: {
        marginTop: '32px',
        '& >.MuiFormControl-root': {
            marginBottom: '16px',
        },
        display: 'flex',
        flexDirection: 'column',
        gap: '24px'
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
    passField: {
        marginTop: '16px'
    },
    signupBtnBox: {
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
    signupBtn: {
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
    suggestion: {
        marginTop: '4px',
        '& h6': {
            fontSize: '13px',
            marginBottom: '4px'
        },
    },
    suggestionMsg: {
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        '& .emptyCircle': {
            border: '1px solid #9CA2AC',
            height: '16px',
            width: '16px',
            borderRadius: '50%',
        }
    },
    errorRow: {
        display: 'flex',
        alignItems: 'center',
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
    checkboxText: {
        alignItems: 'flex-start !important',
        margin: '0px !important',
        gap: '6px',
        '& .MuiTypography-root': {
            fontSize: '12px',
            lineHeight: '113%'
        },
        '& a': { color: theme.palette.blue[500] },
    },
    rightPanel: {
        position: 'relative',
        flex: 1,
        minWidth: 0,
    },

    pricingHeader: {
        position: 'absolute',
        top: '-35px'
    },

    pricingTitle: {
        fontFamily: 'OpenSauceOne-Bold !important',
        fontSize: '18px !important',
        color: theme.palette.navy[500],
    },

    // Plan Cards
    planCard: {
        background: "#ffffff",
        borderRadius: "12px",
        boxShadow: '0 0 0 1px #E4EBEF',
        marginBottom: "10px",
        overflow: "hidden",
        transition: "border 0.2s ease, boxShadow 0.2s ease",
        cursor: "pointer",
        border: '2px solid transparent'
    },

    planHeader: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "24px",
    },
    planCardSelected: {
        borderColor: theme.palette.blue[500],
        boxShadow: "0 0 0 1px #B0C9EF",
        '& > div:nth-child(1)': {
            paddingBottom: '16px'
        }
    },

    planName: {
        color: theme.palette.navy[500],
        fontFamily: 'OpenSauceOne-Bold !important',
        marginBottom: '4px !important'

    },

    planRequests: {
        color: theme.palette.blue[500],
        fontFamily: "Inter-SemiBold !important",
        fontSize: '14px',

    },

    planPriceContainer: {
        display: "flex",
        alignItems: "baseline",
        gap: "4px",
        color: theme.palette.navy[500],
    },

    planPrice: {
        fontSize: "23px !important",
        fontFamily: 'OpenSauceOne-Bold !important',
    },

    planPriceUnit: {
        fontSize: "23px !important",
        fontFamily: 'OpenSauceOne-Bold !important',
    },

    // Expanded section
    planFeatures: {
        position: 'relative',
        padding: '16px 24px 24px',
        color: theme.palette.navy[500],

        '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 'calc(100% - 48px)',
            height: '1px',
            backgroundColor: '#E4EBEF',
        },
    },

    planSubtitle: {
        marginBottom: "16px !important",
        fontFamily: 'OpenSauceOne-Bold !important',
        fontSize: '14px !important'
    },

    featuresGrid: {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
    },

    featureItem: {
        display: "flex",
        alignItems: "center",
        gap: "6px",
    },

    featureText: {
        color: theme.palette.navy[500],
        lineHeight: '120%'
    },
    comparePlansText: {
        fontFamily: 'OpenSauceOne-Medium !important',
        textAlign: 'end',
        '& a': {
            fontFamily: 'OpenSauceOne-SemiBold !important',
            color: theme.palette.blue[500],
            cursor: 'pointer'
        }
    },


}));
export default useStyles;