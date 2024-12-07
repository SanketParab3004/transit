import React, { useState, useEffect } from 'react';
import { Box, AppBar, Toolbar, IconButton, Typography, Button } from '@mui/material'; // Import necessary components
import MenuIcon from '@mui/icons-material/Menu';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import myTransitGif from './myTransitGif.gif'; // Import your GIF file
import myFooter from './footer.jpeg'; // Import your footer image

const TransitPassPage = () => {
  const [countdown, setCountdown] = useState(85 * 60); // 85 minutes in seconds
  const [userId, setUserId] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    setUserId(Math.floor(Math.random() * 1000000000)); // Generates a random user ID
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
      setCountdown((prevCountdown) => (prevCountdown > 0 ? prevCountdown - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    return `${minutes}`;
  };

  return (
    <Box
      sx={{
        backgroundColor: 'white',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        paddingBottom: '100px',
        '@media (max-width: 1200px)': { paddingBottom: '90px' }, // Slightly adjust for medium screens
        '@media (max-width: 900px)': { paddingBottom: '80px' },
        '@media (max-width: 600px)': { paddingBottom: '120px' },
      }}
    >
      {/* Empty Bar for Top Spacing */}
      <Box
        sx={{
          height: '50px',
          backgroundColor: 'white',
          position: 'sticky',
          top: 0,
          zIndex: 2,
          '@media (max-width: 600px)': { height: '40px' },
        }}
      />

      {/* Navbar */}
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: 'white',
          top: '50px',
          boxShadow: 'none',
          zIndex: 1,
          width: '100%',
          '@media (max-width: 600px)': { top: '40px' },
        }}
      >
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ color: 'black' }}>
            <MenuIcon />
          </IconButton>
          <IconButton color="inherit" sx={{ color: 'black' }}>
            <ArrowBackIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Space Below Navbar */}
      <Box
        sx={{
          height: '60px',
          '@media (max-width: 600px)': { height: '40px' },
        }}
      />

      {/* Blue Rectangle with Spacing from Left/Right */}
      <Box
        sx={{
          backgroundColor: '#2F8195',
          width: 'calc(100% - 32px)',
          marginLeft: '16px',
          marginRight: '16px',
          paddingTop: 4,
          paddingBottom: 3,
          borderRadius: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: 4,
          height: 'calc(100vh - 300px)',
          boxSizing: 'border-box',
          zIndex: 1,
          '@media (max-width: 600px)': { height: 'calc(100vh - 250px)', marginTop: 2 },
          '@media (max-width: 400px)': { height: 'calc(100vh - 220px)', marginTop: 0 },
        }}
      >
        {/* Title */}
        <Typography
          variant="h6"
          sx={{
            color: 'white',
            marginBottom: 2,
            fontSize: '1.2rem',
            '@media (max-width: 600px)': { fontSize: '1rem' },
          }}
        >
          Student Monthly Pass
        </Typography>

        {/* Current Date */}
        <Typography
          variant="h4"
          sx={{
            color: 'white',
            fontWeight: 'bold',
            marginBottom: 2,
            fontSize: '1.5rem',
            '@media (max-width: 600px)': { fontSize: '1.2rem' },
          }}
        >
          {currentTime.toLocaleString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' })}
        </Typography>

        {/* Current Time */}
        <Typography
          variant="h5"
          sx={{
            color: 'white',
            fontWeight: 'bold',
            marginBottom: 2,
            fontSize: '1.2rem',
            '@media (max-width: 600px)': { fontSize: '1rem' },
          }}
        >
          {currentTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true })}
        </Typography>

        {/* Barrie Transit */}
        <Typography
          variant="body1"
          sx={{
            color: 'white',
            fontSize: '0.875rem',
            marginBottom: 0.5,
            '@media (max-width: 600px)': { fontSize: '0.75rem' },
          }}
        >
          Barrie Transit
        </Typography>

        {/* Transit GIF */}
        <img
          src={myTransitGif}
          alt="Transit Illustration"
          style={{
            width: 'calc(100% - 32px)',
            height: 'auto',
            objectFit: 'contain',
            marginBottom: 20,
            borderRadius: 4,
            paddingLeft: '16px',
            paddingRight: '16px',
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
            padding: '10px 20px',
            '@media (max-width: 600px)': { padding: '8px 16px' },
          }}
        >
          Expire
        </Button>

        {/* Countdown Timer */}
        <Typography
          variant="body1"
          sx={{
            color: 'white',
            fontWeight: 'bold',
            marginBottom: 1,
            textAlign: 'center',
            fontSize: '1.2rem',
            '@media (max-width: 600px)': { fontSize: '1rem' },
          }}
        >
          This pass expires after {formatTime(countdown)}
          <br />
          <span>minutes</span>
        </Typography>

        {/* User ID */}
        <Typography
          variant="caption"
          sx={{
            color: 'white',
            marginBottom: 1.5,
            fontSize: '0.75rem',
            '@media (max-width: 600px)': { fontSize: '0.65rem' },
          }}
        >
          User ID {userId}
        </Typography>
      </Box>

      {/* Live Map Button */}
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          marginTop: 3,
        }}
      >
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#00A9A5',
            color: 'white',
            borderRadius: 20,
            padding: '10px 20px',
            textTransform: 'none',
            '@media (max-width: 600px)': { padding: '8px 16px' },
          }}
        >
          Live Map
        </Button>
      </Box>

      {/* Footer */}
      <Box
        sx={{
          position: 'fixed',
          bottom: '0px',
          left: 0,
          width: '100%',
          backgroundColor: 'white',
          zIndex: 1,
          padding: '10px 0',
        }}
      >
        <img
          src={myFooter}
          alt="Footer"
          style={{
            width: '100%',
            height: 'auto',
            objectFit: 'cover',
          }}
        />
      </Box>
    </Box>
  );
};

export default TransitPassPage;
