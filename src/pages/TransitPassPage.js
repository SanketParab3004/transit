import React, { useState, useEffect } from 'react';
import { Box, Button, Typography, AppBar, Toolbar, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import myTransitGif from './myTransitGif.gif'; // Import gif from the images folder

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
      if (countdown > 0) {
        setCountdown(countdown - 1); // Decrease the countdown every second
      }
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(timer);
  }, [countdown]);

  // Convert seconds to MM format for countdown (without seconds)
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    return `${minutes}`; // Only show minutes
  };

  return (
    <>
      {/* Navbar - Behind the blue rectangle */}
      <AppBar 
        position="absolute" // Positioned behind the content
        style={{
          backgroundColor: '#2F8195',
          top: 0,  // Ensure it's at the top
          zIndex: 0, // Lower z-index to place it behind the blue rectangle
          width: '100%',
        }}
      >
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <IconButton color="inherit">
            <ArrowBackIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Main Content - Transit Pass Page */}
      <Box
        sx={{
          backgroundColor: 'white',
          paddingRight: 4,
          paddingLeft: 4,
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          minHeight: '100vh', // Full screen height
          boxSizing: 'border-box',
          marginTop: '64px', // Ensure content isn't hidden behind the navbar
          position: 'relative',
        }}
      >
        {/* Blue rectangle container */}
        <Box
          sx={{
            backgroundColor: '#2F8195',
            width: '100%',
            maxWidth: 400,
            padding: 3,
            borderRadius: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            paddingBottom: 4,
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: -10,  // Fixed top margin
            boxSizing: 'border-box',
            zIndex: 1,  // Higher z-index to place the blue rectangle above the navbar
          }}
        >
          {/* Student Monthly Pass title */}
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
            src={myTransitGif} // Path imported from images
            alt="Transit Illustration"
            style={{
              width: '100%', // Makes image responsive
              height: 'auto', // Maintains aspect ratio
              objectFit: 'contain', // Ensures the entire image is visible without stretching
              marginBottom: 20, // Adds space between the image and the button below
              borderRadius: 4, // Rounded corners for better design
              padding: '0 10px',  // Adds some padding between the image and the rectangle's border
            }}
          />

          {/* Expire Button */}
          <Button variant="contained" sx={{ backgroundColor: '#00A9A5', color: 'white', marginBottom: 2, boxShadow: 'none', borderRadius: 20 }}>
            Expire
          </Button>

          {/* Countdown timer with bold 85 minutes */}
          <Typography variant="body1" sx={{ color: 'white', fontWeight: 'bold', marginBottom: 2 }}>
            This pass expires after {formatTime(countdown)} minutes
          </Typography>

          {/* User ID */}
          <Typography variant="caption" sx={{ color: 'white', marginBottom: 2 }}>
            User ID {userId}
          </Typography>
        </Box>

        {/* Live Map Button outside the rectangle */}
        <Button variant="contained" sx={{ backgroundColor: '#00A9A5', color: 'white', marginTop: 2, boxShadow: 'none', borderRadius: 20 }}>
          Live Map
        </Button>
      </Box>
    </>
  );
};

export default TransitPassPage;
