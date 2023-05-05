import React from 'react'
import { useEffect } from 'react'

import { getDoctor } from '../../redux/BookingReducer/action'
import { BookingCard } from './BookingCard'
import { getDoctorData } from '../../redux/PatientReducer/action'
export const BookingList = () => {




  return (
    <div>
      {data.length > 0 && data.map((el) => {
        return <BookingCard key={el.id} {...el}/>
      })
      }

    </div>
  )
}
