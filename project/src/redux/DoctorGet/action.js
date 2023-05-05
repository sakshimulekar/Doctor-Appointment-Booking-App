import { GET_DOCTOR } from "./actionType"
//import axios from "axios";

export const getDoctorData = (data) => {
    console.log(data)
        return ({type:GET_DOCTOR,payload:data})
}