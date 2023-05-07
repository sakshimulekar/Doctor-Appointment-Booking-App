import { Card, CardBody, CardFooter,ButtonGroup,Divider,Stack,Heading,Text,Center,Button} from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export const ViewHistory = () => {
        
        const data = useSelector((store)=>{
            console.log(store.doctorGetReducer.viewHistory)
            return store.doctorGetReducer.viewHistory
        })
        console.log("data :", data)


  return (
    <Center>
        <Card w={"50%"} m={"20px"}>
            <CardBody>
                <Stack mt='6' spacing='3'>
                <Text size='md' as={"b"}> {data.doctor} </Text>
                <Text>{data.profile}</Text>
                <Text>Hospital : {data.hospital}</Text>
                <Text>{`Appointment Date : ${data.date} `}</Text>
                <Text>{`Appointment Time : ${data.time}`}</Text>
                <Text>Fees : {data.fees} EGP</Text>
                
                </Stack>
            </CardBody>

            <Divider />

            <CardBody>
                <Stack mt='6' spacing='3'>
                <Text size='md' as={"b"}>Patient Details </Text>
                <Text>Patient Name : {data.patient_name}</Text>
                <Text as={"b"}>Appointment No : {"15"+Date.now()%1000}</Text>
                <Text>{data.email}</Text>
                <Text>{data.mobile}</Text>
                </Stack>
            </CardBody>
            
            <Divider />
            

            <CardFooter>
                <ButtonGroup gap={"30px"}>
                <Button variant='solid' backgroundColor='#61876e' color={'white'}>
                    <Link to={"/payathospital"}>pay in hospital</Link>
                </Button>
                <Button variant='solid' backgroundColor='#61876e' color={'white'}>
                    pay in Advance
                </Button>
                </ButtonGroup>
            </CardFooter>
        </Card>
    </Center>
  )
}
