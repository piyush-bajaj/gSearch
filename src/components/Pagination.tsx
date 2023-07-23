import { useState } from 'react'
import { useResultContext } from './contexts/ResultContextProvider';

export const Pagination = () => {
    const {page, setPage} = useResultContext();

  return (
    <div className='flex justify-center items-center space-x-2'>
        <button type='button' className='rounded-lg dark:bg-white bg-black dark:text-black text-white w-10' disabled={page === 1} onClick={() => setPage(page-1)}>&lt;--</button>
        <button type='button' className='rounded-lg dark:text-white text-black w-10'>{page}</button>
        <button type='button' className='rounded-lg dark:bg-white bg-black dark:text-black text-white w-10' disabled={page === 10} onClick={() => setPage(page+1)}>--&gt;</button>
    </div>
  )
}
