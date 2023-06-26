import { Button, Drawer, List, ListItemButton, ListItemText } from '@mui/material'
import React, { useState } from 'react'

const DrawerMenu = () => {
    const [open,setOpen]= useState(false)
    const courses =['node','react','mern','express']

  return (
    <>
    <Button variant='contained' onClick={()=> setOpen(true)} >Open</Button>
    <Drawer open={open} onClose={()=> setOpen(false)}></Drawer>
    <List>
        {
        courses.map(course=>(
            <ListItemButton onClick={()=> setOpen(false)}>
                <ListItemText primary = {course}></ListItemText>
            </ListItemButton>
        ))
        }
    </List>
    </>
  )
}

export default DrawerMenu