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
  FormControl,
  FormLabel,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import useStyles from "./PaymentJourney.style";
import DeleteConfirmationPopup from "../../components/common/DeleteConfirmationPopup/DeleteConfirmationPopup";

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

interface BillingAddress {
  id: number;
  fullAddress: string;
  isDefault: boolean;
}

interface BillingTabProps {
  billingForm: BillingFormData;
  billingAddresses: BillingAddress[];
  selectedAddressId: number;
  addressMenuAnchor: null | HTMLElement;
  activeAddressId: number | null;
  onBillingChange: (
    field: keyof BillingFormData
  ) => (
    event: React.ChangeEvent<HTMLInputElement | { value: unknown }>
  ) => void;
  onBillingFormUpdate: (updates: Partial<BillingFormData>) => void;
  onSelectAddress: (id: number) => void;
  onAddressMenuOpen: (
    event: React.MouseEvent<HTMLElement>,
    addressId: number
  ) => void;
  onAddressMenuClose: () => void;
  onSetDefaultAddress: () => void;
  onEditAddress: () => void;
  onDeleteAddress: () => void;
  onAddNewAddress: () => void;
}

const BillingTab: React.FC<BillingTabProps> = ({
  billingForm,
  billingAddresses,
  selectedAddressId,
  addressMenuAnchor,
  onBillingChange,
  onSelectAddress,
  onAddressMenuOpen,
  onAddressMenuClose,
  onSetDefaultAddress,
  onEditAddress,
  onDeleteAddress,
  onAddNewAddress,
}) => {
  const classes = useStyles();
  const [showDeletePopup, setShowDeletePopup] = useState(false);

  const handleDeleteClick = () => {
    onAddressMenuClose();
    setShowDeletePopup(true);
  };

  const handleCancelDelete = () => {
    setShowDeletePopup(false);
  };

  const handleConfirmDelete = () => {
    setShowDeletePopup(false);
    onDeleteAddress();
  };

  return (
    <Box className={classes.leftColumn}>
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
              onChange={onBillingChange("firstName")}
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
              onChange={onBillingChange("lastName")}
              variant="outlined"
              fullWidth
            />
          </Box>
        </Box>
        <Box className={classes.formRow}>
          <Box className={classes.formField}>
            <Typography variant="h6" className={classes.formLabel}>
              Company Name (optional)
            </Typography>
            <TextField
              className={classes.formInput}
              placeholder="Enter company name"
              value={billingForm.companyName}
              onChange={onBillingChange("companyName")}
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
              onChange={onBillingChange("companyWebsite")}
              variant="outlined"
              fullWidth
            />
          </Box>
        </Box>
        <Box className={classes.formFieldFull}>
          <Typography variant="h6" className={classes.formLabel}>
            Tax ID/VAT Number (optional)
          </Typography>
          <TextField
            className={classes.formInput}
            placeholder="Enter tax ID/VAT number"
            value={billingForm.taxId}
            onChange={onBillingChange("taxId")}
            variant="outlined"
            fullWidth
          />
        </Box>
        <Box className={classes.formFieldFull}>
          <Typography variant="h6" className={classes.formLabel}>
            Address
          </Typography>
          <TextField
            className={classes.formInput}
            placeholder="Enter Address"
            value={billingForm.address}
            onChange={onBillingChange("address")}
            variant="outlined"
            fullWidth
          />
        </Box>
        <Box className={classes.formRow}>
          <Box className={classes.formField}>
            <Typography variant="h6" className={classes.formLabel}>
              Postal Code
            </Typography>
            <TextField
              className={classes.formInput}
              placeholder="Enter postal code"
              value={billingForm.postalCode}
              onChange={onBillingChange("postalCode")}
              variant="outlined"
              fullWidth
            />
          </Box>
          <Box className={classes.formField}>
            <FormControl className={classes.formControl}>
              <FormLabel>Country/Region</FormLabel>
              <TextField select placeholder="Select country">
                <MenuItem value="">Select country</MenuItem>
                <MenuItem value="india">India</MenuItem>
                <MenuItem value="usa">USA</MenuItem>
              </TextField>
            </FormControl>
          </Box>
        </Box>
        <Box className={classes.formRow}>
          <Box className={classes.formField}>
            <Typography variant="h6" className={classes.formLabel}>
              State
            </Typography>
            <TextField
              className={classes.formInput}
              placeholder="Enter state"
              value={billingForm.state}
              onChange={onBillingChange("state")}
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
              onChange={onBillingChange("city")}
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
              onChange={onBillingChange("firstName")}
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
              onChange={onBillingChange("lastName")}
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
              onChange={onBillingChange("companyName")}
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
              onChange={onBillingChange("companyWebsite")}
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
            onChange={onBillingChange("taxId")}
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
              onClick={() => onSelectAddress(address.id)}
            >
              <Box className={classes.addressCardContent}>
                <Radio
                  checked={selectedAddressId === address.id}
                  onChange={() => onSelectAddress(address.id)}
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
                onClick={(e) => onAddressMenuOpen(e, address.id)}
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
          onClose={onAddressMenuClose}
          className={classes.addressMenu}
        >
          <MenuItem onClick={onSetDefaultAddress} className={classes.menuItem}>
            <StarOutlineIcon className={classes.menuIcon} />
            Set as default
          </MenuItem>
          <MenuItem onClick={onEditAddress} className={classes.menuItem}>
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

        {/* Add New Address Button */}
        <Button
          variant="outlined"
          className={classes.addAddressButton}
          onClick={onAddNewAddress}
        >
          Add New Billing Address
        </Button>
      </Box>

      {/* Delete Confirmation Popup */}
      <DeleteConfirmationPopup
        open={showDeletePopup}
        onCancel={handleCancelDelete}
        onDelete={handleConfirmDelete}
      />
    </Box>
  );
};

export default BillingTab;
