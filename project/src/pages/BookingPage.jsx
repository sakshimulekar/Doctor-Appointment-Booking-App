import React, { useEffect, useRef, useState } from 'react'
import { BookingCard } from '../components/Booking/BookingCard'
import { BookingList } from '../components/Booking/Bookinglist'
import { Sidebar } from '../components/Booking/Sidebar'
import { Box, Select,Input} from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import { getDoctor } from '../redux/BookingReducer/action'
import { useSearchParams } from 'react-router-dom'

export const BookingPage = ({}) => {

const [searchparams,setSearchparams]=useSearchParams()  

const initProfile=searchparams.getAll('profile')

const [query, setQuery]=useState("")
const [profile,setProfile]=useState(initProfile || "")
 const dispatch=useDispatch()

 let ref=useRef()

 const paramObj={
  params:{
    q:query && query,
    profile,
  }
 }

 useEffect(()=>{
  if(ref.current){
    clearTimeout(ref.current)
  }

  ref.current=setTimeout(()=>{
    dispatch(getDoctor(paramObj))
  },800)
  setSearchparams(paramObj)
 },[query,profile])

//
const handelProfile=(e)=>{
  const {value}=e.target
 let newProfile=[...profile]
 if(newProfile.includes(value)){
  newProfile=newProfile.filter((el)=>el!==value)
 }
 else{
  newProfile.push(value)
 }
 setProfile(newProfile)
}





  return (
    <>
    <Box display={"flex"} justifyContent='space-evenly' width={"97%"} m='5' p='5'
    boxShadow='dark-lg'  rounded='md' >

         <Select maxW='22%'placeholder='Choose Speciality' onChange={handelProfile}>
         <option value='dentist'>Dentist</option>
         <option value='cardiologist'>Cardiologist</option>
         <option value='gynaecologist'>Gynaecologist</option>
         <option value='neurologist'>Neurologist</option>
         </Select>

     <Input
      placeholder="Select Appointment Date"
      maxW='22%'
      type="date"
     />

<Select maxW='22%' placeholder='My Insurance'>
  <option value='maxbufa'>MaxBupa</option>
  <option value='icici-insurance'>ICICI-Insurance</option>
  <option value='oralcare'>OralCare</option>
  <option value='lic'>LIC</option>
</Select>

<Box>
<Input type="text" 
placeholder='Search Doctor' 
onChange={(e)=>setQuery(e.target.value)}
/>
</Box>
</Box>

    <Box display="flex" justifyContent={'space-evenly'}>
   <Box width="30%" border="1px solid gray"><Sidebar/></Box>
    <Box width="65%" border="1px solid gray"><BookingList/></Box>
    </Box>
    </>
  )
}

