import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import BadgeIcon from '@mui/icons-material/Badge';

const Footer = () => {
  return (
    <BottomNavigation showLabels style={{ position: 'fixed', bottom: 0, width: '100%' }}>
      <BottomNavigationAction label="Home" icon={<HomeIcon />} />
      <BottomNavigationAction label="Parking" icon={<LocalParkingIcon />} />
      <BottomNavigationAction label="Transit" icon={<DirectionsBusIcon />} />
      <BottomNavigationAction label="Permits" icon={<BadgeIcon />} />
    </BottomNavigation>
  );
};

export default Footer;
