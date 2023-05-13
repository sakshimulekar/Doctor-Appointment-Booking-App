import { Card, CardBody, CardFooter,ButtonGroup,Divider,Stack,Image,Text,Center,Button, Box} from '@chakra-ui/react'
import React,{useRef} from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {useReactToPrint} from "react-to-print"

export const Recept = () => {
    const componentPDF = useRef()

    const data = useSelector((store)=>{
        console.log(store.doctorGetReducer.viewHistory)
        return store.doctorGetReducer.viewHistory
    })
    console.log("data :", data)

    const generatePDF = useReactToPrint({
        content:()=>componentPDF.current,
        documentTitle:"Appointment Recept",
        onAfterPrint:()=>alert("Recept download successfully")
    });
  return (
    <Center bg={"one"} m={"10px"}>
        
        <Card w={"40%"} m={"20px"} boxShadow={"xl"} ref={componentPDF}>
            <CardBody >
                <Box mt='6' spacing='3' display={"flex"} justifyContent="space-evenly">
                <Box>
                <Image borderRadius="full" w={"150px"} h={"150px"} src={data.image} alt="doctor image"/>
                </Box>
                <Box>
                <Text size='md' as={"b"}> {data.doctor} </Text>
                <Text>{data.profile}</Text>
                <Text>Hospital :{data.hospital}</Text>
                <Text>{`Appointment Date : ${data.date} `}</Text>
                <Text>{`Appointment Time : ${data.time}`}</Text>
                <Text>Fees : {data.fees} EGP</Text>
                </Box>
                </Box>
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
            
            <Center>
            <CardFooter>
                <ButtonGroup gap={"30px"}>
                <Button onClick={generatePDF}>Download</Button>
                </ButtonGroup>
            </CardFooter>
            </Center>
        </Card>
        
    </Center>
  )
}
