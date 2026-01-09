export const POPUP_TYPE = {
    SUCCESS: 'success',
    RESET_PASSWORD_EMAIL: 'reset_password_email',
    PASSWORD_CHANGED: 'password_changed',
    EMAIL_VERIFICATION: 'email_verification',
    DISCOUNT: 'discount',
    COUPON_CODE: 'coupon_code',
    FAILED: 'failed',
    PAYMENT_PLAN: 'payment_done',
    PAYMENT_DONE_MULTI: 'payment_plan_multi'
}

export const POPUP_VALUES = {
  SUCCESS: {
    title: "Yay! you're subscribed to IPstack",
    description: "You’re successfully subscribed. You can start using the API.",
  },

  RESET_PASSWORD_EMAIL: {
    title: 'Check Your Email',
    description: 'Please check the email address for instructions to reset your password',
  },

  PASSWORD_CHANGED: {
    title: 'Password Changed!',
    description: 'Your password has been changed successfully.',
  },

  EMAIL_VERIFICATION: {
    title: 'Verify your email',
    description: 'Account activation link has been sent to the email address you provided.',
  },

  DISCOUNT_CODE: {
    title: 'Get 20% off on IPstack',
    description: 'Use the discount code below to unlock the discount on IPstack.',
  },

  COUPON_CODE: {
    title: 'Get 20% off on IPstack',
    description: 'Use the discount code below to unlock the discount on IPstack.',
  },

  PAYMENT_PLAN: {
    title: 'Yay! You’re subscribed to IPstack.',
    description: 'Your payment has been successfully completed. You can start using the APIs.',
  },

  PAYMENT_DONE_MULTI: {
    title: 'Yay! You’re subscribed to IPstack & Currencylayer',
    description: 'Your payment has been successfully completed. You can start using the APIs.',
  },

  PAYMENT_FAILED: {
    title: 'Payment failed!',
    description: 'We were unable to complete your payment. Please verify your payment method and try again.',
  },
};
