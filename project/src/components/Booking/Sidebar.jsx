
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

  )
}
