import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HowToRegOutlinedIcon from '@mui/icons-material/HowToRegOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import RecentActorsOutlinedIcon from '@mui/icons-material/RecentActorsOutlined';
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';


const drawerWidth = 240;

export default function ClippedDrawer({Page}) {
  const navLinks = [
    {
      name: 'Start Register',
      path: '/',
      icon: <HowToRegOutlinedIcon />
    },
    {
      name: 'Register Student',
      path: '/register',
      icon: <PersonAddAlt1OutlinedIcon />
    },
    {
      name: 'My Students',
      path: '/students',
      icon: <PeopleAltOutlinedIcon />
    }];
  return (

    <>

      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
          <Toolbar>
            <Typography display='flex' variant="h6" noWrap component="div">
              <RecentActorsOutlinedIcon
                fontSize='large'

              /> <Typography
                paddingLeft='10px'
              />
              JCTC - ATTENDANCE MANAGEMENT
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
          }}
        >
          <Toolbar />
          <Box sx={{ overflow: 'auto' }}>
            <List>
              {navLinks.map((item) => (
                <ListItem key={item.name} disablePadding>
                  <a style={{
                    textDecoration: 'none',
                    
                  }} href={item.path}>
                  <ListItemButton>
                    <ListItemIcon>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText primary={item.name} />
                  </ListItemButton>
                  </a>
                </ListItem>
              ))}
            </List>
            <Divider />
            <List>
              {[{
                name: 'My Profile',
                path: '/Profile',
                icon: <AccountCircleOutlinedIcon />

              }].map((item) => (
                <ListItem key={item.name} disablePadding>
                  <a style={{
                    textDecoration: 'none'
                  }} href={item.path}>
                  <ListItemButton>
                    <ListItemIcon>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText primary={item.name} />
                  </ListItemButton>
                  </a>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />

          <>{Page}</>
        </Box>
      </Box>

    </>
  );
}