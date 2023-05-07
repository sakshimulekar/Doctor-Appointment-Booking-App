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
  } 
  return (
  <Box>
    <Center>
      <InputGroup size='md' w={"40%"}>
        <Input
          pr='4rem'
          type='text'
          placeholder='Enter patient name/ registrantion'
          value={query}
          onChange={(e)=>setQuery(e.target.value)}
        />
        <InputRightElement width='4.5rem'>
          <Button h='1.75rem' size='sm' onClick={handleClick}>search</Button>
        </InputRightElement>
      </InputGroup>
    </Center>

    {data.length === 0?(<Center>Result not found</Center>):(

     data?.map((e)=>{
      return (
        <PatienHistory key={e.id} {...e}/>
      )
    })
    )}
  </Box>
  )
}
