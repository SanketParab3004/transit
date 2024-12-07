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
            height: '100vh',
            padding: 2,
            backgroundColor: '#2F8195',
          }}
        >
          <Typography variant="h3" style={{ color: 'white' }}>
            Hello, World!
          </Typography>
        </Box>
      );
};

export default TransitPassPage;
