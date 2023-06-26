import { Grid } from '@mui/material'
import React from 'react'

const Responsive = () => {
  return (
  <>
  <Grid container>
    <Grid item xs={12}
     sm={8}
     md={6}
     lg={4}
     xl={3}
     sx={{background:'red'}}
     spacing={2}>
        Content 1
    </Grid>
    <Grid item xs={4} sx={{background:'yellow'}}>
        Content 2
    </Grid>
  </Grid>
  </>
  )
}

export default Responsive