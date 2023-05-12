import React from 'react'
import { Admin } from '../components/Admin/Admin'
import { AddDoct } from '../components/Admin/AddDoct'
import { Button,Box } from '@chakra-ui/react'
import { Sidebar } from '../components/Admin/Sidebar'
import { Dashboard } from '../components/Admin/Dashboard'

export const AdminPage = () => {
  
  return (
    < >
      <Box display={"flex"} justifyContent={"space-between"} width={"98%"} m={"auto"}>
      <Sidebar/>
      <Admin/>
      </Box>
    </>
  )
}
