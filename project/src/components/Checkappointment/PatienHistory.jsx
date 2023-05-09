import React from 'react'
import {useNavigate} from "react-router-dom";
import {Center,Button,Table,Thead,Tbody,Tr,Th,Td,TableContainer,Text } from "@chakra-ui/react"
import { viewData } from '../../redux/DoctorGet/action';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
export const PatienHistory = ({patient_name,image,Address,age,doctor,mobile,email,status,date,time,description,hospital,fees,profile,id,gender}) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleBook = () => {
        navigate("/bookingpage")
    }
    
  return (
    <Center > 

        <TableContainer boxShadow="2xl" p="20px">
        <Table size='sm'>
            <Thead>
            <Tr>
                <Th isNumeric>Sr.No.</Th>
                <Th>Patient Name</Th>
                <Th isNumeric>Mobile No.</Th>
                <Th>status</Th>
                <Th>Remark</Th>
                <Th>cancel appointment</Th>
            </Tr>
            </Thead>
            <Tbody>
            <Tr>
                <Td>1</Td>
                <Td>{patient_name}</Td>
                <Td isNumeric>{mobile}</Td>
                <Td>{status?(<Text color="green" as={"b"}>Approved</Text>):(<Text color={"blue"} as={"b"}>Pending</Text>)}</Td>
                <Td>{status?<Button 
                    onClick={() => dispatch(viewData({
                        patient_name,
                        Address,
                        age,
                        doctor,
                        mobile,
                        email,
                        status,
                        date,
                        time,
                        description,
                        hospital,
                        fees,
                        profile,
                        id,
                        gender,
                        image
                        }))}><Link to={"/view"}>View History</Link></Button>:<Button onClick={handleBook} >Book Again
                    </Button>}
                </Td>
                <Td><Center><Button bg={"tomato"} color={"white"} w={"100px"}>Delete</Button></Center></Td>
            </Tr>
            </Tbody>
        </Table>
        </TableContainer>
    </Center>
  )
}
