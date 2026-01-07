import { ThemeProvider, CssBaseline } from '@mui/material'
import './css/global.css'
import theme from './theme'
import Login from './pages/login/Login'
import ForgotPassword from './pages/forgotPassword/ForgotPassword'
import SignUp from './pages/signup/SignUp'
import ResetPassword from './pages/resetPassword/ResetPassword'
import AdditionalDetails from './pages/signup/AdditionalDetails'
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* <Login /> */}
      {/* <ForgotPassword /> */}
      {/* <ResetPassword /> */}
      {/* <SignUp /> */}
      <AdditionalDetails />
    </ThemeProvider>
  )
}

export default App
