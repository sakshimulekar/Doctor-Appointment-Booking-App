import React from 'react'
import {Box} from "@chakra-ui/react"
import { Dashboard } from './Dashboard'
import { Sidebar } from '../Admin/Sidebar'

export const Admin = () => {
  return (
    <Box w="100%"  bg={"one"} m={"10px"} display={"flex"} boxShadow={"xl"}
    justifyContent={"space-between"}>
        <Sidebar/>
        <Dashboard/>        

    </Box>
  )
}
