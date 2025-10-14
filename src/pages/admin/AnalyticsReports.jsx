import { useState } from 'react'
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  IconButton,
  Menu,
  ListItemIcon,
  ListItemText
} from '@mui/material'
import {
  TrendingUp,
  TrendingDown,
  AttachMoney,
  People,
  Home,
  Assessment,
  Download,
  MoreVert,
  Visibility,
  BarChart,
  PieChart,
  ShowChart
} from '@mui/icons-material'
import AdminLayoutWithTheme from './AdminLayoutWithTheme'
import { useTheme } from '../../contexts/ThemeContext'

export default function AnalyticsReports() {
  const [timeRange, setTimeRange] = useState('30')
  const [reportType, setReportType] = useState('overview')
  const [anchorEl, setAnchorEl] = useState(null)

  const customTheme = useTheme()
  const gold = customTheme.palette.gold
  const dark = customTheme.palette.dark

  // Mock data - replace with real data from your backend
  const analyticsData = {
    revenue: {
      current: 2450000,
      previous: 2100000,
      change: 16.7
    },
    properties: {
      sold: 18,
      available: 24,
      total: 42,
      change: 12.5
    },
    users: {
      new: 45,
      total: 156,
      change: 8.3
    },
    inquiries: {
      total: 89,
      converted: 23,
      change: -2.1
    }
  }

  const monthlyData = [
    { month: 'Jan', revenue: 1800000, properties: 15, inquiries: 45 },
    { month: 'Feb', revenue: 2100000, properties: 18, inquiries: 52 },
    { month: 'Mar', revenue: 1950000, properties: 16, inquiries: 48 },
    { month: 'Apr', revenue: 2300000, properties: 20, inquiries: 61 },
    { month: 'May', revenue: 2450000, properties: 18, inquiries: 58 },
    { month: 'Jun', revenue: 2200000, properties: 22, inquiries: 67 }
  ]

  const topProperties = [
    { name: 'Green Valley Plot 45', inquiries: 23, revenue: 4500000, status: 'Sold' },
    { name: 'Suketana Premium Villa', inquiries: 18, revenue: 8500000, status: 'Sold' },
    { name: 'Royal Gardens Plot 12', inquiries: 15, revenue: 5200000, status: 'Under Negotiation' },
    { name: 'Green Valley Plot 67', inquiries: 12, revenue: 3800000, status: 'Available' },
    { name: 'Suketana Plot 23', inquiries: 10, revenue: 4200000, status: 'Available' }
  ]

  const leadSources = [
    { source: 'Website', leads: 45, percentage: 35 },
    { source: 'Social Media', leads: 32, percentage: 25 },
    { source: 'Referrals', leads: 28, percentage: 22 },
    { source: 'Direct Contact', leads: 18, percentage: 14 },
    { source: 'Advertisement', leads: 6, percentage: 4 }
  ]

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  const handleExport = (format) => {
    console.log(`Exporting report as ${format}`)
    handleMenuClose()
  }

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount)
  }

  return (
    <AdminLayoutWithTheme>
      <Box sx={{ flexGrow: 1, p: 3, bgcolor: customTheme.palette.background.default, minHeight: '100vh' }}>
        <Container maxWidth="xl">
          {/* Header */}
          <Box sx={{ mb: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Box>
              <Typography variant="h4" sx={{ fontWeight: 600, color: dark, mb: 1 }}>
                Analytics & Reports
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Track your business performance and generate detailed reports
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <FormControl size="small" sx={{ minWidth: 120 }}>
                <InputLabel>Time Range</InputLabel>
                <Select
                  value={timeRange}
                  onChange={(e) => setTimeRange(e.target.value)}
                  label="Time Range"
                >
                  <MenuItem value="7">Last 7 days</MenuItem>
                  <MenuItem value="30">Last 30 days</MenuItem>
                  <MenuItem value="90">Last 90 days</MenuItem>
                  <MenuItem value="365">Last year</MenuItem>
                </Select>
              </FormControl>
              <Button
                variant="contained"
                startIcon={<Download />}
                onClick={handleMenuClick}
                sx={{
                  bgcolor: gold,
                  color: dark,
                  fontWeight: 600,
                  '&:hover': { bgcolor: '#d4943a' }
                }}
              >
                Export Report
              </Button>
            </Box>
          </Box>

          {/* Export Menu */}
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
            <MenuItem onClick={() => handleExport('PDF')}>
              <ListItemIcon>
                <Assessment fontSize="small" />
              </ListItemIcon>
              <ListItemText>Export as PDF</ListItemText>
            </MenuItem>
            <MenuItem onClick={() => handleExport('Excel')}>
              <ListItemIcon>
                <BarChart fontSize="small" />
              </ListItemIcon>
              <ListItemText>Export as Excel</ListItemText>
            </MenuItem>
            <MenuItem onClick={() => handleExport('CSV')}>
              <ListItemIcon>
                <ShowChart fontSize="small" />
              </ListItemIcon>
              <ListItemText>Export as CSV</ListItemText>
            </MenuItem>
          </Menu>

          {/* Key Metrics Cards */}
          <Grid container spacing={3} sx={{ mb: 4 }}>
            <Grid item xs={12} sm={6} md={3}>
              <Card
                sx={{
                  background: 'linear-gradient(135deg, rgba(224, 161, 70, 0.1) 0%, rgba(224, 161, 70, 0.05) 100%)',
                  border: `2px solid ${gold}`,
                  borderRadius: 3,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: `0 15px 30px rgba(0,0,0,0.1), 0 0 20px ${gold}30`
                  }
                }}
              >
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: 2,
                        bgcolor: gold,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <AttachMoney sx={{ color: dark, fontSize: 24 }} />
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      {analyticsData.revenue.change > 0 ? (
                        <TrendingUp sx={{ color: '#4caf50', mr: 1 }} />
                      ) : (
                        <TrendingDown sx={{ color: '#f44336', mr: 1 }} />
                      )}
                      <Typography
                        variant="body2"
                        sx={{
                          color: analyticsData.revenue.change > 0 ? '#4caf50' : '#f44336',
                          fontWeight: 600
                        }}
                      >
                        +{analyticsData.revenue.change}%
                      </Typography>
                    </Box>
                  </Box>
                  <Typography variant="h4" sx={{ fontWeight: 700, color: dark, mb: 1 }}>
                    {formatCurrency(analyticsData.revenue.current)}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Total Revenue
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Card
                sx={{
                  background: 'linear-gradient(135deg, rgba(33, 150, 243, 0.1) 0%, rgba(33, 150, 243, 0.05) 100%)',
                  border: '2px solid #2196f3',
                  borderRadius: 3,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 15px 30px rgba(0,0,0,0.1), 0 0 20px #2196f330'
                  }
                }}
              >
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: 2,
                        bgcolor: '#2196f3',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <Home sx={{ color: 'white', fontSize: 24 }} />
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <TrendingUp sx={{ color: '#4caf50', mr: 1 }} />
                      <Typography variant="body2" sx={{ color: '#4caf50', fontWeight: 600 }}>
                        +{analyticsData.properties.change}%
                      </Typography>
                    </Box>
                  </Box>
                  <Typography variant="h4" sx={{ fontWeight: 700, color: dark, mb: 1 }}>
                    {analyticsData.properties.sold}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Properties Sold
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Card
                sx={{
                  background: 'linear-gradient(135deg, rgba(76, 175, 80, 0.1) 0%, rgba(76, 175, 80, 0.05) 100%)',
                  border: '2px solid #4caf50',
                  borderRadius: 3,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 15px 30px rgba(0,0,0,0.1), 0 0 20px #4caf5030'
                  }
                }}
              >
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: 2,
                        bgcolor: '#4caf50',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <People sx={{ color: 'white', fontSize: 24 }} />
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <TrendingUp sx={{ color: '#4caf50', mr: 1 }} />
                      <Typography variant="body2" sx={{ color: '#4caf50', fontWeight: 600 }}>
                        +{analyticsData.users.change}%
                      </Typography>
                    </Box>
                  </Box>
                  <Typography variant="h4" sx={{ fontWeight: 700, color: dark, mb: 1 }}>
                    {analyticsData.users.new}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    New Users
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Card
                sx={{
                  background: 'linear-gradient(135deg, rgba(255, 152, 0, 0.1) 0%, rgba(255, 152, 0, 0.05) 100%)',
                  border: '2px solid #ff9800',
                  borderRadius: 3,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 15px 30px rgba(0,0,0,0.1), 0 0 20px #ff980030'
                  }
                }}
              >
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: 2,
                        bgcolor: '#ff9800',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <Assessment sx={{ color: 'white', fontSize: 24 }} />
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      {analyticsData.inquiries.change > 0 ? (
                        <TrendingUp sx={{ color: '#4caf50', mr: 1 }} />
                      ) : (
                        <TrendingDown sx={{ color: '#f44336', mr: 1 }} />
                      )}
                      <Typography
                        variant="body2"
                        sx={{
                          color: analyticsData.inquiries.change > 0 ? '#4caf50' : '#f44336',
                          fontWeight: 600
                        }}
                      >
                        {analyticsData.inquiries.change}%
                      </Typography>
                    </Box>
                  </Box>
                  <Typography variant="h4" sx={{ fontWeight: 700, color: dark, mb: 1 }}>
                    {analyticsData.inquiries.total}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Total Inquiries
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          {/* Charts and Tables Section */}
          <Grid container spacing={3}>
            {/* Top Performing Properties */}
            <Grid item xs={12} md={8}>
              <Card
                sx={{
                  borderRadius: 3,
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                  border: `1px solid ${gold}20`
                }}
              >
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: 600, color: dark, mb: 3 }}>
                    Top Performing Properties
                  </Typography>
                  <TableContainer>
                    <Table>
                      <TableHead>
                        <TableRow sx={{ bgcolor: `${gold}10` }}>
                          <TableCell>Property Name</TableCell>
                          <TableCell align="center">Inquiries</TableCell>
                          <TableCell align="center">Revenue</TableCell>
                          <TableCell align="center">Status</TableCell>
                          <TableCell align="center">Actions</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {topProperties.map((property, index) => (
                          <TableRow key={index} hover>
                            <TableCell>
                              <Typography variant="body2" sx={{ fontWeight: 600 }}>
                                {property.name}
                              </Typography>
                            </TableCell>
                            <TableCell align="center">
                              <Typography variant="body2">
                                {property.inquiries}
                              </Typography>
                            </TableCell>
                            <TableCell align="center">
                              <Typography variant="body2" sx={{ fontWeight: 600, color: gold }}>
                                {formatCurrency(property.revenue)}
                              </Typography>
                            </TableCell>
                            <TableCell align="center">
                              <Chip
                                label={property.status}
                                size="small"
                                sx={{
                                  bgcolor: property.status === 'Sold' ? '#4caf50' : 
                                          property.status === 'Available' ? '#2196f3' : '#ff9800',
                                  color: 'white',
                                  fontWeight: 600
                                }}
                              />
                            </TableCell>
                            <TableCell align="center">
                              <IconButton size="small">
                                <Visibility />
                              </IconButton>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </CardContent>
              </Card>
            </Grid>

            {/* Lead Sources */}
            <Grid item xs={12} md={4}>
              <Card
                sx={{
                  borderRadius: 3,
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                  border: `1px solid ${gold}20`
                }}
              >
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: 600, color: dark, mb: 3 }}>
                    Lead Sources
                  </Typography>
                  <Box sx={{ mb: 2 }}>
                    {leadSources.map((source, index) => (
                      <Box key={index} sx={{ mb: 3 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                          <Typography variant="body2" sx={{ fontWeight: 600 }}>
                            {source.source}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {source.leads} leads
                          </Typography>
                        </Box>
                        <Box sx={{ width: '100%', bgcolor: '#f5f5f5', borderRadius: 2, height: 8 }}>
                          <Box
                            sx={{
                              width: `${source.percentage}%`,
                              height: '100%',
                              bgcolor: gold,
                              borderRadius: 2,
                              transition: 'width 0.3s ease'
                            }}
                          />
                        </Box>
                        <Typography variant="caption" color="text.secondary" sx={{ mt: 0.5 }}>
                          {source.percentage}%
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            {/* Monthly Performance */}
            <Grid item xs={12}>
              <Card
                sx={{
                  borderRadius: 3,
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                  border: `1px solid ${gold}20`
                }}
              >
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: 600, color: dark, mb: 3 }}>
                    Monthly Performance Overview
                  </Typography>
                  <TableContainer>
                    <Table>
                      <TableHead>
                        <TableRow sx={{ bgcolor: `${gold}10` }}>
                          <TableCell>Month</TableCell>
                          <TableCell align="right">Revenue</TableCell>
                          <TableCell align="right">Properties Sold</TableCell>
                          <TableCell align="right">Inquiries</TableCell>
                          <TableCell align="right">Conversion Rate</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {monthlyData.map((month, index) => (
                          <TableRow key={index} hover>
                            <TableCell>
                              <Typography variant="body2" sx={{ fontWeight: 600 }}>
                                {month.month}
                              </Typography>
                            </TableCell>
                            <TableCell align="right">
                              <Typography variant="body2" sx={{ fontWeight: 600, color: gold }}>
                                {formatCurrency(month.revenue)}
                              </Typography>
                            </TableCell>
                            <TableCell align="right">
                              <Typography variant="body2">
                                {month.properties}
                              </Typography>
                            </TableCell>
                            <TableCell align="right">
                              <Typography variant="body2">
                                {month.inquiries}
                              </Typography>
                            </TableCell>
                            <TableCell align="right">
                              <Typography variant="body2" sx={{ color: '#4caf50', fontWeight: 600 }}>
                                {((month.properties / month.inquiries) * 100).toFixed(1)}%
                              </Typography>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </AdminLayoutWithTheme>
  )
}
