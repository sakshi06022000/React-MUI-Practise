import { List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import React from 'react'

const ListComponents = () => {
    const courses = ['react', 'node', 'mern']
    return (
        <>
            <List sx={{ width: 250, background: 'grey' }}>
                {courses.map((courses) => (
                    <ListItem>
                        <ListItemButton>{'>'}</ListItemButton>
                        <ListItemText primary={courses} />
                    </ListItem>
                ))}
            </List>
        </>
    )
}

export default ListComponents