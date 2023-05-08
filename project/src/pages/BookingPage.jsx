import React, { useEffect, useRef, useState, } from 'react'
import { useSearchParams, useHistory } from 'react-router-dom'
import { BookingCard } from '../components/Booking/BookingCard'
import { BookingList } from '../components/Booking/Bookinglist'
import { Sidebar } from '../components/Booking/Sidebar'
import { Box, 
  Image,
  Text,
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
  HStack,        
} from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import { getDoctor } from '../redux/BookingReducer/action'



export const BookingPage = ({}) => {

const [searchparams,setSearchparams]=useSearchParams()  
const [isMobile] = useMediaQuery("(max-width: 780px)") 
//const initProfile=searchparams.getAll('profile')
const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
const [query, setQuery]=useState("")


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
 },[query,])


//  const handelProfile=(e)=>{
//   const { value } = e.target;
//   const newProfile = initProfile.includes(value)
//     ? initProfile.filter((el) => el !== value)
//     : [...initProfile, value];

 
// }





  return (
    <div style={{backgroundColor:'#fafaf1'}}>

    {isMobile ? 
    ( <>
     <Box display={"flex"} justifyContent="space-between" p="3">
    <Box>
    <Button ref={btnRef} bgColor='#365349' color='#fafaf1' onClick={onOpen}>
     Open Filter
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
            <Button bgColor='#365349' color='#fafaf1' onClick={onClose}>Save</Button>
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
    <Box width="100%"  p='5'><BookingList/></Box> 
    
    
  
    </>
    ) 
    
    :
   (<div> 
    <Box>
      <Box display="flex" justifyContent={'space-between'} m='auto' w='40%' >
        <HStack>
        <Image w='25px' src={require("../assets/charity.png")}/>
        <Text fontSize="2xl" color={'#365349'}>Primary Care</Text>
        </HStack>
        <HStack>
        <Image w='25px' src={require("../assets/protection.png")}/>
        <Text fontSize="2xl" color={'#365349'}>Peadiatric</Text>
        </HStack>
        <HStack>
        <Image w='25px' src={require("../assets/doctor.png")}/>
        <Text fontSize="2xl" color={'#365349'}>General</Text>
        </HStack>
      </Box>
    <Box display={"flex"} justifyContent='space-evenly' width={"97%"} m='5' p='5'
    boxShadow='md'  rounded='md' >
     

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

<Select maxW='22%' placeholder='My Insurance' >
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

    <Box display="flex" justifyContent={'space-evenly'} p='5'>
   <Box width="30%"   boxShadow='md' m='2'><Sidebar/></Box>
    <Box width="65%" ><BookingList/></Box>
    </Box>
   </Box>
   

    </div>
   
   )}

    </div>

  )
}

