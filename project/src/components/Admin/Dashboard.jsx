import { Box, Heading,Text, Thead,Table,Center,Button,Icon,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer} from '@chakra-ui/react'
import { DeleteIcon } from '@chakra-ui/icons'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDoctor } from '../../redux/AdminReducer/action'
import { DocCrud } from './DocCrud'


export const Dashboard = () => {
    const data=useSelector((store)=>{
        return store.adminReducer.doctor
    })
    console.log(data)
    const dispatch = useDispatch()

    
    useEffect(()=>{
      dispatch(getDoctor())
    },[])
    
  return (
    <Box w={"78%"} boxShadow={"2xl"} p={"20px"}>
        <Heading>Welcome Admin !</Heading>
        <Text color="grey" as="b">Dashboard</Text>

        <TableContainer>
          <Table  w={"80%"} m={"20px"} boxShadow={"md"} >
          
            <Thead>
              <Tr>
                <Th><Center fontSize={"15px"}>Sr.No</Center></Th>
                <Th fontSize={"15px"}>Doctor Name</Th>
                <Th fontSize={"15px"}>profile</Th>
                <Th fontSize={"15px"}>status</Th>
                <Th fontSize={"15px"}>Edit</Th>
                <Th fontSize={"15px"}>Delete</Th>
              </Tr>
            </Thead>
            {data?.length > 0 && data?.map((e)=>{
              return(
            <Tbody key={e.id} {...e}>
            
              
              <Tr >
                  <Td isNumeric><Center>{e.id}</Center></Td>
                  <Td>{e.name}</Td>
                  <Td>{e.profile}</Td>
                  <Td>{e.status?<Text color={"green"} as={'b'}>Available</Text> : <Text color={"blue"} as={'b'}>Busy</Text>}</Td>
                  <Td><Button >edit</Button></Td>
                  <Td><Button ><Icon as={DeleteIcon} color={"red"}/></Button></Td>
              </Tr>
              
            </Tbody>)
            })}
          </Table>
        </TableContainer >
        
           
        
        
    </Box>
  )
}


