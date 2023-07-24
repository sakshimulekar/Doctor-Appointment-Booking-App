import {
  DOCTOR_FAILURE,
  DOCTOR_REQUEST,
  GET_DOCTOR_SUCCESS,
} from "./actionType";
import axios from "axios";

export const getDoctor = (paramObj, page) => (dispatch) => {
  dispatch({ type: DOCTOR_REQUEST });
  axios
    .get(
      `https://medicure.onrender.com/doctors?_limit=4&_page=${page}`,
      paramObj
    )
    .then((response) => {
      //console.log(response.data)
      dispatch({ type: GET_DOCTOR_SUCCESS, payload: response.data });
    })
    .catch((error) => {
      console.log(error);
      dispatch({ type: DOCTOR_FAILURE });
    });
};
