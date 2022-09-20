import React from 'react'
import {Box} from '@mui/material'

const Sidebar = () => {
  return (
    <Box bgcolor="blue" flex={1} p={2} 
    display={{xs:"none", sm:"block"}}>Sidebar</Box>
  )
}

export default Sidebar