//import axios from "axios";
import { GET_DOCTOR } from "./actionTypes";
export const getDoctorData = (data) => {
  console.log(data);
  return { type: GET_DOCTOR, payload: data };
};
