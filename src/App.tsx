import { ThemeProvider, CssBaseline } from '@mui/material'
import './css/global.css'
import theme from './theme'
import Login from './pages/login/Login'
import ForgotPassword from './pages/forgotPassword/ForgotPassword'
import ResetPassword from './pages/resetPassword/ResetPassword'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Login />
      <ForgotPassword />
      <ResetPassword />
    </ThemeProvider>
  )
}

export default App
