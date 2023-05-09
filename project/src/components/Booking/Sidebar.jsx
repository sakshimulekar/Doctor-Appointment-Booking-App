import React, { useEffect, useState } from 'react'
import { Checkbox, CheckboxGroup,Text,Box,VStack, Divider } from '@chakra-ui/react'
import { useSearchParams } from 'react-router-dom'
export const Sidebar = () => {

const [searchparams,setSearchparams]=useSearchParams()

const initGender=searchparams.getAll('gender')

const initSpeciality=searchparams.getAll('category')

const initSort=searchparams.getAll('order')
//console.log(initSort)
const [gender,setGender]=useState(initGender || [])

const [category,setCategory]=useState(initSpeciality || [])

const [sort,setSort]=useState(initSort || '')
//console.log(sort)

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
    <div >
     <Box p='15' m='5'>
        <Box bgColor='#365349' rounded='md' p='2'>
        <Text fontSize='2xl'color='#fafaf1'> Filters</Text>
        </Box>
        
        <Box p='3'>
        <Text fontSize="xl" >Filter By Speciality</Text>
        <VStack alignItems={"left"}>
          <Box>
        <input type='checkbox' 
        value={'heart'} 
        onChange={handelSpeciality}
        checked={category.includes('heart')} 
        style={{accentColor: '#365349'}}    
        />
        <label> Heart </label>
        </Box>
        <Box>
        <input type='checkbox' 
        value={'brain'} 
        onChange={handelSpeciality}
        checked={category.includes('brain')} 
        style={{accentColor: '#365349'}} 
        />
        <label> Brain </label>
        </Box>
        <Box>
        <input type='checkbox' 
        value={'dentist'} 
        onChange={handelSpeciality}
        checked={category.includes('dentist')} 
        style={{accentColor: '#365349'}} 
        />
        <label> Oral </label>
        </Box>
        <Box>
        <input type='checkbox' 
        value={'female disorder'} 
        onChange={handelSpeciality}
        checked={category.includes('female disorder')}
        style={{accentColor: '#365349'}}  
        />
        <label> Female Disorder </label>
        </Box>
        <Box>
        <input type='checkbox' 
        value={'bone'} 
        onChange={handelSpeciality}
        checked={category.includes('bone')}
        style={{accentColor: '#365349'}} 
        />
        <label> Bones </label>
        </Box>
        </VStack>
          </Box>
        <Divider/>  
        <Box p='3'>
        <Text fontSize="xl">Filter By Gender</Text>
        <VStack alignItems='left'>
        <Box>
        <input type='checkbox' 
        value={'male'} 
        onChange={handelGender}
        checked={gender.includes('male')}
        style={{accentColor: '#365349'}} 
        />
        <label> Male </label>
        </Box>
        <Box>
        <input type='checkbox' 
        value={'female'} 
        onChange={handelGender}
        checked={gender.includes('female')}
        style={{accentColor: '#365349'}} 
        />
        <label> Female </label>
        </Box>
       </VStack>
          </Box>
          <Divider />  
        <Box p='3'>
        <Text fontSize="xl">Sort By Fees</Text>
        <div onChange={handelSort}>
          <div>
          <input type="radio" 
          value={'asc'} 
          name='order'
          defaultChecked={sort==='asc'}
          style={{accentColor: '#365349'}} 
          />
          <label> Low to High </label>
          </div>
          <div>
          <input type="radio"
          value={'desc'} 
          name='order'
          defaultChecked={sort==='desc'}
          style={{accentColor: '#365349'}} 
          />
          <label> High to Low </label>
          </div>
        </div>

          </Box>
          <Divider/>
          <Text fontSize="xl" p='3'>Promo Code</Text>
          <Divider/>
          <Text fontSize="xl" p='3'>Examination Fees</Text>
          <Divider/>
          <Text fontSize="xl" p='3'>Entiry</Text>
         

      </Box>




    </div>
  )
}
