import React from 'react'
import {Box,ListItemButton,ListItem,List,ListItemIcon,ListItemText,Switch} from '@mui/material'
import { AccountBox, Home, ModeNight, Person, Settings, Storefront } from '@mui/icons-material'
const Sidebar = () => {
  return (
    <Box 
    flex={1} p={2} 
    display={{xs:"none", sm:"block"}}>
    <Box  position={"fixed"}>
      <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <Home/>
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <Storefront/>
              </ListItemIcon>
              
              <ListItemText primary="Marketplace" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                 <Person/>
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <Settings/>
              </ListItemIcon>

              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <AccountBox/>
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <ModeNight/>
              </ListItemIcon>
              <Switch  />
            </ListItemButton>
          </ListItem>
       </List>
       </Box>   
    </Box>
  )
}

export default Sidebar