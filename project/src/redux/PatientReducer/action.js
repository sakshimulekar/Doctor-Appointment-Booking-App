import {
  GET_PATIENT_REQ,
  GET_PATIENT_SUCCESS,
  GET_PATIENT_FAIL,
  POST_PATIENT_FAIL,
  POST_PATIENT_REQ,
  POST_PATIENT_SUCCESS,
  UPDATE_STATUS,
} from "./actionType";
import axios from "axios";

const url = "https://medicure.onrender.com/patients";

export const postPatient = (obj) => (dispatch) => {
  dispatch({ type: POST_PATIENT_REQ });
  axios
    .post(url, obj)
    .then((res) => {
      console.log(res);
      return dispatch({ type: POST_PATIENT_SUCCESS, payload: res.data });
    })
    .catch(() => {
      return dispatch({ type: POST_PATIENT_FAIL });
    });
};

export const getPatient = () => (dispatch) => {
  dispatch({ type: GET_PATIENT_REQ });
  axios
    .get(url)
    .then((res) => {
      console.log(res);
      return dispatch({ type: GET_PATIENT_SUCCESS, payload: res.data });
    })
    .catch(() => {
      return dispatch({ type: GET_PATIENT_FAIL });
    });
};

export const updateStatusFn = (id, status) => (dispatch) => {
  dispatch({ type: GET_PATIENT_REQ });

  return axios
    .patch(`https://medicure.onrender.com/patients/${id}`, { status: !status })
    .then((res) => {
      dispatch({ type: UPDATE_STATUS, payload: res.data });
    });
};
