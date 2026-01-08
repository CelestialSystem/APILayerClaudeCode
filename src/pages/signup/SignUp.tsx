import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
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
import CheckedIcon from "../../assets/circular_check.svg?react";
import AuthHeader from "../../components/Common/AuthHeader/AuthHeader";
import useStyles from "./signUp.style";
import ReCAPTCHA from "react-google-recaptcha";
import CustomCheckbox from "../../components/Common/FormControls/CustomCheckbox";
import CheckIcon from "../../assets/check.svg?react";
import CloseIcon from "../../assets/cross.svg?react";
import ComparePlan from "./ComparePlan";
import { Link as RouterLink } from "react-router-dom";

interface PlanFeature {
  name: string;
  included: boolean;
}

interface PricingPlan {
  id: string;
  name: string;
  requests: string;
  price: string;
  priceUnit: string;
  subtitle?: string;
  features?: PlanFeature[];
}

const pricingPlans: PricingPlan[] = [
  {
    id: "free",
    name: "Free",
    requests: "100 Requests / month",
    price: "$0",
    priceUnit: "",
    subtitle: "Try Ipstack API for free.",
    features: [
      { name: "Standard Support", included: false },
      { name: "Currency Module", included: false },
      { name: "Bulk Endpoint", included: false },
      { name: "SSL Encryption", included: true },
      { name: "Time Zone Module", included: true },
      { name: "Security Module", included: true },
      { name: "Location Module", included: true },
      { name: "Connection Module", included: true },
    ],
  },
  {
    id: "starter",
    name: "Starter",
    requests: "50,000 Requests / month",
    price: "$29",
    priceUnit: "/month",
  },
  {
    id: "professional",
    name: "Professional",
    requests: "500,000 Requests / month",
    price: "$49",
    priceUnit: "/month",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    requests: "2,000,000 Requests / month",
    price: "$69",
    priceUnit: "/month",
  },
];
function SignUp() {
  const classes = useStyles();
  const isPassCharCorrect = true;
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [selectedPlan, setSelectedPlan] = useState("free");
  const [expanded, setExpanded] = useState(false);
  const [openComparePlan, setOpenComparePlan] = useState(false);

  const handleToggle = (e: React.MouseEvent) => {
    e.preventDefault(); // prevent page jump
    e.stopPropagation(); // prevent checkbox toggle
    setExpanded((prev) => !prev);
  };
  return (
    <Box className={classes.root}>
      <AuthHeader />
      <Box className={classes.mainBox}>
        <Box className={classes.signupBox}>
          <Box className={classes.TopBoxBtns}>
            <Typography variant="h2">Welcome to APILayer</Typography>
            <Box className={classes.signUpBtns}>
              <Button disableRipple startIcon={<GithubIcon />}>
                Sign up with Github
              </Button>
              <Button disableRipple startIcon={<GoogleIcon />}>
                Sign up with Google
              </Button>
            </Box>
          </Box>

          {/* Login form */}
          <form className={classes.form}>
            <Box>
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
                  <Typography variant="h5">
                    Email already exist, login instead
                  </Typography>
                </Box>
              </FormControl>
              <Box className={classes.passField}>
                <FormControl className={classes.formControl}>
                  <FormLabel htmlFor="newPassword">New Password</FormLabel>
                  <TextField
                    type={showPassword ? "text" : "password"}
                    id="newPassword"
                    name="newPassword"
                    placeholder="Enter new password"
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
                <Box className={classes.suggestion}>
                  <Typography variant="h6">Password must contain</Typography>
                  {/* password character suggestion */}
                  <Box className={classes.suggestionMsg}>
                    {isPassCharCorrect ? (
                      <CheckedIcon />
                    ) : (
                      <Box className="emptyCircle" />
                    )}
                    <Typography variant="body1">
                      At least 6 characters
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
            <ReCAPTCHA sitekey="YOUR_SITE_KEY" />
            <FormControlLabel
              className={classes.checkboxText}
              control={<CustomCheckbox />}
              label={
                <Typography component="span" fontSize={14}>
                  I have read, understand, and agree to APILayer&apos;s{" "}
                  <Link href="" underline="none">
                    Terms of Use{" "}
                  </Link>
                  &amp; Privacy Statement
                </Typography>
              }
            />
            <FormControlLabel
              className={classes.checkboxText}
              control={<CustomCheckbox />}
              label={
                <Typography component="span">
                  {!expanded ? (
                    <>
                      I agree to join APILayer&apos;s mailing list.{" "}
                      <Link href="#" underline="none" onClick={handleToggle}>
                        Read more
                      </Link>
                    </>
                  ) : (
                    <>
                      I agree to receive marketing communication from APILayer
                      for product updates, sales services, promotions, news, and
                      events. I can withdraw my consent at any time and update
                      my communication preferences at the subscription center
                      from any email received.{" "}
                      <Link href="#" underline="none" onClick={handleToggle}>
                        Read less
                      </Link>
                    </>
                  )}
                </Typography>
              }
            />

            <Box className={classes.signupBtnBox}>
              <Button type="submit" disableRipple className={classes.signupBtn}>
                Sign Up
              </Button>
              <Typography variant="h6">
                Already have an account?{" "}
                <Link
                  className={classes.Link}
                  component={RouterLink}
                  to="/login"
                >
                  Login
                </Link>
              </Typography>
            </Box>
          </form>
        </Box>
        <Box className={classes.rightPanel}>
          {/* Header */}
          <Box className={classes.pricingHeader}>
            <Typography className={classes.pricingTitle}>
              Your iPapi Plan
            </Typography>
          </Box>

          {/* Plan Cards */}
          {pricingPlans.map((plan) => (
            <Box
              key={plan.id}
              className={`${classes.planCard} ${
                selectedPlan === plan.id ? classes.planCardSelected : ""
              }`}
            >
              <Box
                className={classes.planHeader}
                onClick={() => setSelectedPlan(plan.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    setSelectedPlan(plan.id);
                  }
                }}
                aria-label={`Select ${plan.name} plan`}
                aria-pressed={selectedPlan === plan.id}
              >
                <Box>
                  <Typography variant="h2" className={classes.planName}>
                    {plan.name}
                  </Typography>
                  <Typography variant="h4" className={classes.planRequests}>
                    {plan.requests}
                  </Typography>
                </Box>
                <Box className={classes.planPriceContainer}>
                  <Typography
                    variant="h1"
                    component="span"
                    className={classes.planPrice}
                  >
                    {plan.price}
                  </Typography>
                  <Typography
                    component="span"
                    className={classes.planPriceUnit}
                  >
                    {plan.priceUnit}
                  </Typography>
                </Box>
              </Box>

              {/* Expanded Features for Selected Plan */}
              {selectedPlan === plan.id && plan.features && (
                <Box className={classes.planFeatures}>
                  {plan.subtitle && (
                    <Typography className={classes.planSubtitle}>
                      {plan.subtitle}
                    </Typography>
                  )}
                  <Box className={classes.featuresGrid}>
                    {plan.features.map((feature) => (
                      <Box key={feature.name} className={classes.featureItem}>
                        {feature.included ? <CheckIcon /> : <CloseIcon />}
                        <Typography className={classes.featureText}>
                          {feature.name}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>
              )}
            </Box>
          ))}

          {/* Compare Plans Link */}
          <Typography variant="h5" className={classes.comparePlansText}>
            To see the side-by-side comparison,{" "}
            <Link
              underline="none"
              onClick={(e) => {
                e.preventDefault();
                setOpenComparePlan(true);
              }}
            >
              Compare Plans
            </Link>
          </Typography>
        </Box>
        {/* Compare plan popup */}
        <ComparePlan open={openComparePlan} handleClose={setOpenComparePlan} />
      </Box>
    </Box>
  );
}

export default SignUp;
