import {
  GET_DOCTORS_FAILURE_SH,
  GET_DOCTORS_PENDING_SH,
  GET_DOCTORS_SUCCESS_SH,
  POST_DOCTOR_SUCCESS_SH,
  UPDATE_STATUS,
} from "./actionTypes";

const initalState = {
  isLoading: false,
  isError: false,
  Doctors: [],
  LogedInDoctor: [],
};
export const reducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case GET_DOCTORS_PENDING_SH:
      return { ...state, isLoading: true, isError: false };
    case GET_DOCTORS_SUCCESS_SH:
      return { ...state, isLoading: false, Doctors: payload };
    case GET_DOCTORS_FAILURE_SH:
      return { ...state, isLoading: false, isError: true };
    case POST_DOCTOR_SUCCESS_SH:
      return { ...state, isLoading: false, LogedInDoctor: payload };
   
    default:
      return state;
  }
};
