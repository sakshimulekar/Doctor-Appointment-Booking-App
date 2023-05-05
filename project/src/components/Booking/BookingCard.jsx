import React from 'react'
import { Box, Button, ButtonGroup } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getDoctorData } from '../../redux/DoctorGet/action'
import { delDoctor } from '../../redux/BookingReducer/action'

export const BookingCard = ({ id,name,location,profile,image,fees,waiting_time,status,rating,description }) => {

  const dispatch = useDispatch()

  // const handel = (id) => {
  //   dispatch(getDoctorData(id))
  //   console.log(id)

  // }

  // const handleDelete = () => {
    
  // }
  return (
    <div className='card'>
      <Box display="flex" alignItems="center" boxShadow='dark-lg' m='5' p='15' rounded='md' bg='white'>
        <Box width="30%" rounded='md'>
          <img className='img' src={image} alt={name} />
        </Box>
        <Box width="60%" pl="10"  >
          <h3>{name}</h3>
          <h3>{profile}</h3>
          <h3>Fees:{fees}</h3>
          <h3>Waiting Time :{waiting_time}</h3>
          <h3>Hotline:{'91' + Date.now() % 1000}</h3>
          <Box display={"flex"} justifyContent='space-between'>


            {/* <Button isDisabled={!status} bgColor={status ? "#61876e " :"#a4a480"}><Link to={`/edit/${id}`} style={{textDecoration:"none"}}>Book An Appointment</Link></Button>  */}


            <Button 
            onClick={() => dispatch(getDoctorData({
              id,
              name,
              profile,
              image,
              fees,
              waiting_time,
              status,
              location,
              rating,
              description}))}
              >
              Book an appintment
              </Button>
            {/* <Button onClick={() => handleDelete(id)}>DELETE</Button> */}



            <Button color='#61876e'>Call</Button>
          </Box>
        </Box>
      </Box>
    </div>
  )
}
