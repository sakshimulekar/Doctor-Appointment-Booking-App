import { GET_DOCTOR } from "./actionType"

const initial = {
    doctorsData:[]
}

export const reducer = (state=initial,{type,payload}) => {
    switch(type){
        case GET_DOCTOR:
            
            return {...state, doctorsData:payload}

            console.log(payload)
        default:
            return state
    }
}