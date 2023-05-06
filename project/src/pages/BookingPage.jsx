import React, { useEffect, useRef, useState } from 'react'
import { BookingCard } from '../components/Booking/BookingCard'
import { BookingList } from '../components/Booking/Bookinglist'
import { Sidebar } from '../components/Booking/Sidebar'
import { Box, 
  Select,
  Input,
  Button, 
  useMediaQuery,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,        
} from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import { getDoctor } from '../redux/BookingReducer/action'
import { useSearchParams } from 'react-router-dom'


export const BookingPage = ({}) => {

const [searchparams,setSearchparams]=useSearchParams()  
const [isMobile] = useMediaQuery("(max-width: 768px)") 
//const initProfile=searchparams.getAll('profile')
const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
const [query, setQuery]=useState("")
// const [profile,setProfile]=useState(initProfile || "")
 const dispatch=useDispatch()

 let ref=useRef()

 const paramObj={
  params:{
    q:query && query,
    
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
 },[query])

//
// const handelProfile=(e)=>{
//   const {value}=e.target
//  let newProfile=[...profile]
//  if(newProfile.includes(value)){
//   newProfile=newProfile.filter((el)=>el!==value)
//  }
//  else{
//   newProfile.push(value)
//  }
//  setProfile(newProfile)
// }





  return (
    <div>

    {isMobile ? 
    ( <>
     <Box display={"flex"} justifyContent="space-between" p="3">
    <Box>
    <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
       Apply Filters
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Apply Filters</DrawerHeader>

          <DrawerBody>
            {/* <Input placeholder='Type here...' /> */}
            <Box width="100%" ><Sidebar/></Box>
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue' onClick={onClose}>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
   
    </Box>
      <Box width="80%" margin="auto" >
      <Input type="text" 
      placeholder='Search Doctor' 
      onChange={(e)=>setQuery(e.target.value)}
      
      />
      </Box>
     </Box>
    <Box width="100%"  border="1px solid gray"><BookingList/></Box> 
    
    
  
    </>
    ) 
    
    :
   (<div> 
    <Box display={"flex"} justifyContent='space-evenly' width={"97%"} m='5' p='5'
    boxShadow='dark-lg'  rounded='md' >

         <Select maxW='22%'placeholder='Choose Speciality'>
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
    </div>
   )}

    </div>

  )
}

