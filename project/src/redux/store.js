import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as BookingReducer } from "./BookingReducer/reducer";
import { reducer as DoctorReducer } from "./doctorReducer/reducer";
const rootReducer = {
  BookingReducer,
  DoctorReducer,
};

export const store = legacy_createStore(
  combineReducers(rootReducer),
  applyMiddleware(thunk)
);
