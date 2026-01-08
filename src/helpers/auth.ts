/**
 * Authentication helpers used across the app.
 * Keeps auth logic centralized and reusable.
 */
export const isAuthenticated = (): boolean => {
  // Example: token-based auth
  return Boolean(localStorage.getItem("auth_token"));
};

const AUTH_TOKEN_KEY = "auth_token";

/**
 * Sets a dummy auth token.
 * Used only to simulate login during early development.
 */
export const setDummyAuthToken = (): void => {
  localStorage.setItem(AUTH_TOKEN_KEY, "dummy_token");
};

/**
 * Removes auth token.
 * Used to simulate logout during early development.
 */
export const clearAuthToken = (): void => {
  localStorage.removeItem(AUTH_TOKEN_KEY);
};
