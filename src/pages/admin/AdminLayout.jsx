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
  useMediaQuery
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
  ContactMail
} from '@mui/icons-material'

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

export default function AdminLayout({ children }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  
  const gold = '#e0a146'
  const dark = '#181c22'

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleProfileMenuClose = () => {
    setAnchorEl(null)
  }

  const handleLogout = () => {
    // Add logout logic here
    console.log('Logging out...')
    handleProfileMenuClose()
  }

  const handleNavigation = (path) => {
    // Simple navigation without hooks for now
    window.location.href = path
  }

  const drawer = (
    <Box>
      {/* Logo/Brand */}
      <Box sx={{ p: 3, textAlign: 'center', borderBottom: `2px solid ${gold}20` }}>
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
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
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
                  color: window.location.pathname === item.path ? gold : 'text.secondary',
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
                    color: window.location.pathname === item.path ? dark : 'text.primary'
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
    <Box sx={{ display: 'flex' }}>
      {/* App Bar */}
      <AppBar
        position="fixed"
        sx={{
          width: { md: `calc(100% - ${drawerWidth}px)` },
          ml: { md: `${drawerWidth}px` },
          bgcolor: 'white',
          color: dark,
          boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
          borderBottom: `1px solid ${gold}20`
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
            boxShadow: '0 8px 32px rgba(0,0,0,0.12)'
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
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              bgcolor: 'white',
              borderRight: `1px solid ${gold}20`
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
              bgcolor: 'white',
              borderRight: `1px solid ${gold}20`
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
          mt: 8 // Account for AppBar height
        }}
      >
        {children}
      </Box>
    </Box>
  )
}
