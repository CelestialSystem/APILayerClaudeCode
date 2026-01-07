import { useState } from 'react'
import {
  Box,
  Typography,
  IconButton,
  LinearProgress,
  Tooltip,
  Tabs,
  Tab,
  Rating,
  Chip,
  Badge,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
import CheckIcon from '@mui/icons-material/Check'
import CloseIcon from '@mui/icons-material/Close'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import LogoutIcon from '@mui/icons-material/Logout'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined'
import { ClickAwayListener, Fade } from '@mui/material'
import { useStyles } from './ApiDetailContent.style'
import ProfileSettings from '../ProfileSettings/ProfileSettings'

interface PlanFeature {
  name: string
  included: boolean
}

interface RelatedApi {
  name: string
  description: string
  tags: string[]
  icon?: string
}

interface Notification {
  id: string
  title: string
  description: string
  time: string
  isRead: boolean
  viewUsageLink?: string
}

interface ApiDetailContentProps {
  apiName?: string
  apiKey?: string
  quotaUsed?: number
  quotaTotal?: number
  planName?: string
  planPrice?: string
  requestsPerMonth?: string
  planDescription?: string
  billingPeriod?: string
  nextPaymentDate?: string
  features?: PlanFeature[]
  description?: string
  rating?: number
  reviewCount?: number
  tags?: string[]
  relatedApis?: RelatedApi[]
  userInitials?: string
  userName?: string
  userEmail?: string
  notifications?: Notification[]
  onCopyKey?: () => void
  onUpgradePlan?: () => void
  onTabChange?: (tab: number) => void
  onViewProfile?: () => void
  onLogout?: () => void
  onMarkAllNotificationsRead?: () => void
  onLoadMoreNotifications?: () => void
  onViewNotificationUsage?: (notificationId: string) => void
}

const defaultFeatures: PlanFeature[] = [
  { name: 'Standard Support', included: false },
  { name: 'SSL Encryption', included: true },
  { name: 'Location Module', included: true },
  { name: 'Currency Module', included: false },
  { name: 'Time Zone Module', included: false },
  { name: 'Connection Module', included: false },
  { name: 'Bulk Endpoint', included: false },
  { name: 'Security Module', included: false },
]

const defaultRelatedApis: RelatedApi[] = [
  {
    name: 'IPstack',
    description: 'Foreign exchange rates and currency conversion JSON API.',
    tags: ['BUSINESS', 'DEV TOOLS'],
  },
  {
    name: 'IPstack',
    description: 'Foreign exchange rates and currency conversion JSON API.',
    tags: ['BUSINESS', 'DEV TOOLS'],
  },
  {
    name: 'IPstack',
    description: 'Foreign exchange rates and currency conversion JSON API.',
    tags: ['BUSINESS', 'DEV TOOLS'],
  },
]

const defaultNotifications: Notification[] = [
  {
    id: '1',
    title: 'Quota Limit Reached',
    description: 'You have used 80% of your monthly API quota. Consider upgrading your plan.',
    time: '2 hours ago',
    isRead: false,
    viewUsageLink: '/usage',
  },
  {
    id: '2',
    title: 'API Key Renewed',
    description: 'Your API key has been successfully renewed for another month.',
    time: '1 day ago',
    isRead: false,
    viewUsageLink: '/usage',
  },
  {
    id: '3',
    title: 'New Feature Available',
    description: 'Check out our new bulk endpoint feature now available in Pro plans.',
    time: '3 days ago',
    isRead: true,
    viewUsageLink: '/usage',
  },
]

const ApiDetailContent = ({
  apiName = 'IPapi',
  apiKey = '********************************',
  quotaUsed = 20000,
  quotaTotal = 200000,
  planName = 'Starter',
  planPrice = '$20/month',
  requestsPerMonth = '50,000 Requests/month',
  planDescription = 'Standard Kit — includes core features and higher volume.',
  billingPeriod = '1 Dec, 24 - 31 Dec,24',
  nextPaymentDate = '1st Jan, 2025',
  features = defaultFeatures,
  description = "An IP address uniquely identifies devices on a network, enabling data to be routed correctly. Represented as numbers (e.g., 192.158.1.38), IP addresses are vital for online communication. For developers, knowing an IP's location supports personalized user experiences, fraud prevention, compliance, and content delivery optimization/r goals.",
  rating = 3.5,
  reviewCount = 120,
  tags = ['BUSINESS', 'DEV TOOLS'],
  relatedApis = defaultRelatedApis,
  userInitials = 'CV',
  userName = 'Cilene Veloria',
  userEmail = 'cileneveloria@gmail.com',
  notifications = defaultNotifications,
  onCopyKey,
  onUpgradePlan,
  onTabChange,
  onViewProfile,
  onLogout,
  onMarkAllNotificationsRead,
  onLoadMoreNotifications,
  onViewNotificationUsage,
}: ApiDetailContentProps) => {
  const classes = useStyles()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const [activeTab, setActiveTab] = useState(0)
  const [showKey, setShowKey] = useState(false)
  const [copied, setCopied] = useState(false)
  const [profileMenuOpen, setProfileMenuOpen] = useState(false)
  const [profileSettingsOpen, setProfileSettingsOpen] = useState(false)
  const [notificationMenuOpen, setNotificationMenuOpen] = useState(false)
  const [notificationMoreMenuOpen, setNotificationMoreMenuOpen] = useState(false)

  // Derived state for unread notifications count
  const unreadCount = notifications.filter((n) => !n.isRead).length

  const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue)
    onTabChange?.(newValue)
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(apiKey)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
      onCopyKey?.()
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  const toggleVisibility = () => {
    setShowKey(!showKey)
  }

  const handleProfileMenuToggle = () => {
    setProfileMenuOpen((prev) => !prev)
  }

  const handleProfileMenuClose = () => {
    setProfileMenuOpen(false)
  }

  const handleViewProfile = () => {
    handleProfileMenuClose()
    setProfileSettingsOpen(true)
    onViewProfile?.()
  }

  const handleCloseProfileSettings = () => {
    setProfileSettingsOpen(false)
  }

  const handleLogout = () => {
    handleProfileMenuClose()
    onLogout?.()
  }

  // Notification menu handlers
  const handleNotificationToggle = () => {
    setNotificationMenuOpen((prev) => !prev)
    setNotificationMoreMenuOpen(false)
  }

  const handleNotificationMenuClose = () => {
    setNotificationMenuOpen(false)
    setNotificationMoreMenuOpen(false)
  }

  const handleNotificationMoreMenuToggle = () => {
    setNotificationMoreMenuOpen((prev) => !prev)
  }

  const handleMarkAllAsRead = () => {
    setNotificationMoreMenuOpen(false)
    onMarkAllNotificationsRead?.()
  }

  const handleLoadMore = () => {
    onLoadMoreNotifications?.()
  }

  const handleViewUsage = (notificationId: string) => {
    onViewNotificationUsage?.(notificationId)
  }

  const displayKey = showKey ? apiKey : '**********************************'
  const quotaPercentage = (quotaUsed / quotaTotal) * 100

  return (
    <Box className={classes.container}>
      {/* Header */}
      <Box className={classes.header}>
        <Typography variant="h2" sx={{ color: 'navy.500' }}>
          {apiName}
        </Typography>
        <Box className={classes.headerActions}>
          <IconButton aria-label="Shopping cart">
            <ShoppingCartOutlinedIcon sx={{ color: 'navy.500' }} />
          </IconButton>
          <ClickAwayListener onClickAway={handleNotificationMenuClose}>
            <Box className={classes.notificationWrapper}>
              <IconButton
                aria-label="Notifications"
                onClick={handleNotificationToggle}
                aria-expanded={notificationMenuOpen}
                aria-haspopup="true"
              >
                <Badge
                  badgeContent={unreadCount}
                  color="error"
                  sx={{
                    '& .MuiBadge-badge': {
                      backgroundColor: '#F04438',
                      fontSize: '10px',
                      minWidth: '16px',
                      height: '16px',
                    },
                  }}
                >
                  <NotificationsOutlinedIcon sx={{ color: 'navy.500' }} />
                </Badge>
              </IconButton>
              <Fade in={notificationMenuOpen}>
                <Box className={classes.notificationMenuContainer}>
                  {/* Header */}
                  <Box className={classes.notificationHeader}>
                    <Box className={classes.notificationHeaderLeft}>
                      {isMobile && (
                        <IconButton
                          onClick={handleNotificationMenuClose}
                          className={classes.notificationCloseButton}
                          aria-label="Close notifications"
                        >
                          <CloseIcon sx={{ fontSize: '24px' }} />
                        </IconButton>
                      )}
                      <Typography className={classes.notificationHeaderTitle}>
                        Notifications
                      </Typography>
                      {isMobile && unreadCount > 0 && (
                        <Box className={classes.notificationBadge}>
                          <Typography className={classes.notificationBadgeText}>
                            {unreadCount}
                          </Typography>
                        </Box>
                      )}
                    </Box>
                    <Box
                      className={classes.notificationMoreButton}
                      onClick={handleNotificationMoreMenuToggle}
                      role="button"
                      tabIndex={0}
                      aria-label="More options"
                    >
                      <MoreVertIcon sx={{ fontSize: '20px' }} />
                    </Box>
                    {/* More Menu */}
                    {notificationMoreMenuOpen && (
                      <Box className={classes.notificationMoreMenu}>
                        <Box
                          className={classes.notificationMoreMenuItem}
                          onClick={handleMarkAllAsRead}
                          role="menuitem"
                          tabIndex={0}
                        >
                          <Typography className={classes.notificationMoreMenuText}>
                            Mark all as read
                          </Typography>
                        </Box>
                      </Box>
                    )}
                  </Box>

                  {/* Content */}
                  {notifications.length === 0 ? (
                    /* Empty State */
                    <Box className={classes.notificationEmptyState}>
                      <Box className={classes.notificationEmptyIcon}>
                        <NotificationsNoneOutlinedIcon
                          sx={{ fontSize: '48px', color: '#98A2B3' }}
                        />
                      </Box>
                      <Typography className={classes.notificationEmptyText}>
                        You don't have any notifications yet
                      </Typography>
                    </Box>
                  ) : (
                    /* Notifications List */
                    <>
                      <Box className={classes.notificationList}>
                        {notifications.map((notification) => (
                          <Box
                            key={notification.id}
                            className={`${classes.notificationItem} ${!notification.isRead ? classes.notificationItemUnread : ''}`}
                          >
                            <Box className={classes.notificationItemIcon}>
                              <NotificationsNoneOutlinedIcon sx={{ fontSize: '20px' }} />
                            </Box>
                            <Box className={classes.notificationItemContent}>
                              <Box className={classes.notificationItemHeader}>
                                <Typography className={classes.notificationItemTitle}>
                                  {notification.title}
                                </Typography>
                                <Typography className={classes.notificationItemTime}>
                                  {notification.time}
                                </Typography>
                              </Box>
                              <Typography className={classes.notificationItemDescription}>
                                {notification.description}
                              </Typography>
                              {notification.viewUsageLink && (
                                <Typography
                                  className={classes.notificationViewUsage}
                                  onClick={() => handleViewUsage(notification.id)}
                                  role="link"
                                  tabIndex={0}
                                >
                                  View usage
                                </Typography>
                              )}
                            </Box>
                          </Box>
                        ))}
                      </Box>
                      {/* Load More Button */}
                      <Box className={classes.notificationLoadMore}>
                        <Box
                          className={classes.notificationLoadMoreButton}
                          onClick={handleLoadMore}
                          role="button"
                          tabIndex={0}
                        >
                          <Typography className={classes.notificationLoadMoreText}>
                            Load more
                          </Typography>
                        </Box>
                      </Box>
                    </>
                  )}
                </Box>
              </Fade>
            </Box>
          </ClickAwayListener>
          <ClickAwayListener onClickAway={handleProfileMenuClose}>
            <Box className={classes.userAvatarWrapper}>
              <Box
                className={classes.userAvatarClickable}
                onClick={handleProfileMenuToggle}
                role="button"
                tabIndex={0}
                aria-label="User profile menu"
                aria-expanded={profileMenuOpen}
                aria-haspopup="true"
              >
                {userInitials}
              </Box>
              <Fade in={profileMenuOpen}>
                <Box className={classes.profileMenuContainer}>
                  {/* User Info Section */}
                  <Box className={classes.profileMenuUserSection}>
                    <Box className={classes.profileMenuAvatar}>
                      <Typography className={classes.profileMenuAvatarText}>
                        {userInitials}
                      </Typography>
                    </Box>
                    <Box className={classes.profileMenuUserDetails}>
                      <Typography className={classes.profileMenuUserName}>
                        {userName}
                      </Typography>
                      <Typography className={classes.profileMenuUserEmail}>
                        {userEmail}
                      </Typography>
                    </Box>
                  </Box>

                  {/* Divider */}
                  <Box className={classes.profileMenuDivider} />

                  {/* Menu Items */}
                  <Box className={classes.profileMenuItemsSection}>
                    <Box
                      className={classes.profileMenuItem}
                      onClick={handleViewProfile}
                      role="menuitem"
                      tabIndex={0}
                    >
                      <Box className={classes.profileMenuItemIcon}>
                        <AccountCircleOutlinedIcon sx={{ fontSize: '20px' }} />
                      </Box>
                      <Typography className={classes.profileMenuItemText}>
                        View Profile
                      </Typography>
                    </Box>
                    <Box
                      className={classes.profileMenuItem}
                      onClick={handleLogout}
                      role="menuitem"
                      tabIndex={0}
                    >
                      <Box className={classes.profileMenuItemIconLogout}>
                        <LogoutIcon sx={{ fontSize: '20px' }} />
                      </Box>
                      <Typography className={classes.profileMenuItemTextLogout}>
                        Log Out
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Fade>
            </Box>
          </ClickAwayListener>
        </Box>
      </Box>

      {/* Tabs */}
      <Box className={classes.tabsContainer}>
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          aria-label="API detail tabs"
          sx={{
            '& .MuiTabs-indicator': {
              backgroundColor: 'navy.500',
              height: '2px',
            },
          }}
        >
          <Tab
            label="Overview"
            sx={{
              textTransform: 'none',
              fontFamily: 'OpenSauceOne-Regular',
              fontSize: '14px',
              '&.Mui-selected': {
                fontFamily: 'OpenSauceOne-SemiBold',
              },
            }}
          />
          <Tab
            label="Plans"
            sx={{
              textTransform: 'none',
              fontFamily: 'OpenSauceOne-Regular',
              fontSize: '14px',
              '&.Mui-selected': {
                fontFamily: 'OpenSauceOne-SemiBold',
              },
            }}
          />
          <Tab
            label="Documentation"
            sx={{
              textTransform: 'none',
              fontFamily: 'OpenSauceOne-Regular',
              fontSize: '14px',
              '&.Mui-selected': {
                fontFamily: 'OpenSauceOne-SemiBold',
              },
            }}
          />
          <Tab
            label="FAQs"
            sx={{
              textTransform: 'none',
              fontFamily: 'OpenSauceOne-Regular',
              fontSize: '14px',
              '&.Mui-selected': {
                fontFamily: 'OpenSauceOne-SemiBold',
              },
            }}
          />
          <Tab
            label={
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                Playground
                <OpenInNewIcon sx={{ fontSize: '16px' }} />
              </Box>
            }
            sx={{
              textTransform: 'none',
              fontFamily: 'OpenSauceOne-Regular',
              fontSize: '14px',
              '&.Mui-selected': {
                fontFamily: 'OpenSauceOne-SemiBold',
              },
            }}
          />
        </Tabs>
      </Box>

      {/* Content */}
      <Box className={classes.contentArea}>
        {/* API Key Section */}
        <Box className={classes.apiKeyContainer}>
          <Box className={classes.apiKeyBox}>
            <Box className={classes.keyRow}>
              <Typography variant="h5" className={classes.quotaLabel}>
                Your API Key
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Tooltip title={copied ? 'Copied!' : 'Copy Key'}>
                  <Box
                    className={classes.copyButton}
                    onClick={handleCopy}
                    role="button"
                    tabIndex={0}
                    aria-label="Copy API Key"
                  >
                    <ContentCopyIcon sx={{ fontSize: '18px' }} />
                    <Typography
                      sx={{ fontFamily: 'Inter-SemiBold', fontSize: '14px', color: 'blue.500' }}
                    >
                      Copy Key
                    </Typography>
                  </Box>
                </Tooltip>
                <IconButton size="small" aria-label="More options">
                  <MoreVertIcon sx={{ fontSize: '20px', color: 'navy.500' }} />
                </IconButton>
              </Box>
            </Box>
            <Box className={classes.keyDisplay}>
              <Typography className={classes.keyText}>{displayKey}</Typography>
              <IconButton
                onClick={toggleVisibility}
                size="small"
                aria-label={showKey ? 'Hide API Key' : 'Show API Key'}
                sx={{ color: 'white' }}
              >
                {showKey ? (
                  <VisibilityOffIcon sx={{ fontSize: '20px' }} />
                ) : (
                  <VisibilityIcon sx={{ fontSize: '20px' }} />
                )}
              </IconButton>
            </Box>
          </Box>

          <Box className={classes.quotaBox}>
            <Typography variant="h5" className={classes.quotaLabel}>
              Quota Used
            </Typography>
            <LinearProgress
              variant="determinate"
              value={quotaPercentage}
              className={classes.quotaProgress}
            />
            <Box className={classes.quotaStats}>
              <Typography variant="body1" sx={{ color: 'navy.300' }}>
                {quotaUsed.toLocaleString()}/{quotaTotal.toLocaleString()}
              </Typography>
              <Typography variant="body1" sx={{ color: 'navy.300' }}>
                {Math.round(quotaPercentage)}%
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Plan & Description Cards */}
        <Box className={classes.cardsRow}>
          <Box className={classes.planCard}>
            <Box className={classes.planHeader}>
              <Typography variant="h3" sx={{ color: 'navy.500' }}>
                Your Plan Details
              </Typography>
              <Box
                className={classes.upgradeLink}
                onClick={onUpgradePlan}
                role="button"
                tabIndex={0}
              >
                <Typography sx={{ fontFamily: 'Inter-SemiBold', fontSize: '14px', color: 'blue.500' }}>
                  Upgrade Plan
                </Typography>
                <MoreVertIcon sx={{ fontSize: '18px' }} />
              </Box>
            </Box>

            <Box className={classes.planTier}>
              <Box className={classes.planTierHeader}>
                <Box>
                  <Typography variant="h4" sx={{ color: 'navy.500', marginBottom: '4px' }}>
                    {planName}
                  </Typography>
                  <Typography className={classes.requestsText}>
                    {requestsPerMonth}
                  </Typography>
                </Box>
                <Typography variant="h2" sx={{ color: 'navy.500' }}>
                  {planPrice}
                </Typography>
              </Box>
              <Typography variant="body1" className={classes.planDescription}>
                {planDescription}
              </Typography>
            </Box>

            <Box className={classes.featuresGrid}>
              {features.map((feature, index) => (
                
                <Box
                  key={index}
                  className={classes.featureItem}
                  sx={{ color: feature.included ? 'navy.500' : 'navy.300' }}
                >
                  {feature.included ? (
                    <CheckIcon sx={{ fontSize: '16px', color: 'green.500' }} />
                  ) : (
                    <CloseIcon sx={{ fontSize: '16px', color: 'red.500' }} />
                  )}
                  <Typography variant="body1">{feature.name}</Typography>
                </Box>
              ))}
            </Box>

            <Box className={classes.billingSection}>
              <Box>
                <Typography variant="body1" sx={{ color: 'navy.300' }}>
                  Billing Period
                </Typography>
                <Typography variant="body1" sx={{ color: 'navy.300' }}>
                  Next Payment Date
                </Typography>
              </Box>
              <Box sx={{ textAlign: 'right' }}>
                <Typography className={classes.billingValue}>
                  {billingPeriod}
                </Typography>
                <Typography className={classes.billingValue}>
                  {nextPaymentDate}
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box className={classes.descriptionCard}>
            <Box className={classes.descriptionHeader}>
              <Typography variant="h3" sx={{ color: 'navy.500' }}>
                Description
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Rating value={rating} precision={0.5} readOnly size="small" />
                <Typography className={classes.ratingText}>
                  ({reviewCount})
                </Typography>
              </Box>
            </Box>

            <Box className={classes.tagsContainer}>
              {tags.map((tag, index) => (
                <Chip key={index} label={tag} size="small" className={classes.tagChip} />
              ))}
            </Box>

            <Typography variant="body1" className={classes.descriptionText}>
              {description}
            </Typography>
          </Box>
        </Box>

        {/* Related APIs */}
        <Box className={classes.relatedSection}>
          <Typography variant="h3" sx={{ color: 'navy.500' }}>
            You might also be interested in
          </Typography>
          <Box className={classes.relatedCardsRow}>
            {relatedApis.map((api, index) => (
              <Box key={index} className={classes.relatedApiCard}>
                <Box className={classes.relatedApiHeader}>
                  <Box className={classes.apiIconPlaceholder} />
                  <Typography variant="h4" sx={{ color: 'navy.500' }}>
                    {api.name}
                  </Typography>
                </Box>
                <Box className={classes.tagsContainer}>
                  {api.tags.map((tag, tagIndex) => (
                    <Chip key={tagIndex} label={tag} size="small" className={classes.tagChip} />
                  ))}
                </Box>
                <Typography variant="body1" className={classes.relatedApiDescription}>
                  {api.description}
                </Typography>
                <Box className={classes.learnMoreLink} role="link" tabIndex={0}>
                  <Typography className={classes.learnMoreText}>Learn More</Typography>
                  <ArrowForwardIcon sx={{ fontSize: '18px', color: 'blue.500' }} />
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      {/* Profile Settings Popup */}
      <ProfileSettings
        open={profileSettingsOpen}
        onClose={handleCloseProfileSettings}
        userInitials={userInitials}
        userName={userName}
        userEmail={userEmail}
      />
    </Box>
  )
}

export default ApiDetailContent
