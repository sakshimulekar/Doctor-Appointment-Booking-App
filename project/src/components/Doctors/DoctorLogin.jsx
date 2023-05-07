import React from "react";
import {
  Box,
  FormLabel,
  Input,
  FormControl,
  Button,
  Text,
} from "@chakra-ui/react";
export const DoctorLogin = () => {
  return (
    <Box bg={"one"}>
      <Box w="30%" m={"auto"}>
        <FormControl>
          <FormLabel color="two">Email</FormLabel>
          <Input type="email" borderColor="two" />
          <FormLabel color="two">Password</FormLabel>
          <Input type="Password" borderColor="two" />
          <FormLabel></FormLabel>
          <Button bgColor="two" color="white" w="100%">
            Login
          </Button>
        </FormControl>
      </Box>
    </Box>
  );
};
