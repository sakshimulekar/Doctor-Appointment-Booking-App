import React from 'react';
import {Routes, Route} from "react-router-dom";
import { HomePage } from './HomePage';
import {LoginPage} from "./LoginPage";
import {DoctorPage} from "./DoctorPage";
import {BookingPage} from "./BookingPage";
import {AppointmentPage} from "./AppointmentPage";

export const Mainroutes = () => {
  return (
    
      <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/doctorpage' element={<DoctorPage/>}/>
          <Route path='/bookingpage' element={<BookingPage/>}/>
          <Route path='/appointment' element={<AppointmentPage/>}/>
          <Route path='*' element={<h1>404 page not found</h1>}/>
      </Routes>
    
  )
}
