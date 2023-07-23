import React from 'react'
import {Puff} from 'react-loader-spinner'

export const Loading = () => {
  return (
    <div className='flex justify-center items-center'>
        <Puff height={'100'}></Puff>
    </div>
  )
}
