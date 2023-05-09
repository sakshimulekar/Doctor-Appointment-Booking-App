import React from "react";

import { Button, Td } from "@chakra-ui/react";
const PatientRow = ({
  patient_name,
  age,
  gender,
  status,
  id,
  handleAprove,
  handleReject,
}) => {
  const handle = (id, status) => {
    handleAprove(id, status);
  };
  return (
    <>
      <Td>{id}</Td>
      <Td>{patient_name}</Td>
      <Td>{age}</Td>
      <Td>{gender}</Td>
      <Td>{status ? "Approve" : "pending"}</Td>
      <Td>
        <Button onClick={() => handle(id, status)}>Aprove</Button>
        <Button onClick={() => handleReject(id)}>Reject</Button>
      </Td>
    </>
  );
};

export default PatientRow;
