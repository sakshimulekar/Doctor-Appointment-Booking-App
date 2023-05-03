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
    <Box>
      <Box w="30%">
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
      <Text color="two" as={"b"}>
        DR. Amr Khaled
      </Text>
      <Text color="three">Constutant in Dentistry Cosmetic Dentistry</Text>
    </Box>
  );
};
