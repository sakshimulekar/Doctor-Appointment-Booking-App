import { Box,Button,Table,Center,Text,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer } from '@chakra-ui/react'
import React from 'react'
import {Icon,DeleteIcon } from '@chakra-ui/icons'


export const DocCrud = ({id,name,profile,status}) => {

    // const handleEdit = (id) => {
    //     console.log("j")
    //   }
    //   const handleDel = (id) => {
    //     console.log(id)
    //   }
  return (
    <Box>
        {/* <TableContainer>
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
            <Tbody>
            <Td isNumeric><Center>{id}</Center></Td>
                  <Td>{name}</Td>
                  <Td>{profile}</Td>
                  <Td>{status?<Text color={"green"} as={'b'}>Available</Text> : <Text color={"blue"} as={'b'}>Busy</Text>}</Td>
                  <Td><Button>edit</Button></Td>
                  <Td><Button><Icon as={DeleteIcon} color={"red"}/></Button></Td>
              
            </Tbody>
          </Table>
        </TableContainer > */}
    </Box>
  )
}
