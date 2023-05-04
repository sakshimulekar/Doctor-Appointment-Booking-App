import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import {reducer as BookingReducer} from "./BookingReducer"
const rootReducer = {
    BookingReducer
}


   


export const store = legacy_createStore(combineReducers(rootReducer),applyMiddleware(thunk))