import React from "react";
import { Box, Typography, Button, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ProductIcon from "../../assets/product-icon.svg";
import EditIcon from "../../assets/edit.svg";
import CrossIcon from "../../assets/close_small.svg";
import CheckIcon from "../../assets/check_small.svg";
import useStyles from "./PaymentJourney.style";

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

interface OrderSummaryTabProps {
  cartProducts: Product[];
  suggestedProducts: Product[];
  expandedProducts: Record<string, boolean>;
  selectedPlans: Record<string, string>;
  plans: Plan[];
  onToggleExpanded: (productId: string) => void;
  onPlanSelect: (productId: string, planId: string) => void;
}

const OrderSummaryTab: React.FC<OrderSummaryTabProps> = ({
  cartProducts,
  suggestedProducts,
  expandedProducts,
  selectedPlans,
  plans,
  onToggleExpanded,
  onPlanSelect,
}) => {
  const classes = useStyles();

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
      onClick={() => onPlanSelect(productId, plan.id)}
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
        onClick={() => onToggleExpanded(product.id)}
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
        onClick={() => onToggleExpanded(product.id)}
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

  return (
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
};

export default OrderSummaryTab;
