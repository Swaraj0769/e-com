import React from 'react'
import Category from './Category'
import SubCategory from './SubCategory'
import Homie from './Homie'

const home = () => {
  return (
    <div className='w-[100%] h-[92%] bg-amber-300 absolute flex justify-start'>
        <div className='w-90 h-[100%] bg-amber-500 m-10 relative flex flex-col'   >
            <Category />
            <SubCategory />

        </div>
        <hr />
        <div>
            <Homie />
        </div>
    </div>
  )
}

export default home