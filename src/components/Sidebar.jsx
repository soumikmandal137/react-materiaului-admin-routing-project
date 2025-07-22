import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, Divider } from '@mui/material';
import { Home, Info, ContactMail, Dashboard } from '@mui/icons-material';

const drawerWidth = 240;

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: 'border-box',
          backgroundColor: '#1976d2',
          color: 'white',
        },
      }}
    >
      <Toolbar />
      <Divider />
      <List>
        <ListItem button>
          <ListItemIcon sx={{ color: 'white' }}>
            <Home />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>

        <ListItem button>
          <ListItemIcon sx={{ color: 'white' }}>
            <Dashboard />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>

        <ListItem button>
          <ListItemIcon sx={{ color: 'white' }}>
            <Info />
          </ListItemIcon>
          <ListItemText primary="About" />
        </ListItem>

        <ListItem button>
          <ListItemIcon sx={{ color: 'white' }}>
            <ContactMail />
          </ListItemIcon>
          <ListItemText primary="Contact" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
