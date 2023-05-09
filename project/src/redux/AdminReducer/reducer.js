import { ADD_DOCTOR_SUCC, DEL_DOCTOR_SUCC, EDIT_DOCTOR_FAIL, EDIT_DOCTOR_REQ, EDIT_DOCTOR_SUCC, GET_DOCTOR_FAIL, GET_DOCTOR_REQ, GET_DOCTOR_SUCC } from "./actionType";

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
        case EDIT_DOCTOR_SUCC :
            console.log(payload)
            return {...state,isLoading:false, doctor:payload}
        case DEL_DOCTOR_SUCC :
            console.log(payload)
            return {...state,isLoading:false}
        case ADD_DOCTOR_SUCC:
            console.log(payload)
            return {...state,isLoading:false,doctor:[...state.doctor,payload]}
        case GET_DOCTOR_FAIL:
            return {...state,isLoading:false,isError:true}
        
        // case EDIT_DOCTOR_REQ:
        //     return {...state,isLoading:true}
        
        // case EDIT_DOCTOR_FAIL :
        //     return {...state, isLoading:false, isError:true}
        default :
            return state;
    }
}