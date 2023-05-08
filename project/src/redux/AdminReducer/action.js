import axios from "axios"
import { GET_DOCTOR_FAIL, GET_DOCTOR_REQ, GET_DOCTOR_SUCC } from "./actionType"

export const getDoctor = () => (dispatch) => {
    dispatch({type:GET_DOCTOR_REQ})
    return axios.get("http://localhost:8080/doctors")
    .then((res)=>{
        console.log(res)
        return dispatch({type:GET_DOCTOR_SUCC,payload:res.data})
    })
    .catch((err)=>{
        console.log(err)
        return dispatch({type:GET_DOCTOR_FAIL})
    })
}