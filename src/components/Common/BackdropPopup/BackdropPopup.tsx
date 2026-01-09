import { Box, Typography, Button, Modal } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import TaskAltRoundedIcon from '@mui/icons-material/TaskAltRounded';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import useStyles from './backdropPopup.style';
import { POPUP_TYPE } from "../../../helpers/constants";
import type { JSX } from "@emotion/react/jsx-runtime";

interface IPopupValues {
    type: string;
    title?: string,
    description?: string,
    couponCode?: string
}
type PopupProps = {
    open: boolean;
    values: IPopupValues;

};
const POPUP_ICONS: Record<string, JSX.Element> = {
    [POPUP_TYPE.SUCCESS]: <TaskAltRoundedIcon />,
    [POPUP_TYPE.PASSWORD_CHANGED]: <LockOutlinedIcon />,
    [POPUP_TYPE.DISCOUNT]: <LocalOfferOutlinedIcon />,
    [POPUP_TYPE.COUPON_CODE]: <LocalOfferOutlinedIcon />,
    [POPUP_TYPE.FAILED]: <ErrorOutlineOutlinedIcon />,
    [POPUP_TYPE.RESET_PASSWORD_EMAIL]: <EmailOutlinedIcon />,
    [POPUP_TYPE.EMAIL_VERIFICATION]: <EmailOutlinedIcon />,
};
const ICON_CLASS: Record<string, string> = {
    [POPUP_TYPE.SUCCESS]: 'greenRadial',
    [POPUP_TYPE.PASSWORD_CHANGED]: 'greenRadial',
    [POPUP_TYPE.RESET_PASSWORD_EMAIL]: 'blueRadial',
    [POPUP_TYPE.EMAIL_VERIFICATION]: 'blueRadial',
    [POPUP_TYPE.DISCOUNT]: 'redRadial',
    [POPUP_TYPE.COUPON_CODE]: 'redRadial',
    [POPUP_TYPE.FAILED]: 'greyRadial',
};
const BUTTON_TEXT: Record<string, string> = {
    [POPUP_TYPE.SUCCESS]: 'Got it',
    [POPUP_TYPE.PASSWORD_CHANGED]: 'Back to Login',
    [POPUP_TYPE.RESET_PASSWORD_EMAIL]: 'Resend Email',
    [POPUP_TYPE.EMAIL_VERIFICATION]: 'Send Again',
    [POPUP_TYPE.DISCOUNT]: 'Copy Code',
    [POPUP_TYPE.COUPON_CODE]: 'Copy Code',
    [POPUP_TYPE.FAILED]: 'Retry',
};

function BackdropPopup({ open, values }: PopupProps) {
    const classes = useStyles();
    const { description, title, type } = values;
    return (
        <Modal open={open} className={classes.backdrop}>
            <Box className={`${classes.modal} ${ICON_CLASS[type]}`}>
                {/* Icon */}
                <Box className={classes.iconWrapper}>
                    <Box className={`${classes.outerCircle} radialIcon`}>
                        <Box className={classes.middleCircle}>
                            <Box className={classes.innerCircle}>
                                {POPUP_ICONS[type]}
                            </Box>
                        </Box>
                    </Box>
                </Box>

                <Typography variant="h2" className={classes.title}>
                    {title}
                </Typography>

                <Typography variant="h5">
                    {description}
                </Typography>

                {type !== POPUP_TYPE.DISCOUNT && type !== POPUP_TYPE.COUPON_CODE &&
                    <Button disableRipple className={`${classes.actionBtn} ${type === POPUP_TYPE.RESET_PASSWORD_EMAIL && 'outlineBtn'}`}>
                        {BUTTON_TEXT[type]}
                    </Button>}
                {(type === POPUP_TYPE.DISCOUNT || type === POPUP_TYPE.COUPON_CODE) &&
                    <Box className={classes.discountBox}>
                        <Typography component="span"> {values.couponCode} </Typography>
                        <Button disableRipple className={classes.actionBtn}>{BUTTON_TEXT[type]}</Button>
                    </Box>
                }
            </Box>
        </Modal>
    );
}
export default BackdropPopup;
