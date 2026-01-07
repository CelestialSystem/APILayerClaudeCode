import {
    Box,
    Typography,
    TextField,
    FormControl,
    FormLabel,
    Button,
    MenuItem,
    type SelectChangeEvent,
} from '@mui/material';
import { useStyles } from './additionalDetails.style';
import AuthHeader from '../../components/Common/AuthHeader/AuthHeader';
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import CustomSelect from '../../components/Common/FormControls/CustomSelect';
import { useState } from 'react';

const AdditionalDetails = () => {
    const classes = useStyles();
    const [getThere, setGetThere] = useState<string>('')
    function handleSelect(event: SelectChangeEvent<unknown>): void {
        setGetThere(event.target.value as string)
    }

    return (
        <Box className={classes.root}>
            <AuthHeader />

            <Box className={classes.card}>
                <Typography className={classes.title}>
                    ADDITIONAL DETAILS
                </Typography>

                <Box className={classes.formGrid}>

                    <FormControl className={classes.formControl}>
                        <FormLabel>First Name</FormLabel>
                        <TextField placeholder="Enter first name" />
                    </FormControl>

                    <FormControl className={classes.formControl}>
                        <FormLabel>Last Name</FormLabel>
                        <TextField placeholder="Enter last name" />
                    </FormControl>

                    <FormControl className={classes.formControl}>
                        <FormLabel>Company Name (optional)</FormLabel>
                        <TextField placeholder="Enter company name" />
                    </FormControl>

                    <FormControl className={classes.formControl}>
                        <FormLabel>Company Website (optional)</FormLabel>
                        <TextField error={true} placeholder="Enter company website" />
                        <Box className={classes.errorRow}>
                            <ErrorOutlineOutlinedIcon />
                            <Typography variant="h5">This link is invalid</Typography>
                        </Box>
                    </FormControl>

                    <FormControl className={`${classes.formControl} ${classes.fullWidth}`}>
                        <FormLabel>Tax ID/VAT Number (optional)</FormLabel>
                        <TextField placeholder="Enter tax ID/VAT number" />
                    </FormControl>

                    <FormControl className={classes.formControl}>
                        <FormLabel>How did you get here? (optional)</FormLabel>
                        <CustomSelect
                            value={getThere}
                            placeholder="Select how you heard about us"
                            options={[
                                { label: 'Social media', value: 'socialMedia' },
                                { label: 'Blog', value: 'blog' },
                                { label: 'Github', value: 'github' },
                                { label: 'Youtube', value: 'youtube' },
                            ]}
                            onChange={handleSelect}
                        />
                    </FormControl>

                    <FormControl className={classes.formControl}>
                        <FormLabel>Job Title (optional)</FormLabel>
                        <TextField placeholder="Enter your role in the company" />
                    </FormControl>

                    <FormControl className={`${classes.formControl} ${classes.fullWidth}`}>
                        <FormLabel>Address</FormLabel>
                        <TextField placeholder="Enter address" />
                    </FormControl>

                    <FormControl className={classes.formControl}>
                        <FormLabel>Postal Code</FormLabel>
                        <TextField placeholder="Enter postal code" />
                    </FormControl>

                    <FormControl className={classes.formControl}>
                        <FormLabel>Country/Region</FormLabel>
                        <TextField select placeholder="Select country">
                            <MenuItem value="">Select country</MenuItem>
                            <MenuItem value="india">India</MenuItem>
                            <MenuItem value="usa">USA</MenuItem>
                        </TextField>
                    </FormControl>

                    <FormControl className={classes.formControl}>
                        <FormLabel>State</FormLabel>
                        <TextField placeholder="Enter state" />
                    </FormControl>

                    <FormControl className={classes.formControl}>
                        <FormLabel>City</FormLabel>
                        <TextField placeholder="Enter city" />
                    </FormControl>
                </Box>

                <Button disableRipple className={classes.continueButton}>
                    Continue
                </Button>
            </Box>
        </Box>
    );
};

export default AdditionalDetails;
