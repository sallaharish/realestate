import { useState } from 'react'
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Avatar,
  Chip,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Menu,
  ListItemIcon,
  ListItemText,
  Badge,
  Tabs,
  Tab,
  InputAdornment
} from '@mui/material'
import {
  Add,
  Edit,
  Delete,
  MoreVert,
  Search,
  Email,
  Phone,
  LocationOn,
  CalendarToday,
  Person,
  AdminPanelSettings,
  Block,
  CheckCircle
} from '@mui/icons-material'
import AdminLayoutWithTheme from './AdminLayoutWithTheme'
import { useTheme } from '../../contexts/ThemeContext'

export default function UserManagement() {
  const [openDialog, setOpenDialog] = useState(false)
  const [selectedUser, setSelectedUser] = useState(null)
  const [anchorEl, setAnchorEl] = useState(null)
  const [tabValue, setTabValue] = useState(0)
  const [searchTerm, setSearchTerm] = useState('')

  const customTheme = useTheme()
  const gold = customTheme.palette.gold
  const dark = customTheme.palette.dark

  // Mock data - replace with real data from your backend
  const users = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '+91 98765 43210',
      role: 'Customer',
      status: 'Active',
      location: 'Hyderabad, Telangana',
      joinDate: '2024-01-15',
      lastActive: '2024-01-28',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop',
      propertiesInterested: 3,
      inquiries: 5
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      phone: '+91 87654 32109',
      role: 'Customer',
      status: 'Active',
      location: 'Hyderabad, Telangana',
      joinDate: '2024-01-10',
      lastActive: '2024-01-27',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=150&auto=format&fit=crop',
      propertiesInterested: 2,
      inquiries: 3
    },
    {
      id: 3,
      name: 'Mike Johnson',
      email: 'mike.johnson@example.com',
      phone: '+91 76543 21098',
      role: 'Admin',
      status: 'Active',
      location: 'Hyderabad, Telangana',
      joinDate: '2023-12-01',
      lastActive: '2024-01-28',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop',
      propertiesInterested: 0,
      inquiries: 0
    },
    {
      id: 4,
      name: 'Sarah Wilson',
      email: 'sarah.wilson@example.com',
      phone: '+91 65432 10987',
      role: 'Customer',
      status: 'Inactive',
      location: 'Hyderabad, Telangana',
      joinDate: '2024-01-05',
      lastActive: '2024-01-20',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop',
      propertiesInterested: 1,
      inquiries: 2
    }
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active':
        return '#4caf50'
      case 'Inactive':
        return '#f44336'
      case 'Pending':
        return '#ff9800'
      default:
        return '#9e9e9e'
    }
  }

  const getRoleColor = (role) => {
    switch (role) {
      case 'Admin':
        return '#9c27b0'
      case 'Customer':
        return '#2196f3'
      default:
        return '#9e9e9e'
    }
  }

  const handleMenuClick = (event, user) => {
    setAnchorEl(event.currentTarget)
    setSelectedUser(user)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
    setSelectedUser(null)
  }

  const handleEdit = () => {
    setOpenDialog(true)
    handleMenuClose()
  }

  const handleDelete = () => {
    // Add delete logic here
    console.log('Deleting user:', selectedUser)
    handleMenuClose()
  }

  const handleBlock = () => {
    // Add block logic here
    console.log('Blocking user:', selectedUser)
    handleMenuClose()
  }

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue)
  }

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const activeUsers = filteredUsers.filter(user => user.status === 'Active')
  const inactiveUsers = filteredUsers.filter(user => user.status === 'Inactive')
  const adminUsers = filteredUsers.filter(user => user.role === 'Admin')

  return (
    <AdminLayoutWithTheme>
      <Box sx={{ flexGrow: 1, p: 3, bgcolor: customTheme.palette.background.default, minHeight: '100vh' }}>
        <Container maxWidth="xl">
          {/* Header */}
          <Box sx={{ mb: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Box>
              <Typography variant="h4" sx={{ fontWeight: 600, color: dark, mb: 1 }}>
                User Management
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Manage users, roles, and permissions
              </Typography>
            </Box>
            <Button
              variant="contained"
              startIcon={<Add />}
              onClick={() => setOpenDialog(true)}
              sx={{
                bgcolor: gold,
                color: dark,
                fontWeight: 600,
                '&:hover': { bgcolor: '#d4943a' }
              }}
            >
              Add User
            </Button>
          </Box>

          {/* Stats Cards */}
          <Grid container spacing={3} sx={{ mb: 4 }}>
            <Grid item xs={12} sm={6} md={3}>
              <Card
                sx={{
                  background: 'linear-gradient(135deg, rgba(224, 161, 70, 0.1) 0%, rgba(224, 161, 70, 0.05) 100%)',
                  border: `2px solid ${gold}`,
                  borderRadius: 3
                }}
              >
                <CardContent sx={{ textAlign: 'center' }}>
                  <Avatar sx={{ bgcolor: gold, mx: 'auto', mb: 2, width: 56, height: 56 }}>
                    <Person />
                  </Avatar>
                  <Typography variant="h4" sx={{ fontWeight: 700, color: dark }}>
                    {users.length}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Total Users
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card
                sx={{
                  background: 'linear-gradient(135deg, rgba(76, 175, 80, 0.1) 0%, rgba(76, 175, 80, 0.05) 100%)',
                  border: '2px solid #4caf50',
                  borderRadius: 3
                }}
              >
                <CardContent sx={{ textAlign: 'center' }}>
                  <Avatar sx={{ bgcolor: '#4caf50', mx: 'auto', mb: 2, width: 56, height: 56 }}>
                    <CheckCircle />
                  </Avatar>
                  <Typography variant="h4" sx={{ fontWeight: 700, color: dark }}>
                    {activeUsers.length}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Active Users
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card
                sx={{
                  background: 'linear-gradient(135deg, rgba(156, 39, 176, 0.1) 0%, rgba(156, 39, 176, 0.05) 100%)',
                  border: '2px solid #9c27b0',
                  borderRadius: 3
                }}
              >
                <CardContent sx={{ textAlign: 'center' }}>
                  <Avatar sx={{ bgcolor: '#9c27b0', mx: 'auto', mb: 2, width: 56, height: 56 }}>
                    <AdminPanelSettings />
                  </Avatar>
                  <Typography variant="h4" sx={{ fontWeight: 700, color: dark }}>
                    {adminUsers.length}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Admin Users
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card
                sx={{
                  background: 'linear-gradient(135deg, rgba(244, 67, 54, 0.1) 0%, rgba(244, 67, 54, 0.05) 100%)',
                  border: '2px solid #f44336',
                  borderRadius: 3
                }}
              >
                <CardContent sx={{ textAlign: 'center' }}>
                  <Avatar sx={{ bgcolor: '#f44336', mx: 'auto', mb: 2, width: 56, height: 56 }}>
                    <Block />
                  </Avatar>
                  <Typography variant="h4" sx={{ fontWeight: 700, color: dark }}>
                    {inactiveUsers.length}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Inactive Users
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          {/* Search and Tabs */}
          <Card sx={{ mb: 3, borderRadius: 3 }}>
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <TextField
                  placeholder="Search users..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Search />
                      </InputAdornment>
                    ),
                  }}
                  sx={{ width: 300 }}
                />
                <Typography variant="body2" color="text.secondary">
                  {filteredUsers.length} users found
                </Typography>
              </Box>
              <Tabs
                value={tabValue}
                onChange={handleTabChange}
                sx={{
                  '& .MuiTab-root': {
                    fontWeight: 600,
                    textTransform: 'none'
                  }
                }}
              >
                <Tab label="All Users" />
                <Tab label="Active Users" />
                <Tab label="Admin Users" />
                <Tab label="Inactive Users" />
              </Tabs>
            </CardContent>
          </Card>

          {/* Users Table */}
          <TableContainer component={Paper} sx={{ borderRadius: 3, overflow: 'hidden' }}>
            <Table>
              <TableHead>
                <TableRow sx={{ bgcolor: `${gold}10` }}>
                  <TableCell>User</TableCell>
                  <TableCell>Contact</TableCell>
                  <TableCell>Role</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Location</TableCell>
                  <TableCell>Join Date</TableCell>
                  <TableCell>Last Active</TableCell>
                  <TableCell>Activity</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredUsers.map((user) => (
                  <TableRow key={user.id} hover>
                    <TableCell>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Badge
                          overlap="circular"
                          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                          badgeContent={
                            <Box
                              sx={{
                                width: 12,
                                height: 12,
                                borderRadius: '50%',
                                bgcolor: getStatusColor(user.status),
                                border: '2px solid white'
                              }}
                            />
                          }
                        >
                          <Avatar
                            src={user.avatar}
                            sx={{ width: 50, height: 50, mr: 2 }}
                          />
                        </Badge>
                        <Box>
                          <Typography variant="body2" sx={{ fontWeight: 600 }}>
                            {user.name}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            ID: {user.id}
                          </Typography>
                        </Box>
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
                          <Email sx={{ fontSize: 14, mr: 1, color: 'text.secondary' }} />
                          <Typography variant="caption">
                            {user.email}
                          </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <Phone sx={{ fontSize: 14, mr: 1, color: 'text.secondary' }} />
                          <Typography variant="caption">
                            {user.phone}
                          </Typography>
                        </Box>
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Chip
                        label={user.role}
                        size="small"
                        sx={{
                          bgcolor: getRoleColor(user.role),
                          color: 'white',
                          fontWeight: 600
                        }}
                      />
                    </TableCell>
                    <TableCell>
                      <Chip
                        label={user.status}
                        size="small"
                        sx={{
                          bgcolor: getStatusColor(user.status),
                          color: 'white',
                          fontWeight: 600
                        }}
                      />
                    </TableCell>
                    <TableCell>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <LocationOn sx={{ fontSize: 14, mr: 1, color: 'text.secondary' }} />
                        <Typography variant="caption">
                          {user.location}
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <CalendarToday sx={{ fontSize: 14, mr: 1, color: 'text.secondary' }} />
                        <Typography variant="caption">
                          {user.joinDate}
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Typography variant="caption">
                        {user.lastActive}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Box>
                        <Typography variant="caption" display="block">
                          Properties: {user.propertiesInterested}
                        </Typography>
                        <Typography variant="caption" display="block">
                          Inquiries: {user.inquiries}
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell>
                      <IconButton
                        size="small"
                        onClick={(e) => handleMenuClick(e, user)}
                      >
                        <MoreVert />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          {/* Action Menu */}
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            PaperProps={{
              sx: {
                borderRadius: 2,
                minWidth: 180
              }
            }}
          >
            <MenuItem onClick={handleEdit}>
              <ListItemIcon>
                <Edit fontSize="small" />
              </ListItemIcon>
              <ListItemText>Edit User</ListItemText>
            </MenuItem>
            <MenuItem onClick={handleBlock}>
              <ListItemIcon>
                <Block fontSize="small" />
              </ListItemIcon>
              <ListItemText>Block User</ListItemText>
            </MenuItem>
            <MenuItem onClick={handleDelete} sx={{ color: '#f44336' }}>
              <ListItemIcon>
                <Delete fontSize="small" sx={{ color: '#f44336' }} />
              </ListItemIcon>
              <ListItemText>Delete User</ListItemText>
            </MenuItem>
          </Menu>

          {/* Add/Edit User Dialog */}
          <Dialog
            open={openDialog}
            onClose={() => setOpenDialog(false)}
            maxWidth="md"
            fullWidth
            PaperProps={{
              sx: {
                borderRadius: 3
              }
            }}
          >
            <DialogTitle sx={{ fontWeight: 600, color: dark, borderBottom: `1px solid ${gold}20` }}>
              {selectedUser ? 'Edit User' : 'Add New User'}
            </DialogTitle>
            <DialogContent sx={{ p: 3 }}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Full Name"
                    variant="outlined"
                    defaultValue={selectedUser?.name || ''}
                    sx={{ mb: 2 }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Email"
                    type="email"
                    variant="outlined"
                    defaultValue={selectedUser?.email || ''}
                    sx={{ mb: 2 }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Phone Number"
                    variant="outlined"
                    defaultValue={selectedUser?.phone || ''}
                    sx={{ mb: 2 }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Location"
                    variant="outlined"
                    defaultValue={selectedUser?.location || ''}
                    sx={{ mb: 2 }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth sx={{ mb: 2 }}>
                    <InputLabel>Role</InputLabel>
                    <Select
                      defaultValue={selectedUser?.role || 'Customer'}
                      label="Role"
                    >
                      <MenuItem value="Customer">Customer</MenuItem>
                      <MenuItem value="Admin">Admin</MenuItem>
                      <MenuItem value="Agent">Agent</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth sx={{ mb: 2 }}>
                    <InputLabel>Status</InputLabel>
                    <Select
                      defaultValue={selectedUser?.status || 'Active'}
                      label="Status"
                    >
                      <MenuItem value="Active">Active</MenuItem>
                      <MenuItem value="Inactive">Inactive</MenuItem>
                      <MenuItem value="Pending">Pending</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    multiline
                    rows={3}
                    label="Notes"
                    variant="outlined"
                    sx={{ mb: 2 }}
                  />
                </Grid>
              </Grid>
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
                {selectedUser ? 'Update User' : 'Add User'}
              </Button>
            </DialogActions>
          </Dialog>
        </Container>
      </Box>
    </AdminLayoutWithTheme>
  )
}
