import { useState } from 'react'
import { Box, Typography, IconButton, Fade, useMediaQuery, useTheme, FormControl, FormLabel, TextField, InputAdornment } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import CheckIcon from '@mui/icons-material/Check'
import { useStyles } from './ProfileSettings.style'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';

interface ProfileSettingsProps {
  open: boolean
  onClose: () => void
  userInitials?: string
  userName?: string
  userEmail?: string
  firstName?: string
  lastName?: string
  companyName?: string
  companyWebsite?: string
  jobTitle?: string
  taxId?: string
  onSaveGeneralSettings?: (data: GeneralSettingsData) => void
  onSavePassword?: (data: PasswordData) => void
  onUpdateEmail?: (email: string) => void
}

interface GeneralSettingsData {
  firstName: string
  lastName: string
  companyName: string
  companyWebsite: string
  jobTitle: string
  taxId: string
}

interface PasswordData {
  oldPassword: string
  newPassword: string
  confirmPassword: string
}

const ProfileSettings = ({
  open,
  onClose,
  userInitials = 'CV',
  userName = 'Cilene Veloria',
  userEmail: initialUserEmail = 'cileneveloria@gmail.com',
  firstName: initialFirstName = 'Cilene',
  lastName: initialLastName = 'Veloria',
  companyName: initialCompanyName = 'Idera',
  companyWebsite: initialCompanyWebsite = 'idera.com',
  jobTitle: initialJobTitle = 'Developer',
  taxId: initialTaxId = '2314512',
  onSaveGeneralSettings,
  onSavePassword,
  onUpdateEmail,
}: ProfileSettingsProps) => {
  const classes = useStyles()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  // General Settings state
  const [firstName, setFirstName] = useState(initialFirstName)
  const [lastName, setLastName] = useState(initialLastName)
  const [companyName, setCompanyName] = useState(initialCompanyName)
  const [companyWebsite, setCompanyWebsite] = useState(initialCompanyWebsite)
  const [jobTitle, setJobTitle] = useState(initialJobTitle)
  const [taxId, setTaxId] = useState(initialTaxId)

  // Password state
  const [oldPassword, setOldPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showOldPassword, setShowOldPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [newPasswordFocused, setNewPasswordFocused] = useState(false)

  // Change Email popup state
  const [changeEmailOpen, setChangeEmailOpen] = useState(false)
  const [newEmail, setNewEmail] = useState('')
  const [currentEmail, setCurrentEmail] = useState(initialUserEmail)

  // Derived state - check if general settings have been edited
  const generalSettingsEdited =
    firstName !== initialFirstName ||
    lastName !== initialLastName ||
    companyName !== initialCompanyName ||
    companyWebsite !== initialCompanyWebsite ||
    jobTitle !== initialJobTitle ||
    taxId !== initialTaxId

  // Derived state - check if password has been edited
  const passwordEdited = oldPassword !== '' || newPassword !== '' || confirmPassword !== ''

  // Password validation
  const passwordMeetsLength = newPassword.length >= 6
  const passwordsMatch = newPassword === confirmPassword && confirmPassword !== ''
  const canSavePassword = oldPassword !== '' && passwordMeetsLength && passwordsMatch

  const handleSaveGeneralSettings = () => {
    onSaveGeneralSettings?.({
      firstName,
      lastName,
      companyName,
      companyWebsite,
      jobTitle,
      taxId,
    })
  }

  const handleCancelGeneralSettings = () => {
    setFirstName(initialFirstName)
    setLastName(initialLastName)
    setCompanyName(initialCompanyName)
    setCompanyWebsite(initialCompanyWebsite)
    setJobTitle(initialJobTitle)
    setTaxId(initialTaxId)
  }

  const handleSavePassword = () => {
    onSavePassword?.({
      oldPassword,
      newPassword,
      confirmPassword,
    })
    setOldPassword('')
    setNewPassword('')
    setConfirmPassword('')
  }

  const handleCancelPassword = () => {
    setOldPassword('')
    setNewPassword('')
    setConfirmPassword('')
  }

  // Change Email handlers
  const handleOpenChangeEmail = () => {
    setChangeEmailOpen(true)
  }

  const handleCloseChangeEmail = () => {
    setChangeEmailOpen(false)
    setNewEmail('')
  }

  const isValidEmail = (emailValue: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(emailValue)
  }

  const canUpdateEmail = newEmail !== '' && newEmail !== currentEmail && isValidEmail(newEmail)

  const handleUpdateEmail = () => {
    if (canUpdateEmail) {
      setCurrentEmail(newEmail)
      onUpdateEmail?.(newEmail)
      handleCloseChangeEmail()
    }
  }

  const handleChangeEmailOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleCloseChangeEmail()
    }
  }

  if (!open) return null

  return (
    <Fade in={open}>
      <Box className={classes.overlay}>
        {/* Header */}
        <Box className={classes.header}>
          <Typography variant="h3" className={classes.headerTitle}>
            {isMobile ? 'Profile' : 'Profile Settings'}
          </Typography>
          <IconButton
            onClick={onClose}
            className={classes.closeButton}
            aria-label="Close profile settings"
          >
            <CloseIcon sx={{ fontSize: '24px' }} />
          </IconButton>
        </Box>

        {/* User Info Section */}
        <Box className={classes.userInfoSection}>
          <Box className={classes.userAvatar}>
            <Typography className={classes.userAvatarText}>{userInitials}</Typography>
          </Box>
          <Box className={classes.userDetails}>
            <Typography variant="h3" className={classes.userName}>{userName}</Typography>
            <Box className={classes.userEmailRow}>
              <Typography variant="h3" className={classes.userEmail}>{currentEmail}</Typography>
              <Typography
                variant="h4"
                className={classes.editLink}
                onClick={handleOpenChangeEmail}
                role="button"
                tabIndex={0}
              >
                Edit
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Content Area with Cards */}
        <Box className={classes.contentArea}>
          {/* General Settings Card */}
          <Box className={classes.card}>
            <Typography variant="subtitle1" className={classes.cardTitle}>General Settings</Typography>
            <Box className={classes.formContent}>
              {/* First Name & Last Name Row */}
              <Box className={classes.formRow}>
                <Box className={classes.inputFieldHalf}>
                   <FormControl className={classes.formControl}>
                    <FormLabel htmlFor='emailField'>First Name</FormLabel>
                    <TextField
                      type='text'
                      id='firstName'
                      name='firstName'
                      value={firstName}
                      placeholder='Enter email'
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFirstName(e.target.value)}
                    />
                  </FormControl>
                </Box>

                <Box className={classes.inputFieldHalf}>
                  <FormControl className={classes.formControl}>
                    <FormLabel htmlFor='emailField'>Last Name</FormLabel>
                    <TextField
                      type='text'
                      id='lastName'
                      name='lastName'
                      value={lastName}
                      placeholder='Enter last name'
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLastName(e.target.value)}
                    />
                  </FormControl>
                </Box>
              </Box>

              {/* Company Name & Company Website Row */}
              <Box className={classes.formRow}>
                <Box className={classes.inputFieldHalf}>
                  <FormControl className={classes.formControl}>
                    <FormLabel htmlFor='emailField'>Company Name (optional)</FormLabel>
                    <TextField
                      type='text'
                      name='companyName'
                      placeholder='Enter Company Name'
                      value={companyName}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCompanyName(e.target.value)}
                      aria-label="Company Name"
                    />
                  </FormControl>
                </Box>
                <Box className={classes.inputFieldHalf}>
                  <FormControl className={classes.formControl}>
                    <FormLabel htmlFor='emailField'>Company Website (optional)</FormLabel>
                    <TextField
                      type='text'
                      name='companyWebsite'
                      value={companyWebsite}
                      placeholder='Enter CompanyWebsite'
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCompanyWebsite(e.target.value)}
                      aria-label="Company Website"
                    />
                  </FormControl>
                </Box>
              </Box>

              {/* Job Title */}
              <Box className={classes.inputField}>
                <FormControl className={classes.formControl}>
                    <FormLabel htmlFor='emailField'>Job Title (optional)</FormLabel>
                    <TextField
                      type='text'
                      name='jobTitle'
                      value={jobTitle}
                      placeholder='Enter Job Title'
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setJobTitle(e.target.value)}
                      aria-label="Job Title "
                    />
                  </FormControl>
              </Box>

              {/* Tax ID/VAT Number */}
              <Box className={classes.inputField}>
                <FormControl className={classes.formControl}>
                    <FormLabel htmlFor='emailField'>Tax ID/VAT Number (optional)</FormLabel>
                    <TextField
                      type='text'
                      name='taxId'
                      value={taxId}
                      placeholder='Enter Tax ID'
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTaxId(e.target.value)}
                      aria-label="Tax ID/VAT Number"
                    />
                  </FormControl>
              </Box>

              {/* Info Message */}
              <Box className={classes.infoMessage}>
                <InfoOutlinedIcon sx={{ fontSize: '24px' }} className={classes.infoIcon} />
                <Typography variant="caption" className={classes.infoText}>
                  Above details will be updated in the billing details as well.
                </Typography>
              </Box>

              {/* Save/Cancel Buttons - Show only when edited */}
              {generalSettingsEdited && (
                <Box className={classes.buttonRow}>
                  <Box
                    className={classes.saveButton}
                    onClick={handleSaveGeneralSettings}
                    role="button"
                    tabIndex={0}
                  >
                    <Typography variant="h4" className={classes.saveButtonText}>Save</Typography>
                  </Box>
                  <Box
                    className={classes.cancelButton}
                    onClick={handleCancelGeneralSettings}
                    role="button"
                    tabIndex={0}
                  >
                    <Typography variant="h4" className={classes.cancelButtonText}>Cancel</Typography>
                  </Box>
                </Box>
              )}
            </Box>
          </Box>

          {/* Reset Password Card */}
          <Box className={classes.card} sx={{ height: 'fit-content' }}>
            <Typography variant="subtitle1" className={classes.cardTitle}>Reset Password</Typography>
            <Box className={classes.formContent}>
              {/* Old Password */}
              <Box className={classes.inputField}>
                <FormControl className={classes.formControl}>
                    <FormLabel htmlFor='newPassword'>Old Password</FormLabel>
                    <TextField
                      type={showOldPassword ? 'text' : 'password'}
                      id='oldPassword'
                      name='oldPassword'
                      placeholder='Enter old password' 
                      value={oldPassword}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setOldPassword(e.target.value)}
                      aria-label="Old Password"
                      InputProps={{
                          endAdornment: (
                              <InputAdornment position='end'>
                                  <IconButton disableTouchRipple onClick={() => setShowOldPassword(!showOldPassword)}>
                                      {
                                          showOldPassword ? (<VisibilityOutlinedIcon />) : (
                                              <VisibilityOffOutlinedIcon />
                                          )
                                      }
                                  </IconButton>
                              </InputAdornment>
                          ),
                      }}
                    />
                </FormControl>
              </Box>

              {/* New Password */}
              <Box className={classes.inputField}>               
                <FormControl className={classes.formControl}>
                    <FormLabel htmlFor='newPassword'>New Password</FormLabel>
                    <TextField
                      type={showNewPassword ? 'text' : 'password'}
                      id='newPassword'
                      name='newPassword'
                      placeholder='Enter new password' 
                      value={newPassword}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewPassword(e.target.value)}
                      onFocus={() => setNewPasswordFocused(true)}
                      onBlur={() => setNewPasswordFocused(false)}
                      aria-label="New Password"
                      InputProps={{
                          endAdornment: (
                              <InputAdornment position='end'>
                                  <IconButton disableTouchRipple onClick={() => setShowNewPassword(!showNewPassword)}>
                                      {
                                          showNewPassword ? (<VisibilityOutlinedIcon />) : (
                                              <VisibilityOffOutlinedIcon />
                                          )
                                      }
                                  </IconButton>
                              </InputAdornment>
                          ),
                      }}
                    />
                </FormControl>
                 {/* Password Criteria - Show when focused or has value */}
                 {(newPasswordFocused || newPassword !== '') && (
                  <Box className={classes.passwordCriteria}>
                    <Typography variant="subtitle2" className={classes.criteriaTitle}>Password must contain</Typography>
                    <Box className={classes.criteriaItem}>
                      {passwordMeetsLength ? (
                        <Box className={classes.criteriaCheckIcon}>
                          <CheckIcon sx={{ fontSize: '12px', color: 'white' }} />
                        </Box>
                      ) : (
                        <Box className={classes.criteriaUncheckedIcon} />
                      )}
                      <Typography variant="body1" className={classes.criteriaText}>At least 6 characters</Typography>
                    </Box>
                  </Box>
                )}
              </Box>

              {/* New Password Again */}
              <Box className={classes.inputField}>
                <FormControl className={classes.formControl}>
                    <FormLabel htmlFor='newPassword'>New Password Again</FormLabel>
                    <TextField
                      type={showConfirmPassword ? 'text' : 'password'}
                      id='confirmPassword'
                      name='confirmPassword'
                      placeholder='Enter new password again' 
                      value={confirmPassword}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value)}
                      onFocus={() => setNewPasswordFocused(true)}
                      onBlur={() => setNewPasswordFocused(false)}
                      aria-label="Confirm New Password"
                      InputProps={{
                          endAdornment: (
                              <InputAdornment position='end'>
                                  <IconButton disableTouchRipple onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                                      {
                                          showConfirmPassword ? (<VisibilityOutlinedIcon />) : (
                                              <VisibilityOffOutlinedIcon />
                                          )
                                      }
                                  </IconButton>
                              </InputAdornment>
                          ),
                      }}
                    />
                </FormControl>
              </Box>

              {/* Save/Cancel Buttons - Show only when edited */}
              {passwordEdited && (
                <Box className={classes.buttonRow}>
                  <Box
                    className={canSavePassword ? classes.saveButton : classes.saveButtonDisabled}
                    onClick={canSavePassword ? handleSavePassword : undefined}
                    role="button"
                    tabIndex={canSavePassword ? 0 : -1}
                  >
                    <Typography
                      variant="h4"
                      className={canSavePassword ? classes.saveButtonText : classes.saveButtonTextDisabled}
                    >
                      Save
                    </Typography>
                  </Box>
                  <Box
                    className={classes.cancelButton}
                    onClick={handleCancelPassword}
                    role="button"
                    tabIndex={0}
                  >
                    <Typography variant="h4" className={classes.cancelButtonText}>Cancel</Typography>
                  </Box>
                </Box>
              )}
            </Box>
          </Box>
        </Box>

        {/* Change Email Popup */}
        {changeEmailOpen && (
          <Box className={classes.changeEmailOverlay} onClick={handleChangeEmailOverlayClick}>
            <Fade in={changeEmailOpen}>
              <Box className={classes.changeEmailModal}>
                <Typography variant="subtitle1" className={classes.cardTitle}>Change Email</Typography>

                <Box className={classes.formContent}>
                  <Box className={classes.inputField}>
                    <FormControl className={classes.formControl}>
                        <FormLabel htmlFor='emailField'>Email</FormLabel>
                        <TextField
                          type='email'
                          id='emailField'
                          name='email'
                          placeholder='Enter new email'
                          value={newEmail}
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewEmail(e.target.value)}
                          aria-label="New Email"
                        />
                    </FormControl>
                  </Box>

                  <Box className={classes.buttonRow}>
                    <Box
                      className={canUpdateEmail ? classes.saveButton : classes.saveButtonDisabled}
                      onClick={canUpdateEmail ? handleUpdateEmail : undefined}
                      role="button"
                      tabIndex={canUpdateEmail ? 0 : -1}
                    >
                      <Typography
                        variant="h4"
                        className={canUpdateEmail ? classes.saveButtonText : classes.saveButtonTextDisabled}
                      >
                        Update
                      </Typography>
                    </Box>
                    <Box
                      className={classes.cancelButton}
                      onClick={handleCloseChangeEmail}
                      role="button"
                      tabIndex={0}
                    >
                      <Typography variant="h4" className={classes.cancelButtonText}>Cancel</Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Fade>
          </Box>
        )}
      </Box>
    </Fade>
  )
}

export default ProfileSettings
