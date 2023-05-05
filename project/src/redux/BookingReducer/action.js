import { DOCTOR_FAILURE, DOCTOR_REQUEST, GET_DOCTOR_SUCCESS } from "./actionType"
import axios from "axios"



export const delDoctor = (id) => (dispatch) => {
    // dispatch({ type: DOCTOR_DELETE })
    axios.delete(`http://localhost:8080/doctors/${id}`)
        .then(res => console.log(res))
        .catch(err => console.log(err))
}