import { Navigate, Outlet } from "react-router-dom";
import { isAuthenticated } from "../../helpers/auth";

/**
 * Route guard for authenticated users.
 * Blocks access to protected pages when the user is not logged in.
 */

const ProtectedRoute = () => {
  return isAuthenticated() ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
