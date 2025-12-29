import { ThemeProvider, createTheme, CssBaseline } from '@mui/material'
import { ThemeProvider as StylesThemeProvider } from '@mui/styles'
import { SampleButton, StyledCard } from './components'
import './App.css'

const theme = createTheme({
  palette: {
    mode: 'light',
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <StylesThemeProvider theme={theme}>
        <CssBaseline />
        <div>
          API Layer Claude Code
          <SampleButton label="Click me" onClick={() => console.log('clicked')} />
          <StyledCard
            title="makeStyles Test"
            content="This card is styled using makeStyles with theme access."
          />
        </div>
      </StylesThemeProvider>
    </ThemeProvider>
  )
}

export default App
