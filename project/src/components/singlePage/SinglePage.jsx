import React, { useState } from 'react';
import 'react-calendar-datetime-picker/dist/index.css';
import {FormControl,FormHelperText,FormErrorMessage,Input, Box, Button} from "@chakra-ui/react";
import {useDispatch, useSelector} from "react-redux";
import {Form} from "react-router-dom"
import { postPatient } from '../../redux/PatientReducer/action';

const initial = {
  date:"",
  patient_name : "",
  Address : "",
  mobile:"",
  email:"",
  age:"",
  gender:"",
  description:""
}

export const SinglePage = () => {

  const patient = useSelector(store=>store.patients)
  const dispatch = useDispatch();
  const [input, setInput] = useState(initial)

  const handleInputChange = (e) => {
    setInput((prev)=>{
      return {...prev,[e.target.name]:e.target.value}
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {...input,
      doctor:"Dr.nargdeen",
      hospital:"KMC Hospital"}
    dispatch(postPatient(data))
  }

  return (
    <Box w="60%"  border='1px' borderColor='black'>

      <form onSubmit={handleSubmit}>
  
      <h1>Request Appointment with</h1>
      <h1>Dr.Nardeen</h1>
      
      <Box 
        ml={"20%"}h="40px" 
        borderRadius="5" 
        w="60%" border='1px' 
        borderColor='black'>
          KMC Hospital
      </Box>
      
      <Input 
        w="60%" 
        type='date' name='date'
        value={input.date} 
        onChange={handleInputChange} 
        placeholder={"select appoiontment date"} 
      />

      <Input 
        w="60%" 
        type='text' name="patient_name"
        value={input.patient_name} 
        onChange={handleInputChange} 
        placeholder={"Patient Name"} 
      />
      
      <Input 
        w="60%" type='text' name="Address"
        placeholder='Address' 
        value={input.Address} 
        onChange={handleInputChange} 
      />
      
      <Input 
        w="60%" type='texy' 
        placeholder='Mobile No.' 
        value={input.mobile} name='mobile'
        onChange={handleInputChange} 
      />
      
      <Input 
        w="60%" 
        type='email' name="email"
        placeholder='Email Id' 
        value={input.email} onChange={handleInputChange} 
      />
      
      <Input 
        w="60%" type='text' 
        placeholder='Age' name="age"
        value={input.age} onChange={handleInputChange} 
      />

      <Input 
        w="60%" type='text' 
        placeholder='gender' name="gender"
        value={input.gender} 
        onChange={handleInputChange} 
      />

      <Input 
        w="60%" type='text' 
        placeholder='description' name="description"
        value={input.description} 
        onChange={handleInputChange} 
      />
      <br />
      <Button
          mt={4}
          colorScheme='teal'
          type='submit'
      >
        Submit
      </Button>

    {/* </FormControl> */}

    </form>
    </Box>
  )
}
