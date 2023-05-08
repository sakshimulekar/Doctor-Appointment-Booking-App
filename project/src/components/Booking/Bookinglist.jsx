import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch,useSelector} from 'react-redux'
import {useLocation, useSearchParams} from 'react-router-dom'
import { getDoctor } from '../../redux/BookingReducer/action'
import { BookingCard } from './BookingCard'
import { Button,Box, HStack } from '@chakra-ui/react'
export const BookingList = () => {


const [searchparams]=useSearchParams()
console.log(searchparams.getAll('gender'))
const [page,setPage]=useState(1)


let Obj={
  params:{
    gender:searchparams.getAll('gender'),
    category:searchparams.getAll('category'),
    //profile:searchparams.getAll('profile'),
    _sort:searchparams.get('order') && 'fees',
    _order:searchparams.get('order'),
  }
}
console.log(Obj)
     const location = useLocation()
     console.log(location)
    const dispatch = useDispatch()
    const data=useSelector((store)=>store.bookReducer.doctors)
    //console.log(data)


   useEffect(()=>{
    dispatch(getDoctor(Obj,page))
   },[location.search,page])

   const handlepage = (val) => {
    const updatepage = page + val;
    setPage(updatepage);
  };





  return (
    <div>
    {  data.length>0 && data.map((el)=>{
        return <BookingCard key={el.id} {...el}/>
    })
    
    
    }
    <Box  display="flex" justifyContent="flex-end" >
    <HStack >
    <Button isDisabled={page === 1}  onClick={() => handlepage(-1)} color={"#fafaf1"} bgColor="#365349">Prev</Button>
    <Button bgColor="#365349" color={"#fafaf1"}>{page}</Button>
    <Button isDisabled={page === 5} onClick={() => handlepage(1)} bgColor="#365349" color={"#fafaf1"}>Next</Button>
    </HStack>
    </Box>
    
    </div>
  )
}
