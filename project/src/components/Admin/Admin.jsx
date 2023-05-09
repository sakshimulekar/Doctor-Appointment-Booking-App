import React, { useEffect } from 'react'
import {Box,Center,Heading,Text} from "@chakra-ui/react"
import { Dashboard } from './Dashboard'
import { Sidebar } from '../Admin/Sidebar'
import { useDispatch, useSelector } from 'react-redux'

export const Admin = () => {
  const data=useSelector((store)=>{
    return store.adminReducer.doctor
  })
  const patient = useSelector((store)=>{
    return store.patientReducer.patients
  })
  console.log(patient)

  const dispatch = useDispatch();

  useEffect(()=>{
    
  },[])

  return (
    <Box bg={"one"} m={"10px"} >
      <Heading>Welcome Admin !</Heading>
      <Text color="grey" as="b">Dashboard</Text>
      <br />
      <Box
        as='button'
        p={4}
        color='white'
        fontWeight='bold'
        borderRadius='md'
        bgGradient='linear(to-r, teal.500, green.500)'
        _hover={{
          bgGradient: 'linear(to-r, red.500, yellow.500)',
        }}
      >
        Total Doctors {data.length}
      </Box>
        <Dashboard/>        
       
    </Box>
  )
}
