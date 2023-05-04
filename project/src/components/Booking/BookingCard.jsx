import React from 'react'
import { Button, ButtonGroup } from '@chakra-ui/react'
// "id": 2,
// "name": "Dr. John Doe",
// "image": "https://example.com/images/john-doe.jpg",
// "profile": "neurologist",
// "description": "Dr. John Doe is a neurologist with expertise in treating disorders of the brain and nervous system. He is dedicated to providing personalized care to his patients.",
// "waiting_time": 15,
// "rating": 4.7,
// "fees": "$350",
// "location": "456 Elm St, Anytown, USA",
// "status": false,
// "gender": "male",
// "category": "brain"
export const BookingCard = ({id,name,image,fees,waiting_time,status,rating,description}) => {
  return (
    <div className='card'>
    <img className='img' src={image} alt={name} />
    <h3>{name}</h3>
    <h3>{description}</h3>
    <h3>Fees:{fees}</h3>
    <h3>Waiting Time :{waiting_time}</h3>
    <h3>Hotline:{id}</h3>
    <Button disabled={status}>Book An Appointment</Button>

    </div>
  )
}
