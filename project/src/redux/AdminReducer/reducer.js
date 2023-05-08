import { GET_DOCTOR_FAIL, GET_DOCTOR_REQ, GET_DOCTOR_SUCC } from "./actionType";

const initial = {
    isLoading : false,
    isError : false,
    doctor : []
}
export const reducer = (state=initial, {type,payload}) => {
    switch(type){
        case GET_DOCTOR_REQ:
            return {...state,isLoading:true}
        case GET_DOCTOR_SUCC:
            return {...state,isLoading:false,doctor:payload}
        case GET_DOCTOR_FAIL:
            return {...state,isLoading:false,isError:true}
        default :
            return state;
    }
}