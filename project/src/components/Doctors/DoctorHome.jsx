import {
  Box,
  HStack,
  Text,
  useToast,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
  Switch,
  Select,
} from "@chakra-ui/react";
import React, { useEffect } from "react";

export const DoctorHome = () => {
  const doc = "Dr. Nardeen Adel";

  //Toast
  const toast = useToast();
  function hello() {
    toast({
      title: `Hello Doctor.${doc}`,
      description: "Have a Good Day..!",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  }
  useEffect(() => {
    hello();
  }, []);
  return (
    <Box bgColor={"one"} h={"80vh"}>
      <Box w={"80%"} m={"auto"}>
        <Box boxShadow="md" p={10}>
          <Text as={"b"} color={"two"}>
            {doc}
          </Text>
          <Text color={"two"}>
            Ph.D and Consultant Oral Maxillofacial Sugery
          </Text>
        </Box>
        {/*Appointment conatainer */}
        <Box>
          {/* table */}
          <Box>
            <TableContainer>
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th>Patient Name</Th>
                    <Th>Age</Th>
                    <Th>Gender</Th>
                    <Th>Status</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>Munna Bhai</Td>
                    <Td>40</Td>
                    <Td>M</Td>
                    <Td>
                      <Select placeholder="Select option">
                        <option value="false">Pending</option>
                        <option value="ture">Approve</option>
                        <option value="false">Rejected</option>
                      </Select>
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
