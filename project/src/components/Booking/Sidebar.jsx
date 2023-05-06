import React, { useEffect, useState } from 'react'
import { Checkbox, CheckboxGroup,Text,Box,VStack } from '@chakra-ui/react'
import { useSearchParams } from 'react-router-dom'
export const Sidebar = () => {

const [searchparams,setSearchparams]=useSearchParams()

const initGender=searchparams.getAll('gender')

const initSpeciality=searchparams.getAll('category')

const initSort=searchparams.getAll('order')
console.log(initSort)
const [gender,setGender]=useState(initGender || [])

const [category,setCategory]=useState(initSpeciality || [])

const [sort,setSort]=useState(initSort || '')
console.log(sort)

useEffect(()=>{
  let params={
    gender,
    category,
  }
  sort && (params.order=sort)
  
  setSearchparams(params)
},[gender,category,sort])
console.log(searchparams)
//handel Function for Filter and Sorting
const handelSort=(e)=>{
  const {value}=e.target;
  setSort(value)
}


const handelSpeciality=(e)=>{
  const {value}=e.target
  let newArray=[...category]
  if (newArray.includes(value)){
    newArray=newArray.filter((el)=>{ return el!==value})
}
else {
  newArray.push(value)
}
  setCategory(newArray)
}


const handelGender=(e)=>{
  const {value}=e.target
  let newGender=[...gender]
  if (newGender.includes(value)){
    newGender=newGender.filter((el)=>{ return el!==value})
}
else {
     newGender.push(value)
}
setGender(newGender)
}









  return (
    <div>
     <Box>
        <Box>
        Filters
        </Box>
        <Box >
        <Text fontSize="xl">Filter by Speciality</Text>
        <VStack >
          <Box>
        <input type='checkbox' 
        value={'heart'} 
        onChange={handelSpeciality}
        checked={category.includes('heart')}     
        />
        <label>Heart</label>
        </Box>
        <Box>
        <input type='checkbox' 
        value={'brain'} 
        onChange={handelSpeciality}
        checked={category.includes('brain')} 
        />
        <label>Brain</label>
        </Box>
        <Box>
        <input type='checkbox' 
        value={'dentist'} 
        onChange={handelSpeciality}
        checked={category.includes('dentist')} 
        />
        <label>Oral</label>
        </Box>
        <Box>
        <input type='checkbox' 
        value={'female disorder'} 
        onChange={handelSpeciality}
        checked={category.includes('female disorder')} 
        />
        <label>Female Disorder</label>
        </Box>
        <Box>
        <input type='checkbox' 
        value={'bone'} 
        onChange={handelSpeciality}
        checked={category.includes('bone')}/>
        <label>Bone</label>
        </Box>
        </VStack>
          </Box>
          
        <Box>
        <Text fontSize="xl">Filter By Gender</Text>
        <VStack alignItems='center'>
        <Box>
        <input type='checkbox' 
        value={'male'} 
        onChange={handelGender}
        checked={gender.includes('male')}
        />
        <label>Male</label>
        </Box>
        <Box>
        <input type='checkbox' 
        value={'female'} 
        onChange={handelGender}
        checked={gender.includes('female')}
        />
        <label>Female</label>
        </Box>
       </VStack>
          </Box>
         
        <Box>
        <Text fontSize="xl">Sort By Fees</Text>
        <div onChange={handelSort}>
          <div>
          <input type="radio" 
          value={'asc'} 
          name='order'
          defaultChecked={sort==='asc'}
          />
          <label>Low to High</label>
          </div>
          <div>
          <input type="radio"
          value={'desc'} 
          name='order'
          defaultChecked={sort==='desc'}
          />
          <label>High to Low</label>
          </div>
        </div>

          </Box>
  

      </Box>




    </div>
  )
}
