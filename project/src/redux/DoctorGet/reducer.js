import { GET_DOCTOR, PRODUCT_FAILURE, PRODUCT_GET_SUCCESS, PRODUCT_REQUEST, view } from "./actionType"

const initial = {
    isLoading : false,
    isError : false,
    product : [],
    doctorsData:[],
    viewHistory :[]
}

export const reducer = (state=initial,{type,payload}) => {
    switch(type){
        case GET_DOCTOR:
            //console.log(payload)
            return {...state, doctorsData:payload}
        case view:
            console.log(payload)
            return {...state, viewHistory:payload}
        case PRODUCT_REQUEST:
            return {...state, isLoading:true}
        case PRODUCT_GET_SUCCESS:
            return {...state, isLoading:false, product:payload}
        case PRODUCT_FAILURE :
            return {...state, isError:true, isLoading:false}
        default:
            return state
    }
}