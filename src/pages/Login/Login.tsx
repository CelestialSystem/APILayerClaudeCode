import {
  Box,
  Button,
  FormControl,
  FormLabel,
  IconButton,
  InputAdornment,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import GoogleIcon from "../../assets/google.svg?react";
import GithubIcon from "../../assets/github.svg?react";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import useStyles from "./login.style";
import AuthHeader from "../../components/Common/AuthHeader/AuthHeader";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { setDummyAuthToken } from "../../helpers/auth";

function Login() {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isError] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    setDummyAuthToken();
    navigate("/api-detail");
  };
  return (
    <Box className={classes.root}>
      <AuthHeader />
      <Box className={classes.loginBox}>
        <Box className={classes.TopBoxBtns}>
          <Typography variant="h2">Welcome to APILayer</Typography>
          <Box className={classes.signInBtns}>
            <Button disableRipple startIcon={<GithubIcon />}>
              Sign in with Github
            </Button>
            <Button disableRipple startIcon={<GoogleIcon />}>
              Sign in with Google
            </Button>
          </Box>
        </Box>

        {/* Error box*/}
        <Box className={classes.errorPlaceholderBox}>
          {/* Add error condition here! */}
          {isError && (
            <Box className={classes.errorRow}>
              <ErrorOutlineOutlinedIcon />
              <Typography variant="h5">
                Email or password is incorrect
              </Typography>
              {/* <Typography variant="h5">Email not verified. Please check your inbox. <Link href="">Resend verification link?</Link></Typography> */}
            </Box>
          )}
        </Box>

        {/* Login form */}
        <form className={classes.form}>
          <FormControl className={classes.formControl}>
            <FormLabel htmlFor="emailField">Email</FormLabel>
            <TextField
              type="email"
              id="emailField"
              name="email"
              placeholder="Enter email"
            />
          </FormControl>
          <FormControl className={classes.formControl}>
            <FormLabel htmlFor="passwordField">Password</FormLabel>
            <TextField
              type={showPassword ? "text" : "password"}
              id="passwordField"
              name="password"
              placeholder="Enter password"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      disableTouchRipple
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <VisibilityOutlinedIcon />
                      ) : (
                        <VisibilityOffOutlinedIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </FormControl>
          <Link
            component={RouterLink}
            to="/forgot-password"
            className={classes.Link}
            sx={{ display: "inline-block", marginTop: "4px" }}
          >
            Forgot Password?
          </Link>

          <Box className={classes.loginBtnBox}>
            <Button
              type="submit"
              disableRipple
              className={classes.logInBtn}
              onClick={handleLogin}
            >
              Login
            </Button>
            <Typography variant="h6">
              Don&apos;t have an account?{" "}
              <Link
                className={classes.Link}
                component={RouterLink}
                to="/signup"
              >
                Sign up
              </Link>
            </Typography>
          </Box>
        </form>
      </Box>
    </Box>
  );
}

export default Login;
