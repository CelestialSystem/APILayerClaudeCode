import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
// import Sidebar from "../components/Sidebar"; (later)

/**
 * Layout for authenticated application pages.
 * Hosts common UI elements like sidebar and main content area.
 */

const MainLayout = () => {
  return (
    <Box display="flex">
      {/* <Sidebar /> */}
      <Box flex={1} p={2}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default MainLayout;
