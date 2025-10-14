import { useState } from 'react'
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
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
  Menu,
  ListItemIcon,
  ListItemText,
  Avatar,
  InputAdornment
} from '@mui/material'
import {
  Search,
  Email,
  Phone,
  LocationOn,
  CalendarToday,
  MoreVert,
  Reply,
  MarkEmailRead,
  Archive,
  Delete,
  Visibility
} from '@mui/icons-material'
import AdminLayoutWithTheme from './AdminLayoutWithTheme'
import { useTheme } from '../../contexts/ThemeContext'

export default function InquiriesManagement() {
  const [selectedInquiry, setSelectedInquiry] = useState(null)
  const [anchorEl, setAnchorEl] = useState(null)
  const [openDialog, setOpenDialog] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')

  const customTheme = useTheme()
  const gold = customTheme.palette.gold
  const dark = customTheme.palette.dark

  // Mock data - replace with real data from your backend
  const inquiries = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '+91 98765 43210',
      property: 'Green Valley Plot 45',
      message: 'I am interested in this property. Can you provide more details about the pricing and payment plans?',
      status: 'New',
      priority: 'High',
      source: 'Website',
      date: '2024-01-28',
      time: '10:30 AM',
      lastContact: 'Never'
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      phone: '+91 87654 32109',
      property: 'Suketana Premium Villa',
      message: 'Please send me the brochure and schedule a site visit for next week.',
      status: 'Contacted',
      priority: 'Medium',
      source: 'Social Media',
      date: '2024-01-27',
      time: '2:15 PM',
      lastContact: '2024-01-27'
    },
    {
      id: 3,
      name: 'Mike Johnson',
      email: 'mike.johnson@example.com',
      phone: '+91 76543 21098',
      property: 'Royal Gardens Plot 12',
      message: 'What are the available payment options and EMI plans?',
      status: 'Follow-up',
      priority: 'High',
      source: 'Referral',
      date: '2024-01-26',
      time: '9:45 AM',
      lastContact: '2024-01-26'
    },
    {
      id: 4,
      name: 'Sarah Wilson',
      email: 'sarah.wilson@example.com',
      phone: '+91 65432 10987',
      property: 'Green Valley Plot 67',
      message: 'Interested in bulk purchase for investment purpose.',
      status: 'Converted',
      priority: 'High',
      source: 'Direct Contact',
      date: '2024-01-25',
      time: '4:20 PM',
      lastContact: '2024-01-25'
    }
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case 'New':
        return '#2196f3'
      case 'Contacted':
        return '#ff9800'
      case 'Follow-up':
        return '#9c27b0'
      case 'Converted':
        return '#4caf50'
      case 'Lost':
        return '#f44336'
      default:
        return '#9e9e9e'
    }
  }

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High':
        return '#f44336'
      case 'Medium':
        return '#ff9800'
      case 'Low':
        return '#4caf50'
      default:
        return '#9e9e9e'
    }
  }

  const handleMenuClick = (event, inquiry) => {
    setAnchorEl(event.currentTarget)
    setSelectedInquiry(inquiry)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
    setSelectedInquiry(null)
  }

  const handleReply = () => {
    setOpenDialog(true)
    handleMenuClose()
  }

  const handleMarkAsRead = () => {
    console.log('Marking as read:', selectedInquiry)
    handleMenuClose()
  }

  const handleArchive = () => {
    console.log('Archiving inquiry:', selectedInquiry)
    handleMenuClose()
  }

  const handleDelete = () => {
    console.log('Deleting inquiry:', selectedInquiry)
    handleMenuClose()
  }

  const filteredInquiries = inquiries.filter(inquiry => {
    const matchesSearch = inquiry.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         inquiry.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         inquiry.property.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === 'all' || inquiry.status === statusFilter
    return matchesSearch && matchesStatus
  })

  return (
    <AdminLayoutWithTheme>
      <Box sx={{ flexGrow: 1, p: 3, bgcolor: customTheme.palette.background.default, minHeight: '100vh' }}>
        <Container maxWidth="xl">
          {/* Header */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h4" sx={{ fontWeight: 600, color: dark, mb: 1 }}>
              Inquiries Management
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Manage customer inquiries and track communication
            </Typography>
          </Box>

          {/* Stats Cards */}
          <Grid container spacing={3} sx={{ mb: 4 }}>
            <Grid item xs={12} sm={6} md={3}>
              <Card
                sx={{
                  background: 'linear-gradient(135deg, rgba(33, 150, 243, 0.1) 0%, rgba(33, 150, 243, 0.05) 100%)',
                  border: '2px solid #2196f3',
                  borderRadius: 3
                }}
              >
                <CardContent sx={{ textAlign: 'center' }}>
                  <Avatar sx={{ bgcolor: '#2196f3', mx: 'auto', mb: 2, width: 56, height: 56 }}>
                    <Email />
                  </Avatar>
                  <Typography variant="h4" sx={{ fontWeight: 700, color: dark }}>
                    {inquiries.length}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Total Inquiries
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
                    <MarkEmailRead />
                  </Avatar>
                  <Typography variant="h4" sx={{ fontWeight: 700, color: dark }}>
                    {inquiries.filter(i => i.status === 'New').length}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    New Inquiries
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
                    <Reply />
                  </Avatar>
                  <Typography variant="h4" sx={{ fontWeight: 700, color: dark }}>
                    {inquiries.filter(i => i.status === 'Converted').length}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Converted
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
                    <CalendarToday />
                  </Avatar>
                  <Typography variant="h4" sx={{ fontWeight: 700, color: dark }}>
                    {inquiries.filter(i => i.status === 'Follow-up').length}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Follow-up Required
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          {/* Filters */}
          <Card sx={{ mb: 3, borderRadius: 3 }}>
            <CardContent>
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    placeholder="Search inquiries..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Search />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <FormControl fullWidth>
                    <InputLabel>Status Filter</InputLabel>
                    <Select
                      value={statusFilter}
                      onChange={(e) => setStatusFilter(e.target.value)}
                      label="Status Filter"
                    >
                      <MenuItem value="all">All Status</MenuItem>
                      <MenuItem value="New">New</MenuItem>
                      <MenuItem value="Contacted">Contacted</MenuItem>
                      <MenuItem value="Follow-up">Follow-up</MenuItem>
                      <MenuItem value="Converted">Converted</MenuItem>
                      <MenuItem value="Lost">Lost</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={3}>
                  <Typography variant="body2" color="text.secondary">
                    {filteredInquiries.length} inquiries found
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>

          {/* Inquiries Table */}
          <TableContainer component={Paper} sx={{ borderRadius: 3, overflow: 'hidden' }}>
            <Table>
              <TableHead>
                <TableRow sx={{ bgcolor: `${gold}10` }}>
                  <TableCell>Inquiry</TableCell>
                  <TableCell>Property</TableCell>
                  <TableCell>Contact</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Priority</TableCell>
                  <TableCell>Source</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredInquiries.map((inquiry) => (
                  <TableRow key={inquiry.id} hover>
                    <TableCell>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Avatar sx={{ mr: 2, width: 40, height: 40, bgcolor: gold }}>
                          {inquiry.name.charAt(0)}
                        </Avatar>
                        <Box>
                          <Typography variant="body2" sx={{ fontWeight: 600 }}>
                            {inquiry.name}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            ID: {inquiry.id}
                          </Typography>
                        </Box>
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Typography variant="body2" sx={{ fontWeight: 500 }}>
                        {inquiry.property}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
                          <Email sx={{ fontSize: 14, mr: 1, color: 'text.secondary' }} />
                          <Typography variant="caption">
                            {inquiry.email}
                          </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <Phone sx={{ fontSize: 14, mr: 1, color: 'text.secondary' }} />
                          <Typography variant="caption">
                            {inquiry.phone}
                          </Typography>
                        </Box>
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Chip
                        label={inquiry.status}
                        size="small"
                        sx={{
                          bgcolor: getStatusColor(inquiry.status),
                          color: 'white',
                          fontWeight: 600
                        }}
                      />
                    </TableCell>
                    <TableCell>
                      <Chip
                        label={inquiry.priority}
                        size="small"
                        sx={{
                          bgcolor: getPriorityColor(inquiry.priority),
                          color: 'white',
                          fontWeight: 600
                        }}
                      />
                    </TableCell>
                    <TableCell>
                      <Typography variant="body2">
                        {inquiry.source}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Box>
                        <Typography variant="caption" display="block">
                          {inquiry.date}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {inquiry.time}
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell>
                      <IconButton
                        size="small"
                        onClick={(e) => handleMenuClick(e, inquiry)}
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
            <MenuItem onClick={handleReply}>
              <ListItemIcon>
                <Reply fontSize="small" />
              </ListItemIcon>
              <ListItemText>Reply</ListItemText>
            </MenuItem>
            <MenuItem onClick={handleMarkAsRead}>
              <ListItemIcon>
                <MarkEmailRead fontSize="small" />
              </ListItemIcon>
              <ListItemText>Mark as Read</ListItemText>
            </MenuItem>
            <MenuItem onClick={() => console.log('View details:', selectedInquiry)}>
              <ListItemIcon>
                <Visibility fontSize="small" />
              </ListItemIcon>
              <ListItemText>View Details</ListItemText>
            </MenuItem>
            <MenuItem onClick={handleArchive}>
              <ListItemIcon>
                <Archive fontSize="small" />
              </ListItemIcon>
              <ListItemText>Archive</ListItemText>
            </MenuItem>
            <MenuItem onClick={handleDelete} sx={{ color: '#f44336' }}>
              <ListItemIcon>
                <Delete fontSize="small" sx={{ color: '#f44336' }} />
              </ListItemIcon>
              <ListItemText>Delete</ListItemText>
            </MenuItem>
          </Menu>

          {/* Reply Dialog */}
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
              Reply to {selectedInquiry?.name}
            </DialogTitle>
            <DialogContent sx={{ p: 3 }}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Subject"
                    variant="outlined"
                    defaultValue={`Re: Inquiry about ${selectedInquiry?.property}`}
                    sx={{ mb: 2 }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    multiline
                    rows={6}
                    label="Message"
                    variant="outlined"
                    placeholder="Type your reply here..."
                    sx={{ mb: 2 }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <InputLabel>Status Update</InputLabel>
                    <Select defaultValue="Contacted" label="Status Update">
                      <MenuItem value="Contacted">Contacted</MenuItem>
                      <MenuItem value="Follow-up">Follow-up</MenuItem>
                      <MenuItem value="Converted">Converted</MenuItem>
                      <MenuItem value="Lost">Lost</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <InputLabel>Priority</InputLabel>
                    <Select defaultValue={selectedInquiry?.priority} label="Priority">
                      <MenuItem value="High">High</MenuItem>
                      <MenuItem value="Medium">Medium</MenuItem>
                      <MenuItem value="Low">Low</MenuItem>
                    </Select>
                  </FormControl>
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
                Send Reply
              </Button>
            </DialogActions>
          </Dialog>
        </Container>
      </Box>
    </AdminLayoutWithTheme>
  )
}
