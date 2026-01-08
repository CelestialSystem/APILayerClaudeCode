import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import useStyles from "./forgotPassword.style";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import AuthHeader from "../../components/Common/AuthHeader/AuthHeader";
import BackdropPopup from "../../components/Common/BackdropPopup/BackdropPopup";
import { POPUP_TYPE, POPUP_VALUES } from "../../helpers/constants";
import { Link as RouterLink } from "react-router-dom";

function ForgotPassword() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <AuthHeader />
      <Box className={classes.mainBox}>
        <Box className={classes.topBox}>
          <Typography variant="h2">Forgot Password</Typography>
          <Typography variant="h5">
            Enter your email below to receive a password reset link.
          </Typography>
        </Box>
        <form>
          <FormControl className={classes.formControl}>
            <FormLabel htmlFor="emailField">Email</FormLabel>
            <TextField
              type="email"
              id="emailField"
              name="email"
              placeholder="Enter email"
            />
            <Box className={classes.errorRow}>
              <ErrorOutlineOutlinedIcon />
              <Typography variant="h5">This email does not exist.</Typography>
            </Box>
          </FormControl>
          <Box className={classes.btnBox}>
            <Button type="submit" disableRipple className={classes.submitBtn}>
              Submit
            </Button>
            <Typography variant="h6">
              Back to{" "}
              <Link className={classes.Link} component={RouterLink} to="/login">
                Login
              </Link>
            </Typography>
          </Box>
        </form>
      </Box>
      {/* popup */}
      <BackdropPopup
        open={false}
        values={{
          type: POPUP_TYPE.EMAIL_VERIFICATION,
          title: POPUP_VALUES.RESET_PASSWORD_EMAIL.title,
          description: POPUP_VALUES.RESET_PASSWORD_EMAIL.description,
        }}
      />
    </Box>
  );
}

export default ForgotPassword;
