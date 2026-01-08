import { ThemeProvider, CssBaseline } from '@mui/material'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './css/global.css'
import theme from './theme'
import Login from './pages/login/Login'
import ForgotPassword from './pages/forgotPassword/ForgotPassword'
import SignUp from './pages/signup/SignUp'
import ResetPassword from './pages/resetPassword/ResetPassword'
import OrderSummary from './pages/OrderSummary/OrderSummary'
import AdditionalDetails from './pages/signup/AdditionalDetails'
import ApiDetail from './pages/ApiDetail/ApiDetail'
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/order-summary" element={<OrderSummary />} />
        </Routes>
      </BrowserRouter>
      {/* <Login /> */}
      {/* <ForgotPassword /> */}
      {/* <ResetPassword /> */}
      {/* <SignUp /> */}
      {/* <AdditionalDetails /> */}
      {/* <ApiDetail /> */}
    </ThemeProvider>
  )
}

export default App
