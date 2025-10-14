import { useState } from 'react'
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  TextField,
  Switch,
  FormControlLabel,
  Divider,
  Avatar,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Alert,
  Snackbar
} from '@mui/material'
import {
  Save,
  Upload,
  PhotoCamera,
  Security,
  Notifications,
  Business,
  Email,
  Phone,
  LocationOn,
  Language
} from '@mui/icons-material'
import AdminLayoutWithTheme from './AdminLayoutWithTheme'
import { useTheme } from '../../contexts/ThemeContext'

export default function Settings() {
  const [settings, setSettings] = useState({
    company: {
      name: 'Surya Prime Ventures',
      email: 'info@suryaprimeventures.com',
      phone: '+91 99026 51666',
      address: 'Hyderabad, Telangana',
      website: 'www.suryaprimeventures.com',
      description: 'Leading real estate developer in Hyderabad'
    },
    notifications: {
      emailNotifications: true,
      smsNotifications: false,
      pushNotifications: true,
      weeklyReports: true,
      monthlyReports: false
    },
    security: {
      twoFactorAuth: false,
      sessionTimeout: 30,
      passwordExpiry: 90
    },
    system: {
      language: 'en',
      timezone: 'Asia/Kolkata',
      dateFormat: 'DD/MM/YYYY',
      currency: 'INR'
    }
  })

  const [openDialog, setOpenDialog] = useState(false)
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' })

  const customTheme = useTheme()
  const gold = customTheme.palette.gold
  const dark = customTheme.palette.dark

  const handleInputChange = (section, field, value) => {
    setSettings(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }))
  }

  const handleSave = () => {
    // Add save logic here
    console.log('Saving settings:', settings)
    setSnackbar({
      open: true,
      message: 'Settings saved successfully!',
      severity: 'success'
    })
  }

  const handleSnackbarClose = () => {
    setSnackbar(prev => ({ ...prev, open: false }))
  }

  return (
    <AdminLayoutWithTheme>
      <Box sx={{ flexGrow: 1, p: 3, bgcolor: customTheme.palette.background.default, minHeight: '100vh' }}>
        <Container maxWidth="xl">
          {/* Header */}
          <Box sx={{ mb: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Box>
              <Typography variant="h4" sx={{ fontWeight: 600, color: dark, mb: 1 }}>
                Settings
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Manage your account settings and preferences
              </Typography>
            </Box>
            <Button
              variant="contained"
              startIcon={<Save />}
              onClick={handleSave}
              sx={{
                bgcolor: gold,
                color: dark,
                fontWeight: 600,
                '&:hover': { bgcolor: '#d4943a' }
              }}
            >
              Save Changes
            </Button>
          </Box>

          <Grid container spacing={3}>
            {/* Company Information */}
            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  borderRadius: 3,
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                  border: `1px solid ${gold}20`
                }}
              >
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <Business sx={{ color: gold, mr: 2, fontSize: 28 }} />
                    <Typography variant="h6" sx={{ fontWeight: 600, color: dark }}>
                      Company Information
                    </Typography>
                  </Box>

                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Company Name"
                        value={settings.company.name}
                        onChange={(e) => handleInputChange('company', 'name', e.target.value)}
                        sx={{ mb: 2 }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Email"
                        type="email"
                        value={settings.company.email}
                        onChange={(e) => handleInputChange('company', 'email', e.target.value)}
                        InputProps={{
                          startAdornment: <Email sx={{ mr: 1, color: 'text.secondary' }} />
                        }}
                        sx={{ mb: 2 }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Phone"
                        value={settings.company.phone}
                        onChange={(e) => handleInputChange('company', 'phone', e.target.value)}
                        InputProps={{
                          startAdornment: <Phone sx={{ mr: 1, color: 'text.secondary' }} />
                        }}
                        sx={{ mb: 2 }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Address"
                        value={settings.company.address}
                        onChange={(e) => handleInputChange('company', 'address', e.target.value)}
                        InputProps={{
                          startAdornment: <LocationOn sx={{ mr: 1, color: 'text.secondary' }} />
                        }}
                        sx={{ mb: 2 }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Website"
                        value={settings.company.website}
                        onChange={(e) => handleInputChange('company', 'website', e.target.value)}
                        sx={{ mb: 2 }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        multiline
                        rows={3}
                        label="Description"
                        value={settings.company.description}
                        onChange={(e) => handleInputChange('company', 'description', e.target.value)}
                        sx={{ mb: 2 }}
                      />
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>

            {/* Profile Settings */}
            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  borderRadius: 3,
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                  border: `1px solid ${gold}20`
                }}
              >
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <PhotoCamera sx={{ color: gold, mr: 2, fontSize: 28 }} />
                    <Typography variant="h6" sx={{ fontWeight: 600, color: dark }}>
                      Profile Settings
                    </Typography>
                  </Box>

                  <Box sx={{ textAlign: 'center', mb: 3 }}>
                    <Avatar
                      sx={{
                        width: 100,
                        height: 100,
                        mx: 'auto',
                        mb: 2,
                        bgcolor: gold,
                        fontSize: 40
                      }}
                    >
                      Admin
                    </Avatar>
                    <Button
                      variant="outlined"
                      startIcon={<Upload />}
                      onClick={() => setOpenDialog(true)}
                      sx={{
                        borderColor: gold,
                        color: gold,
                        '&:hover': {
                          borderColor: gold,
                          bgcolor: 'rgba(224, 161, 70, 0.1)'
                        }
                      }}
                    >
                      Change Avatar
                    </Button>
                  </Box>

                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="First Name"
                        defaultValue="Admin"
                        sx={{ mb: 2 }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Last Name"
                        defaultValue="User"
                        sx={{ mb: 2 }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Email"
                        type="email"
                        defaultValue="admin@suryaprimeventures.com"
                        sx={{ mb: 2 }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Current Password"
                        type="password"
                        sx={{ mb: 2 }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="New Password"
                        type="password"
                        sx={{ mb: 2 }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Confirm Password"
                        type="password"
                        sx={{ mb: 2 }}
                      />
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>

            {/* Notification Settings */}
            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  borderRadius: 3,
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                  border: `1px solid ${gold}20`
                }}
              >
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <Notifications sx={{ color: gold, mr: 2, fontSize: 28 }} />
                    <Typography variant="h6" sx={{ fontWeight: 600, color: dark }}>
                      Notification Settings
                    </Typography>
                  </Box>

                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <FormControlLabel
                      control={
                        <Switch
                          checked={settings.notifications.emailNotifications}
                          onChange={(e) => handleInputChange('notifications', 'emailNotifications', e.target.checked)}
                          sx={{
                            '& .MuiSwitch-switchBase.Mui-checked': {
                              color: gold,
                            },
                            '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                              backgroundColor: gold,
                            },
                          }}
                        />
                      }
                      label="Email Notifications"
                    />
                    <FormControlLabel
                      control={
                        <Switch
                          checked={settings.notifications.smsNotifications}
                          onChange={(e) => handleInputChange('notifications', 'smsNotifications', e.target.checked)}
                          sx={{
                            '& .MuiSwitch-switchBase.Mui-checked': {
                              color: gold,
                            },
                            '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                              backgroundColor: gold,
                            },
                          }}
                        />
                      }
                      label="SMS Notifications"
                    />
                    <FormControlLabel
                      control={
                        <Switch
                          checked={settings.notifications.pushNotifications}
                          onChange={(e) => handleInputChange('notifications', 'pushNotifications', e.target.checked)}
                          sx={{
                            '& .MuiSwitch-switchBase.Mui-checked': {
                              color: gold,
                            },
                            '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                              backgroundColor: gold,
                            },
                          }}
                        />
                      }
                      label="Push Notifications"
                    />
                    <Divider sx={{ my: 1 }} />
                    <FormControlLabel
                      control={
                        <Switch
                          checked={settings.notifications.weeklyReports}
                          onChange={(e) => handleInputChange('notifications', 'weeklyReports', e.target.checked)}
                          sx={{
                            '& .MuiSwitch-switchBase.Mui-checked': {
                              color: gold,
                            },
                            '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                              backgroundColor: gold,
                            },
                          }}
                        />
                      }
                      label="Weekly Reports"
                    />
                    <FormControlLabel
                      control={
                        <Switch
                          checked={settings.notifications.monthlyReports}
                          onChange={(e) => handleInputChange('notifications', 'monthlyReports', e.target.checked)}
                          sx={{
                            '& .MuiSwitch-switchBase.Mui-checked': {
                              color: gold,
                            },
                            '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                              backgroundColor: gold,
                            },
                          }}
                        />
                      }
                      label="Monthly Reports"
                    />
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            {/* Security Settings */}
            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  borderRadius: 3,
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                  border: `1px solid ${gold}20`
                }}
              >
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <Security sx={{ color: gold, mr: 2, fontSize: 28 }} />
                    <Typography variant="h6" sx={{ fontWeight: 600, color: dark }}>
                      Security Settings
                    </Typography>
                  </Box>

                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                    <FormControlLabel
                      control={
                        <Switch
                          checked={settings.security.twoFactorAuth}
                          onChange={(e) => handleInputChange('security', 'twoFactorAuth', e.target.checked)}
                          sx={{
                            '& .MuiSwitch-switchBase.Mui-checked': {
                              color: gold,
                            },
                            '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                              backgroundColor: gold,
                            },
                          }}
                        />
                      }
                      label="Two-Factor Authentication"
                    />

                    <FormControl fullWidth>
                      <InputLabel>Session Timeout</InputLabel>
                      <Select
                        value={settings.security.sessionTimeout}
                        onChange={(e) => handleInputChange('security', 'sessionTimeout', e.target.value)}
                        label="Session Timeout"
                      >
                        <MenuItem value={15}>15 minutes</MenuItem>
                        <MenuItem value={30}>30 minutes</MenuItem>
                        <MenuItem value={60}>1 hour</MenuItem>
                        <MenuItem value={120}>2 hours</MenuItem>
                      </Select>
                    </FormControl>

                    <FormControl fullWidth>
                      <InputLabel>Password Expiry</InputLabel>
                      <Select
                        value={settings.security.passwordExpiry}
                        onChange={(e) => handleInputChange('security', 'passwordExpiry', e.target.value)}
                        label="Password Expiry"
                      >
                        <MenuItem value={30}>30 days</MenuItem>
                        <MenuItem value={60}>60 days</MenuItem>
                        <MenuItem value={90}>90 days</MenuItem>
                        <MenuItem value={180}>180 days</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            {/* System Settings */}
            <Grid item xs={12}>
              <Card
                sx={{
                  borderRadius: 3,
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                  border: `1px solid ${gold}20`
                }}
              >
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <Language sx={{ color: gold, mr: 2, fontSize: 28 }} />
                    <Typography variant="h6" sx={{ fontWeight: 600, color: dark }}>
                      System Settings
                    </Typography>
                  </Box>

                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={3}>
                      <FormControl fullWidth>
                        <InputLabel>Language</InputLabel>
                        <Select
                          value={settings.system.language}
                          onChange={(e) => handleInputChange('system', 'language', e.target.value)}
                          label="Language"
                        >
                          <MenuItem value="en">English</MenuItem>
                          <MenuItem value="hi">Hindi</MenuItem>
                          <MenuItem value="te">Telugu</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                      <FormControl fullWidth>
                        <InputLabel>Timezone</InputLabel>
                        <Select
                          value={settings.system.timezone}
                          onChange={(e) => handleInputChange('system', 'timezone', e.target.value)}
                          label="Timezone"
                        >
                          <MenuItem value="Asia/Kolkata">Asia/Kolkata</MenuItem>
                          <MenuItem value="UTC">UTC</MenuItem>
                          <MenuItem value="America/New_York">America/New_York</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                      <FormControl fullWidth>
                        <InputLabel>Date Format</InputLabel>
                        <Select
                          value={settings.system.dateFormat}
                          onChange={(e) => handleInputChange('system', 'dateFormat', e.target.value)}
                          label="Date Format"
                        >
                          <MenuItem value="DD/MM/YYYY">DD/MM/YYYY</MenuItem>
                          <MenuItem value="MM/DD/YYYY">MM/DD/YYYY</MenuItem>
                          <MenuItem value="YYYY-MM-DD">YYYY-MM-DD</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                      <FormControl fullWidth>
                        <InputLabel>Currency</InputLabel>
                        <Select
                          value={settings.system.currency}
                          onChange={(e) => handleInputChange('system', 'currency', e.target.value)}
                          label="Currency"
                        >
                          <MenuItem value="INR">INR (₹)</MenuItem>
                          <MenuItem value="USD">USD ($)</MenuItem>
                          <MenuItem value="EUR">EUR (€)</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          {/* Avatar Upload Dialog */}
          <Dialog
            open={openDialog}
            onClose={() => setOpenDialog(false)}
            maxWidth="sm"
            fullWidth
            PaperProps={{
              sx: {
                borderRadius: 3
              }
            }}
          >
            <DialogTitle sx={{ fontWeight: 600, color: dark, borderBottom: `1px solid ${gold}20` }}>
              Change Avatar
            </DialogTitle>
            <DialogContent sx={{ p: 3 }}>
              <Box sx={{ textAlign: 'center', py: 4 }}>
                <Avatar
                  sx={{
                    width: 150,
                    height: 150,
                    mx: 'auto',
                    mb: 3,
                    bgcolor: gold,
                    fontSize: 60
                  }}
                >
                  Admin
                </Avatar>
                <Button
                  variant="contained"
                  component="label"
                  startIcon={<Upload />}
                  sx={{
                    bgcolor: gold,
                    color: dark,
                    fontWeight: 600,
                    '&:hover': { bgcolor: '#d4943a' }
                  }}
                >
                  Upload New Avatar
                  <input hidden accept="image/*" type="file" />
                </Button>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                  Supported formats: JPG, PNG, GIF (Max 2MB)
                </Typography>
              </Box>
            </DialogContent>
            <DialogActions sx={{ p: 3, borderTop: `1px solid ${gold}20` }}>
              <Button
                onClick={() => setOpenDialog(false)}
                sx={{ color: 'text.secondary' }}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                sx={{
                  bgcolor: gold,
                  color: dark,
                  fontWeight: 600,
                  '&:hover': { bgcolor: '#d4943a' }
                }}
              >
                Update Avatar
              </Button>
            </DialogActions>
          </Dialog>

          {/* Success Snackbar */}
          <Snackbar
            open={snackbar.open}
            autoHideDuration={6000}
            onClose={handleSnackbarClose}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          >
            <Alert
              onClose={handleSnackbarClose}
              severity={snackbar.severity}
              sx={{ width: '100%' }}
            >
              {snackbar.message}
            </Alert>
          </Snackbar>
        </Container>
      </Box>
    </AdminLayoutWithTheme>
  )
}
