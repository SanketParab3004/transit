import React from 'react';
import { Box, Button, Typography } from '@mui/material';

const TransitPassPage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
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
