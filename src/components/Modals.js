import React, { useState } from 'react'
import { Box, Button, Link, Modal, Typography } from "@mui/material"

const Modals = () => {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <Button onClick={() => setOpen(true)}>
        Open Modal</Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box position='absolute' top='50%' left='50%'>
          <Typography>This is modal</Typography>
          <Button variant='conatined' onClick={() => setOpen(false)}>Cancel</Button>
        </Box>

      </Modal>

      <Link variant='h4'
        color='secondary'
        href='https://www.youtube.com/watch?v=4ZW9LQvUs9k'
        underline='hover'
      > Nav Link</Link>
    </div>
  )
}

export default Modals