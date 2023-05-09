import {
  GET_DOCTORS_FAILURE_SH,
  GET_DOCTORS_PENDING_SH,
  GET_DOCTORS_SUCCESS_SH,
  POST_DOCTOR_SUCCESS_SH,
} from "./actionTypes";

import axios from "axios";

export const getDoctorsFn = () => (dispatch) => {
  dispatch({ type: GET_DOCTORS_PENDING_SH });
  return axios
    .get("http://localhost:8080/doctors")
    .then((res) => {
      //  console.log("data", res.data);
      dispatch({ type: GET_DOCTORS_SUCCESS_SH, payload: res.data });
    })
    .catch((err) => {
      console.log("err", err);
      dispatch({ type: GET_DOCTORS_FAILURE_SH });
    });
};

export const postLoginDoctorFn = (user) => (dispatch) => {
  dispatch({ type: GET_DOCTORS_PENDING_SH });
  return axios
    .post("http://localhost:8080/LogedInDoctor", user)
    .then((res) => {
      //  console.log("data", res.data);
      dispatch({ type: POST_DOCTOR_SUCCESS_SH, payload: res.data });
    })
    .catch((err) => {
      console.log("err", err);
      dispatch({ type: GET_DOCTORS_FAILURE_SH });
    });
};

export const getLoginDoctorFn = () => (dispatch) => {
  dispatch({ type: GET_DOCTORS_PENDING_SH });
  axios
    .get(`http://localhost:8080/LogedInDoctor`)
    .then((res) => {
      dispatch({ type: GET_DOCTORS_SUCCESS_SH, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
    });
};
