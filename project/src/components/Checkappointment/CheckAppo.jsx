import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux"
import {Box,Center,Input,Button,InputGroup,InputRightElement} from "@chakra-ui/react";
import { getData } from '../../redux/DoctorGet/action';
import { PatienHistory } from './PatienHistory';

export const CheckAppo = () => {
  
  const data = useSelector((store)=>{
    return store.doctorGetReducer.product
  })

  const [query, setQuery] = useState("");
  const dispatch = useDispatch()

  let paramObj = {
    params : {
      q : query && query
    }
  }

  const handleClick = () => {
    dispatch(getData(paramObj))
    setQuery("")
  } 
  return (
  <Box w={"100%"} h={"80vh"} bg={"one"} boxShadow='xl' m={"10px"}>
    <Center>
      <InputGroup size='md' w={"40%"} m={"40px"}>
        <Input
          pr='4rem'
          type='text'
          placeholder='Enter patient name/ registration'
          value={query}
          onChange={(e)=>setQuery(e.target.value)}
        />
        <InputRightElement width='4.5rem'>
          <Button h='1.75rem' size='sm' onClick={handleClick}>search</Button>
        </InputRightElement>
      </InputGroup>
    </Center>

    {data.length === 0?(<Center as='b'>Result not found</Center>):(

     data?.map((e)=>{
      return (
        <PatienHistory key={e.id} {...e}/>
      )
    })
    )}
  </Box>
  )
}
