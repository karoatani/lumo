import React from 'react'
import { CgMenuRight } from "react-icons/cg";

const Nav = () => {
  return (
    
    <div className='flex justify-between p-10 items-center'>
        <div>
            <img src="/logos/logo.svg" alt="logo" />
        </div>
        <div>
        <CgMenuRight className='text-5xl'/>

        </div>

    </div>
  )
}

export default Nav