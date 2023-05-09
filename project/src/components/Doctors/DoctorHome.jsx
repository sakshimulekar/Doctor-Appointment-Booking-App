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
  Input,
  Checkbox,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLoginDoctorFn } from "../../redux/DoctorReducer/action";
import axios from "axios";

import { getPatient, updateStatusFn } from "../../redux/PatientReducer/action";
import PatientRow from "./PatientRow";

export const DoctorHome = () => {
  const [change, setChange] = useState(false);
  const logindoc = useSelector((state) => state.doctorReducer.Doctors);
  const patients = useSelector((state) => state.patientReducer.patients);

  console.log("patients", patients);
  console.log("doctor data", logindoc);
  const dispatch = useDispatch();
  useEffect(() => {
    hello();
    dispatch(getLoginDoctorFn());
    dispatch(getPatient());
  }, [change]);

  const doc = logindoc[0]?.name || "Doctor Name";
  console.log("doctor", doc);

  //Toast
  const toast = useToast();
  function hello() {
    toast({
      title: `Hello ${doc}`,
      description: "Have a Good Day..!",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  }

  const handleAprove = (id, status) => {
    console.log("status", status);
    dispatch(updateStatusFn(id, status)).then(() => {
      setChange((p) => !p);
    });
  };
  const handleReject = () => {};

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
                    <Th>Number</Th>
                    <Th>Patient Name</Th>
                    <Th>Age</Th>
                    <Th>Gender</Th>
                    <Th>Status</Th>
                    <Th>Actions</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {patients?.length > 0 &&
                    patients?.map((el) => {
                      return (
                        <Tr key={el.id}>
                          <PatientRow
                            {...el}
                            handleAprove={handleAprove}
                            handleReject={handleReject}
                          />
                        </Tr>
                      );
                    })}
                </Tbody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
