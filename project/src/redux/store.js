import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";

const rootReducer = {
    
}


   


export const store = legacy_createStore(combineReducers(rootReducer),applyMiddleware(thunk))