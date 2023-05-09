import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./HomePage";
import { LoginPage } from "./LoginPage";
import { DoctorPage } from "./DoctorPage";
import { BookingPage } from "./BookingPage";
import { AppointmentPage } from "./AppointmentPage";
import { DoctorInfo } from "../components/singlePage/DoctorInfo";
import { SinglePage } from "../components/singlePage/SinglePage";
import { CheckAppo } from "../components/Checkappointment/CheckAppo";
import { ViewHistory } from "../components/Checkappointment/ViewHistory";
import PaymentPage from "../components/Checkappointment/PaymentPage";
import { PrivateRoute } from "../components/privateRoute";
import { AdminPage } from "./AdminPage";
import { AddDoct } from "../components/Admin/AddDoct";
import { EditDoct } from "../components/Admin/EditDoct";
import DoctorLoginPage from "./DoctorLoginPage";
import { AdminLogin } from "../components/Admin/AdminLogin";
export const Mainroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/doctorpage" element={<DoctorPage />} />
      <Route path="/bookingpage" element={<BookingPage />} />
      <Route path="/appointment" element={<AppointmentPage />} />
      <Route path="/form" element={<SinglePage />} />
      <Route path="/edit" element={<DoctorInfo />} />
      <Route
        path="/checkAppoint"
        element={
          <PrivateRoute>
            <CheckAppo />
          </PrivateRoute>
        }
      />
      <Route path="/view" element={<ViewHistory />} />
      <Route path="/payathospital" element={<PaymentPage />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/doctorAdmin" element={<AddDoct />} />
      <Route path="/edit/{id}" element={<EditDoct />} />
      <Route path="/doctorloginpage" element={<DoctorLoginPage />} />
      <Route path="/adminLogin" element={<AdminLogin/>}/>
      <Route path="*" element={<h1>404 page not found</h1>} />
    </Routes>
  );
};
