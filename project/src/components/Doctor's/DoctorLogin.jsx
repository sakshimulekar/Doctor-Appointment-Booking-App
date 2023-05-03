import React from "react";
import { Box, FormLabel, Input, FormControl, Button } from "@chakra-ui/react";
export const DoctorLogin = () => {
  return (
    <Box>
      <Box w="30%">
        <FormControl>
          <FormLabel color="#61876e">Email</FormLabel>
          <Input type="email" borderColor="#61876e" />
          <FormLabel color="#61876e">Password</FormLabel>
          <Input type="Password" borderColor="#61876e" />
          <FormLabel></FormLabel>
          <Button bgColor={"#61876e"} color="white" w="100%">
            Login
          </Button>
        </FormControl>
      </Box>
    </Box>
  );
};
