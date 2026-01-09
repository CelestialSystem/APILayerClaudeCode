import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  IconButton,
  Radio,
  Menu,
  MenuItem,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import VisaIcon from "../../assets/Badge.svg";
import CardVisa from "../../assets/card-visa.svg";
import CardMastercard from "../../assets/card-mastercard.svg";
import CardAmex from "../../assets/card-amex.svg";
import CardDiscover from "../../assets/card-discover.svg";
import CardDiners from "../../assets/card-diners.svg";
import CardJcb from "../../assets/card-jcb.svg";
import useStyles from "./PaymentJourney.style";
import DeleteConfirmationPopup from "../../components/common/DeleteConfirmationPopup/DeleteConfirmationPopup";

interface PaymentFormData {
  cardHolderName: string;
  cardNumber: string;
  expirationDate: string;
  cvv: string;
}

interface PaymentMethod {
  id: number;
  cardType: string;
  lastFour: string;
  expiryDate: string;
  isDefault: boolean;
}

interface PaymentTabProps {
  paymentForm: PaymentFormData;
  paymentMethods: PaymentMethod[];
  selectedPaymentId: number;
  paymentMenuAnchor: null | HTMLElement;
  onPaymentChange: (
    field: keyof PaymentFormData
  ) => (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSelectPayment: (id: number) => void;
  onPaymentMenuOpen: (
    event: React.MouseEvent<HTMLElement>,
    paymentId: number
  ) => void;
  onPaymentMenuClose: () => void;
  onSetDefaultPayment: () => void;
  onEditPayment: () => void;
  onDeletePayment: () => void;
  onAddNewPayment: () => void;
}

const PaymentTab: React.FC<PaymentTabProps> = ({
  paymentForm,
  paymentMethods,
  selectedPaymentId,
  paymentMenuAnchor,
  onPaymentChange,
  onSelectPayment,
  onPaymentMenuOpen,
  onPaymentMenuClose,
  onSetDefaultPayment,
  onEditPayment,
  onDeletePayment,
  onAddNewPayment,
}) => {
  const classes = useStyles();
  const [showDeletePopup, setShowDeletePopup] = useState(false);

  const handleDeleteClick = () => {
    onPaymentMenuClose();
    setShowDeletePopup(true);
  };

  const handleCancelDelete = () => {
    setShowDeletePopup(false);
  };

  const handleConfirmDelete = () => {
    setShowDeletePopup(false);
    onDeletePayment();
  };

  return (
    <Box className={classes.leftColumn}>
      <Box className={classes.paymentFormCard}>
        <Box className={classes.formFieldFull}>
          <Typography variant="h6" className={classes.formLabel}>
            Card Holder&apos;s Full Name
          </Typography>
          <TextField
            className={classes.formInput}
            placeholder="Enter card holder's full name"
            value={paymentForm.cardHolderName}
            onChange={onPaymentChange("cardHolderName")}
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
            onChange={onPaymentChange("cardNumber")}
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
              onChange={onPaymentChange("expirationDate")}
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
              onChange={onPaymentChange("cvv")}
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
                onClick={() => onSelectPayment(payment.id)}
              >
                <Box className={classes.paymentMethodContent}>
                  <Radio
                    checked={selectedPaymentId === payment.id}
                    onChange={() => onSelectPayment(payment.id)}
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
                  onClick={(e) => onPaymentMenuOpen(e, payment.id)}
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
            onClose={onPaymentMenuClose}
            className={classes.paymentMenu}
          >
            <MenuItem
              onClick={onSetDefaultPayment}
              className={classes.menuItem}
            >
              <StarOutlineIcon className={classes.menuIcon} />
              Set as default
            </MenuItem>
            <MenuItem onClick={onEditPayment} className={classes.menuItem}>
              <EditOutlinedIcon className={classes.menuIcon} />
              Edit
            </MenuItem>
            <MenuItem
              onClick={handleDeleteClick}
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
            onClick={onAddNewPayment}
          >
            Add New Payment Method
          </Button>
        </Box>
      </Box>

      {/* Delete Confirmation Popup */}
      <DeleteConfirmationPopup
        open={showDeletePopup}
        title="Delete Payment Method?"
        description="This action will permanently delete the payment method from our system."
        onCancel={handleCancelDelete}
        onDelete={handleConfirmDelete}
      />
    </Box>
  );
};

export default PaymentTab;
