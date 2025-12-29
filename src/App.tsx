import { ThemeProvider, CssBaseline } from '@mui/material'
import { SampleButton, StyledCard } from './components'
import './css/global.css'
import theme from './theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <div>
          API Layer Claude Code
          <SampleButton label="Click me" onClick={() => console.log('clicked')} />
          <StyledCard
            title="makeStyles Test"
            content="This card is styled using makeStyles with theme access."
          />
        </div>
    </ThemeProvider>
  )
}

export default App
