import { makeStyles } from "@mui/styles";
import { type Theme } from "@mui/material";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: "#EEF1F4",
    minHeight: "100vh",
    width: "100vw",
    overflow: "auto",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "32px 120px",
    borderBottom: "1px solid #E4EBEF",
    backgroundColor: "#EEF1F4",
    width: "100%",
    boxSizing: "border-box",
    [theme.breakpoints.down("md")]: {
      padding: "24px",
      flexWrap: "wrap",
      gap: "16px",
    },
  },
  backButton: {
    display: "flex",
    alignItems: "center",
    gap: "4px",
    cursor: "pointer",
    textDecoration: "none",
    "& .MuiTypography-root": {
      color: theme.palette.blue[500],
    },
  },
  stepper: {
    display: "flex",
    alignItems: "center",
  },
  stepWrapper: {
    display: "flex",
    alignItems: "center",
  },
  step: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "8px",
    width: "135px",
  },
  stepCircle: {
    width: "32px",
    height: "32px",
    borderRadius: "100px",
    border: "1px solid",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  stepCircleActive: {
    borderColor: theme.palette.green[500],
    "& .MuiTypography-root": {
      color: theme.palette.green[500],
    },
  },
  stepCircleInactive: {
    borderColor: theme.palette.navy[300],
    "& .MuiTypography-root": {
      color: theme.palette.navy[300],
    },
  },
  stepLabelActive: {
    color: theme.palette.navy[500],
  },
  stepLabelInactive: {
    color: theme.palette.navy[300],
  },
  stepLine: {
    width: "156px",
    height: "1px",
    backgroundColor: "#6E7786",
    marginBottom: "30px",
  },
  needHelp: {
    color: theme.palette.blue[500],
    cursor: "pointer",
    textAlign: "right",
  },
  content: {
    display: "flex",
    gap: "24px",
    padding: "32px 120px",
    width: "100%",
    boxSizing: "border-box",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      padding: "24px",
    },
  },
  leftColumn: {
    flex: 1,
    minWidth: 0,
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  rightColumn: {
    width: "437px",
    flexShrink: 0,
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  card: {
    backgroundColor: theme.palette.common.white,
    border: "1px solid #E4EBEF",
    borderRadius: "8px",
    padding: "24px",
  },
  cardTitle: {
    color: theme.palette.navy[500],
    marginBottom: "24px !important",
    fontSize: "18px !important",
  },
  couponSection: {
    display: "flex",
    gap: "24px",
    alignItems: "center",
  },
  couponInput: {
    flex: 1,
    "& .MuiInputBase-root": {
      height: "40px",
      border: "1px solid",
      borderColor: theme.palette.navy[200],
      borderRadius: "4px",
      fontFamily: "OpenSauceOne-Regular",
      fontSize: "14px",
      "& input": {
        "&::placeholder": {
          color: theme.palette.navy[300],
          opacity: 1,
        },
      },
      "& fieldset": {
        display: "none",
      },
    },
  },
  applyButton: {
    "&.MuiButton-root": {
      height: "40px",
      minWidth: "80px",
      borderRadius: "4px",
      textTransform: "none",
      backgroundColor: "#A1C4F1",
      color: "#D9E7F7",
      "&:hover": {
        backgroundColor: "#A1C4F1",
      },
    },
  },
  applyButtonActive: {
    "&.MuiButton-root": {
      backgroundColor: theme.palette.blue[500],
      color: theme.palette.common.white,
      "&:hover": {
        backgroundColor: theme.palette.blue[600],
      },
    },
  },
  summaryItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: "16px",
  },
  summaryItemInfo: {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
  },
  summaryItemName: {
    color: theme.palette.navy[500],
    letterSpacing: "-0.14px",
  },
  summaryItemBilling: {
    color: theme.palette.navy[500],
  },
  summaryItemPrice: {
    color: theme.palette.navy[500],
  },
  divider: {
    height: "1px",
    backgroundColor: "#E4EBEF",
    marginBottom: "16px",
  },
  totalRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "24px",
  },
  totalLabel: {
    color: theme.palette.navy[500],
  },
  totalPrice: {
    color: theme.palette.navy[500],
  },
  continueButton: {
    "&.MuiButton-root": {
      height: "40px",
      width: "100%",
      borderRadius: "4px",
      textTransform: "none",
      backgroundColor: theme.palette.blue[500],
      color: theme.palette.common.white,
      border: `1px solid ${theme.palette.blue[500]}`,
      "&:hover": {
        backgroundColor: theme.palette.blue[600],
      },
    },
  },
  productCard: {
    backgroundColor: theme.palette.common.white,
    border: "1px solid #E4EBEF",
    borderRadius: "8px",
    overflow: "hidden",
  },
  productCardContent: {
    padding: "24px",
    position: "relative",
  },
  productHeader: {
    display: "flex",
    alignItems: "center",
    gap: "24px",
    flexWrap: "wrap",
    justifyContent: "space-between",
    height: "40px",
  },
  productInfo: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  productIcon: {
    width: "32px",
    height: "32px",
  },
  productName: {
    color: theme.palette.navy[500],
  },
  productTags: {
    display: "flex",
    gap: "8px",
  },
  productTag: {
    backgroundColor: "#EEF1F4",
    border: "1px solid #E4EBEF",
    borderRadius: "4px",
    padding: "1px 6px",
    color: theme.palette.navy[500],
    opacity: 0.7,
    letterSpacing: "1.2px",
  },
  closeButton: {
    "& svg": {
      width: "24px",
      height: "24px",
      color: theme.palette.navy[300],
    },
  },
  productDescription: {
    color: "#212121",
    opacity: 0.8,
    letterSpacing: "-0.14px",
    marginBottom: "24px",
  },
  selectPlanTitle: {
    color: theme.palette.navy[500],
    marginBottom: "16px !important",
  },
  planGrid: {
    display: "flex",
    gap: "16px",
    flexWrap: "wrap",
  },
  planCard: {
    flex: "1 1 120px",
    minWidth: "120px",
    border: "1px solid #E4EBEF",
    borderRadius: "8px",
    padding: "16px",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    justifyContent: "center",
    height: "132px",
    cursor: "pointer",
    boxSizing: "border-box",
    backgroundColor: theme.palette.common.white,
    "&:hover": {
      borderColor: theme.palette.blue[100],
    },
  },
  planCardSelected: {
    border: `2px solid ${theme.palette.blue[500]}`,
    position: "relative",
    "&::after": {
      content: '""',
      position: "absolute",
      top: "-3px",
      left: "-3px",
      right: "-3px",
      bottom: "-3px",
      border: `1px solid ${theme.palette.blue[100]}`,
      borderRadius: "9px",
      pointerEvents: "none",
    },
  },
  planName: {
    color: theme.palette.navy[500],
  },
  planRequests: {
    color: theme.palette.blue[500],
  },
  planRequestsLabel: {
    color: theme.palette.blue[500],
  },
  planPrice: {
    color: theme.palette.navy[500],
  },
  planPriceMonth: {
    color: theme.palette.navy[500],
  },
  featuresTitle: {
    color: theme.palette.navy[500],
    marginTop: "24px !important",
    marginBottom: "16px !important",
  },
  featuresGrid: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "16px",
  },
  featuresColumn: {
    display: "flex",
    flexDirection: "column",
    minWidth: "131px",
  },
  featureItem: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  featureText: {
    color: theme.palette.navy[500],
    lineHeight: "2 !important",
  },
  productCardFooter: {
    padding: "16px 24px",
    borderTop: "1px solid #E4EBEF",
    display: "flex",
    alignItems: "center",
    gap: "4px",
    cursor: "pointer",
  },
  viewToggleText: {
    color: theme.palette.blue[500],
  },
  collapsedProductInfo: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "16px",
  },
  collapsedPlanInfo: {
    display: "flex",
    alignItems: "center",
    gap: "4px",
    marginTop: "24px",
  },
  collapsedPlanName: {
    color: theme.palette.navy[500],
  },
  editIcon: {
    width: "14px",
    height: "14px",
    color: theme.palette.blue[500],
    cursor: "pointer",
  },
  collapsedPrice: {
    display: "flex",
    alignItems: "baseline",
  },
  suggestionsTitle: {
    color: theme.palette.navy[500],
    marginBottom: "16px !important",
    marginTop: "24px !important",
  },
  suggestionCardFooter: {
    padding: "16px 24px",
    borderTop: "1px solid #E4EBEF",
    display: "flex",
    alignItems: "center",
    gap: "24px",
  },
  addToCartButton: {
    "&.MuiButton-root": {
      height: "40px",
      borderRadius: "4px",
      textTransform: "none",
      backgroundColor: "#A1C4F1",
      color: "#D9E7F7",
      "&:hover": {
        backgroundColor: "#A1C4F1",
      },
    },
  },
  learnMoreLink: {
    display: "flex",
    alignItems: "center",
    gap: "4px",
    cursor: "pointer",
    "& .MuiTypography-root": {
      color: theme.palette.blue[500],
    },
  },
  // Payment Form Styles
  paymentFormCard: {
    backgroundColor: theme.palette.common.white,
    border: "1px solid #E4EBEF",
    borderRadius: "8px",
    padding: "24px",
  },
  paymentFormTitle: {
    color: theme.palette.navy[500],
    marginBottom: "24px",
  },
  cardBrandIcons: {
    display: "flex",
    gap: "8px",
    marginTop: "8px",
    alignItems: "center",
  },
  cardBrandIcon: {
    width: "32px",
    height: "20px",
    borderRadius: "2px",
    objectFit: "contain" as const,
  },
  // Step completed circle (green filled with checkmark)
  stepCircleCompleted: {
    backgroundColor: theme.palette.green[500],
    borderColor: theme.palette.green[500],
    "& .MuiTypography-root": {
      color: theme.palette.common.white,
    },
    "& svg": {
      color: theme.palette.common.white,
    },
  },
  // Billing Information Form Styles
  billingFormCard: {
    backgroundColor: theme.palette.common.white,
    border: "1px solid #E4EBEF",
    borderRadius: "8px",
    padding: "24px",
  },
  formRow: {
    display: "flex",
    gap: "16px",
    marginBottom: "24px",
    "&:last-child": {
      marginBottom: 0,
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  formField: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: "4px",
  },
  formFieldFull: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "4px",
    marginBottom: "24px",
  },
  formLabel: {
    color: theme.palette.navy[500],
  },
  formInput: {
    "& .MuiInputBase-root": {
      height: "40px",
      border: "1px solid",
      borderColor: theme.palette.navy[200],
      borderRadius: "4px",
      padding: "0 8px",
      fontFamily: "OpenSauceOne-Regular",
      fontSize: "14px",
      backgroundColor: theme.palette.common.white,
      "& input": {
        padding: 0,
        "&::placeholder": {
          color: theme.palette.navy[300],
          opacity: 1,
        },
      },
      "& fieldset": {
        display: "none",
      },
    },
  },
  formSelect: {
    "& .MuiInputBase-root": {
      height: "40px",
      border: "1px solid",
      borderColor: theme.palette.navy[200],
      borderRadius: "4px",
      padding: "0 8px",
      fontFamily: "OpenSauceOne-Regular",
      fontSize: "14px",
      backgroundColor: theme.palette.common.white,
      "& .MuiSelect-select": {
        padding: "0",
        display: "flex",
        alignItems: "center",
      },
      "& fieldset": {
        display: "none",
      },
    },
  },
  summaryItemPriceCredit: {
    fontWeight: 600,
    fontSize: '1.25rem',
    color: '#21897E',
  },
  infoMessage: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '8px',
    padding: '12px 0',
    marginTop: '8px',
  },
  infoIcon: {
    color: '#6B7280',
    fontSize: '20px',
    flexShrink: 0,
    marginTop: '2px',
  },
  infoText: {
    color: '#6E7786',
    fontSize: '13px !important',
    lineHeight: 1.5,
  },
  sectionTitle: {
    color: '#1F2937',
    marginBottom: '20px !important',
  },
  addressList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    marginBottom: '16px',
  },
  addressCard: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '16px',
    border: '1px solid #E5E7EB',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'border-color 0.2s',
    '&:hover': {
      borderColor: '#D1D5DB',
    },
  },
  addressCardContent: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    flex: 1,
  },
  addressRadio: {
    padding: 0,
    '&.Mui-checked': {
      color: '#3B82F6',
    },
  },
  addressInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2px',
  },
  addressLabel: {
    fontSize: '12px',
    color: '#6B7280',
  },
  addressText: {
    fontSize: '14px',
    color: '#1F2937',
    fontWeight: 500,
  },
  defaultBadge: {
    backgroundColor: '#B0C9EF',
    color: '#27344A',
    fontSize: '13px !important',
    fontWeight: 500,
    padding: '3px 12px',
    borderRadius: '8px',
    marginLeft: 'auto !important',
  },
  addressMenuButton: {
    padding: '4px',
    color: '#6B7280',
  },
  addressMenu: {
    '& .MuiPaper-root': {
      borderRadius: '8px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
      minWidth: '160px',
    },
  },
  menuItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '14px',
    color: '#374151',
    padding: '10px 16px',
  },
  menuIcon: {
    fontSize: '18px',
    color: '#6B7280',
  },
  menuItemDelete: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '14px',
    color: '#EF4444',
    padding: '10px 16px',
  },
  menuIconDelete: {
    fontSize: '18px',
    color: '#EF4444',
  },
  addAddressButton: {
    borderColor: '#3B82F6',
    color: '#3B82F6',
    textTransform: 'none',
    fontWeight: 600,
    fontSize: '14px',
    padding: '10px 20px',
    borderRadius: '6px',
    '&:hover': {
      borderColor: '#2563EB',
      backgroundColor: 'rgba(59, 130, 246, 0.04)',
    },
  },
  paymentMethodsSection: {
    marginTop: '24px',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  paymentMethodsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  paymentMethodCard: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '16px',
    border: '1px solid #E5E7EB',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'border-color 0.2s',
    '&:hover': {
      borderColor: '#D1D5DB',
    },
  },
  paymentMethodContent: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    flex: 1,
  },
  paymentRadio: {
    padding: 0,
    '&.Mui-checked': {
      color: '#3B82F6',
    },
  },
  visaBadge: {
    backgroundColor: '#1A1F71',
    color: '#FFFFFF',
    fontSize: '10px',
    fontWeight: 700,
    fontStyle: 'italic',
    padding: '4px 8px',
    borderRadius: '4px',
    letterSpacing: '0.5px',
  },
  paymentMethodInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2px',
  },
  paymentMethodTitle: {
    fontSize: '14px',
    fontWeight: 500,
    color: '#1F2937',
  },
  paymentMethodExpiry: {
    fontSize: '12px',
    color: '#6B7280',
  },
  defaultPaymentBadge: {
    backgroundColor: '#B0C9EF',
    color: '#27344A',
    fontSize: '13px !important',
    fontWeight: 500,
    padding: '3px 12px',
    borderRadius: '8px',
    marginLeft: 'auto !important',
  },
  paymentMenuButton: {
    padding: '4px',
    color: '#6B7280',
  },
  paymentMenu: {
    '& .MuiPaper-root': {
      borderRadius: '8px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
      minWidth: '160px',
    },
  },
  addPaymentButton: {
    borderColor: '#3B82F6',
    color: '#3B82F6',
    textTransform: 'none',
    fontWeight: 600,
    fontSize: '14px',
    padding: '10px 20px',
    borderRadius: '6px',
    alignSelf: 'flex-start',
    '&:hover': {
      borderColor: '#2563EB',
      backgroundColor: 'rgba(59, 130, 246, 0.04)',
    },
  },
  couponSuccess: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    backgroundColor: '#E0F5F0',
    padding: '12px 16px',
    borderRadius: '8px',
    marginTop: '12px',
  },
  couponSuccessIcon: {
    color: '#21897E',
    fontSize: '20px',
  },
  couponSuccessTitle: {
    color: '#21897E',
    lineHeight: '1.4 !important',
  },
  couponSuccessText: {
    color: '#21897E',
    lineHeight: '1.4 !important',
  },
  couponErrorMessage: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    marginTop: '2px',
  },
  couponErrorIcon: {
    color: '#E74C5E',
    fontSize: '16px',
  },
  couponErrorText: {
    color: '#E74C5E',
    fontSize: '14px',
  },
}));

export default useStyles;
