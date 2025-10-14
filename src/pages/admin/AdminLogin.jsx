import { useState } from 'react'
import {
  Box,
  Container,
  Paper,
  TextField,
  Button,
  Typography,
  Avatar,
  Alert,
  InputAdornment,
  IconButton
} from '@mui/material'
import {
  Visibility,
  VisibilityOff,
  AdminPanelSettings,
  Business
} from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

export default function AdminLogin() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const gold = '#e0a146'
  const dark = '#181c22'

  const handleInputChange = (field) => (event) => {
    setFormData(prev => ({
      ...prev,
      [field]: event.target.value
    }))
    if (error) setError('')
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setLoading(true)
    setError('')

    try {
      // Simple validation - replace with actual authentication logic
      if (formData.email === 'admin@suryaprimeventures.com' && formData.password === 'admin123') {
        // Store auth token or user data in localStorage
        localStorage.setItem('adminAuth', 'true')
        localStorage.setItem('adminUser', JSON.stringify({
          name: 'Admin User',
          email: formData.email,
          role: 'Admin'
        }))
        
        // Navigate to admin dashboard
        navigate('/admin')
      } else {
        setError('Invalid email or password')
      }
    } catch (err) {
      setError('Login failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleTogglePassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: `linear-gradient(135deg, ${dark} 0%, #2c3e50 100%)`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 20% 50%, rgba(224, 161, 70, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(224, 161, 70, 0.1) 0%, transparent 50%)',
          pointerEvents: 'none'
        }
      }}
    >
      <Container maxWidth="sm">
        <Paper
          elevation={24}
          sx={{
            p: 4,
            borderRadius: 4,
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(20px)',
            border: `2px solid ${gold}20`,
            position: 'relative',
            zIndex: 1
          }}
        >
          {/* Header */}
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Box
              sx={{
                width: 80,
                height: 80,
                borderRadius: '50%',
                background: `linear-gradient(135deg, ${gold} 0%, #d4943a 100%)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mx: 'auto',
                mb: 3,
                boxShadow: `0 8px 32px ${gold}40`
              }}
            >
              <AdminPanelSettings sx={{ fontSize: 40, color: 'white' }} />
            </Box>
            
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                color: dark,
                mb: 1,
                fontFamily: '"Playfair Display", serif'
              }}
            >
              SURYA PRIME
            </Typography>
            
            <Typography
              variant="h6"
              sx={{
                color: gold,
                fontWeight: 600,
                mb: 2
              }}
            >
              Admin Panel
            </Typography>
            
            <Typography variant="body2" color="text.secondary">
              Sign in to access the admin dashboard
            </Typography>
          </Box>

          {/* Error Alert */}
          {error && (
            <Alert severity="error" sx={{ mb: 3, borderRadius: 2 }}>
              {error}
            </Alert>
          )}

          {/* Login Form */}
          <Box component="form" onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Email Address"
              type="email"
              value={formData.email}
              onChange={handleInputChange('email')}
              required
              sx={{
                mb: 3,
                '& .MuiOutlinedInput-root': {
                  borderRadius: 2,
                  '& fieldset': {
                    borderColor: gold,
                  },
                  '&:hover fieldset': {
                    borderColor: gold,
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: gold,
                  },
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: gold,
                },
              }}
            />

            <TextField
              fullWidth
              label="Password"
              type={showPassword ? 'text' : 'password'}
              value={formData.password}
              onChange={handleInputChange('password')}
              required
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleTogglePassword}
                      edge="end"
                      sx={{ color: gold }}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{
                mb: 4,
                '& .MuiOutlinedInput-root': {
                  borderRadius: 2,
                  '& fieldset': {
                    borderColor: gold,
                  },
                  '&:hover fieldset': {
                    borderColor: gold,
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: gold,
                  },
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: gold,
                },
              }}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              disabled={loading}
              sx={{
                bgcolor: gold,
                color: dark,
                py: 2,
                fontSize: '16px',
                fontWeight: 600,
                borderRadius: 2,
                textTransform: 'none',
                boxShadow: `0 8px 24px ${gold}40`,
                '&:hover': {
                  bgcolor: '#d4943a',
                  boxShadow: `0 12px 32px ${gold}50`,
                },
                '&:disabled': {
                  bgcolor: '#ccc',
                  color: '#666'
                }
              }}
            >
              {loading ? 'Signing In...' : 'Sign In'}
            </Button>
          </Box>

          {/* Footer */}
          <Box sx={{ textAlign: 'center', mt: 4, pt: 3, borderTop: `1px solid ${gold}20` }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
              <Business sx={{ color: gold, mr: 1, fontSize: 20 }} />
              <Typography variant="body2" color="text.secondary">
                Surya Prime Ventures
              </Typography>
            </Box>
            <Typography variant="caption" color="text.secondary">
              © 2024 All rights reserved
            </Typography>
          </Box>

          {/* Demo Credentials */}
          <Box
            sx={{
              mt: 3,
              p: 2,
              bgcolor: `${gold}10`,
              borderRadius: 2,
              border: `1px solid ${gold}30`
            }}
          >
            <Typography variant="caption" sx={{ color: dark, fontWeight: 600, display: 'block', mb: 1 }}>
              Demo Credentials:
            </Typography>
            <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block' }}>
              Email: admin@suryaprimeventures.com
            </Typography>
            <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block' }}>
              Password: admin123
            </Typography>
          </Box>
        </Paper>
      </Container>
    </Box>
  )
}
