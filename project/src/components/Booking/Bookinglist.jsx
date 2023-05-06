import React from 'react'
import { useEffect } from 'react'
import { useDispatch,useSelector} from 'react-redux'
import {useLocation, useSearchParams} from 'react-router-dom'
import { getDoctor } from '../../redux/BookingReducer/action'
import { BookingCard } from './BookingCard'
export const BookingList = () => {


const [searchparams]=useSearchParams()
console.log(searchparams.getAll('gender'))

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
    dispatch(getDoctor(Obj))
   },[location.search])


  return (
    <div>
    {  data.length>0 && data.map((el)=>{
        return <BookingCard key={el.id} {...el}/>
    })
    
    
    }
    
    </div>
  )
}
