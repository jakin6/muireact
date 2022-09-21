import React from 'react'
import {Fab,Tooltip} from  "@mui/material"
import {Add as AddIcon}   from "@mui/icons-material"
const Add = () => {
  return (
    <>
       <Tooltip title="Delete">
       <Fab color="primary" aria-label="add">
        <AddIcon />
        </Fab>
    </Tooltip>
    </>
  )
}

export default Add