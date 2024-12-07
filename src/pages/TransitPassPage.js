import React, { useState, useEffect } from 'react';
import { Box, Button, Typography } from '@mui/material';
import myTransitGif from '/myTransitGif.gif'; // Import gif from the images folder

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
        }}
      >
        {/* Student Monthly Pass title */}
        <Typography variant="h6" sx={{ color: 'white', marginBottom: 2 }}>
          Student Monthly Pass
        </Typography>

        {/* Current Date in Bold */}
        <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold', marginBottom: 2 }}>
          {currentTime.toLocaleString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' })}
        </Typography>

        {/* Current Time in Bold (AM/PM format) */}
        <Typography variant="h4" sx={{ color: 'white', fontWeight: 'bold', marginBottom: 2 }}>
          {currentTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true })}
        </Typography>

        {/* Barrie Transit (Not bold and smaller font size) */}
        <Typography variant="body1" sx={{ color: 'white', fontSize: '0.875rem', marginBottom: 2 }}>
          Barrie Transit
        </Typography>

        {/* Transit GIF */}
        <img
        src={myTransitGif} // Path imported from images
        alt="Transit Illustration"
        style={{ marginBottom: 20 }}
      />

        {/* Expire Button */}
        <Button variant="contained" sx={{ backgroundColor: '#00A9A5', color: 'white', marginBottom: 2 }}>
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
      <Button variant="contained" sx={{ backgroundColor: '#00A9A5', color: 'white' }}>
        Live Map
      </Button>
    </Box>
  );
};

export default TransitPassPage;
