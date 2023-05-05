import { Box, Text } from "@chakra-ui/react";
import React from "react";

export const DoctorHome = () => {
  return (
    <Box bgColor={"one"} h={"80vh"}>
      <Box w={"80%"} m={"auto"}>
        <Box boxShadow="md" p={10}>
          <Text as={"b"} color={"two"}>
            Dr. Nardeen Adel
          </Text>
          <Text color={"two"}>
            Ph.D and Consultant Oral Maxillofacial Sugery
          </Text>
        </Box>
        {/*Appointment conatainer */}
        <Box></Box>
      </Box>
    </Box>
  );
};
