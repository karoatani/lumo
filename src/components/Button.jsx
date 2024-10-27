import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";

const Button = ({buttonText, bgColor}) => {
  const color = `bg-[${bgColor}]`
  console.log(color);
  return (
    <div className={`${color} text-white uppercase font-bold py-3 px-5 flex rounded-full items-center shadow-xl`}>
        <IoIosArrowRoundForward  className='mr-2'/>
        <button >{buttonText}</button>
    </div>
  )
}

export default Button