import { DOCTOR_FAILURE, DOCTOR_REQUEST, GET_DOCTOR_SUCCESS } from "./actionType"



const initState={
    doctors:[],
    isLoading:false,
    isError:false,
   
}

export const reducer=(state=initState,{type,payload})=>{
    switch(type){
        case DOCTOR_REQUEST:{
            return{
                ...state,
                isLoading:true,
                isError:false

            }
        }
        case GET_DOCTOR_SUCCESS:{
            return{
                ...state,
                isLoading:false,
                doctors:payload

            }
        }
        case DOCTOR_FAILURE:{
            return{
                ...state,
                isLoading:false,
                isError:true

            }
        }

        default:{
            return state
        }
    }
}