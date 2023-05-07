import React, { useState } from "react";
import { Box, FormLabel, Input, FormControl, Button } from "@chakra-ui/react";
export const DoctorLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = () => {
    console.log(username, password);
    setPassword("");
    setUsername("");
  };
  return (
    <Box bg={"one"} h={"80vh"} pt={"100px"}>
      <Box w="30%" m={"auto "}>
        <FormControl>
          <FormLabel color="two">Email</FormLabel>
          <Input
            type="email"
            borderColor="two"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel color="two">Password</FormLabel>
          <Input
            type="Password"
            borderColor="two"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FormLabel></FormLabel>
          <Button bgColor="two" color="white" w="100%" onClick={handleSubmit}>
            Login
          </Button>
        </FormControl>
      </Box>
    </Box>
  );
};
