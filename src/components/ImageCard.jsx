import React from 'react'

const ImageCard = ({url}) => {
  return (
    <div className=' rounded-[40px]'>
        <img src={url} alt="" className='bg-cover w-full rounded-[40px]'/>
    </div>
  )
}

export default ImageCard