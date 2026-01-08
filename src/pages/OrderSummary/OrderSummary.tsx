import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  IconButton,
  Link,
  Select,
  Radio,
  Menu,
  MenuItem,
  FormControl,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { LocalOfferOutlined } from "@mui/icons-material";
import ErrorOutline from "../../assets/error.svg";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import VisaIcon from "../../assets/Badge.svg";
import EditIcon from "../../assets/edit.svg";
import CrossIcon from "../../assets/close_small.svg";
import CheckIcon from "../../assets/check_small.svg";
import CheckIconHead from "../../assets/check_small_white.svg";
import useStyles from "./OrderSummary.style";
import ProductIcon from "../../assets/product-icon.svg";
import CardVisa from "../../assets/card-visa.svg";
import CardMastercard from "../../assets/card-mastercard.svg";
import CardAmex from "../../assets/card-amex.svg";
import CardDiscover from "../../assets/card-discover.svg";
import CardDiners from "../../assets/card-diners.svg";
import CardJcb from "../../assets/card-jcb.svg";

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

  // Add these handlers inside your component
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
    // Open edit modal/form
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
  const [billingForm, setBillingForm] = useState({
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
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderPlanCard = (
    plan: Plan,
    productId: string,
    isSelected: boolean
  ) => (
    <Box
      key={plan.id}
      className={`${classes.planCard} ${
        isSelected ? classes.planCardSelected : ""
      }`}
      onClick={() => handlePlanSelect(productId, plan.id)}
    >
      <Box>
        <Typography variant="h4" className={classes.planName}>
          {plan.name}
        </Typography>
        <Box sx={{ mt: "8px" }}>
          <Typography variant="h3" className={classes.planRequests}>
            {plan.requests}
          </Typography>
          <Typography variant="body1" className={classes.planRequestsLabel}>
            Requests/mo.
          </Typography>
        </Box>
      </Box>
      <Box>
        <Typography component="span" variant="h2" className={classes.planPrice}>
          {plan.price}
        </Typography>
        {plan.priceLabel && (
          <Typography
            component="span"
            variant="h4"
            className={classes.planPriceMonth}
          >
            {plan.priceLabel}
          </Typography>
        )}
      </Box>
    </Box>
  );

  const renderFeatureItem = (feature: Feature) => (
    <Box key={feature.name} className={classes.featureItem}>
      {feature.included ? (
        <Box component="img" src={CheckIcon} />
      ) : (
        <Box component="img" src={CrossIcon} />
      )}
      <Typography variant="body1" className={classes.featureText}>
        {feature.name}
      </Typography>
    </Box>
  );

  const renderExpandedProductCard = (product: Product) => (
    <Box className={classes.productCard}>
      <Box className={classes.productCardContent}>
        <Box className={classes.productHeader}>
          <Box className={classes.productInfo}>
            <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Box
                component="img"
                src={ProductIcon}
                alt={product.name}
                className={classes.productIcon}
              />
              <Typography variant="h3" className={classes.productName}>
                {product.name}
              </Typography>
            </Box>
            <Box className={classes.productTags}>
              {product.tags.map((tag) => (
                <Typography
                  key={tag}
                  variant="h6"
                  className={classes.productTag}
                >
                  {tag}
                </Typography>
              ))}
            </Box>
          </Box>
          <Box>
            <IconButton
              className={classes.closeButton}
              aria-label="Remove product"
            >
              <CloseIcon />
            </IconButton>
          </Box>
        </Box>
        <Typography variant="h5" className={classes.productDescription}>
          {product.description}
        </Typography>
        <Box sx={{ margin: "22px 0px 24px" }}>
          <Typography variant="h4" className={classes.selectPlanTitle}>
            Select Plan
          </Typography>
          <Box className={classes.planGrid}>
            {product.plans.map((plan) =>
              renderPlanCard(
                plan,
                product.id,
                plan.id === selectedPlans[product.id]
              )
            )}
          </Box>
        </Box>
        {product.features && (
          <Box>
            <Typography variant="h4" className={classes.featuresTitle}>
              {product.featuresTitle}
            </Typography>
            <Box className={classes.featuresGrid}>
              {product.features.map((column, idx) => (
                <Box key={idx} className={classes.featuresColumn}>
                  {column.map(renderFeatureItem)}
                </Box>
              ))}
            </Box>
          </Box>
        )}
      </Box>
      <Box
        className={classes.productCardFooter}
        onClick={() => toggleProductExpanded(product.id)}
      >
        <Typography variant="h4" className={classes.viewToggleText}>
          View Less
        </Typography>
        <KeyboardArrowUpIcon sx={{ color: "#0052CC", fontSize: "16px" }} />
      </Box>
    </Box>
  );

  const renderCollapsedProductCard = (product: Product) => (
    <Box className={classes.productCard}>
      <Box className={classes.productCardContent}>
        <Box className={classes.productHeader}>
          <Box className={classes.productInfo}>
            <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Box
                component="img"
                src={ProductIcon}
                alt={product.name}
                className={classes.productIcon}
              />
              <Typography variant="h3" className={classes.productName}>
                {product.name}
              </Typography>
            </Box>
            <Box className={classes.productTags}>
              {product.tags.map((tag) => (
                <Typography
                  key={tag}
                  variant="h6"
                  className={classes.productTag}
                >
                  {tag}
                </Typography>
              ))}
            </Box>
          </Box>
          <Box>
            <IconButton
              className={classes.closeButton}
              aria-label="Remove product"
            >
              <CloseIcon />
            </IconButton>
          </Box>
        </Box>

        <Typography variant="h5" className={classes.productDescription}>
          {product.description}
        </Typography>

        <Box className={classes.collapsedProductInfo}>
          <Box className={classes.collapsedPlanInfo}>
            <Typography variant="h4" className={classes.collapsedPlanName}>
              {plans.find((p) => p.id === selectedPlans[product.id])?.name ||
                "Starter"}
            </Typography>
            <Box component="img" src={EditIcon} className={classes.editIcon} />
          </Box>
          <Box className={classes.collapsedPrice}>
            <Typography
              component="span"
              variant="h2"
              className={classes.planPrice}
            >
              {plans.find((p) => p.id === selectedPlans[product.id])?.price ||
                "$29"}
            </Typography>
            <Typography
              component="span"
              variant="h4"
              className={classes.planPriceMonth}
            >
              /month
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        className={classes.productCardFooter}
        onClick={() => toggleProductExpanded(product.id)}
      >
        <Typography variant="h4" className={classes.viewToggleText}>
          View Plan Details
        </Typography>
        <KeyboardArrowDownIcon sx={{ color: "#0052CC", fontSize: "16px" }} />
      </Box>
    </Box>
  );

  const renderSuggestionCard = (product: Product) => (
    <Box key={product.id} className={classes.productCard} sx={{ mb: "16px" }}>
      <Box className={classes.productCardContent}>
        <Box className={classes.productHeader}>
          <Box className={classes.productInfo}>
            <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Box
                component="img"
                src={ProductIcon}
                alt={product.name}
                className={classes.productIcon}
              />
              <Typography variant="h3" className={classes.productName}>
                {product.name}
              </Typography>
            </Box>
            <Box className={classes.productTags}>
              {product.tags.map((tag) => (
                <Typography
                  key={tag}
                  variant="h6"
                  className={classes.productTag}
                >
                  {tag}
                </Typography>
              ))}
            </Box>
          </Box>
        </Box>
        <Typography variant="h5" className={classes.productDescription}>
          {product.description}
        </Typography>
        <Box sx={{ marginTop: "22px" }}>
          <Typography variant="h4" className={classes.selectPlanTitle}>
            Select Plan
          </Typography>
          <Box className={classes.planGrid}>
            {product.plans.map((plan) => (
              <Box key={plan.id} className={classes.planCard}>
                <Box>
                  <Typography variant="h4" className={classes.planName}>
                    {plan.name}
                  </Typography>
                  <Box sx={{ mt: "8px" }}>
                    <Typography variant="h3" className={classes.planRequests}>
                      {plan.requests}
                    </Typography>
                    <Typography
                      variant="body1"
                      className={classes.planRequestsLabel}
                    >
                      Requests/mo.
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <Typography
                    component="span"
                    variant="h2"
                    className={classes.planPrice}
                  >
                    {plan.price}
                  </Typography>
                  {plan.priceLabel && (
                    <Typography
                      component="span"
                      variant="h4"
                      className={classes.planPriceMonth}
                    >
                      {plan.priceLabel}
                    </Typography>
                  )}
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
      <Box className={classes.suggestionCardFooter}>
        <Button className={classes.addToCartButton}>Add to cart</Button>
        <Box className={classes.learnMoreLink}>
          <Typography variant="h4">Learn More</Typography>
          <ArrowForwardIcon sx={{ color: "#0052CC", fontSize: "16px" }} />
        </Box>
      </Box>
    </Box>
  );

  const renderBillingForm = () => (
    <Box className={classes.billingFormCard}>
      <Box className={classes.formRow}>
        <Box className={classes.formField}>
          <Typography variant="h6" className={classes.formLabel}>
            First Name
          </Typography>
          <TextField
            className={classes.formInput}
            placeholder="Enter first name"
            value={billingForm.firstName}
            onChange={handleBillingChange("firstName")}
            variant="outlined"
            fullWidth
          />
        </Box>
        <Box className={classes.formField}>
          <Typography variant="h6" className={classes.formLabel}>
            Last Name
          </Typography>
          <TextField
            className={classes.formInput}
            placeholder="Enter last name"
            value={billingForm.lastName}
            onChange={handleBillingChange("lastName")}
            variant="outlined"
            fullWidth
          />
        </Box>
      </Box>

      {/* Row 2: Company Name, Company Website */}
      <Box className={classes.formRow}>
        <Box className={classes.formField}>
          <Typography variant="h6" className={classes.formLabel}>
            Company Name (optional)
          </Typography>
          <TextField
            className={classes.formInput}
            placeholder="Enter company name"
            value={billingForm.companyName}
            onChange={handleBillingChange("companyName")}
            variant="outlined"
            fullWidth
          />
        </Box>
        <Box className={classes.formField}>
          <Typography variant="h6" className={classes.formLabel}>
            Company Website (optional)
          </Typography>
          <TextField
            className={classes.formInput}
            placeholder="Enter company website"
            value={billingForm.companyWebsite}
            onChange={handleBillingChange("companyWebsite")}
            variant="outlined"
            fullWidth
          />
        </Box>
      </Box>

      {/* Row 3: Tax ID/VAT Number */}
      <Box className={classes.formFieldFull}>
        <Typography variant="h6" className={classes.formLabel}>
          Tax ID/VAT Number (optional)
        </Typography>
        <TextField
          className={classes.formInput}
          placeholder="Enter tax ID/VAT number"
          value={billingForm.taxId}
          onChange={handleBillingChange("taxId")}
          variant="outlined"
          fullWidth
        />
      </Box>
      {/* Row 4: Address */}
      <Box className={classes.formFieldFull}>
        <Typography variant="h6" className={classes.formLabel}>
          Address
        </Typography>
        <TextField
          className={classes.formInput}
          placeholder="Enter Address"
          value={billingForm.address}
          onChange={handleBillingChange("address")}
          variant="outlined"
          fullWidth
        />
      </Box>

      {/* Row 5: Postal Code, Country/Region */}
      <Box className={classes.formRow}>
        <Box className={classes.formField}>
          <Typography variant="h6" className={classes.formLabel}>
            Postal Code
          </Typography>
          <TextField
            className={classes.formInput}
            placeholder="Enter postal code"
            value={billingForm.postalCode}
            onChange={handleBillingChange("postalCode")}
            variant="outlined"
            fullWidth
          />
        </Box>
        <Box className={classes.formField}>
          <Typography variant="h6" className={classes.formLabel}>
            Country/Region
          </Typography>
          <FormControl fullWidth className={classes.formSelect}>
            <Select
              value={billingForm.country}
              onChange={(e) =>
                setBillingForm((prev) => ({
                  ...prev,
                  country: e.target.value as string,
                }))
              }
              displayEmpty
              renderValue={(selected) => {
                if (!selected) {
                  return (
                    <Typography sx={{ color: "#6e7786", fontSize: "14px" }}>
                      Select country
                    </Typography>
                  );
                }
                return selected as string;
              }}
            >
              <MenuItem value="US">United States</MenuItem>
              <MenuItem value="CA">Canada</MenuItem>
              <MenuItem value="UK">United Kingdom</MenuItem>
              <MenuItem value="DE">Germany</MenuItem>
              <MenuItem value="FR">France</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>

      {/* Row 6: State, City */}
      <Box className={classes.formRow}>
        <Box className={classes.formField}>
          <Typography variant="h6" className={classes.formLabel}>
            State
          </Typography>
          <TextField
            className={classes.formInput}
            placeholder="Enter state"
            value={billingForm.state}
            onChange={handleBillingChange("state")}
            variant="outlined"
            fullWidth
          />
        </Box>
        <Box className={classes.formField}>
          <Typography variant="h6" className={classes.formLabel}>
            City
          </Typography>
          <TextField
            className={classes.formInput}
            placeholder="Enter city"
            value={billingForm.city}
            onChange={handleBillingChange("city")}
            variant="outlined"
            fullWidth
          />
        </Box>
      </Box>

      {/* Billing Details Section */}
      <Typography variant="h2" className={classes.sectionTitle}>
        Billing Details
      </Typography>

      {/* Row 1: First Name, Last Name */}
      <Box className={classes.formRow}>
        <Box className={classes.formField}>
          <Typography variant="h6" className={classes.formLabel}>
            First Name
          </Typography>
          <TextField
            className={classes.formInput}
            placeholder="Enter first name"
            value={billingForm.firstName}
            onChange={handleBillingChange("firstName")}
            variant="outlined"
            fullWidth
          />
        </Box>
        <Box className={classes.formField}>
          <Typography variant="h6" className={classes.formLabel}>
            Last Name
          </Typography>
          <TextField
            className={classes.formInput}
            placeholder="Enter last name"
            value={billingForm.lastName}
            onChange={handleBillingChange("lastName")}
            variant="outlined"
            fullWidth
          />
        </Box>
      </Box>

      {/* Row 2: Company Name, Company Website */}
      <Box className={classes.formRow}>
        <Box className={classes.formField}>
          <Typography variant="h6" className={classes.formLabel}>
            Company Name (optional)
          </Typography>
          <TextField
            className={classes.formInput}
            placeholder="Enter company name"
            value={billingForm.companyName}
            onChange={handleBillingChange("companyName")}
            variant="outlined"
            fullWidth
          />
        </Box>
        <Box className={classes.formField}>
          <Typography variant="h6" className={classes.formLabel}>
            Company Website (optional)
          </Typography>
          <TextField
            className={classes.formInput}
            placeholder="Enter company website"
            value={billingForm.companyWebsite}
            onChange={handleBillingChange("companyWebsite")}
            variant="outlined"
            fullWidth
          />
        </Box>
      </Box>

      {/* Row 3: Tax ID/VAT Number */}
      <Box className={classes.formFieldFull}>
        <Typography variant="h6" className={classes.formLabel}>
          Tax ID/VAT Number (optional)
        </Typography>
        <TextField
          className={classes.formInput}
          placeholder="Enter tax ID/VAT number"
          value={billingForm.taxId}
          onChange={handleBillingChange("taxId")}
          variant="outlined"
          fullWidth
        />
      </Box>

      {/* Billing Address Section */}
      <Typography
        variant="h2"
        className={classes.sectionTitle}
        sx={{ marginTop: "32px" }}
      >
        Billing Address
      </Typography>

      {/* Saved Addresses */}
      <Box className={classes.addressList}>
        {billingAddresses.map((address) => (
          <Box
            key={address.id}
            className={classes.addressCard}
            onClick={() => setSelectedAddressId(address.id)}
          >
            <Box className={classes.addressCardContent}>
              <Radio
                checked={selectedAddressId === address.id}
                onChange={() => setSelectedAddressId(address.id)}
                className={classes.addressRadio}
              />
              <Box className={classes.addressInfo}>
                <Typography variant="h6" className={classes.addressLabel}>
                  Address
                </Typography>
                <Typography variant="h4" className={classes.addressText}>
                  {address.fullAddress}
                </Typography>
              </Box>
              {address.isDefault && (
                <Typography variant="h5" className={classes.defaultBadge}>
                  Default billing address
                </Typography>
              )}
            </Box>
            <IconButton
              className={classes.addressMenuButton}
              onClick={(e) => handleAddressMenuOpen(e, address.id)}
            >
              <MoreVertIcon />
            </IconButton>
          </Box>
        ))}
      </Box>

      {/* Address Menu */}
      <Menu
        anchorEl={addressMenuAnchor}
        open={Boolean(addressMenuAnchor)}
        onClose={handleAddressMenuClose}
        className={classes.addressMenu}
      >
        <MenuItem
          onClick={handleSetDefaultAddress}
          className={classes.menuItem}
        >
          <StarOutlineIcon className={classes.menuIcon} />
          Set as default
        </MenuItem>
        <MenuItem onClick={handleEditAddress} className={classes.menuItem}>
          <EditOutlinedIcon className={classes.menuIcon} />
          Edit
        </MenuItem>
        <MenuItem
          onClick={handleDeleteAddress}
          className={classes.menuItemDelete}
        >
          <DeleteOutlineIcon className={classes.menuIconDelete} />
          Delete
        </MenuItem>
      </Menu>

      {/* Add New Address Button */}
      <Button
        variant="outlined"
        className={classes.addAddressButton}
        onClick={handleAddNewAddress}
      >
        Add New Billing Address
      </Button>
    </Box>
  );

  const renderOrderSummaryContent = () => (
    <Box className={classes.leftColumn}>
      {cartProducts.map((product) =>
        expandedProducts[product.id]
          ? renderExpandedProductCard(product)
          : renderCollapsedProductCard(product)
      )}

      {/* Suggestions Section */}
      <Box sx={{ mt: "16px" }}>
        <Typography variant="h3" className={classes.suggestionsTitle}>
          You might also be interested in
        </Typography>
        {suggestedProducts.map(renderSuggestionCard)}
      </Box>
    </Box>
  );

  const renderBillingContent = () => (
    <Box className={classes.leftColumn}>{renderBillingForm()}</Box>
  );

  const renderPaymentForm = () => (
    <Box className={classes.paymentFormCard}>
      <Box className={classes.formFieldFull}>
        <Typography variant="h6" className={classes.formLabel}>
          Card Holder&apos;s Full Name
        </Typography>
        <TextField
          className={classes.formInput}
          placeholder="Enter card holder's full name"
          value={paymentForm.cardHolderName}
          onChange={handlePaymentChange("cardHolderName")}
          variant="outlined"
          fullWidth
        />
      </Box>

      {/* Card Number */}
      <Box className={classes.formFieldFull}>
        <Typography variant="h6" className={classes.formLabel}>
          Card Number
        </Typography>
        <TextField
          className={classes.formInput}
          placeholder="Enter card number"
          value={paymentForm.cardNumber}
          onChange={handlePaymentChange("cardNumber")}
          variant="outlined"
          fullWidth
        />
        <Box className={classes.cardBrandIcons}>
          <Box
            component="img"
            src={CardVisa}
            alt="Visa"
            className={classes.cardBrandIcon}
          />
          <Box
            component="img"
            src={CardMastercard}
            alt="Mastercard"
            className={classes.cardBrandIcon}
          />
          <Box
            component="img"
            src={CardAmex}
            alt="American Express"
            className={classes.cardBrandIcon}
          />
          <Box
            component="img"
            src={CardDiscover}
            alt="Discover"
            className={classes.cardBrandIcon}
          />
          <Box
            component="img"
            src={CardDiners}
            alt="Diners Club"
            className={classes.cardBrandIcon}
          />
          <Box
            component="img"
            src={CardJcb}
            alt="JCB"
            className={classes.cardBrandIcon}
          />
        </Box>
      </Box>

      {/* Expiration Date and CVV */}
      <Box className={classes.formRow}>
        <Box className={classes.formField}>
          <Typography variant="h6" className={classes.formLabel}>
            Expiration Date
          </Typography>
          <TextField
            className={classes.formInput}
            placeholder="MM/YY"
            value={paymentForm.expirationDate}
            onChange={handlePaymentChange("expirationDate")}
            variant="outlined"
            fullWidth
          />
        </Box>
        <Box className={classes.formField}>
          <Typography variant="h6" className={classes.formLabel}>
            CVV
          </Typography>
          <TextField
            className={classes.formInput}
            placeholder="Enter CVV"
            value={paymentForm.cvv}
            onChange={handlePaymentChange("cvv")}
            variant="outlined"
            fullWidth
          />
        </Box>
      </Box>

      {/* Saved Payment Methods */}
      <Box className={classes.paymentMethodsSection}>
        <Box className={classes.paymentMethodsList}>
          {paymentMethods.map((payment) => (
            <Box
              key={payment.id}
              className={classes.paymentMethodCard}
              onClick={() => setSelectedPaymentId(payment.id)}
            >
              <Box className={classes.paymentMethodContent}>
                <Radio
                  checked={selectedPaymentId === payment.id}
                  onChange={() => setSelectedPaymentId(payment.id)}
                  className={classes.paymentRadio}
                />
                <Box component="img" src={VisaIcon} />
                <Box className={classes.paymentMethodInfo}>
                  <Typography
                    variant="h4"
                    className={classes.paymentMethodTitle}
                  >
                    {payment.cardType} ending in {payment.lastFour}
                  </Typography>
                  <Typography
                    variant="h6"
                    className={classes.paymentMethodExpiry}
                  >
                    Expires {payment.expiryDate}
                  </Typography>
                </Box>
                {payment.isDefault && (
                  <Box className={classes.defaultPaymentBadge}>
                    Default payment method
                  </Box>
                )}
              </Box>
              <IconButton
                className={classes.paymentMenuButton}
                onClick={(e) => handlePaymentMenuOpen(e, payment.id)}
              >
                <MoreVertIcon />
              </IconButton>
            </Box>
          ))}
        </Box>

        {/* Payment Menu */}
        <Menu
          anchorEl={paymentMenuAnchor}
          open={Boolean(paymentMenuAnchor)}
          onClose={handlePaymentMenuClose}
          className={classes.paymentMenu}
        >
          <MenuItem
            onClick={handleSetDefaultPayment}
            className={classes.menuItem}
          >
            <StarOutlineIcon className={classes.menuIcon} />
            Set as default
          </MenuItem>
          <MenuItem onClick={handleEditPayment} className={classes.menuItem}>
            <EditOutlinedIcon className={classes.menuIcon} />
            Edit
          </MenuItem>
          <MenuItem
            onClick={handleDeletePayment}
            className={classes.menuItemDelete}
          >
            <DeleteOutlineIcon className={classes.menuIconDelete} />
            Delete
          </MenuItem>
        </Menu>

        {/* Add New Payment Method Button */}
        <Button
          variant="outlined"
          className={classes.addPaymentButton}
          onClick={handleAddNewPayment}
        >
          Add New Payment Method
        </Button>
      </Box>
    </Box>
  );

  const renderPaymentContent = () => (
    <Box className={classes.leftColumn}>{renderPaymentForm()}</Box>
  );

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
        {/* Left Column - Dynamic Content */}
        {currentStep === 1 && renderOrderSummaryContent()}
        {currentStep === 2 && renderBillingContent()}
        {currentStep === 3 && renderPaymentContent()}

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
      </Box>
    </Box>
  );
};

export default OrderSummary;
