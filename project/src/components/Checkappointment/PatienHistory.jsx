import React from 'react'
import {useNavigate} from "react-router-dom";
import {Center,Button,Table,Thead,Tbody,Tr,Th,Td,TableContainer, } from "@chakra-ui/react"
import { viewData } from '../../redux/DoctorGet/action';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
export const PatienHistory = ({patient_name,Address,age,doctor,mobile,email,status,date,time,description,hospital,fees,profile,id,gender}) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleBook = () => {
        navigate("/bookingpage")
    }
    
  return (
    <Center> 

        <TableContainer>
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
                <Td>{status?("Approved"):("Pending")}</Td>
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
                        gender
                        }))}><Link to={"/view"}>View History</Link></Button>:<Button onClick={handleBook}>Book Again
                    </Button>}
                </Td>
                <Td><Button>Delete</Button></Td>
            </Tr>
            </Tbody>
        </Table>
        </TableContainer>
    </Center>
  )
}
