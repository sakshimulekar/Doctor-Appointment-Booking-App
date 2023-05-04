import { DOCTOR_REQUEST } from "./actionType"


export const getDoctor=(dispatch)=>{
    dispatch({type:DOCTOR_REQUEST})
    axios.get('http://localhost:8000/doctor')
}