import React from 'react';
import { AppBar, Toolbar, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Navbar = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: '#2F8195' }}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <IconButton color="inherit">
          <ArrowBackIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
