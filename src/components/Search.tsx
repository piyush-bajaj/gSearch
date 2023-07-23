import React, { useEffect, useState } from 'react'
import Links from './Links'
import { useResultContext } from './contexts/ResultContextProvider'
import { useDebounce } from 'use-debounce';

export const Search = () => {

    const {setSearchTerm} = useResultContext();
    const [text, setText] = useState('');
    const [debounceValue] = useDebounce(text, 1000);

    useEffect(() => {
        setSearchTerm(debounceValue)
      }, [debounceValue]);

  return (
    <div className="relative sm:ml-48 md:ml-72 sm:-mt-10 mt-3">
        <input type='text' value={text} className='w-80 h-10 dark:bg-gray-200 border rounded-full shadow-sm outline-none p-6 text-black hover:shadow-lg sm:w-96' placeholder='Enter something to search' onChange={(e) => setText(e.target.value)}/>
        {text && (
            <button type='button' className='absolute top-2 right-4 text-2xl text-gray-500' onClick={() => setText('')}>
                X
            </button>
        )}
        <Links></Links>
    </div>
  )
}
