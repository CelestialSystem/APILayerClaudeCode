import { Box, Typography } from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import useStyles from "./EmailError.style";

interface EmailErrorProps {
  onSendLinkAgain?: () => void;
}

const EmailError = ({ onSendLinkAgain }: EmailErrorProps) => {
  const classes = useStyles();

  const handleSendLink = () => {
    onSendLinkAgain?.();
  };

  return (
    <Box className={classes.container}>
      <Box className={classes.backgroundEllipse} />
      <Box className={classes.content}>
        <Box className={classes.iconWrapper}>
          <Box className={classes.outerCircle} />
          <Box className={classes.middleCircle} />
          <Box className={classes.innerCircle}>
            <Box className={classes.errorIconCircle}>
              <ErrorOutlineIcon className={classes.errorIcon} />
            </Box>
          </Box>
        </Box>

        <Box className={classes.textContainer}>
          <Typography variant="h2" className={classes.title}>
            Email verification link expired
          </Typography>
          <Typography variant="h5" className={classes.description}>
            This link has expired. Please click the button below to request a new link.
          </Typography>
        </Box>

        <Box
          className={classes.sendButton}
          onClick={handleSendLink}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              handleSendLink();
            }
          }}
          aria-label="Send verification link again"
        >
          <Typography variant="h4" className={classes.sendButtonText}>
            Send Link Again
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default EmailError;
