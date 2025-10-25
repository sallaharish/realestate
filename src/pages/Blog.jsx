import { Box, Container, Typography, Grid, Card, CardActionArea, CardContent, Button, Chip } from '@mui/material'
import { CalendarToday, ArrowForward, TrendingUp, Home, Business } from '@mui/icons-material'
import Navbar from '../components/Navbar'

const posts = [
  { 
    title: 'Checklist: Ready-to-Move vs Under-Construction Plots in Andhra Pradesh', 
    date: '16 September 2024',
    excerpt: 'Comprehensive guide to help you choose between ready-to-move and under-construction plots based on your investment goals.',
    category: 'Investment Guide',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200&auto=format&fit=crop'
  },
  { 
    title: 'Plots vs Independent Houses in Andhra Pradesh – Which is Better?', 
    date: '14 August 2024',
    excerpt: 'Detailed comparison between plot investment and independent house purchase to help you make the right decision.',
    category: 'Real Estate',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200&auto=format&fit=crop'
  },
  { 
    title: "First-Time Plot Buyer? Here's why to choose Surya Prime Ventures", 
    date: '18 July 2024',
    excerpt: 'Discover the advantages of investing with Surya Prime Ventures for your first plot purchase in Andhra Pradesh.',
    category: 'Company News',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200&auto=format&fit=crop'
  },
]

export default function Blog() {
  const gold = '#e0a146';
  const dark = '#181c22';

  return (
    <Box sx={{ bgcolor: dark, color: 'white', minHeight: '100vh' }}>
      <Navbar />
      
      {/* Hero Section */}
      <Box sx={{ 
        py: { xs: 8, md: 12 }, 
        textAlign: 'center',
        background: 'linear-gradient(135deg, rgba(24, 28, 34, 0.95) 0%, rgba(224, 161, 70, 0.1) 100%)',
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
      }}>
        <Container sx={{ position: 'relative', zIndex: 1 }}>
          <Typography variant="h1" sx={{ 
            color: gold, 
            fontWeight: 400,
            fontSize: { xs: '2.5rem', md: '4rem' },
            lineHeight: 1.1,
            mb: 3,
            fontFamily: '"Playfair Display", serif',
            letterSpacing: '0.05em'
          }}>
            BLOG & INSIGHTS
          </Typography>
          <Typography sx={{ 
            color: 'white', 
            fontSize: { xs: '1rem', md: '1.2rem' },
            lineHeight: 1.6,
            maxWidth: '600px',
            mx: 'auto',
            opacity: 0.9
          }}>
            Stay updated with the latest trends, tips, and insights in real estate investment
          </Typography>
        </Container>
      </Box>

      {/* Blog Posts */}
      <Container sx={{ py: { xs: 6, md: 8 } }}>
        <Grid container spacing={4}>
          {posts.map((post, index) => (
            <Grid item xs={12} md={4} key={post.title}>
              <Card sx={{
                height: '100%',
                background: `linear-gradient(135deg, rgba(224, 161, 70, 0.05) 0%, rgba(24, 28, 34, 0.8) 100%)`,
                border: `2px solid ${gold}`,
                borderRadius: 4,
                overflow: 'hidden',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: `0 20px 40px rgba(0,0,0,0.3), 0 0 30px ${gold}40`,
                  border: `2px solid ${gold}`,
                  '& .blog-image': {
                    transform: 'scale(1.05)'
                  }
                }
              }}>
                <Box sx={{ position: 'relative', overflow: 'hidden' }}>
                  <Box
                    className="blog-image"
                    sx={{
                      backgroundImage: `url(${post.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      height: 200,
                      transition: 'transform 0.4s ease'
                    }}
                  />
                  <Box sx={{
                    position: 'absolute',
                    top: 16,
                    left: 16
                  }}>
                    <Chip 
                      label={post.category}
                      sx={{
                        bgcolor: gold,
                        color: dark,
                        fontWeight: 600,
                        fontSize: '12px'
                      }}
                    />
                  </Box>
                </Box>
                
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <CalendarToday sx={{ color: gold, fontSize: 16 }} />
                      <Typography sx={{ color: 'white', opacity: 0.8, fontSize: '12px' }}>
                        {post.date}
                      </Typography>
                    </Box>
                    <Typography sx={{ color: 'white', opacity: 0.6, fontSize: '12px' }}>
                      {post.readTime}
                    </Typography>
                  </Box>
                  
                  <Typography variant="h6" sx={{ 
                    color: 'white', 
                    fontWeight: 700, 
                    mb: 2,
                    fontSize: '1.1rem',
                    lineHeight: 1.4
                  }}>
                    {post.title}
                  </Typography>
                  
                  <Typography sx={{ 
                    color: 'white', 
                    opacity: 0.8, 
                    mb: 3,
                    lineHeight: 1.6,
                    fontSize: '14px'
                  }}>
                    {post.excerpt}
                  </Typography>
                  
                  <Button
                    variant="contained"
                    endIcon={<ArrowForward />}
                    sx={{
                      bgcolor: gold,
                      color: dark,
                      fontWeight: 600,
                      py: 1,
                      px: 2,
                      borderRadius: 2,
                      fontSize: '14px',
                      '&:hover': {
                        bgcolor: '#d4943a',
                        transform: 'translateY(-2px)',
                        boxShadow: `0 8px 25px ${gold}40`
                      }
                    }}
                  >
                    Read More
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}


