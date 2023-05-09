import {
  GET_PATIENT_FAIL,
  GET_PATIENT_REQ,
  GET_PATIENT_SUCCESS,
  POST_PATIENT_FAIL,
  POST_PATIENT_REQ,
  POST_PATIENT_SUCCESS,
  UPDATE_STATUS,
} from "./actionType";

const initial = {
  isLoading: false,
  isError: false,
  patients: [],
};

export const reducer = (state = initial, { type, payload }) => {
  switch (type) {
    case POST_PATIENT_REQ:
      return { ...state, isLoading: true };
    case POST_PATIENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        patients: [...state.patients, payload],
      };
    case POST_PATIENT_FAIL:
      return { ...state, isError: true };
    case GET_PATIENT_REQ:
      return { ...state, isLoading: true };
    case GET_PATIENT_SUCCESS:
      return { ...state, isLoading: false, patients: payload };
    case GET_PATIENT_FAIL:
      return { ...state, isError: true, isLoading: false };
    case UPDATE_STATUS:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};
