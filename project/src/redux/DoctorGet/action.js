import { GET_DOCTOR, PRODUCT_FAILURE, PRODUCT_GET_SUCCESS, PRODUCT_REQUEST, view } from "./actionType"
import axios from "axios";

export const getDoctorData = (data)  => {
    console.log(data)
        return ({type:GET_DOCTOR,payload:data})
}

export const getData = (paramObj) => (dispatch) => {
    dispatch({type:PRODUCT_REQUEST})
    axios.get("http://localhost:8080/patients",paramObj)
    .then((res)=>{
        console.log(res.data)
        return dispatch({type:PRODUCT_GET_SUCCESS, payload:res.data})    
    })
    .catch((err)=>{
        console.log(err)
        return dispatch({type:PRODUCT_FAILURE})
    })
}

export const viewData = (data) => {
    console.log(data)
    return ({type:view, payload:data})
}