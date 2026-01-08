import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

/**
 * Layout for public-facing pages (home, about, contact).
 * Shared structure for marketing and informational content.
 */

const PublicLayout = () => {
  return (
    <Box>
      {/* Header */}
      {/* Hero / Navbar */}
      <Outlet />
      {/* Footer */}
    </Box>
  );
};

export default PublicLayout;
