import React from 'react'
import { useEffect } from 'react'
import { useDispatch,useSelector} from 'react-redux'
import {useLocation} from 'react-router-dom'
import { getDoctor } from '../../redux/BookingReducer/action'
import { BookingCard } from './BookingCard'
export const BookingList = () => {

    // const location = useLocation()
    const dispatch = useDispatch()
    const data=useSelector((store)=>store.bookReducer.doctors)
    //console.log(data)
   useEffect(()=>{
    dispatch(getDoctor())
   },[])


  return (
    <div>
    {  data.length>0 && data.map((el)=>{
        return <BookingCard key={el.id} {...el}/>
    })
    
    
    }
    
    </div>
  )
}
