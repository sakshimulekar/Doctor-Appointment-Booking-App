import { POST_PATIENT_FAIL, POST_PATIENT_REQ, POST_PATIENT_SUCCESS } from "./actionType"

const initial = {
    isLoading : false,
    isError : false,
    patients : []
}

export const reducer = (state=initial,{type,payload}) => {
    switch(type){
        case POST_PATIENT_REQ :
            return {...state,isLoading:true}
        case POST_PATIENT_SUCCESS :
            return {...state, isLoading:false, isError:false, patients:[...state.patients,payload]}
        case POST_PATIENT_FAIL:
            return {...state, isError:true}
        default: 
            return state;   
    }
}