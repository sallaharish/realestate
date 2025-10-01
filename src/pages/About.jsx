
import { Box, Container, Grid, Typography ,Button} from '@mui/material'
import Navbar from '../components/Navbar'

export default function About() {
  // Gold color and dark background from Highlights
  const gold = '#e0a146';
  const dark = '#181c22';
  return (
    <Box>
      <Navbar />
      {/* About Us Intro */}
      

      {/* Highlights Section (copied and adapted from Home.jsx) */}
      <Box sx={{ bgcolor: dark, color: 'white', py: { xs: 6, md: 8 } }}>
        <Container>
          <Grid container spacing={4} alignItems="center">
            {/* Left: Text Content */}
            <Box sx={{ py: 6, textAlign: 'left', bgcolor: dark, color: 'white' }}>
        <Typography variant="h4" sx={{ fontWeight: 800, color: gold }}>About Us</Typography>
        <Typography sx={{ mt: 1, maxWidth: 700, mx: 'auto', color: 'white', opacity: 0.85 }}>
          We understand the importance of innovation and professionalism. With a legacy of excellence, we have been shaping skylines and building communities for decades, delivering quality and trust in every project.
        </Typography>
      </Box>
            <Grid item xs={12} md={7}>
              <Typography variant="h4" sx={{ color: gold, fontWeight: 700, mb: 2, letterSpacing: 1 }}>
                WELCOME TO SWARGASEEMA
              </Typography>
              <Typography sx={{ mb: 3, maxWidth: 600 }}>
                Since 2017, Swargaseema Sandalwood Farms Pvt Ltd has established itself as a trusted open plot real estate developer in Telangana. We offer DTCP Approved & RERA registered open plots in well-connected locations across Shadnagar, South Hyderabad.
              </Typography>
              <Typography variant="h6" sx={{ color: gold, fontWeight: 700, mb: 1.5 }}>
                Why Invest in Our Open Plots?
              </Typography>
              <Box component="ul" sx={{ pl: 0, mb: 3, listStyle: 'none' }}>
                <Box component="li" sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <Box sx={{ color: gold, mr: 1, fontSize: 22 }}>✔️</Box>
                  <Typography>100% DTCP Approved & RERA Registered Properties.</Typography>
                </Box>
                <Box component="li" sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <Box sx={{ color: gold, mr: 1, fontSize: 22 }}>✔️</Box>
                  <Typography>High-Growth Locations – Well-connected areas with increasing land value.</Typography>
                </Box>
                <Box component="li" sx={{ display: 'flex', alignItems: 'center' }}>
                  <Box sx={{ color: gold, mr: 1, fontSize: 22 }}>✔️</Box>
                  <Typography>Transparent Transactions – Hassle-free documentation & ownership process.</Typography>
                </Box>
              </Box>
              <Typography variant="h6" sx={{ color: gold, fontWeight: 700, mb: 1.5 }}>
                Meet Our Founder – Mr. Chandra Chandrasekhar
              </Typography>
              <Typography sx={{ mb: 2, maxWidth: 600 }}>
                With over 20 years of experience in the real estate industry, Mr. Chandra Chandrasekhar has transformed Swargaseema Sandalwood Farms Pvt Ltd into a reputed name in open plot development. From being a successful builder to a visionary land developer, he brings a deep-rooted passion for greenery, nature, traditional living, and a sustainable environment, which is reflected in every project he envisions. His expertise, dedication, and customer-first approach continue to drive our success in creating thriving communities.
              </Typography>
              <Typography sx={{ mb: 2, maxWidth: 600 }}>
                Beyond real estate, Mr. Chandrasekhar shares his knowledge and life philosophies through his YouTube channel, where he talks about day-to-day living, financial and personality development, building the right attitude, and leading a safe, secure, healthy, and happy life. Watch on <Box component="a" href="#" sx={{ color: gold, textDecoration: 'underline', fontWeight: 500, ml: 0.5, display: 'inline' }}>YouTube</Box>.
              </Typography>
              <Button variant="contained" sx={{ bgcolor: gold, color: dark, fontWeight: 700, borderRadius: 2, px: 3, py: 1.2, mb: 4, '&:hover': { bgcolor: '#c98b36' } }}>
                Know More..
              </Button>
              <Grid container spacing={4} sx={{ mt: 2 }}>
                <Grid item xs={6} md={4}>
                  <Typography variant="h3" sx={{ color: gold, fontWeight: 800, lineHeight: 1 }}>20+</Typography>
                  <Typography sx={{ color: 'white', opacity: 0.8, fontWeight: 500, fontSize: 16 }}>YEARS OF EXPERIENCE</Typography>
                </Grid>
                <Grid item xs={6} md={4}>
                  <Typography variant="h3" sx={{ color: gold, fontWeight: 800, lineHeight: 1 }}>2000+</Typography>
                  <Typography sx={{ color: 'white', opacity: 0.8, fontWeight: 500, fontSize: 16 }}>HAPPY CUSTOMERS</Typography>
                </Grid>
              </Grid>
            </Grid>
            {/* Right: Image */}
            <Grid item xs={12} md={5} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Box
                component="img"
                src="https://i.imgur.com/0y8Ftya.png"
                alt="Founder"
                sx={{
                  width: { xs: '70%', md: '100%' },
                  maxWidth: 370,
                  borderRadius: 3,
                  boxShadow: 6,
                  objectFit: 'cover',
                  background: 'linear-gradient(180deg, #23272f 0%, #181c22 100%)',
                }}
              />
            </Grid>
          </Grid>
        </Container>
        <Container sx={{ py: 8 }}>
        <Grid container spacing={5} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h5" sx={{ fontWeight: 700, color: gold, mb: 2 }}>
              Our Journey
            </Typography>
            <Typography sx={{ mb: 2 }}>
              MVV Builders, Visakhapatnam, Andhra Pradesh, India, started its operations in the 90s, headed by young, dynamic, and innovative self-driven entrepreneur Mr. Mullapudi Veera Venkata Satyanarayana.
            </Typography>
            <Typography sx={{ mb: 2 }}>
              Over more than two decades, we have grown exponentially, establishing a strong foundation in residential development in Visakhapatnam and extending our presence to Hyderabad. Our commitment to quality, transparency, and customer satisfaction has made us a trusted name in the industry.
            </Typography>
            <Typography sx={{ mb: 2 }}>
              We believe in sustainable development, innovative design, and delivering value to our clients. Our projects are a blend of modern amenities and traditional values, ensuring a fulfilling lifestyle for our customers.
            </Typography>
            <Typography sx={{ mb: 2 }}>
              Our team of experienced professionals, architects, and engineers work tirelessly to turn dreams into reality. We are proud to have delivered numerous landmark projects that stand as a testament to our expertise and dedication.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{
              borderRadius: 2,
              minHeight: 260,
              backgroundImage: 'url(https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              boxShadow: 4
            }} />
          </Grid>
        </Grid>
      </Container>
      </Box>

      {/* More About Content */}
      
    </Box>
  )
}



