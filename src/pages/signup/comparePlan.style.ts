import { makeStyles } from "@mui/styles";
import { type Theme } from '@mui/material';

const useStyles = makeStyles((theme: Theme) => ({
    modal: {
        '& .MuiBackdrop-root': {
            background: theme.palette.bg.main,
        },
    },

    modalContent: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100%',
        height: '100vh',
        backgroundColor: theme.palette.bg.main,
        overflowY: 'auto',
    },

    headerBox: {
        borderBottom: '1px solid #E4EBEF',
        height: '72px',
        flexShrink: 0,
    },

    header: {
        width: '78.4%',
        margin: '0 auto',
        height: '100%',
        position: 'relative',

        '& h5': {
            fontSize: '16px',
            position: 'absolute',
            top: '50%',
            transform: 'translateY(-50%)',
        },
    },

    closeBtn: {
        '&.MuiIconButton-root': {
            height: '24px',
            width: '24px',
            color: '#1C1B1F',
            position: 'absolute',
            right: 0,
            bottom: '10px',
        },
    },

    modalBody: {
        paddingBottom: '42px',
        color: theme.palette.navy[500]
    },

    cardsBox: {
        width: '78.4%',
        margin: '73px auto 0',
    },

    multiCards: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '24px',
    },
    singleCard: {
        borderRadius: '8px',
        border: '1px solid #E4EBEF',
        padding: '24px 16px',
        background: '#fff',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        position: 'relative',
        overflow: 'hidden',
    },
    bottomCard: {
        border: '1px solid #E4EBEF',
        marginTop: '42px',
        padding: '16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: '8px',
        background: theme.palette.blue[50],
        '& h4': {
            marginBottom: '4px'
        }
    },
    bottomCardBtn: {
        '&.MuiButton-root': {
            height: '40px',
            padding: '0px 16px',
            borderRadius: '4px',
            textTransform: 'capitalize',
            color: theme.palette.blue[500],
            border: `1px solid ${theme.palette.blue[500]}`,
            lineHeight: '14px',
            '&:focus': {
                outline: 'none',
            },
        },
    },
    subscribeBtn: {
        '&.MuiButton-root': {
            width: '100%',
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
    titleAndRequest: {
        '& h6': {
            fontSize: '16px',
            marginBottom: '8px',
            lineHeight: '115%',
            textTransform: 'capitalize',
        }
    },
    numberReq: {
        '&&': {
            fontFamily: 'Inter-SemiBold',
            fontSize: '16px',
            color: theme.palette.blue[500],
            lineHeight: 'normal',
            marginBottom: '2px'
        }
    },
    reqPerMonthText: {
        fontFamily: 'Inter-Regular !important',
        fontSize: '12px !important',
        color: theme.palette.blue[500],
        lineHeight: 'normal !important'
    },
    priceTag: {
        '&&': {
            lineHeight: 'normal',
            fontFamily: 'OpenSauceOne-Bold',
            fontSize: '20px'
        },
        '& span:nth-child(1)': {
            fontFamily: 'OpenSauceOne-Bold',

        },
        '& span:nth-child(2)': {
            fontFamily: 'OpenSauceOne-SemiBold',
            fontSize: '16px',
        }
    },
    listBox: {
        display: 'flex',
        flexDirection: 'column',
        gap: '4px'
    },
    list: {
        display: 'flex',
        alignItems: 'center',
        gap: '4px'

    },
    ribbon: {
        fontFamily: 'Inter-SemiBold',
        position: 'absolute',
        top: '23px',
        right: '-35px',
        width: '180px',
        height: '24px',
        backgroundColor: '#21897E',
        color: '#fff',
        fontSize: '12px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transform: 'rotate(30deg)',
        transformOrigin: 'center',
        whiteSpace: 'nowrap',
        pointerEvents: 'none',
    },

}));

export default useStyles;
