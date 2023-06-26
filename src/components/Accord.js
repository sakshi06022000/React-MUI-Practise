import { Accordion, AccordionDetails, AccordionSummary, Autocomplete, TextField, Typography } from '@mui/material'
import React from 'react'

const Accord = () => {
    const courses =['node','react','mern','express']
    return (
        <>
            <Accordion>
                <AccordionSummary>
                    <Typography variant='h5'> What is your name?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                         asdwxfegvhbjnkml,;
                    </Typography>
                </AccordionDetails>
            </Accordion>

            {/* auto complete */}
            <Autocomplete 
            sx= {{width : 200}} options={courses}
            renderInput={(params)=>
                <TextField  {...params} label="Select a courses" />
                }
            />
        </>
    )
}

export default Accord