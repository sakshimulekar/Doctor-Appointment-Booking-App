import React from "react";
import { Box } from "@chakra-ui/react";
import { DoctorLogin } from "../components/Doctors/DoctorLogin";
import { DoctorHome } from "./../components/Doctors/DoctorHome";

export const DoctorPage = () => {
  return (
    <Box>
      {/* <DoctorLogin /> */}
      <DoctorHome />
    </Box>
  );
};
