import { POST_PATIENT_FAIL, POST_PATIENT_REQ, POST_PATIENT_SUCCESS } from "./actionType"
import axios from "axios";

const url = "http://localhost:8080/patients";

export const postPatient = (obj) => (dispatch) => {
    dispatch({type:POST_PATIENT_REQ})
    axios.post(url,obj)
    .then((res)=>{
        console.log(res)
        return dispatch({type:POST_PATIENT_SUCCESS,payload:res.data})
    })
    .catch(()=>{
        return dispatch({type:POST_PATIENT_FAIL})
    })
}