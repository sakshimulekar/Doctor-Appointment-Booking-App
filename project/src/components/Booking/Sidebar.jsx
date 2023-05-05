import React from 'react'
import { Checkbox, CheckboxGroup,Text,Box,VStack } from '@chakra-ui/react'
export const Sidebar = () => {
  return (
    <div>
     <Box>
        <Box>
        Filters
        </Box>
        <Box >
        <Text fontSize="xl">Filter by Category</Text>
        <VStack >
          <Box>
        <input type='checkbox' />
        <label>Heart</label>
        </Box>
        <Box>
        <input type='checkbox' />
        <label>Brain</label>
        </Box>
        <Box>
        <input type='checkbox' />
        <label>Thorax</label>
        </Box>
        <Box>
        <input type='checkbox' />
        <label>Female Disorder</label>
        </Box>
        <Box>
        <input type='checkbox' />
        <label>Bone</label>
        </Box>
        </VStack>
          </Box>
          
        <Box>
        <Text fontSize="xl">Filter By Gender</Text>
        <VStack alignItems='center'>
        <Box>
        <input type='checkbox' />
        <label>Male</label>
        </Box>
        <Box>
        <input type='checkbox' />
        <label>Female</label>
        </Box>
       </VStack>
          </Box>
         
        <Box>
        <Text fontSize="xl">Sort By Fees</Text>
        <div>
          <div>
          <input type="radio"/>
          <label>Low to High</label>
          </div>
          <div>
          <input type="radio"/>
          <label>High to Low</label>
          </div>
        </div>

          </Box>
  

      </Box>




    </div>
  )
}
