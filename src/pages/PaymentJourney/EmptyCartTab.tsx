import React from "react";
import { Box, Typography } from "@mui/material";
import ProductionQuantityLimitsOutlinedIcon from "@mui/icons-material/ProductionQuantityLimitsOutlined";
import useStyles from "./PaymentJourney.style";

const EmptyCartTab: React.FC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.emptyCartContainer}>
      <Box className={classes.emptyCartContent}>
        {/* Circular Icon with concentric rings */}
        <Box className={classes.emptyCartIconWrapper}>
          <Box className={classes.emptyCartOuterRing} />
          <Box className={classes.emptyCartMiddleRing} />
          <Box className={classes.emptyCartInnerCircle} />
          <ProductionQuantityLimitsOutlinedIcon
            className={classes.emptyCartIcon}
          />
        </Box>

        {/* Text Content */}
        <Box className={classes.emptyCartTextContent}>
          <Typography variant="h3" className={classes.emptyCartTitle}>
            Your cart is empty.
          </Typography>
          <Typography variant="h5" className={classes.emptyCartDescription}>
            Explore our curated APIs and start building right away.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default EmptyCartTab;
