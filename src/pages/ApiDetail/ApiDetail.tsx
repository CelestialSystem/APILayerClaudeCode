import { useState } from 'react'
import { Box } from '@mui/material'
import Sidebar from '../../components/Sidebar/Sidebar'
import { useStyles } from './ApiDetail.style'
import ApiDetailContent from '../../components/ApiDetailContent/ApiDetailContent'

const ApiDetail = () => {
  const classes = useStyles()
  const [activeNav, setActiveNav] = useState('dashboard')

  const handleNavClick = (nav: string) => {
    setActiveNav(nav)
  }

  const handleCopyKey = () => {
    console.log('API Key copied!')
  }

  const handleUpgradePlan = () => {
    console.log('Upgrade plan clicked')
  }

  const handleTabChange = (tab: number) => {
    console.log('Tab changed to:', tab)
  }

  return (
    <Box className={classes.pageContainer}>
      <Sidebar activeNav={activeNav} onNavClick={handleNavClick} />
      <ApiDetailContent
        onCopyKey={handleCopyKey}
        onUpgradePlan={handleUpgradePlan}
        onTabChange={handleTabChange}
      />
    </Box>
  )
}

export default ApiDetail
