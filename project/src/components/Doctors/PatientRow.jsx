//Patient Row
import React from "react";

import { Button, HStack, Td} from "@chakra-ui/react";
const PatientRow = ({
  patient_name,
  age,
  gender,
  status,
  id,
  handleAprove,
  handleReject,
  i,
}) => {
  const handle = (id, status) => {
    handleAprove(id, status);
  };

  return (
    <>
      <Td>{i + 1}</Td>
      <Td>{patient_name}</Td>
      <Td>{age}</Td>
      <Td>{gender}</Td>
      <Td>{status ? "Approve" : "Pending"}</Td>
      <Td>
        <HStack spacing={"3"}>
          <Button
            onClick={() => handle(id, status)}
            bg={"green"}
            color={"white"}
            _hover={{ bgColor: "green", color: "white" }}
          >
            Approve
          </Button>
          <Button
            onClick={() => handleReject(id)}
            bg={"red"}
            color={"white"}
            _hover={{ bgColor: "red", color: "white" }}
          >
            Reject
          </Button>
        </HStack>
      </Td>
    </>
  );
};

export default PatientRow;