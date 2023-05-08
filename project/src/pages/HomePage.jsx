import React from "react";
import { Box, Heading, Text,Image, HStack, Button, Input, InputRightElement, InputGroup } from "@chakra-ui/react";
// import {TiTick } from 'react-icons/fa';
import { PhoneIcon, AddIcon, WarningIcon, ArrowRightIcon} from '@chakra-ui/icons'
export const HomePage = () => {
  return (
    <div>
      <Box>
    <Box
      backgroundImage="url('https://img.freepik.com/free-photo/young-handsome-physician-medical-robe-with-stethoscope_1303-17818.jpg?w=996&t=st=1682772779~exp=1682773379~hmac=9394dd2d96798395cb59dbf4eddcc33cd7d7eeaddc8a0ca5c5f1d069e0e88ec4')"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      bgSize="100%"
      h={"100vh"}
    >
      <Box display={"flex"} gap={'5px'}>
        <Heading color={"#365349"}> Your Health </Heading> 
        <Heading color={"#fafaf1"}> is Our</Heading>
      </Box>
      <Heading color={"#fafaf1"}  p='2'>responsibility</Heading>
      <Text p='2' fontSize='xl'>Search for a Doctor</Text>
      <Text  p='2'fontSize='xl'>Select a Doctor</Text>
      <Text  p='2'fontSize='xl'>Book an Appointment</Text>
   
    <HStack spacing={'30px'}>
      <Button color={"#fafaf1"} bgColor={"#365349"}>Find Doctor</Button>
      <Button color={"#365349"}>Lets Talk</Button>
    </HStack>
    </Box>
    </Box>
    <Box display={'flex'} justifyContent={'space-between'} gap={'30px'} p='2'>
    <Box>
      <Image src='https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/abedaf126567851.612fddd8c4b8b.jpeg' alt='doctor' />
    </Box>
    <Box>
      <Text fontSize='4xl' color={"#365349"} m='2'>Why Choose</Text>
      <Text fontSize='3xl' color={"#365349"} m='2'>Our Qualified Doctor?</Text>
      <Text fontSize='xl' noOfLines={[1, 2, 3]} color={"#365349"} m='2'>
   The quick brown fox jumps over the lazy dog" is an English-language pangrama
  sentence that contains all of the letters of the English alphabet. Owing to
  its existence, Chakra was created.
</Text>
<Box display={'flex'} justifyContent={'space-between'}  m='2'>
  <Box display={'flex'}>
  <Image w='20px' src={require("../assets/tooth.png")}/><Text fontSize='xl'>20+ Years of Experience</Text>
  </Box>
  <Text fontSize='xl'>MultiSpeciality Hospital</Text>
  </Box>
  <Box  display={'flex'} justifyContent={'space-between'} m='2' >
  <Text fontSize='xl'>24 Hrs Medical Support</Text>
  <Text fontSize='xl'>Proffessional Expert Doctor</Text>
  </Box>
  <Box alignItems={'left'} m='2'>
    <Button bgColor={"#365349"} color={'#fafaf1'}>Book An Appointment</Button>
  </Box>
    </Box>
    </Box>
    <Box p='20' >
    <Box p='15' rounded='md' w='80%' bgColor='#365349' margin={'auto'} display={'flex'}  alignItems={'center'} flexDirection={'column'}>
     <HStack spacing={'50px'} >
     <Image w='50px' src={require("../assets/charity.png")}/>
     <Image w='50px' src={require("../assets/appointment.png")}/>
     <Image w='50px' src={require("../assets/blood-donation.png")}/>
     <Image w='50px' src={require("../assets/card.png")}/>
     <Image w='50px' src={require("../assets/aid-kit.png")}/>
     <Image w='50px' src={require("../assets/phone-call.png")}/>
     </HStack>
    </Box>
    </Box>
    <Box textAlign={'center'} p='7'>
      <Text fontSize='4xl' color={"#365349"} m='2'>Our Different Deparments</Text>
      <Text fontSize='3xl' color={"#365349"} m='2'>For Your Health Benefits</Text>
    </Box>
    <Box p='15'>
      <HStack w='90%' spacing="40px"  m='auto'>
        <Box w='30%' boxShadow='md'  rounded='md' >
       <Box display={'flex'}  alignItems={'center'} flexDirection={'column'}>
        <Image w='50px' src={require("../assets/doctor.png")}/>
        </Box>
          <Text textAlign={'center'} fontSize='2xl'>Cardiology Surgery</Text>
          <Text  noOfLines={[1, 2, 3]} color={"#365349"} fontSize='xl'>
   The quick brown fox jumps over the lazy dog" 
   is an English-language pangrama
  sentence
</Text>
<Box  display={'flex'}  alignItems={'center'} flexDirection={'column'} p='10'>
          <Button rightIcon={<ArrowRightIcon />}  bgColor={"#365349"}  color={"#fafaf1"}>Know More</Button>
          </Box>
        </Box>
        <Box  w='30%' boxShadow='md'  rounded='md' bgColor={"#365349"}>
        <Box display={'flex'}  alignItems={'center'} flexDirection={'column'}>
        <Image w='50px' src={require("../assets/protection.png")}/>
        </Box>
        <Text textAlign={'center'} fontSize='2xl' color={"#fafaf1"}>Pediatrics and New Born</Text>
          <Text  noOfLines={[1, 2, 3]} color={"#fafaf1"} fontSize='xl' >
   The quick brown fox jumps over the lazy dog" 
   is an English-language pangrama
  sentence 
</Text>
<Box  display={'flex'}  alignItems={'center'} flexDirection={'column'} p='10'>
          <Button rightIcon={<ArrowRightIcon />}  color={"#365349"}  bgColor={"#fafaf1"}>Know More</Button>
          </Box>
        </Box>
        <Box w='30%' boxShadow='md'  rounded='md'>
        <Box display={'flex'}  alignItems={'center'} flexDirection={'column'}>
        <Image w='50px' src={require("../assets/tooth.png")}/>
        </Box>
        <Text textAlign={'center'} fontSize='2xl'>Dentistry</Text>
          <Text  noOfLines={[1, 2, 3]} color={"#365349"} fontSize='xl'>
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
      <Text fontSize='4xl' color={"#365349"} m='2'>What Our Patients</Text>
      <Text fontSize='3xl' color={"#365349"} m='2'>Say About Us</Text>
    </Box>
    </Box>
    <Box w='100%' h='150px' bgColor="#365349" zIndex='0' >
      <Box w='60%'h='150px'  color='white' zIndex='1' textAlign={'center'} m='auto'  boxShadow="md" rounded="md">
      <Text  noOfLines={[1, 2, 3]} color={"#fafaf1"} fontSize='xl' textAlign={'center'}>
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
      <Text fontSize='4xl' color={"#365349"} m='2'>Get In Touch</Text>
      <Text fontSize='3xl' color={"#365349"} m='2'>Get Your Valuable Feedback</Text>
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
