import React, { useEffect, useState } from 'react';
import { Center, Input, Box, Button, Select } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { postPatient } from '../../redux/PatientReducer/action';

const initial = {
  date: "",
  patient_name: "",
  Address: "",
  mobile: "",
  email: "",
  age: "",
  gender: "",
  description: "",
  time: ""
}


export const SinglePage = () => {
  
  const patient = useSelector(store => store.patients)


  const doctorsData = useSelector((store)=>{
    return store.doctorGetReducer.doctorsData
  })
  console.log(doctorsData)

  const dispatch = useDispatch();
  const [input, setInput] = useState(initial)


  const handleInputChange = (e) => {
    setInput((prev) => {
      return { ...prev, [e.target.name]: e.target.value }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      ...input,
      status: false,
      doctor: doctorsData.name,
      hospital: doctorsData.location,
      fees: doctorsData.fees
    }
    dispatch(postPatient(data))
    setInput(initial)
  }

  return (
    <Box w={"80%"} axis='both' border='1px' borderColor='black'>

      <form onSubmit={handleSubmit}>

        <h1>Request Appointment with</h1>
        <h1>{doctorsData.name}</h1>

        <Box>{doctorsData.location}</Box>

        <Center>Select Date</Center>
        <Input
          type='date' name='date'
          value={input.date}
          onChange={handleInputChange}
          placeholder={"select appoiontment date"}
        />

        <Select placeholder='Select time'
          name="time" value={input.time}
          onChange={handleInputChange}>
          <option value="9.00 AM">9.00 AM</option>
          <option value="9.30 AM">9.30 AM</option>
          <option value="10.00 AM">10.00 AM</option>
          <option value="10.30 AM">10.30 AM</option>
          <option value="11.00 AM">11.00 AM</option>
          <option value="11.30 AM">11.30 AM</option>
          <option value="12.00 PM">12.00 PM</option>
          <option value="1.30 PM">1.30 PM</option>
          <option value="1.00 PM">1.00 PM</option>
          <option value="1.30 PM">1.30 PM</option>
          <option value="2.00 PM">2.00 PM</option>
          <option value="2.30 PM">2.30 PM</option>
          <option value="3.00 PM">3.00 PM</option>
          <option value="3.30 PM">3.30 PM</option>
          <option value="4.00 PM">4.00 PM</option>
          <option value="4.30 PM">4.30 PM</option>
          <option value="5.00 PM">5.00 PM</option>
          <option value="5.00 PM">5.30 PM</option>
          <option value="6.00 PM">6.00 PM</option>
          <option value="6.30 PM">6.30 PM</option>
          <option value="7.00 PM">7.00 PM</option>
          <option value="7.30 PM">7.30 PM</option>
          <option value="8.00 PM">8.00 PM</option>
          <option value="8.30 PM">8.30 PM</option>

        </Select>

        <Input
          type='text' name="patient_name"
          value={input.patient_name}
          onChange={handleInputChange}
          placeholder={"Patient Name"}
        />

        <Input
          type='text' name="Address"
          placeholder='Address'
          value={input.Address}
          onChange={handleInputChange}
        />

        <Input
          type='texy'
          placeholder='Mobile No.'
          value={input.mobile} name='mobile'
          onChange={handleInputChange}
        />

        <Input
          type='email' name="email"
          placeholder='Email Id'
          value={input.email} onChange={handleInputChange}
        />

        <Input
          type='text'
          placeholder='Age' name="age"
          value={input.age} onChange={handleInputChange}
        />

        <Select placeholder='Select Gender'
          name="gender" value={input.gender}
          onChange={handleInputChange}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </Select>

        <Input
          type='text'
          placeholder='description' name="description"
          value={input.description}
          onChange={handleInputChange}
        />
        <br />
        <Button bgColor="two" color="white" type='submit'>
          Submit
        </Button>


      </form>
    </Box>
  )
}