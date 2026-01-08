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
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import AuthHeader from "../../components/common/authHeader/AuthHeader";
import CheckedIcon from '../../assets/circular_check.svg?react';
import { useState } from "react";
import useStyles from "./resetPassword.style";

function ResetPassword() {
    const classes = useStyles();
    const [showPassword, setShowPassword] = useState<boolean>(true);
    const isPassCharCorrect = true;

    return (
        <Box className={classes.root}>
            <AuthHeader />
            <Box className={classes.mainBox}>
                <Box className={classes.topBox}>
                    <Typography variant="h2">Reset Password</Typography>
                    <Typography variant="h5">Create a new Password to secure your account.</Typography>
                </Box>
                <form>
                    <Box className={classes.bothPassBox}>
                        <Box>
                            <FormControl className={classes.formControl}>
                                <FormLabel htmlFor='newPassword'>New Password</FormLabel>
                                <TextField type={showPassword ? 'text' : 'password'} id='newPassword' name='newPassword'
                                    placeholder='Enter new password' InputProps={{
                                        endAdornment: (
                                            <InputAdornment position='end'>
                                                <IconButton disableTouchRipple onClick={() => setShowPassword(!showPassword)}>
                                                    {
                                                        showPassword ? (<VisibilityOutlinedIcon />) : (
                                                            <VisibilityOffOutlinedIcon />
                                                        )
                                                    }
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </FormControl>
                            <Box className={classes.suggestion}>
                                <Typography variant="h6">Password must contain</Typography>
                                {/* password character suggestion */}
                                <Box className={classes.suggestionMsg}>
                                    {isPassCharCorrect ? <CheckedIcon /> : <Box className="emptyCircle" />}
                                    <Typography variant="body1">At least 6 characters</Typography></Box>
                            </Box>
                        </Box>

                        <FormControl className={classes.formControl}>
                            <FormLabel htmlFor='confirmNewPassword'>New Password Again</FormLabel>
                            <TextField type={showPassword ? 'text' : 'password'} id='confirmNewPassword'
                                name='confirmNewPassword'
                                placeholder='Enter new password again' InputProps={{
                                    endAdornment: (
                                        <InputAdornment position='end'>
                                            <IconButton disableTouchRipple onClick={() => setShowPassword(!showPassword)}>
                                                {
                                                    showPassword ? (<VisibilityOutlinedIcon />) : (
                                                        <VisibilityOffOutlinedIcon />
                                                    )
                                                }
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                                error={true}   //Make it true for error state 'Red Border will come'
                            />
                            <Box className={classes.errorRow}>
                                <ErrorOutlineOutlinedIcon />
                                <Typography variant="h5">Password doesn't match</Typography>
                            </Box>
                        </FormControl>
                    </Box>
                    <Box className={classes.btnBox}>
                        <Button type='submit' disableRipple className={classes.submitBtn}>
                            Submit
                        </Button>
                        <Typography variant="h6">
                            Back to{' '}
                            <Link className={classes.Link}>Login</Link>

                        </Typography>
                    </Box>

                </form>

            </Box>

        </Box>
    );
}

export default ResetPassword;
