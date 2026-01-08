import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

/**
 * Layout for authentication pages.
 * Provides a consistent centered UI for auth flows.
 */

const AuthLayout = () => {
  return (
    <Box
      minHeight="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Outlet />
    </Box>
  );
};

export default AuthLayout;
