import React,{useState} from 'react'
import {Box,styled,AppBar,Toolbar,Typography,InputBase,Badge,Avatar,Menu,MenuItem} from '@mui/material'
import MailIcon from '@mui/icons-material/Mail';
import Notifications from '@mui/icons-material/Notifications';
import PetsIcon from '@mui/icons-material/Pets';
// import theme from '../theme.js'


const StyledToolbar=styled(Toolbar)({
    display:"flex",
    justifyContent:"space-between"
})

const  Search=styled("div")(({theme}) => ({
backgroundColor:"white",
padding:"0 10px",
borderRadius:theme.shape.borderRadius,
width:"40%"
}))

const Icons=styled(Box)(({theme})=>({
    // backgroundColor:"white"
    display:"none",
    alignItems:"center",
    gap:"20px",
    [theme.breakpoints.up("sm")]:{
        display:"flex"
    }
}))

const UserBox=styled(Box)(({theme})=>({
    display:"flex",
    alignItems:"center",
    gap:"10px",
    [theme.breakpoints.up("sm")]:{
        display:"none"
    }
}))

const Navbar = () => {
    const {open,setOpen}=useState(false)
  return (
    <AppBar position="stick">
        <StyledToolbar>
            <Typography variant="h6" sx={{display:{xs:"none",
        sm:"block"}}}>
                LAMA DEV
            </Typography>
            <PetsIcon sx={{display:{xs:"block",
        sm:"none"}}}/>
        <Search><InputBase placeholder="search..."/></Search>
        <Icons>
        <Badge badgeContent={4} color="error">
            <MailIcon  />
        </Badge>
        <Badge badgeContent={4} color="error">
            <Notifications  />
        </Badge>
        
        <Avatar  onClick={e=>setOpen(true)}  alt="Cindy Baker" src="https://img.freepik.com/premium-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg?w=2000" />
        </Icons>
        <UserBox onClick={e=>setOpen(true)}>
        <Avatar   alt="Cindy Baker" src="https://img.freepik.com/premium-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg?w=2000"
        
        />
        <Typography variant="span">John</Typography>
        </UserBox>

        </StyledToolbar>
        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) =>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
        
    </AppBar>
  )
}

export default Navbar