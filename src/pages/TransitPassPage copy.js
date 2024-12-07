import React, { useState, useEffect } from 'react';
import { Box, Button, Typography, AppBar, Toolbar, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import myTransitGif from './myTransitGif.gif'; // Import gif from the images folder
import myFooter from './footer.jpeg'; // Import footer image from the images folder

const TransitPassPage = () => {
  // State for the countdown timer and user ID
  const [countdown, setCountdown] = useState(85 * 60); // 85 minutes in seconds
  const [userId, setUserId] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());

  // Set a new user ID when the component mounts
  useEffect(() => {
    setUserId(Math.floor(Math.random() * 1000000000)); // Generates a random user ID
  }, []);

  // Update the current time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
      setCountdown((prevCountdown) => (prevCountdown > 0 ? prevCountdown - 1 : 0)); // Decrease the countdown safely
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(timer);
  }, []);

  // Convert seconds to MM format for countdown (without seconds)
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    return `${minutes}`; // Only show minutes
  };

  return (
    <>
      {/* Add space above the navbar */}
      <Box sx={{ height: '64px' }} />

      {/* Navbar - Fixed at the top */}
      <AppBar
  position="fixed" // Make navbar permanently fixed
  style={{
    backgroundColor: 'white',
    top: '80px', // Move the navbar 80px down
    zIndex: 1, // Lower z-index to allow blue rectangle to scroll over it
    boxShadow: 'none',
    width: 'calc(100% - 24px)', // Subtract the padding (16px left + 16px right = 32px)
    marginLeft: '16px', // Offset the navbar to match the left padding of the content
    paddingLeft: 0, // Remove default left padding from AppBar
    paddingRight: 0, // Remove default right padding from AppBar
  }}
>
  <Toolbar>
    <IconButton edge="start" color="inherit" aria-label="menu">
      <MenuIcon style={{ color: 'black' }} />
    </IconButton>
    <IconButton color="inherit">
      <ArrowBackIcon style={{ color: 'black' }} />
    </IconButton>
  </Toolbar>
</AppBar>


      {/* Main Container */}
      <Box
        sx={{
          backgroundColor: 'white',
          paddingRight: 4,
          paddingLeft: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          minHeight: '100vh', // Full screen height
          boxSizing: 'border-box',
          paddingTop: '80px', // Increase space to move the navbar and blue rectangle down
          paddingBottom: '100px', // Offset for the footer height
        }}
      >
        {/* Content Wrapper with Scrolling */}
        <Box
          sx={{
            flex: 1, // Allows the content to take the available space
            width: '100%',
            maxWidth: 400,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            overflowY: 'auto', // Make all content inside this box scrollable
            paddingBottom: 3,
          }}
        >
          {/* Blue Rectangle Container */}
          <Box
            sx={{
              backgroundColor: '#2F8195',
              width: '100%',
              padding: 4, // Increased padding
              borderRadius: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginTop: 6, // Increased margin-top for better spacing
              boxSizing: 'border-box',
              zIndex: 2, // Higher z-index to scroll over the navbar
              position: 'relative', // Ensure it can overlap the navbar
              minHeight: '400px', // Increased minimum height
            }}
          >
            {/* Student Monthly Pass Title */}
            <Typography variant="h6" sx={{ color: 'white', marginBottom: 2 }}>
              Student Monthly Pass
            </Typography>

            {/* Current Date in Bold */}
            <Typography variant="h5" sx={{ color: 'white', fontWeight: 'bold', marginBottom: 2 }}>
              {currentTime.toLocaleString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' })}
            </Typography>

            {/* Current Time in Bold (AM/PM format) */}
            <Typography variant="h5" sx={{ color: 'white', fontWeight: 'bold', marginBottom: 2 }}>
              {currentTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true })}
            </Typography>

            {/* Barrie Transit (Not bold and smaller font size) */}
            <Typography variant="body1" sx={{ color: 'white', fontSize: '0.875rem', marginBottom: 0.5 }}>
              Barrie Transit
            </Typography>

            {/* Transit GIF */}
            <img
              src={myTransitGif}
              alt="Transit Illustration"
              style={{
                width: '100%', // Makes image responsive
                height: 'auto', // Maintains aspect ratio
                objectFit: 'contain',
                marginBottom: 20,
                borderRadius: 4, // Rounded corners
              }}
            />

            {/* Expire Button */}
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#00A9A5',
                color: 'white',
                marginBottom: 2,
                boxShadow: 'none',
                borderRadius: 20,
                textTransform: 'none',
              }}
            >
              Expire
            </Button>

            {/* Countdown Timer with Bold 85 Minutes */}
            <Typography variant="body1" sx={{ color: 'white', fontWeight: 'bold', marginBottom: 1, textAlign: 'center', fontSize: '1.2rem' }}>
              This pass expires after {formatTime(countdown)} minutes
            </Typography>

            {/* User ID */}
            <Typography variant="caption" sx={{ color: 'white', marginBottom: -2 }}>
              User ID {userId}
            </Typography>
          </Box>

          {/* Live Map Button */}
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#00A9A5',
              color: 'white',
              marginTop: 2,
              boxShadow: 'none',
              borderRadius: 20,
              textTransform: 'none',
            }}
          >
            Live Map
          </Button>
        </Box>
      </Box>

      {/* Footer - Fixed at the bottom */}
      <Box
        sx={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          width: '100%',
          zIndex: 3,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 0,
        }}
      >
        <img
          src={myFooter}
          alt="" // Empty alt attribute since the image is purely decorative or not essential
          style={{
            width: '100%',
            height: 'auto',
            objectFit: 'contain', // Ensure responsiveness
          }}
        />
      </Box>
    </>
  );
};

export default TransitPassPage;
