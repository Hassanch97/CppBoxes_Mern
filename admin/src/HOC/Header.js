import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import PublicIcon from '@mui/icons-material/Public';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import DashboardIcon from '@mui/icons-material/Dashboard';

import logo from "../assets/icons/logo.webp";
import "./Header.css";
import Grid from '@mui/material/Grid';
import Home from '../Components/Home';
import EditNoteIcon from '@mui/icons-material/EditNote';
import { Outlet, useNavigate } from 'react-router-dom';

const drawerWidth = 250;

const Header = () => {
const navigate = useNavigate();

  return (
    <Box sx={{ display: 'flex' }} className='header'>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
        >
        {/* <Toolbar>
        <Typography variant="h6" noWrap component="div">
        Permanent drawer
        </Typography>
        </Toolbar> */}
      </AppBar>
      <Drawer
        sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
        width: drawerWidth,
        boxSizing: 'border-box',
        },
        }}
        variant="permanent"
        anchor="left"
      >
        <Box className='logo_signOut'>
        <img src={logo} width={100} alt='logo'/>
        <List>
        <ListItem disablePadding>
        <ListItemButton>
        <ListItemIcon>
        <PowerSettingsNewIcon />
        </ListItemIcon>
        <ListItemText>Sign Out</ListItemText>
        </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
        <ListItemButton>
        <ListItemIcon>
        <ListItemIcon>
        <PublicIcon />
        </ListItemIcon>
        </ListItemIcon>
        <ListItemText>Website</ListItemText>
        </ListItemButton>
        </ListItem>
        </List>
        </Box>
        {/* <Toolbar /> */}
        <Divider />
        <Box>
          <List>
            <ListItem disablePadding>
              <ListItemButton onClick={() => navigate('/')}>
                <ListItemIcon>
                  <DashboardIcon />
                </ListItemIcon>
                <ListItemText>Dashboard</ListItemText>
              </ListItemButton>                    
            </ListItem>
          </List>
        </Box>
        <label>INVENTORY</label>
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={() => navigate('/category')}>
              <ListItemIcon>
              </ListItemIcon>
              <ListItemText primary="Category" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => navigate('/products')}>
              <ListItemIcon>
              </ListItemIcon>
              <ListItemText primary="Products" />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
        <label>ATTRIBUTES</label>
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={() => navigate('/blogcategory')}>
              <ListItemIcon>
                <EditNoteIcon />
              </ListItemIcon>
              <ListItemText primary="Blog Categories" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <EditNoteIcon />
              </ListItemIcon>
              <ListItemText primary="Blog" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <EditNoteIcon />
              </ListItemIcon>
            <ListItemText primary="Blog Shortcode" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <EditNoteIcon />
            </ListItemIcon>
            <ListItemText primary="Author" />
          </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => navigate('/faqs')}>
              <ListItemIcon>
              </ListItemIcon>
              <ListItemText primary="FAQ's" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => navigate('/reviews')}>
              <ListItemIcon>
              </ListItemIcon>
              <ListItemText primary="Reviews" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => navigate('/portfolio')}>
              <ListItemIcon>
              </ListItemIcon>
              <ListItemText primary="Portfolio" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              </ListItemIcon>
              <ListItemText primary="Gallery" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => navigate('/pages')}>
              <ListItemIcon>
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => navigate('/newsletter')}>
              <ListItemIcon>
              </ListItemIcon>
              <ListItemText primary="Newsletter" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              </ListItemIcon>
              <ListItemText primary="Redirections" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
       <Outlet />
      </Box>
    </Box>
  )
}

export default Header
