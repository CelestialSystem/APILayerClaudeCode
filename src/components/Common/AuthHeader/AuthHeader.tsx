import { Avatar, AvatarGroup, Box, Link, Typography } from '@mui/material'
import useStyles from './authHeader.style'
import apiLayerLogo from '../../../assets/api_layer_logo.svg';
import apiLogo1 from '../../../assets/api_logo1.svg';
import apiLogo2 from '../../../assets/api_logo2.svg';
import apiLogo3 from '../../../assets/api_logo3.svg';
import apiLogo4 from '../../../assets/api_logo4.svg';

function AuthHeader() {
    const classes = useStyles();
    return (
        <Box className={classes.header}>
            <img src={apiLayerLogo} alt="API Layer" />
            <Box className={classes.rightHeader}>
                <AvatarGroup spacing={18} className={classes.apiAvatarGroup}>
                    <Avatar alt="Curated API Image1" src={apiLogo1} />
                    <Avatar alt="Curated API Image2" src={apiLogo2} />
                    <Avatar alt="Curated API Image3" src={apiLogo3} />
                    <Avatar alt="Curated API Image4" src={apiLogo4} />
                </AvatarGroup>

                <Box className={classes.textLink}>
                    <Typography variant="h3">Curated APIs</Typography>
                    <Link underline="none">Explore Now</Link>
                </Box>
            </Box>
        </Box>
    )
}

export default AuthHeader