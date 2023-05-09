import React from 'react'
import { Box,Button, ButtonGroup,Image,useToast,Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { getDoctorData } from '../../redux/DoctorGet/action'
import { useDispatch } from 'react-redux'
import { PhoneIcon,TimeIcon,CopyIcon } from '@chakra-ui/icons'

// "id": 2,
// "name": "Dr. John Doe",
// "image": "https://example.com/images/john-doe.jpg",
// "profile": "neurologist",
// "description": "Dr. John Doe is a neurologist with expertise in treating disorders of the brain and nervous system. He is dedicated to providing personalized care to his patients.",
// "waiting_time": 15,
// "rating": 4.7,
// "fees": "$350",
// "location": "456 Elm St, Anytown, USA",
// "status": false,
// "gender": "male",
// "category": "brain"
export const BookingCard = ({id,name,profile,image,location,fees,waiting_time,status,rating,description}) => {
 const handelCall=()=>{
    
    
 }
 const dispatch=useDispatch();
 const toast = useToast()
  return (
    <div className='card' style={{}}>
      <Box display="flex"  alignItems="center" boxShadow='md' m='5' p='15' rounded='md' >
     <Box width="30%"  rounded='md' ml="5">
    <Image w="190px"  h="190px" borderRadius="50%" className='img' src={image} alt={name} />
    </Box> 
    <Box width="60%" pl="10"  > 
    <Text fontSize='xl' p='2px'> {name}</Text>
    <Text fontSize='xl' p='2px'> {profile} </Text>
    <Text  fontSize='2xl'color="gold" >★★★★★</Text>
    <Text fontSize='lg'>Overall Rating From {Date.now()%1000} Visitors</Text>
    <Text fontSize='xl' p='2px'><CopyIcon/> Fees : {fees}</Text>
    <Text fontSize='xl' p='2px'><TimeIcon/> Waiting Time : {waiting_time} minutes</Text>
    <Text fontSize='xl' p='2px'><PhoneIcon/> Hotline : {'91'+Date.now()%1000}</Text>
   <Box display={"flex"} justifyContent='space-between' >
   <Link to={'/edit'}><Button isDisabled={!status} 
  bgColor={status ? "#61876e " :"#a4a480"}
  color={"#FAFAF1"} 
     onClick={() => dispatch(getDoctorData({
    id,
    name,
    profile,
    image,
    fees,
    waiting_time,
    status,
    location,
    rating,
    description}))}

    >Book An Appointment</Button> </Link>
    {/* //Provide the Link for Edit page */}
  <Button color='#61876e' 
   onClick={() =>{ status ?
    toast({
      title: `Calling ${name}`,
      description: "Wait a minute! Your call is being Placed",
      status: 'success',
      duration: 4000,
      isClosable: true,
       position: 'top'
    }) : toast({
      title: `${name} Not Available`,
      description: "Doctor not available",
      status: 'error',
      duration: 2000,
      isClosable: true,
       position: 'top'
    })
  }}>Call</Button>
  </Box>
  </Box> 
  </Box>
    </div>
  )
}
