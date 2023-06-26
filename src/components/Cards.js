import {
    Button,
    CardActions,
    CardMedia,
    Typography,
    Card,
    CardContent,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions
} from '@mui/material'
import React, { useState } from 'react'

const Cards = () => {
    const [open, setOpen] = useState(false)
    return (
        <div>
            <Card sx={{ maxWidth: 300 }}>
                <CardMedia
                    component={'img'}
                    height='140'
                    image='https://images.ctfassets.net/hrltx12pl8hq/5qusjAtcAaetdPsing4jR6/2db2f75abd2840caa09d21312b4fc6c8/animals-wildlife-shutterstock_1066200380.jpg?fit=fill&w=480&h=320'
                    alt='test image'
                />
                <CardContent>
                    <Typography gutterBottom
                        variant='h5'
                        component='div'
                    >Web design</Typography>
                    <Typography variant='body2'>
                        qweasrdtfghjykl;dfgvhbjnkm
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button
                        size='small'
                        color='primary'
                    > Share</Button>
                    <Button size='small'
                        color='primary'
                        onClick={()=>setOpen(true)}
                    > Delete</Button>
                </CardActions>

            </Card>
            <Dialog open={open} onClose={()=>setOpen(false)}>
                <DialogTitle>Are You Sure</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Are You Sure you want to delete?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={()=>setOpen(false)}>cancel</Button>
                    <Button>delete</Button>
                </DialogActions>

            </Dialog>
        </div>
    )
}

export default Cards