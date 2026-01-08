import { Navigate, Outlet } from "react-router-dom";
import { isAuthenticated } from "../../helpers/auth";

/**
 * Route guard for auth-related pages (login, signup).
 * Redirects authenticated users away from auth screens.
 */

const PublicRoute = () => {
  return !isAuthenticated() ? (
    <Outlet />
  ) : (
    <Navigate to="/api-detail" replace />
  );
};

export default PublicRoute;
