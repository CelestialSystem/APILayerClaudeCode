import { Routes, Route, Navigate } from "react-router-dom";

import PublicRoute from "./routes/PublicRoute";
import ProtectedRoute from "./routes/ProtectedRoute";

import PublicLayout from "../layouts/PublicLayout";
import AuthLayout from "../layouts/AuthLayout";
import MainLayout from "../layouts/MainLayout";
// import { Dashboard } from "@mui/icons-material";
import SignUp from "../pages/signup/SignUp";
import ForgotPassword from "../pages/forgotPassword/ForgotPassword";
import ApiDetail from "../pages/ApiDetail/ApiDetail";
import AdditionalDetails from "../pages/signup/AdditionalDetails";
import Login from "../pages/login/Login";
import OrderSummary from "../pages/OrderSummary/OrderSummary";

/**
 * Central application router.
 * Defines public, auth, and protected routes with their respective layouts.
 */

const AppRouter = () => {
  return (
    <Routes>
      {/* PUBLIC ROUTES */}
      <Route element={<PublicLayout />}>
        {/* <Route path="/" element={<Home />} />*/}
        <Route path="/" element={<Navigate to="/api-detail" replace />} />
        <Route path="/order-summary" element={<OrderSummary />} />
      </Route>

      {/* AUTH PAGES (logged OUT only) */}
      <Route element={<PublicRoute />}>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/additional-details" element={<AdditionalDetails />} />
        </Route>
      </Route>

      {/* PROTECTED APP */}
      <Route element={<ProtectedRoute />}>
        <Route element={<MainLayout />}>
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          <Route path="/api-detail" element={<ApiDetail />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRouter;
