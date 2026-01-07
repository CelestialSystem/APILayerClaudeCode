import { makeStyles } from "@mui/styles";
import { type Theme } from '@mui/material';

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        height: '100vh',
        width: '100vw',
        padding: '24px 0',
        overflowY: 'auto',
        overflowX: 'hidden',
        background: theme.palette.bg.main
    },

    card: {
        margin: '56px auto 24px',
        maxWidth: '668px',
        borderRadius: '8px',
        backgroundColor: theme.palette.common.white,
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        border: '1px solid #E4EBEF'
    },

    title: {
        '&&': {
            fontFamily: 'OpenSauceOne-Bold',
            fontSize: '16px',
            color: theme.palette.navy[500],
            lineHeight: '120%'
        }
    },

    formGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
        columnGap: '16px',
        rowGap: '24px',
    },

    fullWidth: {
        gridColumn: '1 / -1',
    },

    formControl: {
        width: '100%',
        display: 'flex',
        gap: '4px',

        '& label': {
            fontFamily: 'OpenSauceOne-Medium',
            fontSize: '13px',
            color: `${theme.palette.navy[500]} !important`,
        },

        '& .MuiInputBase-formControl': {
            border: `1px solid ${theme.palette.navy[200]}`,
            borderRadius: '4px',
            height: '40px',

            '& input': {
                fontFamily: 'OpenSauceOne-Regular',
                fontSize: '14px',
                padding: '0px 8px',
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
            '&.Mui-focused': {
                borderColor: theme.palette.blue[500],
            }
        },
        '& .Mui-error': { border: '1px solid #FB3640 !important' }
    },

    continueButton: {
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
}));

