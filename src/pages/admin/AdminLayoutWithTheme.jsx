import { useState } from 'react'
import {
  Box,
  Drawer,
  AppBar,
  Toolbar,
  List,
  Typography,
  Divider,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Avatar,
  Menu,
  MenuItem,
  Badge,
  useTheme,
  useMediaQuery,
  Switch,
  FormControlLabel
} from '@mui/material'
import {
  Menu as MenuIcon,
  Dashboard,
  Home,
  People,
  AttachMoney,
  Assessment,
  Settings,
  Notifications,
  AccountCircle,
  Logout,
  ChevronLeft,
  Business,
  PhotoLibrary,
  ContactMail,
  DarkMode,
  LightMode
} from '@mui/icons-material'
import { useTheme as useCustomTheme } from '../../contexts/ThemeContext'

const drawerWidth = 280

const menuItems = [
  {
    text: 'Dashboard',
    icon: <Dashboard />,
    path: '/admin'
  },
  {
    text: 'Properties',
    icon: <Home />,
    path: '/admin/properties'
  },
  {
    text: 'Users',
    icon: <People />,
    path: '/admin/users'
  },
  {
    text: 'Projects',
    icon: <Business />,
    path: '/admin/projects'
  },
  {
    text: 'Gallery',
    icon: <PhotoLibrary />,
    path: '/admin/gallery'
  },
  {
    text: 'Inquiries',
    icon: <ContactMail />,
    path: '/admin/inquiries'
  },
  {
    text: 'Payments',
    icon: <AttachMoney />,
    path: '/admin/payments'
  },
  {
    text: 'Reports',
    icon: <Assessment />,
    path: '/admin/reports'
  },
  {
    text: 'Settings',
    icon: <Settings />,
    path: '/admin/settings'
  }
]

export default function AdminLayoutWithTheme({ children }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null)
  const [themeMenuAnchor, setThemeMenuAnchor] = useState(null)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const customTheme = useCustomTheme()
  
  const gold = customTheme.palette.gold
  const dark = customTheme.palette.dark

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleProfileMenuClose = () => {
    setAnchorEl(null)
  }

  const handleThemeMenuOpen = (event) => {
    setThemeMenuAnchor(event.currentTarget)
  }

  const handleThemeMenuClose = () => {
    setThemeMenuAnchor(null)
  }

  const handleLogout = () => {
    console.log('Logging out...')
    handleProfileMenuClose()
  }

  const handleNavigation = (path) => {
    window.location.href = path
  }

  const drawer = (
    <Box sx={{ bgcolor: customTheme.palette.background.paper, height: '100%' }}>
      {/* Logo/Brand */}
      <Box sx={{ 
        p: 3, 
        textAlign: 'center', 
        borderBottom: `2px solid ${gold}20`,
        bgcolor: customTheme.palette.background.card
      }}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 800,
            color: gold,
            letterSpacing: 1,
            fontFamily: '"Playfair Display", serif'
          }}
        >
          SURYA PRIME
        </Typography>
        <Typography variant="body2" sx={{ color: customTheme.palette.text.secondary, mt: 1 }}>
          Admin Panel
        </Typography>
      </Box>

      {/* Navigation Menu */}
      <List sx={{ px: 2, py: 2 }}>
        {menuItems.map((item, index) => (
          <ListItem key={item.text} disablePadding sx={{ mb: 1 }}>
            <ListItemButton
              onClick={() => handleNavigation(item.path)}
              sx={{
                borderRadius: 2,
                bgcolor: window.location.pathname === item.path ? `${gold}20` : 'transparent',
                border: window.location.pathname === item.path ? `1px solid ${gold}` : '1px solid transparent',
                '&:hover': {
                  bgcolor: `${gold}10`,
                  border: `1px solid ${gold}50`
                },
                transition: 'all 0.2s ease'
              }}
            >
              <ListItemIcon
                sx={{
                  color: window.location.pathname === item.path ? gold : customTheme.palette.text.secondary,
                  minWidth: 40
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                sx={{
                  '& .MuiListItemText-primary': {
                    fontWeight: window.location.pathname === item.path ? 600 : 400,
                    color: window.location.pathname === item.path ? customTheme.palette.text.primary : customTheme.palette.text.primary
                  }
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (
    <Box sx={{ 
      display: 'flex',
      bgcolor: customTheme.palette.background.default,
      minHeight: '100vh'
    }}>
      {/* App Bar */}
      <AppBar
        position="fixed"
        sx={{
          width: { md: `calc(100% - ${drawerWidth}px)` },
          ml: { md: `${drawerWidth}px` },
          bgcolor: customTheme.palette.background.paper,
          color: customTheme.palette.text.primary,
          boxShadow: customTheme.darkMode ? '0 2px 10px rgba(0,0,0,0.3)' : '0 2px 10px rgba(0,0,0,0.08)',
          borderBottom: `1px solid ${customTheme.palette.border}`
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, fontWeight: 600 }}>
            {menuItems.find(item => item.path === window.location.pathname)?.text || 'Dashboard'}
          </Typography>

          {/* Theme Toggle */}
          <IconButton
            onClick={handleThemeMenuOpen}
            color="inherit"
            sx={{ mr: 1 }}
          >
            {customTheme.darkMode ? <LightMode /> : <DarkMode />}
          </IconButton>

          {/* Notifications */}
          <IconButton color="inherit" sx={{ mr: 1 }}>
            <Badge badgeContent={4} color="error">
              <Notifications />
            </Badge>
          </IconButton>

          {/* Profile Menu */}
          <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
            color="inherit"
          >
            <Avatar sx={{ width: 32, height: 32, bgcolor: gold }}>
              <AccountCircle />
            </Avatar>
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Theme Menu */}
      <Menu
        anchorEl={themeMenuAnchor}
        open={Boolean(themeMenuAnchor)}
        onClose={handleThemeMenuClose}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        PaperProps={{
          sx: {
            mt: 1.5,
            minWidth: 200,
            borderRadius: 2,
            boxShadow: customTheme.darkMode ? '0 8px 32px rgba(0,0,0,0.3)' : '0 8px 32px rgba(0,0,0,0.12)',
            bgcolor: customTheme.palette.background.paper
          }
        }}
      >
        <MenuItem>
          <FormControlLabel
            control={
              <Switch
                checked={customTheme.darkMode}
                onChange={customTheme.toggleTheme}
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
            label={customTheme.darkMode ? 'Dark Mode' : 'Light Mode'}
            sx={{ color: customTheme.palette.text.primary }}
          />
        </MenuItem>
      </Menu>

      {/* Profile Menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleProfileMenuClose}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        PaperProps={{
          sx: {
            mt: 1.5,
            minWidth: 200,
            borderRadius: 2,
            boxShadow: customTheme.darkMode ? '0 8px 32px rgba(0,0,0,0.3)' : '0 8px 32px rgba(0,0,0,0.12)',
            bgcolor: customTheme.palette.background.paper
          }
        }}
      >
        <MenuItem onClick={handleProfileMenuClose}>
          <ListItemIcon>
            <AccountCircle fontSize="small" />
          </ListItemIcon>
          <ListItemText>Profile</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleProfileMenuClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          <ListItemText>Settings</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleLogout}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          <ListItemText>Logout</ListItemText>
        </MenuItem>
      </Menu>

      {/* Drawer */}
      <Box
        component="nav"
        sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
      >
        {/* Mobile drawer */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              bgcolor: customTheme.palette.background.paper,
              borderRight: `1px solid ${customTheme.palette.border}`
            },
          }}
        >
          {drawer}
        </Drawer>

        {/* Desktop drawer */}
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', md: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              bgcolor: customTheme.palette.background.paper,
              borderRight: `1px solid ${customTheme.palette.border}`
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { md: `calc(100% - ${drawerWidth}px)` },
          mt: 8, // Account for AppBar height
          bgcolor: customTheme.palette.background.default
        }}
      >
        {children}
      </Box>
    </Box>
  )
}
