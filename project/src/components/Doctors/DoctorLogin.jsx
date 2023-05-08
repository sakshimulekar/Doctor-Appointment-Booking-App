import React, { useState } from "react";
import { Box, FormLabel, Input, FormControl, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
export const DoctorLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const loginInfo = [
    { id: 1, username: "robertjohnson@gmail.com", password: "12345" },
    { id: 2, username: "sarahlee@gmail.com", password: "12345" },
    { id: 3, username: "emilywatson@gmail.com", password: "12345" },
    { id: 4, username: "janesmith@gmail.com", password: "12345" },
  ];

  function validateLogin(username, password) {
    const user = loginInfo.find(
      (user) => user.username === username && user.password === password
    );
    return user !== undefined;
  }

  const handleSubmit = () => {
    console.log(username, password);
    const isValid = validateLogin(username, password);
    if (isValid) {
      navigate("/doctorpage");
    }
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
