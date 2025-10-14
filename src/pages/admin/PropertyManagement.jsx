import { useState } from 'react'
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
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
  Avatar,
  Menu,
  ListItemIcon,
  ListItemText
} from '@mui/material'
import {
  Add,
  Edit,
  Delete,
  Visibility,
  MoreVert,
  Home,
  AttachMoney,
  LocationOn,
  CalendarToday,
  Person
} from '@mui/icons-material'
import AdminLayoutWithTheme from './AdminLayoutWithTheme'
import { useTheme } from '../../contexts/ThemeContext'

export default function PropertyManagement() {
  const [openDialog, setOpenDialog] = useState(false)
  const [selectedProperty, setSelectedProperty] = useState(null)
  const [anchorEl, setAnchorEl] = useState(null)
  const [viewMode, setViewMode] = useState('grid') // 'grid' or 'table'

  const customTheme = useTheme()
  const gold = customTheme.palette.gold
  const dark = customTheme.palette.dark

  // Mock data - replace with real data from your backend
  const properties = [
    {
      id: 1,
      name: 'Green Valley Plot 45',
      location: 'Hyderabad, Telangana',
      price: '₹45,00,000',
      size: '240 sq yards',
      status: 'Available',
      type: 'Residential Plot',
      project: 'Green Valley',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=400&auto=format&fit=crop',
      addedDate: '2024-01-15',
      features: ['DTCP Approved', 'RERA Registered', 'Eco-Friendly']
    },
    {
      id: 2,
      name: 'Suketana Premium Villa',
      location: 'Hyderabad, Telangana',
      price: '₹85,00,000',
      size: '400 sq yards',
      status: 'Sold',
      type: 'Villa',
      project: 'Suketana',
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=400&auto=format&fit=crop',
      addedDate: '2024-01-10',
      features: ['Premium Location', 'Gated Community', 'Modern Amenities']
    },
    {
      id: 3,
      name: 'Royal Gardens Plot 12',
      location: 'Hyderabad, Telangana',
      price: '₹52,00,000',
      size: '300 sq yards',
      status: 'Under Negotiation',
      type: 'Residential Plot',
      project: 'Royal Gardens',
      image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=400&auto=format&fit=crop',
      addedDate: '2024-01-20',
      features: ['Luxury Location', 'High ROI', 'Prime Connectivity']
    },
    {
      id: 4,
      name: 'Green Valley Plot 67',
      location: 'Hyderabad, Telangana',
      price: '₹38,00,000',
      size: '200 sq yards',
      status: 'Available',
      type: 'Residential Plot',
      project: 'Green Valley',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=400&auto=format&fit=crop',
      addedDate: '2024-01-25',
      features: ['DTCP Approved', 'RERA Registered', 'Eco-Friendly']
    }
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case 'Available':
        return '#4caf50'
      case 'Sold':
        return '#f44336'
      case 'Under Negotiation':
        return '#ff9800'
      default:
        return '#9e9e9e'
    }
  }

  const handleMenuClick = (event, property) => {
    setAnchorEl(event.currentTarget)
    setSelectedProperty(property)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
    setSelectedProperty(null)
  }

  const handleEdit = () => {
    setOpenDialog(true)
    handleMenuClose()
  }

  const handleDelete = () => {
    // Add delete logic here
    console.log('Deleting property:', selectedProperty)
    handleMenuClose()
  }

  const handleView = () => {
    // Add view logic here
    console.log('Viewing property:', selectedProperty)
    handleMenuClose()
  }

  return (
    <AdminLayoutWithTheme>
      <Box sx={{ flexGrow: 1, p: 3, bgcolor: customTheme.palette.background.default, minHeight: '100vh' }}>
        <Container maxWidth="xl">
          {/* Header */}
          <Box sx={{ mb: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Box>
              <Typography variant="h4" sx={{ fontWeight: 600, color: dark, mb: 1 }}>
                Property Management
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Manage all your real estate properties and listings
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button
                variant="outlined"
                onClick={() => setViewMode(viewMode === 'grid' ? 'table' : 'grid')}
                sx={{
                  borderColor: gold,
                  color: gold,
                  '&:hover': {
                    borderColor: gold,
                    bgcolor: 'rgba(224, 161, 70, 0.1)'
                  }
                }}
              >
                {viewMode === 'grid' ? 'Table View' : 'Grid View'}
              </Button>
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
                Add Property
              </Button>
            </Box>
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
                    <Home />
                  </Avatar>
                  <Typography variant="h4" sx={{ fontWeight: 700, color: dark }}>
                    {properties.length}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Total Properties
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
                    <Visibility />
                  </Avatar>
                  <Typography variant="h4" sx={{ fontWeight: 700, color: dark }}>
                    {properties.filter(p => p.status === 'Available').length}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Available
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
                    <AttachMoney />
                  </Avatar>
                  <Typography variant="h4" sx={{ fontWeight: 700, color: dark }}>
                    {properties.filter(p => p.status === 'Sold').length}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Sold
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card
                sx={{
                  background: 'linear-gradient(135deg, rgba(255, 152, 0, 0.1) 0%, rgba(255, 152, 0, 0.05) 100%)',
                  border: '2px solid #ff9800',
                  borderRadius: 3
                }}
              >
                <CardContent sx={{ textAlign: 'center' }}>
                  <Avatar sx={{ bgcolor: '#ff9800', mx: 'auto', mb: 2, width: 56, height: 56 }}>
                    <Person />
                  </Avatar>
                  <Typography variant="h4" sx={{ fontWeight: 700, color: dark }}>
                    {properties.filter(p => p.status === 'Under Negotiation').length}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Under Negotiation
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          {/* Properties Grid/Table */}
          {viewMode === 'grid' ? (
            <Grid container spacing={3}>
              {properties.map((property) => (
                <Grid item xs={12} sm={6} md={4} key={property.id}>
                  <Card
                    sx={{
                      borderRadius: 3,
                      overflow: 'hidden',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: '0 15px 30px rgba(0,0,0,0.15)'
                      }
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="200"
                      image={property.image}
                      alt={property.name}
                    />
                    <CardContent>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                        <Typography variant="h6" sx={{ fontWeight: 600, color: dark }}>
                          {property.name}
                        </Typography>
                        <IconButton
                          size="small"
                          onClick={(e) => handleMenuClick(e, property)}
                        >
                          <MoreVert />
                        </IconButton>
                      </Box>
                      
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <LocationOn sx={{ fontSize: 16, color: 'text.secondary', mr: 1 }} />
                        <Typography variant="body2" color="text.secondary">
                          {property.location}
                        </Typography>
                      </Box>
                      
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <AttachMoney sx={{ fontSize: 16, color: gold, mr: 1 }} />
                        <Typography variant="h6" sx={{ color: gold, fontWeight: 600 }}>
                          {property.price}
                        </Typography>
                      </Box>
                      
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                        <Typography variant="body2" color="text.secondary">
                          {property.size}
                        </Typography>
                        <Chip
                          label={property.status}
                          size="small"
                          sx={{
                            bgcolor: getStatusColor(property.status),
                            color: 'white',
                            fontWeight: 600
                          }}
                        />
                      </Box>
                      
                      <Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap' }}>
                        {property.features.slice(0, 2).map((feature, index) => (
                          <Chip
                            key={index}
                            label={feature}
                            size="small"
                            variant="outlined"
                            sx={{ fontSize: '10px', height: 20 }}
                          />
                        ))}
                        {property.features.length > 2 && (
                          <Chip
                            label={`+${property.features.length - 2}`}
                            size="small"
                            variant="outlined"
                            sx={{ fontSize: '10px', height: 20 }}
                          />
                        )}
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          ) : (
            <TableContainer component={Paper} sx={{ borderRadius: 3, overflow: 'hidden' }}>
              <Table>
                <TableHead>
                  <TableRow sx={{ bgcolor: `${gold}10` }}>
                    <TableCell>Property</TableCell>
                    <TableCell>Location</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>Size</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Project</TableCell>
                    <TableCell>Added Date</TableCell>
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {properties.map((property) => (
                    <TableRow key={property.id} hover>
                      <TableCell>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <Avatar
                            src={property.image}
                            variant="rounded"
                            sx={{ width: 50, height: 50, mr: 2 }}
                          />
                          <Box>
                            <Typography variant="body2" sx={{ fontWeight: 600 }}>
                              {property.name}
                            </Typography>
                            <Typography variant="caption" color="text.secondary">
                              {property.type}
                            </Typography>
                          </Box>
                        </Box>
                      </TableCell>
                      <TableCell>
                        <Typography variant="body2">
                          {property.location}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="body2" sx={{ fontWeight: 600, color: gold }}>
                          {property.price}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="body2">
                          {property.size}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Chip
                          label={property.status}
                          size="small"
                          sx={{
                            bgcolor: getStatusColor(property.status),
                            color: 'white',
                            fontWeight: 600
                          }}
                        />
                      </TableCell>
                      <TableCell>
                        <Typography variant="body2">
                          {property.project}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="body2">
                          {property.addedDate}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <IconButton
                          size="small"
                          onClick={(e) => handleMenuClick(e, property)}
                        >
                          <MoreVert />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}

          {/* Action Menu */}
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            PaperProps={{
              sx: {
                borderRadius: 2,
                minWidth: 150
              }
            }}
          >
            <MenuItem onClick={handleView}>
              <ListItemIcon>
                <Visibility fontSize="small" />
              </ListItemIcon>
              <ListItemText>View Details</ListItemText>
            </MenuItem>
            <MenuItem onClick={handleEdit}>
              <ListItemIcon>
                <Edit fontSize="small" />
              </ListItemIcon>
              <ListItemText>Edit Property</ListItemText>
            </MenuItem>
            <MenuItem onClick={handleDelete} sx={{ color: '#f44336' }}>
              <ListItemIcon>
                <Delete fontSize="small" sx={{ color: '#f44336' }} />
              </ListItemIcon>
              <ListItemText>Delete Property</ListItemText>
            </MenuItem>
          </Menu>

          {/* Add/Edit Property Dialog */}
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
              {selectedProperty ? 'Edit Property' : 'Add New Property'}
            </DialogTitle>
            <DialogContent sx={{ p: 3 }}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Property Name"
                    variant="outlined"
                    defaultValue={selectedProperty?.name || ''}
                    sx={{ mb: 2 }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Price"
                    variant="outlined"
                    defaultValue={selectedProperty?.price || ''}
                    sx={{ mb: 2 }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Location"
                    variant="outlined"
                    defaultValue={selectedProperty?.location || ''}
                    sx={{ mb: 2 }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Size"
                    variant="outlined"
                    defaultValue={selectedProperty?.size || ''}
                    sx={{ mb: 2 }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth sx={{ mb: 2 }}>
                    <InputLabel>Property Type</InputLabel>
                    <Select
                      defaultValue={selectedProperty?.type || ''}
                      label="Property Type"
                    >
                      <MenuItem value="Residential Plot">Residential Plot</MenuItem>
                      <MenuItem value="Villa">Villa</MenuItem>
                      <MenuItem value="Apartment">Apartment</MenuItem>
                      <MenuItem value="Commercial">Commercial</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth sx={{ mb: 2 }}>
                    <InputLabel>Status</InputLabel>
                    <Select
                      defaultValue={selectedProperty?.status || 'Available'}
                      label="Status"
                    >
                      <MenuItem value="Available">Available</MenuItem>
                      <MenuItem value="Sold">Sold</MenuItem>
                      <MenuItem value="Under Negotiation">Under Negotiation</MenuItem>
                      <MenuItem value="Reserved">Reserved</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Project"
                    variant="outlined"
                    defaultValue={selectedProperty?.project || ''}
                    sx={{ mb: 2 }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    multiline
                    rows={3}
                    label="Description"
                    variant="outlined"
                    sx={{ mb: 2 }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Image URL"
                    variant="outlined"
                    defaultValue={selectedProperty?.image || ''}
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
                {selectedProperty ? 'Update Property' : 'Add Property'}
              </Button>
            </DialogActions>
          </Dialog>
        </Container>
      </Box>
    </AdminLayoutWithTheme>
  )
}
