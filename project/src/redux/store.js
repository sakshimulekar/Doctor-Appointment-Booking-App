import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";

import { reducer as authReducer } from "./AuthReducer/reducer";
import { reducer as bookReducer } from "./BookingReducer/reducer";
import { reducer as doctorReducer } from "./DoctorReducer/reducer";
import { reducer as patientReducer } from "./PatientReducer/reducer";
import { reducer as doctorGetReducer } from "./DoctorGet/reducer";
import {reducer as adminReducer} from "./AdminReducer/reducer"

const rootReducer = combineReducers({

  authReducer,

  bookReducer,
  doctorReducer,
  patientReducer,
  doctorGetReducer,

  adminReducer

});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
//export const store = legacy_createStore(patientReducer,applyMiddleware(thunk))
