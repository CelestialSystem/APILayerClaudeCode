import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  Link,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { LocalOfferOutlined } from "@mui/icons-material";
import ErrorOutline from "../../assets/error.svg";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import CheckIconHead from "../../assets/check_small_white.svg";
import useStyles from "./PaymentJourney.style";
import OrderSummaryTab from "./OrderSummaryTab";
import BillingTab from "./BillingTab";
import PaymentTab from "./PaymentTab";
import EmptyCartTab from "./EmptyCartTab";
import BackdropPopup from "../../components/common/backdropPopup/BackdropPopup";
import { POPUP_TYPE, POPUP_VALUES } from "../../helpers/constants";

interface Plan {
  id: string;
  name: string;
  requests: string;
  price: string;
  priceLabel?: string;
}

interface Feature {
  name: string;
  included: boolean;
}

interface Product {
  id: string;
  name: string;
  description: string;
  tags: string[];
  plans: Plan[];
  features?: Feature[][];
  selectedPlan?: string;
  featuresTitle?: string;
}

interface BillingFormData {
  firstName: string;
  lastName: string;
  companyName: string;
  companyWebsite: string;
  taxId: string;
  address: string;
  postalCode: string;
  country: string;
  state: string;
  city: string;
}

interface PaymentFormData {
  cardHolderName: string;
  cardNumber: string;
  expirationDate: string;
  cvv: string;
}

const plans: Plan[] = [
  { id: "free", name: "Free", requests: "100", price: "$0" },
  {
    id: "starter",
    name: "Starter",
    requests: "50,000",
    price: "$29",
    priceLabel: "/month",
  },
  {
    id: "professional",
    name: "Professional",
    requests: "500,000",
    price: "$49",
    priceLabel: "/month",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    requests: "2,000,000",
    price: "$69",
    priceLabel: "/month",
  },
];

const ipstackFeatures: Feature[][] = [
  [
    { name: "Standard Support", included: false },
    { name: "SSL Encryption", included: true },
    { name: "Location Module", included: true },
  ],
  [
    { name: "Currency Module", included: false },
    { name: "Time Zone Module", included: false },
    { name: "Connection Module", included: false },
  ],
  [
    { name: "Bulk Endpoint", included: false },
    { name: "Security Module", included: false },
  ],
];

const OrderSummary: React.FC = () => {
  const classes = useStyles();
  const [currentStep, setCurrentStep] = useState(1);
  const [showEmptyCart, setShowEmptyCart] = useState(false);
  const [couponCode, setCouponCode] = useState("");
  const [billingAddresses, setBillingAddresses] = useState([
    {
      id: 1,
      fullAddress: "32 My Street, Kingston, New York 12401",
      isDefault: true,
    },
    {
      id: 2,
      fullAddress: "32 My Street, Kingston, New York 12401",
      isDefault: false,
    },
  ]);
  const [selectedAddressId, setSelectedAddressId] = useState(1);
  const [addressMenuAnchor, setAddressMenuAnchor] =
    useState<null | HTMLElement>(null);
  const [activeAddressId, setActiveAddressId] = useState<number | null>(null);
  const [selectedPaymentId, setSelectedPaymentId] = useState(1);
  const [paymentMenuAnchor, setPaymentMenuAnchor] =
    useState<null | HTMLElement>(null);
  const [activePaymentId, setActivePaymentId] = useState<number | null>(null);
  const [paymentMethods, setPaymentMethods] = useState([
    {
      id: 1,
      cardType: "VISA",
      lastFour: "7024",
      expiryDate: "12/28",
      isDefault: true,
    },
    {
      id: 2,
      cardType: "VISA",
      lastFour: "7024",
      expiryDate: "12/28",
      isDefault: false,
    },
    {
      id: 3,
      cardType: "VISA",
      lastFour: "7024",
      expiryDate: "12/28",
      isDefault: false,
    },
  ]);

  // Payment handlers
  const handlePaymentMenuOpen = (
    event: React.MouseEvent<HTMLElement>,
    paymentId: number
  ) => {
    event.stopPropagation();
    setPaymentMenuAnchor(event.currentTarget);
    setActivePaymentId(paymentId);
  };

  const handlePaymentMenuClose = () => {
    setPaymentMenuAnchor(null);
    setActivePaymentId(null);
  };

  const handleSetDefaultPayment = () => {
    setPaymentMethods((prev) =>
      prev.map((payment) => ({
        ...payment,
        isDefault: payment.id === activePaymentId,
      }))
    );
    handlePaymentMenuClose();
  };

  const handleEditPayment = () => {
    handlePaymentMenuClose();
  };

  const handleDeletePayment = () => {
    setPaymentMethods((prev) =>
      prev.filter((payment) => payment.id !== activePaymentId)
    );
    handlePaymentMenuClose();
  };

  const handleAddNewPayment = () => {
    // Open add new payment modal/form
  };

  // Address handlers
  const handleAddressMenuOpen = (
    event: React.MouseEvent<HTMLElement>,
    addressId: number
  ) => {
    event.stopPropagation();
    setAddressMenuAnchor(event.currentTarget);
    setActiveAddressId(addressId);
  };

  const handleAddressMenuClose = () => {
    setAddressMenuAnchor(null);
    setActiveAddressId(null);
  };

  const handleSetDefaultAddress = () => {
    setBillingAddresses((prev) =>
      prev.map((addr) => ({
        ...addr,
        isDefault: addr.id === activeAddressId,
      }))
    );
    handleAddressMenuClose();
  };

  const handleEditAddress = () => {
    handleAddressMenuClose();
  };

  const handleDeleteAddress = () => {
    setBillingAddresses((prev) =>
      prev.filter((addr) => addr.id !== activeAddressId)
    );
    handleAddressMenuClose();
  };

  const handleAddNewAddress = () => {
    // Open add new address modal/form
  };

  const [expandedProducts, setExpandedProducts] = useState<
    Record<string, boolean>
  >({
    ipstack: true,
    ipapi: false,
  });
  const [selectedPlans, setSelectedPlans] = useState<Record<string, string>>({
    ipstack: "starter",
    ipapi: "starter",
  });
  const [billingForm, setBillingForm] = useState<BillingFormData>({
    firstName: "Cilene",
    lastName: "Veloria",
    companyName: "Idera",
    companyWebsite: "idera.com",
    taxId: "1234543234567",
    address: "32 My Street, Kingston",
    postalCode: "12401",
    country: "US",
    state: "New York State",
    city: "New York",
  });
  const [paymentForm, setPaymentForm] = useState<PaymentFormData>({
    cardHolderName: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
  });

  const cartProducts: Product[] = [
    {
      id: "ipstack",
      name: "IPstack",
      description: "Foreign exchange rates and currency conversion JSON API.",
      tags: ["BUSINESS", "DEV TOOLS"],
      plans: plans,
      features: ipstackFeatures,
      featuresTitle: "Standard Kit — includes core features and higher volume.",
      selectedPlan: selectedPlans.ipstack,
    },
    {
      id: "ipapi",
      name: "IPapi",
      description: "Foreign exchange rates and currency conversion JSON API.",
      tags: ["BUSINESS", "DEV TOOLS"],
      plans: plans,
      selectedPlan: selectedPlans.ipapi,
    },
  ];

  const suggestedProducts: Product[] = [
    {
      id: "currencylayer",
      name: "Currencylayer",
      description: "Foreign exchange rates and currency conversion JSON API.",
      tags: ["BUSINESS", "DEV TOOLS"],
      plans: plans,
    },
    {
      id: "mediastack",
      name: "Mediastack",
      description: "Foreign exchange rates and currency conversion JSON API.",
      tags: ["BUSINESS", "DEV TOOLS"],
      plans: plans,
    },
  ];

  const toggleProductExpanded = (productId: string) => {
    setExpandedProducts((prev) => ({
      ...prev,
      [productId]: !prev[productId],
    }));
  };

  const handlePlanSelect = (productId: string, planId: string) => {
    setSelectedPlans((prev) => ({
      ...prev,
      [productId]: planId,
    }));
  };

  const handleBillingChange =
    (field: keyof BillingFormData) =>
    (event: React.ChangeEvent<HTMLInputElement | { value: unknown }>) => {
      setBillingForm((prev) => ({
        ...prev,
        [field]: event.target.value,
      }));
    };

  const handleBillingFormUpdate = (updates: Partial<BillingFormData>) => {
    setBillingForm((prev) => ({
      ...prev,
      ...updates,
    }));
  };

  const handlePaymentChange =
    (field: keyof PaymentFormData) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setPaymentForm((prev) => ({
        ...prev,
        [field]: event.target.value,
      }));
    };

  const handleContinue = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else if (currentStep === 3) {
      // Payment completed - show empty cart
      setShowEmptyCart(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const getStepCircleClass = (step: number) => {
    if (step < currentStep) {
      return `${classes.stepCircle} ${classes.stepCircleCompleted}`;
    } else if (step === currentStep) {
      return `${classes.stepCircle} ${classes.stepCircleActive}`;
    }
    return `${classes.stepCircle} ${classes.stepCircleInactive}`;
  };

  const getStepLabelClass = (step: number) => {
    if (step === currentStep) {
      return classes.stepLabelActive;
    }
    return classes.stepLabelInactive;
  };

  return (
    <Box className={classes.root}>
      {/* Header */}
      <Box className={classes.header}>
        <Link
          href="#"
          underline="none"
          className={classes.backButton}
          onClick={handleBack}
        >
          <ArrowBackIcon sx={{ color: "#0052CC", fontSize: "24px" }} />
          <Typography variant="h4">Back</Typography>
        </Link>

        <Box className={classes.stepper}>
          <Box className={classes.stepWrapper}>
            <Box className={classes.step}>
              <Box
                className={getStepCircleClass(1)}
                onClick={() => setCurrentStep(1)}
                sx={{ cursor: "pointer" }}
              >
                {currentStep > 1 ? (
                  <Box component="img" src={CheckIconHead} />
                ) : (
                  <Typography variant="h4">1</Typography>
                )}
              </Box>
              <Typography variant="h4" className={getStepLabelClass(1)}>
                Order Summary
              </Typography>
            </Box>
            <Box
              className={classes.stepLine}
              sx={{
                backgroundColor: currentStep > 1 ? "#0D9488" : "#6E7786",
              }}
            />
          </Box>

          <Box className={classes.stepWrapper}>
            <Box className={classes.step}>
              <Box
                className={getStepCircleClass(2)}
                onClick={() => currentStep >= 2 && setCurrentStep(2)}
                sx={{ cursor: currentStep >= 2 ? "pointer" : "default" }}
              >
                {currentStep > 2 ? (
                  <Box component="img" src={CheckIconHead} />
                ) : (
                  <Typography variant="h4">2</Typography>
                )}
              </Box>
              <Typography variant="h4" className={getStepLabelClass(2)}>
                Billing Information
              </Typography>
            </Box>
            <Box
              className={classes.stepLine}
              sx={{
                backgroundColor: currentStep > 2 ? "#0D9488" : "#6E7786",
              }}
            />
          </Box>

          <Box className={classes.step}>
            <Box className={getStepCircleClass(3)}>
              {currentStep > 3 ? (
                <Box component="img" src={CheckIconHead} />
              ) : (
                <Typography variant="h4">3</Typography>
              )}
            </Box>
            <Typography variant="h4" className={getStepLabelClass(3)}>
              Payment
            </Typography>
          </Box>
        </Box>

        <Typography variant="h4" className={classes.needHelp}>
          Need help?
        </Typography>
      </Box>

      {/* Content */}
      <Box className={classes.content}>
        {/* Show Empty Cart when payment is complete */}
        {showEmptyCart ? (
          <EmptyCartTab />
        ) : (
          <>
            {/* Left Column - Dynamic Content */}
            {currentStep === 1 && (
              <OrderSummaryTab
                cartProducts={cartProducts}
                suggestedProducts={suggestedProducts}
                expandedProducts={expandedProducts}
                selectedPlans={selectedPlans}
                plans={plans}
                onToggleExpanded={toggleProductExpanded}
                onPlanSelect={handlePlanSelect}
              />
            )}
            {currentStep === 2 && (
              <BillingTab
                billingForm={billingForm}
                billingAddresses={billingAddresses}
                selectedAddressId={selectedAddressId}
                addressMenuAnchor={addressMenuAnchor}
                activeAddressId={activeAddressId}
                onBillingChange={handleBillingChange}
                onBillingFormUpdate={handleBillingFormUpdate}
                onSelectAddress={setSelectedAddressId}
                onAddressMenuOpen={handleAddressMenuOpen}
                onAddressMenuClose={handleAddressMenuClose}
                onSetDefaultAddress={handleSetDefaultAddress}
                onEditAddress={handleEditAddress}
                onDeleteAddress={handleDeleteAddress}
                onAddNewAddress={handleAddNewAddress}
              />
            )}
            {currentStep === 3 && (
              <PaymentTab
                paymentForm={paymentForm}
                paymentMethods={paymentMethods}
                selectedPaymentId={selectedPaymentId}
                paymentMenuAnchor={paymentMenuAnchor}
                onPaymentChange={handlePaymentChange}
                onSelectPayment={setSelectedPaymentId}
                onPaymentMenuOpen={handlePaymentMenuOpen}
                onPaymentMenuClose={handlePaymentMenuClose}
                onSetDefaultPayment={handleSetDefaultPayment}
                onEditPayment={handleEditPayment}
                onDeletePayment={handleDeletePayment}
                onAddNewPayment={handleAddNewPayment}
              />
            )}

            {/* Right Column - Summary */}
            <Box className={classes.rightColumn}>
          <Box className={classes.card}>
            <Typography variant="h3" className={classes.cardTitle}>
              Coupon
            </Typography>
            <Box className={classes.couponSection}>
              <TextField
                className={classes.couponInput}
                placeholder="Enter coupon code"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                variant="outlined"
                fullWidth
              />
              <Button
                className={`${classes.applyButton} ${
                  couponCode ? classes.applyButtonActive : ""
                }`}
              >
                Apply
              </Button>
            </Box>
            <Box className={classes.couponErrorMessage}>
              <Box
                component="img"
                src={ErrorOutline}
                className={classes.couponErrorIcon}
              />
              <Typography className={classes.couponErrorText}>
                Invalid coupon code.
              </Typography>
            </Box>

            <Box className={classes.couponSuccess}>
              <LocalOfferOutlined className={classes.couponSuccessIcon} />
              <Box>
                <Typography variant="h6" className={classes.couponSuccessTitle}>
                  Congratulations Cline!
                </Typography>
                <Typography variant="h6" className={classes.couponSuccessText}>
                  You've unlocked a discount of $20 dollars
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box className={classes.card}>
            <Typography variant="h2" className={classes.cardTitle}>
              Summary
            </Typography>

            <Box className={classes.summaryItem}>
              <Box className={classes.summaryItemInfo}>
                <Typography variant="h4" className={classes.summaryItemName}>
                  IPstack (Professional Plan)
                </Typography>
                <Typography
                  variant="body1"
                  className={classes.summaryItemBilling}
                >
                  Billed monthly
                </Typography>
              </Box>
              <Typography variant="h2" className={classes.summaryItemPrice}>
                $140.99
              </Typography>
            </Box>

            <Box className={classes.summaryItem}>
              <Box className={classes.summaryItemInfo}>
                <Typography variant="h4" className={classes.summaryItemName}>
                  IPstack (Starter Plan Partial Refund)
                </Typography>
                <Typography
                  variant="body1"
                  className={classes.summaryItemBilling}
                >
                  Billed monthly
                </Typography>
              </Box>
              <Typography
                variant="h2"
                className={classes.summaryItemPriceCredit}
              >
                -$20.99
              </Typography>
            </Box>
            <Box className={classes.infoMessage}>
              <InfoOutlinedIcon className={classes.infoIcon} />
              <Typography variant="body2" className={classes.infoText}>
                Since you have 7 days remaining on your Starter plan, the amount
                you've already paid will be applied toward your upgrade cost.
              </Typography>
            </Box>

            <Box className={classes.divider} />

            <Box className={classes.totalRow}>
              <Typography variant="h3" className={classes.totalLabel}>
                Total
              </Typography>
              <Typography variant="h2" className={classes.totalPrice}>
                $120.99
              </Typography>
            </Box>

            <Button className={classes.continueButton} onClick={handleContinue}>
              Continue
            </Button>
          </Box>
            </Box>
          </>
        )}
      </Box>
      {/* Popup for Free Plan  */}
      <BackdropPopup
        open={false}
        values={{
          type: POPUP_TYPE.SUCCESS,
          title: POPUP_VALUES.SUCCESS.title,
          description: POPUP_VALUES.SUCCESS.description,
        }}
      />
     {/* Popup for paid plan 1 API  */}
      <BackdropPopup
        open={false}
        values={{
          type: POPUP_TYPE.SUCCESS,
          title: POPUP_VALUES.PAYMENT_PLAN.title,
          description: POPUP_VALUES.PAYMENT_PLAN.description,
        }}
      />
        {/* Popup for paid plan multiple APIs  */}
        <BackdropPopup
        open={false}
        values={{
          type: POPUP_TYPE.SUCCESS,
          title: POPUP_VALUES.PAYMENT_DONE_MULTI.title,
          description: POPUP_VALUES.PAYMENT_DONE_MULTI.description,
        }}
      />
      {/* Popup for payment failed */}
      <BackdropPopup
        open={false}
        values={{
          type: POPUP_TYPE.FAILED,
          title: POPUP_VALUES.PAYMENT_FAILED.title,
          description: POPUP_VALUES.PAYMENT_FAILED.description,
        }}
      />
      {/* Popup for coupon code copy */}
      <BackdropPopup
        open={false}
        values={{
          type: POPUP_TYPE.COUPON_CODE,
          title: POPUP_VALUES.COUPON_CODE.title,
          description: POPUP_VALUES.COUPON_CODE.description,
          couponCode: 'Save 20 IPlayer',
        }}
      />
    </Box>
  );
};

export default OrderSummary;
