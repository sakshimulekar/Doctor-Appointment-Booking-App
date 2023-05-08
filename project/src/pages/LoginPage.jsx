import { Box, Button, Input } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { login } from '../redux/AuthReducer/action'

export const LoginPage = () => {

const [email,setEmail]=useState("")

const [password,setPassword]=useState("")
const [username,setUsername]=useState("")
const auth=useSelector((store) =>store.authReducer.isAuth)
const error=useSelector((store) =>store.authReducer.isError)
const dispatch=useDispatch()
const navigate=useNavigate()
const location=useLocation()

const handelLogin=()=>{

  const userdata={
    email,
    password,
    username,
  }

  dispatch(login(userdata)).then(()=>{
    navigate(location.state)
  })
}




  return (
    <div auth={auth} error={error}>
      <Box w='40%' m='auto'p='20'>
      <Input type='text' palceholder="USERNAME"  value={username} onChange={(e)=>setUsername(e.target.value)} m='3'/>
      <Input type='email' value={email} placeholder='email' onChange={(e)=>setEmail(e.target.value)} m='3'/>
      <Input type='password' value={password} placeholder='password' onChange={(e)=>setPassword(e.target.value)} m='3'/>
      <Button w='100%' m='3' onClick={handelLogin} bgColor='#365349' color='#fafaf1'>Login</Button>
      </Box>
    </div>
  )
}
