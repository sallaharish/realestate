import { Box, Container, Typography, Button, IconButton, Dialog, DialogContent, DialogTitle } from '@mui/material'
import { PlayArrow, Close, PhotoLibrary, VideoLibrary, Article, Event, Share, Favorite } from '@mui/icons-material'
import Navbar from '../components/Navbar'
import { useState } from 'react'

export default function Gallery() {
  const gold = '#e0a146';
  const dark = '#181c22';
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [showAllImages, setShowAllImages] = useState(false);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
    setShowAllImages(false); // Reset load more state when switching tabs
  };

  const galleryData = {
    images: [
      {
        id: 1,
        title: 'SUKETANA Master Plan',
        description: 'Comprehensive development layout with wide roads and modern amenities',
        src: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop',
        project: 'SUKETANA',
        location: 'Hyderabad',
        date: '2024'
      },
      {
        id: 2,
        title: 'Infrastructure Development',
        description: 'Wide roads, underground drainage, and street lighting',
        src: 'https://images.unsplash.com/photo-1570129477492-45c00371b117?q=80&w=1000&auto=format&fit=crop',
        project: 'SUKETANA',
        location: 'Hyderabad',
        date: '2024'
      },
      {
        id: 3,
        title: 'Green Spaces & Parks',
        description: 'Beautifully landscaped green spaces and recreational areas',
        src: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1000&auto=format&fit=crop',
        project: 'SUKETANA',
        location: 'Hyderabad',
        date: '2024'
      },
      {
        id: 4,
        title: 'Security Surveillance',
        description: '24/7 security and surveillance systems',
        src: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=1000&auto=format&fit=crop',
        project: 'SUKETANA',
        location: 'Hyderabad',
        date: '2024'
      },
      {
        id: 5,
        title: 'Clubhouse Facilities',
        description: 'Modern clubhouse with recreational amenities',
        src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1000&auto=format&fit=crop',
        project: 'SUKETANA',
        location: 'Hyderabad',
        date: '2024'
      },
      {
        id: 6,
        title: 'Green Valley Eco Design',
        description: 'Sustainable residential development with environmental consciousness',
        src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1000&auto=format&fit=crop',
        project: 'Green Valley',
        location: 'Hyderabad',
        date: '2024'
      },
      {
        id: 7,
        title: 'Solar Street Lighting',
        description: 'Eco-friendly solar-powered street lighting system',
        src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1000&auto=format&fit=crop',
        project: 'Green Valley',
        location: 'Hyderabad',
        date: '2024'
      },
      {
        id: 8,
        title: 'Rainwater Harvesting',
        description: 'Sustainable water management system',
        src: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=1000&auto=format&fit=crop',
        project: 'Green Valley',
        location: 'Hyderabad',
        date: '2024'
      },
      {
        id: 9,
        title: 'Royal Gardens Premium Location',
        description: 'Strategic location in Hyderabad\'s most prestigious corridor',
        src: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1000&auto=format&fit=crop',
        project: 'Royal Gardens',
        location: 'Hyderabad',
        date: '2024'
      },
      {
        id: 10,
        title: 'Luxury Amenities',
        description: 'World-class amenities and facilities',
        src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1000&auto=format&fit=crop',
        project: 'Royal Gardens',
        location: 'Hyderabad',
        date: '2024'
      },
      {
        id: 11,
        title: 'Modern Architecture',
        description: 'Contemporary design elements and architectural excellence',
        src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop',
        project: 'All Projects',
        location: 'Hyderabad',
        date: '2024'
      },
      // Additional images for "Load More"
      {
        id: 12,
        title: 'Construction Progress',
        description: 'Ongoing development and construction activities',
        src: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1000&auto=format&fit=crop',
        project: 'SUKETANA',
        location: 'Hyderabad',
        date: '2024'
      },
      {
        id: 13,
        title: 'Landscaping Design',
        description: 'Beautiful landscape architecture and garden design',
        src: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=1000&auto=format&fit=crop',
        project: 'Green Valley',
        location: 'Hyderabad',
        date: '2024'
      },
      {
        id: 14,
        title: 'Premium Location View',
        description: 'Panoramic views from our premium residential plots',
        src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1000&auto=format&fit=crop',
        project: 'Royal Gardens',
        location: 'Hyderabad',
        date: '2024'
      },
      {
        id: 15,
        title: 'Community Facilities',
        description: 'Shared community spaces and recreational facilities',
        src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1000&auto=format&fit=crop',
        project: 'All Projects',
        location: 'Hyderabad',
        date: '2024'
      },
      {
        id: 16,
        title: 'Investment Opportunity',
        description: 'Prime real estate investment opportunity in Hyderabad',
        src: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop',
        project: 'All Projects',
        location: 'Hyderabad',
        date: '2024'
      }
    ],
    videos: [
      {
        id: 1,
        title: 'SUKETANA Project Overview',
        description: 'Experience the premium residential plots in Hyderabad\'s most promising corridor',
        thumbnail: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1000&auto=format&fit=crop',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        project: 'SUKETANA',
        location: 'Hyderabad',
        date: '2024'
      },
      {
        id: 2,
        title: 'Green Valley Eco Tour',
        description: 'Explore sustainable living in harmony with nature',
        thumbnail: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1000&auto=format&fit=crop',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
        project: 'Green Valley',
        location: 'Hyderabad',
        date: '2024'
      },
      {
        id: 3,
        title: 'Royal Gardens Luxury Tour',
        description: 'Discover luxury living in Hyderabad\'s prestigious corridor',
        thumbnail: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1000&auto=format&fit=crop',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
        project: 'Royal Gardens',
        location: 'Hyderabad',
        date: '2024'
      },
      {
        id: 4,
        title: 'SUKETANA Site Visit',
        description: 'A comprehensive walkthrough of the SUKETANA project site',
        thumbnail: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
        project: 'SUKETANA',
        location: 'Hyderabad',
        date: '2024'
      },
      {
        id: 5,
        title: 'Green Valley Amenities',
        description: 'Explore the eco-friendly amenities at Green Valley',
        thumbnail: 'https://images.unsplash.com/photo-1570129477492-45c00371b117?q=80&w=1000&auto=format&fit=crop',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
        project: 'Green Valley',
        location: 'Hyderabad',
        date: '2024'
      },
      {
        id: 6,
        title: 'Royal Gardens Infrastructure',
        description: 'A look at the world-class infrastructure at Royal Gardens',
        thumbnail: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=1000&auto=format&fit=crop',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
        project: 'Royal Gardens',
        location: 'Hyderabad',
        date: '2024'
      }
    ],
    pressRelease: [
      {
        id: 1,
        title: 'SUKETANA Project Launch Announcement',
        description: 'Surya Prime Ventures announces the launch of SUKETANA, premium residential plots in Hyderabad',
        src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop',
        project: 'SUKETANA',
        location: 'Hyderabad',
        date: '2024-01-15',
        type: 'Press Release'
      },
      {
        id: 2,
        title: 'Green Valley Eco-Friendly Initiative',
        description: 'New sustainable development practices introduced in Green Valley project',
        src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1000&auto=format&fit=crop',
        project: 'Green Valley',
        location: 'Hyderabad',
        date: '2024-02-20',
        type: 'Press Release'
      },
      {
        id: 3,
        title: 'Royal Gardens Luxury Amenities Update',
        description: 'World-class amenities and facilities unveiled for Royal Gardens residents',
        src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1000&auto=format&fit=crop',
        project: 'Royal Gardens',
        location: 'Hyderabad',
        date: '2024-03-10',
        type: 'Press Release'
      },
      {
        id: 4,
        title: 'DTCP Approval for All Projects',
        description: 'All Surya Prime Ventures projects receive DTCP approval and RERA registration',
        src: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop',
        project: 'All Projects',
        location: 'Hyderabad',
        date: '2024-04-05',
        type: 'Press Release'
      }
    ],
    events: [
      {
        id: 1,
        title: 'SUKETANA Site Visit Event',
        description: 'Exclusive site visit event for potential investors and buyers',
        src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1000&auto=format&fit=crop',
        project: 'SUKETANA',
        location: 'Hyderabad',
        date: '2024-05-15',
        type: 'Event'
      },
      {
        id: 2,
        title: 'Green Valley Eco Awareness Program',
        description: 'Educational program about sustainable living and eco-friendly practices',
        src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1000&auto=format&fit=crop',
        project: 'Green Valley',
        location: 'Hyderabad',
        date: '2024-06-20',
        type: 'Event'
      },
      {
        id: 3,
        title: 'Royal Gardens Grand Opening',
        description: 'Grand opening ceremony with VIP guests and media coverage',
        src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1000&auto=format&fit=crop',
        project: 'Royal Gardens',
        location: 'Hyderabad',
        date: '2024-07-10',
        type: 'Event'
      },
      {
        id: 4,
        title: 'Customer Appreciation Event',
        description: 'Annual customer appreciation event with special offers and entertainment',
        src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1000&auto=format&fit=crop',
        project: 'All Projects',
        location: 'Hyderabad',
        date: '2024-08-25',
        type: 'Event'
      }
    ]
  };

  const handleMediaClick = (media) => {
    setSelectedMedia(media);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedMedia(null);
  };

  const getCurrentData = () => {
    const tabs = ['images', 'videos', 'pressRelease', 'events'];
    const data = galleryData[tabs[activeTab]] || [];
    
    // For images tab, show only first 11 images initially, then all if "Load More" is clicked
    if (activeTab === 0) {
      const result = showAllImages ? data : data.slice(0, 11);
      console.log('Images data:', result.length, 'items');
      return result;
    }
    
    return data;
  };

  const getTabIcon = (index) => {
    const icons = [<PhotoLibrary />, <VideoLibrary />, <Article />, <Event />];
    return icons[index];
  };

  return (
    <Box sx={{ bgcolor: dark, color: 'white', minHeight: '100vh' }}>
      <Navbar />
      
      {/* Gallery Hero Section */}
              <Box sx={{
        position: 'relative',
        py: { xs: 8, md: 12 },
        backgroundImage: 'url(https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1000&auto=format&fit=crop)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          bgcolor: 'rgba(0,0,0,0.7)',
        },
        '&::after': {
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
        <Container sx={{ position: 'relative', zIndex: 3 }}>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h1" sx={{
              color: gold,
              fontWeight: 400,
              fontSize: { xs: '3rem', md: '4.5rem' },
              mb: 4,
              fontFamily: '"Playfair Display", serif',
              letterSpacing: '0.05em',
              lineHeight: 1.2
            }}>
              PROJECT GALLERY
            </Typography>
            <Typography sx={{
              color: 'white',
              opacity: 0.9,
              fontSize: { xs: '18px', md: '22px' },
              lineHeight: 1.6,
              maxWidth: '800px',
              mx: 'auto',
              mb: 4
            }}>
              Explore our premium residential projects through images, videos, press releases, and events
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Tabbed Gallery Section */}
      <Box sx={{
        bgcolor: dark,
        py: { xs: 6, md: 8 },
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
          {/* Custom Tab Navigation */}
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            mb: 6,
            flexWrap: 'wrap',
            gap: 2
          }}>
            {['IMAGES', 'VIDEOS', 'PRESS RELEASE', 'EVENTS'].map((label, index) => (
              <Button
                key={index}
                onClick={() => handleTabChange(null, index)}
                startIcon={getTabIcon(index)}
                sx={{
                  color: activeTab === index ? dark : 'white',
                  bgcolor: activeTab === index ? gold : 'transparent',
                  border: activeTab === index ? `2px solid ${gold}` : '2px solid transparent',
                  borderRadius: '25px',
                  px: 3,
                  py: 1.5,
                  fontWeight: 600,
                  fontSize: '14px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    bgcolor: activeTab === index ? '#d4943a' : 'rgba(224, 161, 70, 0.1)',
                    borderColor: gold,
                    transform: 'translateY(-2px)'
                  }
                }}
              >
                {label}
              </Button>
            ))}
          </Box>

          {/* Gallery Grid */}
          <Box sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(3, 1fr)',
              md: 'repeat(3, 1fr)',
              lg: 'repeat(3, 1fr)'
            },
            gap: 3,
            justifyContent: 'center'
          }}>
            {getCurrentData().length > 0 ? (
              getCurrentData().map((media, index) => (
                <Box key={media.id}>
                  <Box sx={{
                    position: 'relative',
                    borderRadius: 3,
                    overflow: 'hidden',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: `0 20px 40px rgba(0,0,0,0.4), 0 0 30px ${gold}30`,
                      '& .content-overlay': {
                        transform: 'translateY(0)'
                      }
                    }
                  }} onClick={() => handleMediaClick(media)}>
                    <Box sx={{
                      height: 250,
                      position: 'relative',
                      overflow: 'hidden'
                    }}>
                      <img
                        src={media.thumbnail || media.src}
                        alt={media.title}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          display: 'block'
                        }}
                        onError={(e) => {
                          e.target.src = 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1000&auto=format&fit=crop';
                        }}
                      />
                      
                      {/* Video Play Button */}
                      {activeTab === 1 && (
                        <Box sx={{
                          position: 'absolute',
                          top: '50%',
                          left: '50%',
                          transform: 'translate(-50%, -50%)',
                          bgcolor: 'rgba(224, 161, 70, 0.9)',
                          borderRadius: '50%',
                          width: 70,
                          height: 70,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            transform: 'translate(-50%, -50%) scale(1.1)',
                            bgcolor: gold
                          }
                        }}>
                          <PlayArrow sx={{ fontSize: 35, color: dark }} />
                        </Box>
                      )}

                      {/* Media Type Badge */}
                      <Box sx={{
                        position: 'absolute',
                        top: 12,
                        right: 12,
                        bgcolor: 'rgba(0,0,0,0.8)',
                        borderRadius: 2,
                        px: 2,
                        py: 1
                      }}>
                        <Typography sx={{ color: gold, fontWeight: 600, fontSize: '11px' }}>
                          {activeTab === 0 ? 'IMAGE' : activeTab === 1 ? 'VIDEO' : activeTab === 2 ? 'PRESS' : 'EVENT'}
                        </Typography>
                      </Box>

                      {/* Project Badge */}
                      <Box sx={{
                        position: 'absolute',
                        top: 12,
                        left: 12,
                        bgcolor: 'rgba(224, 161, 70, 0.9)',
                        borderRadius: 2,
                        px: 2,
                        py: 1
                      }}>
                        <Typography sx={{ color: dark, fontWeight: 600, fontSize: '11px' }}>
                          {media.project}
                        </Typography>
                      </Box>
                    </Box>
                    
                    {/* Content Overlay */}
                    <Box className="content-overlay" sx={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      bgcolor: 'rgba(0,0,0,0.9)',
                      p: 3,
                      transform: 'translateY(100%)',
                      transition: 'all 0.3s ease'
                    }}>
                      <Typography sx={{
                        color: gold,
                        fontWeight: 600,
                        fontSize: '16px',
                        mb: 1,
                        lineHeight: 1.2
                      }}>
                        {media.title}
                      </Typography>
                      <Typography sx={{
                        color: 'white',
                        opacity: 0.9,
                        fontSize: '13px',
                        lineHeight: 1.4,
                        mb: 2
                      }}>
                        {media.description}
                      </Typography>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography sx={{
                          color: 'white',
                          opacity: 0.7,
                          fontSize: '11px'
                        }}>
                          {media.date}
                        </Typography>
                        <Typography sx={{
                          color: gold,
                          fontSize: '11px',
                          fontWeight: 600
                        }}>
                          {media.location}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              ))
            ) : (
              <Box sx={{ 
                gridColumn: '1 / -1',
                textAlign: 'center', 
                py: 8 
              }}>
                <Typography variant="h5" sx={{ color: gold, mb: 2 }}>
                  No {activeTab === 0 ? 'Images' : activeTab === 1 ? 'Videos' : activeTab === 2 ? 'Press Releases' : 'Events'} Found
                </Typography>
                <Typography sx={{ color: 'white', opacity: 0.7 }}>
                  Please check back later for new content.
                </Typography>
              </Box>
            )}
          </Box>

          {/* Load More / Show Less Button - Only for Images tab */}
          {activeTab === 0 && galleryData.images.length > 11 && (
            <Box sx={{ textAlign: 'center', mt: 6 }}>
              <Button
                onClick={() => setShowAllImages(!showAllImages)}
                sx={{
                  bgcolor: 'rgba(255,255,255,0.1)',
                  color: 'white',
                  border: `2px solid ${gold}`,
                  borderRadius: '25px',
                  px: 4,
                  py: 2,
                  fontWeight: 600,
                  fontSize: '16px',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    bgcolor: gold,
                    color: dark,
                    transform: 'translateY(-2px)',
                    boxShadow: `0 10px 20px rgba(224, 161, 70, 0.3)`
                  }
                }}
              >
                {showAllImages ? '- SHOW LESS' : '+ LOAD MORE'}
              </Button>
            </Box>
          )}
      </Container>
      </Box>

      {/* Media Dialog */}
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        maxWidth="lg"
        fullWidth
        sx={{
          '& .MuiDialog-paper': {
            bgcolor: dark,
            border: `2px solid ${gold}`,
            borderRadius: 4
          }
        }}
      >
        <DialogTitle sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          bgcolor: 'rgba(224, 161, 70, 0.1)',
          borderBottom: `1px solid ${gold}`,
          p: 3
        }}>
          <Box>
            <Typography variant="h5" sx={{ color: gold, fontWeight: 600 }}>
              {selectedMedia?.title}
            </Typography>
            <Typography sx={{ color: 'white', opacity: 0.8, fontSize: '14px' }}>
              {selectedMedia?.project} • {selectedMedia?.location} • {selectedMedia?.date}
            </Typography>
          </Box>
          <IconButton onClick={handleCloseDialog} sx={{ color: gold }}>
            <Close />
          </IconButton>
        </DialogTitle>
        <DialogContent sx={{ p: 0 }}>
          {selectedMedia && (
            <Box sx={{ position: 'relative' }}>
              {activeTab === 1 ? (
                <video
                  controls
                  style={{
                    width: '100%',
                    height: '500px',
                    objectFit: 'cover'
                  }}
                  poster={selectedMedia.thumbnail}
                >
                  <source src={selectedMedia.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img
                  src={selectedMedia.thumbnail || selectedMedia.src}
                  alt={selectedMedia.title}
                  style={{
                    width: '100%',
                    height: '500px',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1000&auto=format&fit=crop';
                  }}
                />
              )}
              <Box sx={{ p: 3 }}>
                <Typography sx={{
                  color: 'white',
                  opacity: 0.9,
                  lineHeight: 1.6,
                  mb: 3
                }}>
                  {selectedMedia.description}
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                  <Button
                    variant="outlined"
                    startIcon={<Share />}
                    sx={{
                      borderColor: gold,
                      color: gold,
                      '&:hover': {
                        borderColor: gold,
                        bgcolor: 'rgba(224, 161, 70, 0.1)'
                      }
                    }}
                  >
                    Share
                  </Button>
                  <Button
                    variant="outlined"
                    startIcon={<Favorite />}
                    sx={{
                      borderColor: gold,
                      color: gold,
                      '&:hover': {
                        borderColor: gold,
                        bgcolor: 'rgba(224, 161, 70, 0.1)'
                      }
                    }}
                  >
                    Save
                  </Button>
                </Box>
              </Box>
            </Box>
          )}
        </DialogContent>
      </Dialog>
    </Box>
  )
}