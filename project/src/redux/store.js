import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
<<<<<<< HEAD
import { reducer as BookingReducer } from "./BookingReducer";
import { reducer as DoctorReducer } from "./doctorReducer/reducer";
const rootReducer = {
  BookingReducer,
  DoctorReducer,
};

export const store = legacy_createStore(
  combineReducers(rootReducer),
  applyMiddleware(thunk)
);
=======

import {reducer as authReducer} from "./AuthReducer/reducer";
import {reducer as bookReducer} from "./BookingReducer/reducer";
import {reducer as doctorReducer} from "./DoctorReducer/reducer";
import {reducer as patientReducer} from "./PatientReducer/reducer";

const rootReducer = combineReducers({
    authReducer,
    bookReducer,
    doctorReducer,
    patientReducer,
})


   

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))
//export const store = legacy_createStore(patientReducer,applyMiddleware(thunk))
>>>>>>> 84b313f1bdcc4d977f099eb21623bdb8b9bb9cdc
