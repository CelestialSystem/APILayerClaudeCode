import { Box, Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import useStyles from "./EmailSuccess.style";

const EmailSuccess = () => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Box className={classes.backgroundEllipse} />
      <Box className={classes.content}>
        <Box className={classes.iconWrapper}>
          <Box className={classes.outerCircle} />
          <Box className={classes.middleCircle} />
          <Box className={classes.innerCircle}>
            <CheckIcon className={classes.checkIcon} />
          </Box>
        </Box>

        <Box className={classes.textContainer}>
          <Typography variant="h2" className={classes.title}>
            Email verification Successful
          </Typography>
          <Typography variant="h5" className={classes.description}>
            Congratulations, you've successfully verified your account. You can close this tab.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default EmailSuccess;
