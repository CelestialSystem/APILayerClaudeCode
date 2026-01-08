import { Box, Typography, IconButton, Divider } from '@mui/material'
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined'
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined'
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined'
import SearchIcon from '@mui/icons-material/Search'
import apiLayerLogo from '../../assets/api_layer_logo.svg'
import apiLogo1 from '../../assets/api_logo1.svg'
import apiLogo2 from '../../assets/api_logo2.svg'
import apiLogo3 from '../../assets/api_logo3.svg'
import apiLogo4 from '../../assets/api_logo4.svg'
import { useStyles } from './Sidebar.style'

interface SubscriptionItem {
  name: string
  plan: string
  usage: number
  usageColor: 'green' | 'orange' | 'red'
  icon?: string
}

interface ApiItem {
  name: string
  description: string
  icon?: string
}

interface SidebarProps {
  subscriptions?: SubscriptionItem[]
  allApis?: ApiItem[]
  activeNav?: string
  onNavClick?: (nav: string) => void
}

const defaultSubscriptions: SubscriptionItem[] = [
  { name: 'IPapi', plan: 'Starter Plan', usage: 20, usageColor: 'green', icon: apiLogo1 },
  { name: 'IPstack', plan: 'ENTERPRISE PLAN', usage: 78, usageColor: 'orange', icon: apiLogo2 },
  { name: 'Currencylayer', plan: 'FREE PLAN', usage: 60, usageColor: 'orange', icon: apiLogo3 },
  { name: 'Fixer', plan: 'FREE PLAN', usage: 20, usageColor: 'green', icon: apiLogo4 },
]

const defaultApis: ApiItem[] = [
  { name: 'Positionstack', description: 'Foreign exchange rates and currency conversion JSON API.', icon: apiLogo2 },
  { name: 'IPstack', description: 'Foreign exchange rates and currency conversion JSON API.', icon: apiLogo2 },
  { name: 'IPstack', description: 'Foreign exchange rates and currency conversion JSON API.', icon: apiLogo2 },
]

const Sidebar = ({
  subscriptions = defaultSubscriptions,
  allApis = defaultApis,
  activeNav = 'dashboard',
  onNavClick,
}: SidebarProps) => {
  const classes = useStyles()

  const getUsageClass = (color: 'green' | 'orange' | 'red') => {
    switch (color) {
      case 'green':
        return classes.usageGreen
      case 'orange':
        return classes.usageOrange
      case 'red':
        return classes.usageRed
      default:
        return classes.usageGreen
    }
  }

  return (
    <Box className={classes.container}>
      <Box
        component="img"
        src={apiLayerLogo}
        alt="APILayer"
        className={classes.logo}
      />

      <Box
        className={activeNav === 'dashboard' ? classes.navItemActive : classes.navItem}
        onClick={() => onNavClick?.('dashboard')}
        role="button"
        tabIndex={0}
        aria-label="Dashboard"
        onKeyDown={(e) => e.key === 'Enter' && onNavClick?.('dashboard')}
      >
        <DashboardOutlinedIcon sx={{ fontSize: '20px' }} />
        <Typography variant="h4">Dashboard</Typography>
      </Box>

      <Box
        className={activeNav === 'payments' ? classes.navItemActive : classes.navItem}
        onClick={() => onNavClick?.('payments')}
        role="button"
        tabIndex={0}
        aria-label="Payments & Billings"
        onKeyDown={(e) => e.key === 'Enter' && onNavClick?.('payments')}
      >
        <CreditCardOutlinedIcon sx={{ fontSize: '20px' }} />
        <Typography variant="h4">Payments & Billings</Typography>
      </Box>

      <Box
        className={activeNav === 'support' ? classes.navItemActive : classes.navItem}
        onClick={() => onNavClick?.('support')}
        role="button"
        tabIndex={0}
        aria-label="Support"
        onKeyDown={(e) => e.key === 'Enter' && onNavClick?.('support')}
      >
        <SupportAgentOutlinedIcon sx={{ fontSize: '20px' }} />
        <Typography variant="h4">Support</Typography>
      </Box>

      <Box className={classes.subscriptionSection}>
        <Typography className={classes.sectionTitle}>Subscription Usage</Typography>
        <Box className={classes.subscriptionList}>
          {subscriptions.map((sub, index) => (
            <Box
              key={index}
              className={index === 0 ? classes.subscriptionCardActive : classes.subscriptionCard}
              role="button"
              tabIndex={0}
              aria-label={`${sub.name} subscription - ${sub.usage}% used`}
            >
              <Box className={classes.apiIconBox}>
                {sub.icon ? (
                  <Box
                    component="img"
                    src={sub.icon}
                    alt={sub.name}
                    className={classes.apiIcon}
                  />
                ) : (
                  <Box className={classes.apiIconPlaceholder} />
                )}
              </Box>
              <Box className={classes.subscriptionInfo}>
                <Typography className={classes.subscriptionName}>{sub.name}</Typography>
                <Typography className={classes.planText}>
                  {sub.plan}
                </Typography>
              </Box>
              <Typography className={getUsageClass(sub.usageColor)}>
                {sub.usage}%
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      <Divider className={classes.divider} />

      <Box className={classes.allApisHeader}>
        <Typography className={classes.sectionTitle} sx={{ mb: 0 }}>
          All APIs
        </Typography>
        <IconButton size="small" aria-label="Search APIs">
          <SearchIcon sx={{ fontSize: '20px' }} />
        </IconButton>
      </Box>

      <Box className={classes.apisList}>
        {allApis.map((api, index) => (
          <Box
            key={index}
            className={classes.apiListItem}
            role="button"
            tabIndex={0}
            aria-label={`${api.name} API`}
          >
            <Box className={classes.apiListItemHeader}>
              {api.icon ? (
                <Box
                  component="img"
                  src={api.icon}
                  alt={api.name}
                  sx={{ width: '24px', height: '24px', borderRadius: '4px' }}
                />
              ) : (
                <Box className={classes.apiListIcon} />
              )}
              <Typography className={classes.apiListName}>
                {api.name}
              </Typography>
            </Box>
            <Typography className={classes.apiListDescription}>
              {api.description}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default Sidebar
