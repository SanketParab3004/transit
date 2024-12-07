import React, { useState, useEffect } from 'react';
import { Box, Button, Typography } from '@mui/material';

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

  // Convert seconds to MM:SS format for countdown
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
  };

  return (
    <Box
      sx={{
        backgroundColor: 'white',
        padding: 4,
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: 'calc(100vh - 112px)', // Account for Navbar and Footer
        padding: 2,
        backgroundColor: '#2F8195',
      }}
    >
      <Typography variant="h6" style={{ color: 'white', marginBottom: 10 }}>
        Student Monthly Pass
      </Typography>
      <Typography variant="h4" style={{ color: 'white' }}>
        Fri Dec 06 2024
      </Typography>
      <Typography variant="h5" style={{ color: 'white' }}>
        10:22:08 PM
      </Typography>
      <Typography variant="body1" style={{ color: 'white', marginBottom: 10 }}>
        Barrie Transit
      </Typography>
      <img
        src="https://via.placeholder.com/300x150" // Replace with your image
        alt="Transit Illustration"
        style={{ marginBottom: 20 }}
      />
      <Button variant="contained" style={{ backgroundColor: '#00A9A5', color: 'white' }}>
        Expire
      </Button>
      <Typography variant="body2" style={{ color: 'white', marginTop: 20 }}>
        This pass expires after 85 minutes
      </Typography>
      <Typography variant="caption" style={{ color: 'white' }}>
        User ID 100864817
      </Typography>
    </Box>
  );
};

export default TransitPassPage;
