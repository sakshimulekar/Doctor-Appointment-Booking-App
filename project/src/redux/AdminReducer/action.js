import axios from "axios";
import {
  ADD_DOCTOR_SUCC,
  DEL_DOCTOR_SUCC,
  // EDIT_DOCTOR_FAIL,
  // EDIT_DOCTOR_REQ,
  EDIT_DOCTOR_SUCC,
  GET_DOCTOR_FAIL,
  GET_DOCTOR_REQ,
  GET_DOCTOR_SUCC,
  PATIENT_FAIL,
  PATIENT_REQ,
  PATIENT_SUCC,
} from "./actionType";

export const getDoctor = () => (dispatch) => {
  dispatch({ type: GET_DOCTOR_REQ });
  return axios
    .get("https://medicure.onrender.com/doctors")
    .then((res) => {
      console.log(res);
      return dispatch({ type: GET_DOCTOR_SUCC, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      return dispatch({ type: GET_DOCTOR_FAIL });
    });
};

export const editDoc = (id) => (dispatch) => {
  dispatch({ type: GET_DOCTOR_REQ });

  return axios
    .delete(`https://medicure.onrender.com/doctors/${id}`)
    .then((res) => {
      //console.log(res.data)
      dispatch({ type: EDIT_DOCTOR_SUCC });
    })
    .catch((err) => {
      dispatch({ type: GET_DOCTOR_FAIL });
    });
};

export const delData = (id, status) => (dispatch) => {
  return axios
    .patch(`https://medicure.onrender.com/doctors/${id}`, { status: !status })
    .then((resp) => {
      console.log(resp.data);
      dispatch({ type: DEL_DOCTOR_SUCC });
    });
};

export const addDoct = (obj) => (dispatch) => {
  dispatch({ type: GET_DOCTOR_REQ });
  return axios
    .post("https://medicure.onrender.com/doctors", obj)
    .then((res) => {
      //console.log(res)
      return dispatch({ type: ADD_DOCTOR_SUCC });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: GET_DOCTOR_FAIL });
    });
};

export const getPatient = () => (dispatch) => {
  dispatch({ type: PATIENT_REQ });
  return axios
    .get("https://medicure.onrender.com/patients")
    .then((res) => {
      console.log(res);
      return dispatch({ type: PATIENT_SUCC, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      return dispatch({ type: PATIENT_FAIL });
    });
};
