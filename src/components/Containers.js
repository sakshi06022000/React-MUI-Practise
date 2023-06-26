import { Container, Typography } from '@mui/material'
import React from 'react'

const Containers = () => {
    return (
        <>
            <Container sx={{ backgroundColor: 'yellow' }} maxWidth='xs'>
                <Typography variant='body2'>This is xs</Typography>
            </Container> <br/>
            <Container sx={{ backgroundColor: 'yellow' }} maxWidth='sm'>
                <Typography variant='body2'>This is small</Typography>
            </Container> <br/>
            <Container sx={{ backgroundColor: 'yellow' }} maxWidth='md'>
                <Typography variant='body2'>This is medium</Typography>
            </Container>
            <br/>
            <Container sx={{ backgroundColor: 'yellow' }} maxWidth='l'>
                <Typography variant='body2'>This is large</Typography>
            </Container>
            <br/>
            <Container sx={{ backgroundColor: 'yellow' }} maxWidth='xl'>
                <Typography variant='body2'>This is x-large</Typography>
            </Container>

        </>
    )
}

export default Containers