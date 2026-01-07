import { Box, Button, IconButton, Modal, Typography } from "@mui/material";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import useStyles from "./comparePlan.style";
import CheckIcon from '../../assets/check.svg?react';
import CloseIcon from '../../assets/cross.svg?react';

const features = [
    { label: 'SSL Encryption', available: true },
    { label: 'Location Module', available: true },
    { label: 'Standard Support', available: false },
    { label: 'Currency Module', available: false },
    { label: 'Time Zone Module', available: false },
    { label: 'Connection Module', available: false },
    { label: 'Bulk Endpoint', available: false },
    { label: 'Security Module', available: false },
]

const allPlans = [

    {
        id: 1,
        title: 'free',
        requestsPerMonth: '100',
        price: 0,
        popular: false
    },
    {
        id: 2,
        title: 'Starter',
        requestsPerMonth: '50,000',
        price: 29,
        popular: true,
    },

    {
        id: 3,
        title: 'Professional',
        requestsPerMonth: '500,000',
        price: 49,
        popular: false
    },

    {
        id: 4,
        title: 'Enterprise',
        requestsPerMonth: '2,000,000',
        price: 69,
        popular: false
    },
];
interface IProps {
    open: boolean;
    handleClose: React.Dispatch<React.SetStateAction<boolean>>;
}
function ComparePlan({ open, handleClose }: IProps) {
    const classes = useStyles();
    // const [open, setOpen] = useState<boolean>(true);

    return (
        <Modal
            open={open}
            className={classes.modal}
            disableAutoFocus
        >
            <Box className={classes.modalContent}>
                {/* HEADER (fixed) */}
                <Box className={classes.headerBox}>
                    <Box className={classes.header}>
                        <Typography variant="h5">Compare plans</Typography>
                        <IconButton
                            aria-label="close button"
                            className={classes.closeBtn}
                            onClick={() => handleClose(!open)}
                        >
                            <CloseRoundedIcon />
                        </IconButton>
                    </Box>
                </Box>

                {/* BODY (scrollable) */}
                <Box className={classes.modalBody}>
                    <Box className={classes.cardsBox}>
                        <Box className={classes.multiCards}>
                            {
                                allPlans.map((card) => {
                                    return <Box className={classes.singleCard}>
                                        {card.popular && <Box className={classes.ribbon}> Most Popular</Box>}
                                        <Box className={classes.titleAndRequest}>
                                            <Typography variant="h6">{card.title}</Typography>
                                            <Box>
                                                <Typography className={classes.numberReq}>{card.requestsPerMonth}</Typography>
                                                <Typography className={classes.reqPerMonthText}>Requests/mo.</Typography>
                                            </Box>
                                        </Box>
                                        <Typography className={classes.priceTag}>&#36;{card.price}{card.price !== 0 && <><span>/</span><span>month</span></>}</Typography>
                                        <Button disableRipple className={classes.subscribeBtn}>Button</Button>
                                        <Box className={classes.listBox}>
                                            {features.map((plan) => {
                                                return <Box className={classes.list}>{plan.available ? <CheckIcon /> : <CloseIcon />}<Typography variant="body1">{plan.label}</Typography></Box>
                                            })}

                                        </Box>
                                    </Box>
                                })
                            }
                        </Box>

                        <Box className={classes.bottomCard} >
                            <Box>
                                <Typography variant="h4">Not sure which plan suits your needs?</Typography>
                                <Typography variant="h5">Let us understand your requirements and provide you with a customized plan tailored specifically for you.</Typography>
                            </Box>
                            <Button disableRipple className={classes.bottomCardBtn}>Button</Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Modal>
    );
}

export default ComparePlan;
