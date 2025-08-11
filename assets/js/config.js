window.PETSTAY_CONFIG = {
  AWS_REGION: "us-east-2",
  COGNITO_USER_POOL_ID: "us-east-2_FJ0STvUY7",
  COGNITO_USER_POOL_CLIENT_ID: "rdcatpv4ggdd244d30sv0vs75",
  COGNITO_DOMAIN: "us-east-2fj0stvuy7.auth.us-east-2.amazoncognito.com",
  REDIRECT_SIGN_IN_URL: "https://main.d3ucnervso97zx.amplifyapp.com/admin-frontend/post-login.html",
  REDIRECT_SIGN_OUT_URL:"https://main.d3ucnervso97zx.amplifyapp.com/index.html",
  REDIRECT_ADMIN_SIGN_IN_URL:"https://main.d3ucnervso97zx.amplifyapp.com/admin-frontend/post-login.html"
  BOOKINGS_API_URL: "https://vg291vswdd.execute-api.us-east-2.amazonaws.com/dev/bookings",
  ROOMS_AVAILABILITY_API_URL: "https://vg291vswdd.execute-api.us-east-2.amazonaws.com/dev/rooms/availability",
  NEW_BOOKING_API_URL: "https://vg291vswdd.execute-api.us-east-2.amazonaws.com/dev/newbooking",
  CHECKIN_API_URL: "https://vg291vswdd.execute-api.us-east-2.amazonaws.com/dev/checkin"
};

// Safety check: crash the page if placeholders were not replaced
for (const key in window.PETSTAY_CONFIG) {
  if (window.PETSTAY_CONFIG[key].includes("{{") || window.PETSTAY_CONFIG[key].includes("}}")) {
    throw new Error(`Missing config value: ${key}. Did you forget to set environment variables?`);
  }
}
