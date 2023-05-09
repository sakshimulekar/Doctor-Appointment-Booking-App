import React,{useState} from 'react'
import { Card,CardBody,CardFooter,Heading,Text,Button,Image,Stack,Avatar, Icon,HStack,Breadcrumb,
  BreadcrumbItem,BreadcrumbLink,List,ListItem,ListIcon,Textarea,Box,Center
 } from '@chakra-ui/react'
import {TimeIcon,CheckCircleIcon,} from "@chakra-ui/icons"
import { useSelector } from 'react-redux';
import {useNavigate} from "react-router-dom"

export const DoctorInfo = () => {

    const doctorsData = useSelector((store)=>{
        console.log(store.doctorGetReducer)
        return store.doctorGetReducer.doctorsData
    })
    console.log(doctorsData)
    const navigate=useNavigate();

    const handle = () => {
      navigate("/form")
    }
  return (
  <Box mt={"10px"} bg={"one"}>

    <Breadcrumb>
    <BreadcrumbItem>
      <BreadcrumbLink href='/' color={"three"}>Home</BreadcrumbLink>
    </BreadcrumbItem>

    <BreadcrumbItem>
      <BreadcrumbLink href='/bookingpage' color={"three"}>bookingpage</BreadcrumbLink>
    </BreadcrumbItem>
    </Breadcrumb>
    <Center>
    <Box  w={"90%"} pb={"30px"}>
    <Card
    direction={{ base: 'column', sm: 'row' }}
    overflow='hidden'
    variant='outline'
    w="50%"
    boxShadow='xs'
    //border={"1px"}
    p={"20px"}
    mb={"50px"}
    mr={"20px"}
    mt={"20px"}
    >
    <Image
    borderRadius='full'
    boxSize='200px'
    objectFit='cover'
    mt={"20px"}
    maxW={{ base: '100%', sm: '200px' }}
    src={doctorsData.image}
    alt='Caffe Latte'
    />

    <Stack>
    <CardBody>
      <Heading size='md'color={"three"}>{doctorsData.name}</Heading>

      <Text py='1' color={"three"}>{doctorsData.profile}</Text>
      <Text color={"three"}>Hospital Address : {doctorsData.location}</Text>
      <Text color={"three"}>Fees : {doctorsData.fees} EGP</Text>
      <Text color={"three"}>{doctorsData.waiting_time} min</Text>
    </CardBody>

    <CardFooter>
      <Button variant='solid' bgColor="two" color="white" onClick={handle}>
        Book an Appointment
      </Button>
    </CardFooter>

    </Stack>
    </Card>

    <Stack pt={"30px"} w={"70%"}>
    <Stack direction={'row'} display="flex" alignItems="center" >
      <Avatar src='https://bit.ly/broken-link' boxSize={6}/>
      <Text fontSize={"xl"} as="b" color={"three"}>About Doctor</Text>  
    </Stack>
    <Text color={"three"}>{doctorsData.description}</Text>
    </Stack>

    <Stack direction={'row'} display="flex" alignItems="center" pt={"30px"}>
      <Icon as={TimeIcon} color={"two"}/>
      <Text color={"three"}>Available days for Appointment</Text>
      </Stack>
      
      <HStack >
        <Button variant='outline' color={"three"} >
            Satureday
        </Button>
        <Button variant='outline' color={"three"}>
            Sunday
        </Button>
        <Button variant='outline' color={"three"}>
            Monday
        </Button>
        <Button variant='outline' color={"three"}>
            Tuesday
        </Button>
      </HStack>
      
      <Stack direction={'row'} display="flex" alignItems="center" pt={"30px"} pb={"30px"}>
        <Icon as={CheckCircleIcon} color='green.500'/>
        <Text color={"three"}>Varified Profile</Text>
      </Stack>
      
      <Textarea placeholder='Appointment Notes' w={"80%"}  h={"20vh"}/>
      
      <Text color={"three"}>Doctor review</Text>
      <Textarea w={"80%"} h={"20vh"}placeholder='Put your review here' />
      
      <List spacing={3} pt={"30px"}>
      <ListItem>
        <ListIcon as={CheckCircleIcon} color='green.500' />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit
      </ListItem>
      <ListItem>
        <ListIcon as={CheckCircleIcon} color='green.500' />
          Assumenda, quia temporibus eveniet a libero incidunt suscipit
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color='green.500' />
            Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
          </ListItem>
  
        <ListItem>
          <ListIcon as={CheckCircleIcon} color='green.500' />
            Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
          </ListItem>
        </List>
        </Box>
        </Center>
    </Box>
  )
}


