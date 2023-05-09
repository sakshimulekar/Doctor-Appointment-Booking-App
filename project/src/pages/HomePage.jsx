import React from "react";
import { Box, Heading, Text,Image, HStack, Button, Input, InputRightElement, InputGroup, Center,VStack,Select } from "@chakra-ui/react";
import {CheckCircleIcon,SearchIcon,CalendarIcon } from '@chakra-ui/icons';
import { PhoneIcon, AddIcon, WarningIcon, ArrowRightIcon} from '@chakra-ui/icons'
import { Avatar } from '@chakra-ui/react'
//import { FaUser } from 'react-icons/Fa';
export const HomePage = () => {
  return (
    <div style={{backgroundColor:"#fafaf1"}} >
    <Box mt={"10px"}>
    <Box
      backgroundImage="url('https://img.freepik.com/free-photo/young-handsome-physician-medical-robe-with-stethoscope_1303-17818.jpg?w=996&t=st=1682772779~exp=1682773379~hmac=9394dd2d96798395cb59dbf4eddcc33cd7d7eeaddc8a0ca5c5f1d069e0e88ec4')"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      bgSize="100%"
      h={"80vh"}
    >
      <Box ml='100px' pt='20'>
      <Box display={"flex"} gap={'5px'}>
        <Heading as='b' color={"#365349"}> Your Health </Heading> 
        <Heading  as='b' color={"#fafaf1"}> is Our</Heading>
      </Box>
      <Heading color={"#fafaf1"}  p='2' as='b'>responsibility</Heading>
     
      <Text p='2' fontSize='xl' ><SearchIcon/> Search for a Doctor</Text>
      <Text  p='2' fontSize='xl' ><Avatar w='22px' h='22px' color='black' src='https://bit.ly/broken-link' /> Select a Doctor</Text>
      <Text   p='2' fontSize='xl'><CalendarIcon/> Book an Appointment</Text>
      
    <HStack spacing={'30px'}>
      <Button color={"#fafaf1"} bgColor={"#365349"}>Find Doctor</Button>
      <Button color={"#365349"}>Lets Talk</Button>
    </HStack>
    </Box>
    </Box>
    </Box>
    <Box w='90%' margin={'auto'} boxShadow='md'  rounded='md' mb='10'>
      <Box display={'flex'} justifyContent={'space-evenly'}  gap='400px' width={"97%"} p='5'>
        <Text as='b' fontSize={'xl'} color={'#365349'}>Book Appointment Now</Text>
        <HStack spacing='30px'>
        <HStack>
        <Image w='25px' src={require("../assets/charity.png")}/>
        <Text fontSize="2xl" color={'#365349'}>Primary Care</Text>
        </HStack>
        <HStack>
        <Image w='25px' src={require("../assets/protection.png")}/>
        <Text fontSize="2xl" color={'#365349'}>Peadiatric</Text>
        </HStack>
        <HStack>
        <Image w='25px' src={require("../assets/doctor.png")}   />
        <Text fontSize="2xl" color={'#365349'}>General</Text>
        </HStack>
        </HStack>
      </Box>
    <Box display={"flex"} justifyContent='space-evenly' width={"97%"}
     p='3'>
     

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

/>
</Box>
</Box>
    </Box>
    <Box display={'flex'} justifyContent={'space-between'} gap={'20px'} p='2'>
    <Box >
      <Image m={"20px"} src='https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/abedaf126567851.612fddd8c4b8b.jpeg' alt='doctor' />
    </Box>
    <Box boxShadow={"2xl"} >
      <Heading fontSize='4xl' color={"#365349"} m='2'pl={"10px"}>Why Choose</Heading>
      <Heading fontSize='3xl' color={"#365349"} m='2'pl={"10px"}>Our Qualified Doctor?</Heading>
      <Text fontSize='xl' noOfLines={[1, 2, 3]} color={"#365349"} m='10px'pl={"10px"}>
   The quick brown fox jumps over the lazy dog" is an English-language pangrama
  sentence that contains all of the letters of the English alphabet. Owing to
  its existence, Chakra was created.
</Text>
  
  <Box display={'flex'} justifyContent={'space-around'}   >
  <Text fontSize='xl' m={2}><CheckCircleIcon/> 20+ Years of Experience</Text>
  <Text fontSize='xl' ml={"2"}><CheckCircleIcon/> MultiSpeciality Hospital</Text>
  </Box>
  <Box  display={'flex'} justifyContent={'space-around'}   ml='2.5'>
  <Text fontSize='xl' p={1}><CheckCircleIcon/> 24 Hrs Medical Support</Text>
  <Text fontSize='xl' ml='3'><CheckCircleIcon/> Proffessional Expert Doctor</Text>
  </Box>
  <Box alignItems={'left'} m='2'>
    <Button bgColor={"#365349"} color={'#fafaf1'}>Book An Appointment</Button>
  </Box>
    </Box>
    </Box>
    <Box p='20' >
    <Box p='15' rounded='md' w='80%' margin={'auto'} display={'flex'}  alignItems={'center'} flexDirection={'column'}>
     <HStack spacing={'50px'} >
      <VStack>
   <Box boxShadow={"md"}  bgColor='two' h='100px' w='100px' borderRadius={'full'}>  <Center><Image w='50px' mt='5' src={require("../assets/charity.png")}/></Center></Box><Text as='b'>Charity</Text>
   </VStack>
   <VStack>
   <Box border='1px ' bgColor='two'  h='100px' w='100px' borderRadius={'full'}>  <Center><Image w='50px' mt='5' src={require("../assets/appointment.png")}/></Center></Box><Text as='b'>Appointment</Text>
   </VStack>
   <VStack>
   <Box border='1px '  bgColor='two' h='100px' w='100px' borderRadius={'full'}>  <Center><Image w='50px' mt='5' src={require("../assets/card.png")}/></Center></Box>
   <Text as='b'>Paybill</Text>
   </VStack>
   <VStack>

   <Box border='1px '  bgColor='two' h='100px' w='100px' borderRadius={'full'}>  <Center><Image w='50px' mt='5' src={require("../assets/doctor.png")}/></Center></Box>
   <Text as='b'>Doctor</Text>
   </VStack>
   <VStack>
   <Box border='1px '  bgColor='two' h='100px' w='100px' borderRadius={'full'}>  <Center><Image w='50px' mt='5' src={require("../assets/protection.png")}/></Center></Box>
   <Text as='b'>Pediatric</Text>
   </VStack>
   <VStack>
   <Box border='1px ' bgColor='two' h='100px' w='100px' borderRadius={'full'}>  <Center><Image w='50px' mt='5' src={require("../assets/blood-donation.png")}/></Center></Box>
   <Text as='b'>Donate</Text>
   </VStack>
     </HStack>
    </Box>
    </Box>
    <Box textAlign={'center'} p='7'>
      <Heading fontSize='4xl' color={"#365349"} m='2'>Our Different Deparments</Heading>
      <Heading fontSize='3xl' color={"#365349"} m='2'>For Your Health Benefits</Heading>
    </Box>
    <Box p='15'>
      <HStack w='90%' spacing="40px"  m='auto'>
        <Box w='30%' boxShadow='md'  rounded='md' >
       <Box  p='2' display={'flex'}  alignItems={'center'} flexDirection={'column'}>
        <Image w='50px' src={require("../assets/doctor.png")}/>
        </Box>
          <Heading textAlign={'center'} fontSize='2xl' >Cardiology Surgery</Heading>
          <Text textAlign={'center'} noOfLines={[1, 2, 3]} color={"#365349"} fontSize='xl' m='3'>
   The quick brown fox jumps over the lazy dog" 
   is an English-language pangrama
  sentence
</Text>
<Box  display={'flex'}  alignItems={'center'} flexDirection={'column'} p='10'>
          <Button rightIcon={<ArrowRightIcon />}  bgColor={"#365349"}  color={"#fafaf1"}>Know More</Button>
          </Box>
        </Box>
        <Box  w='30%' boxShadow='md'  rounded='md' bgColor={"#365349"}>
        <Box p='2' display={'flex'}  alignItems={'center'} flexDirection={'column'}>
        <Image w='50px' src={require("../assets/protection.png")}/>
        </Box>
        <Heading textAlign={'center'} fontSize='2xl' color={"#fafaf1"}>Pediatrics and New Born</Heading>
          <Text textAlign={'center'} noOfLines={[1, 2, 3]} color={"#fafaf1"} fontSize='xl' m='3'>
   The quick brown fox jumps over the lazy dog" 
   is an English-language pangrama
  sentence 
</Text>
<Box  display={'flex'}  alignItems={'center'} flexDirection={'column'} p='10'>
          <Button rightIcon={<ArrowRightIcon />}  color={"#365349"}  bgColor={"#fafaf1"}>Know More</Button>
          </Box>
        </Box>
        <Box w='30%' boxShadow='md'  rounded='md'>
        <Box  p='2' display={'flex'}  alignItems={'center'} flexDirection={'column'}>
        <Image  w='50px' src={require("../assets/tooth.png")}/>
        </Box>
        <Heading textAlign={'center'} fontSize='2xl'>Dentistry</Heading>
          <Text textAlign={'center'} noOfLines={[1, 2, 3]} color={"#365349"} fontSize='xl' m='3'>
   The quick brown fox jumps over the lazy dog" 
   is an English-language pangrama
  sentence  
</Text>
<Box  display={'flex'}  alignItems={'center'} flexDirection={'column'} p='10'>
          <Button rightIcon={<ArrowRightIcon />}  bgColor={"#365349"}  color={"#fafaf1"}>Know More</Button>
          </Box>
        </Box>
      </HStack>
    </Box>
    <Box>
    <Box textAlign={'center'} p='7'>
      <Heading fontSize='4xl' color={"#365349"} m='2'>What Our Patients</Heading>
      <Heading fontSize='3xl' color={"#365349"} m='2'>Say About Us</Heading>
    </Box>
    </Box>
    <Box w='100%' h='50vh' bgColor="#365349" zIndex='0' pt={"80px"} >
      <Box w='60%'h='30vh'  color='white' zIndex='1' textAlign={'center'} m="auto"  p={"20px"}  boxShadow="inner" rounded="2xl"bgGradient='linear(to-r, teal.500, green.500)'>

      <Text mt={"20px"}  noOfLines={[1, 2, 3]} color={"#fafaf1"} fontSize='xl' textAlign={'center'}>
   The quick brown fox jumps over the lazy dog" 
   is an English-language pangrama
  sentence.The quick brown fox jumps over the lazy dog" 
   is an English-language pangrama
  sentence.The quick brown fox jumps over the lazy dog" 
   is an English-language pangrama
  sentence.  </Text>
  <Box display={'flex'} justifyContent={'space-between'}  >
    <Text fontSize={'2xl'} color={"#fafaf1"}>Sarah Jones</Text>
    <Text fontSize={'xl'}  color={'gold'}>★★★★★</Text>
  </Box>
  </Box>
  </Box>
    <Box textAlign={'center'} p='10'>
      <Heading fontSize='4xl' color={"#365349"} m='2'>Get In Touch</Heading>
      <Heading fontSize='3xl' color={"#365349"} m='2'>Get Your Valuable Feedback</Heading>
    </Box>
    <Box w='30%'  m='auto'  p='15' >
    <InputGroup size='md'>
      <Input
        pr='4.5rem'
       type='text'
        placeholder='Enter Your Email Address'
      />
      <InputRightElement width='4.5rem'>
        <Button  bgColor='#365349'color={'#fafaf1'} h='1.75rem' size='sm' >
        Send
        </Button>
      </InputRightElement>
    </InputGroup>
    </Box>
    
    </div>
  );
};
