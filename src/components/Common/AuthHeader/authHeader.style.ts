import { makeStyles } from "@mui/styles";
import { type Theme } from '@mui/material';

const useStyles = makeStyles((theme: Theme) => ({
    header: {
        width: '78.4%',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '40px',
    },
    rightHeader: {
        display: 'flex',
        alignItems: 'center',
        gap: '9px',
    },
    apiAvatarGroup: {
        '& div.MuiAvatar-circular': {
            border: '1.25px solid #E4EBEF',
            position: 'revert',
            boxSizing: 'border-box',
            background: theme.palette.common.white,
        },
        '& img': {
            height: 'auto',
            width: 'auto'
        }
    },
    textLink: {
        '& h3': {
            color: theme.palette.navy[500],
        },
        '& a': {
            color: theme.palette.blue[500],
            fontFamily: "Inter-SemiBold",
            fontSize: '14px'
        }
    },

}));
export default useStyles;