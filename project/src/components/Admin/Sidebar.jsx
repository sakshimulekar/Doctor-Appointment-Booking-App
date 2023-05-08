import { Box,Text,Button } from '@chakra-ui/react'
import React from 'react'
import { useDispatch } from 'react-redux';
import { getDoctor } from '../../redux/AdminReducer/action';
import {useNavigate} from "react-router-dom"
export const Sidebar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleClick = () => {
        dispatch(getDoctor()).then(res=>navigate("/adminDashboard"))
    }
    
return (
    <Box width={"20%"} boxShadow={"xl"} p={"10px"}>
        <Text>Sidebar</Text>
        <Button onClick={handleClick}>Dashboard</Button>
    </Box>
  )
}
