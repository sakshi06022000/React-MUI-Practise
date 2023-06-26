import React, { useState } from 'react'
import {
    Button,
    FormControlLabel,
    FormGroup,
    TextField,
    Checkbox,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    FormLabel,
    RadioGroup,
    Radio
} from '@mui/material'

//create multiple objects in use state coz we don't have to initialzed all fields
const Form = () => {
    const [input, setInputs] = useState({
        name: '',
        email: '',
        password: '',
        terms: false,
        courses: '',
        gender: ''

    })

    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))

    }
    //for submit
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(input);
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <TextField
                    name="name"
                    value={input.name}
                    onChange={handleChange}
                    type='text'
                    placeholder='name'
                    variant='outlined'
                    sx={{ margin: '10px' }}
                />
                <br />
                <TextField
                    name="email"
                    value={input.email}
                    onChange={handleChange}
                    type='email'
                    placeholder='email'
                    variant='outlined'
                    sx={{ margin: '10px' }}
                />
                <br />
                <TextField
                    name="password"
                    value={input.password}
                    onChange={handleChange}
                    type='password'
                    placeholder='password'
                    variant='outlined'
                    sx={{ margin: '10px' }}
                />
                <br />
                <FormGroup sx={{ margin: '20px' }}>
                    <FormControlLabel
                        label="I Agree T&C"
                        control={
                            <Checkbox
                                onChange={() =>
                                    setInputs((prevState) => ({
                                        ...prevState,
                                        terms: !input.terms
                                    }))
                                }
                            />
                        }
                    />
                </FormGroup >
                <br />
                {/* <FormControl fullWidth>
                    <InputLabel id='coursess'>Courses</InputLabel>
                    <Select
                        label='courses'
                        value={input.courses}
                        onChange={handleChange}
                        name='courses'
                    >
                        <MenuItem values={'mongodb'}>Mongodb</MenuItem>
                        <MenuItem values={'express'}>Express</MenuItem>
                        <MenuItem values={'react'}>React</MenuItem>
                        <MenuItem values={'node'}>Node</MenuItem>
                    </Select>
                </FormControl> */}
                <br />
                <FormControl>
                    <FormLabel>Gender</FormLabel>
                    <RadioGroup name='gender' onChange={handleChange}>
                        <FormControlLabel
                            value={'male'}
                            label='MALE'
                            control={<Radio />}
                        >
                        </FormControlLabel>
                        <FormControlLabel
                            value={'female'}
                            label='FEMALE'
                            control={<Radio />}
                        >
                        </FormControlLabel>
                    </RadioGroup>
                </FormControl>
                <br />
                <Button type='submit'>Submit</Button>
            </form >
        </>
    )
}

export default Form