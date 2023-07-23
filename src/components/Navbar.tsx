import React from 'react'
import { Link } from 'react-router-dom'
import { Search } from './Search';


type NavbarProps = {
    darkTheme:boolean,
    setDarkTheme:Function
};

export const Navbar = ({darkTheme, setDarkTheme}: NavbarProps) => {
  return (
    <>
      <div className='p-5 pb-0 flex flex-wrap justify-between sm:justify-center items-center border-b-2 border-gray-200 dark:border-gray-400'>
          <div className='flex justify-between items-center w-screen space-x-2'>
              <Link to="/">
                  <p className='text-2xl bg-blue-500 font-bold text-white px-1 py-2 rounded dark:bg-gray-500 dark:text-gray-900'>GSearch 🔎</p>
              </Link>
              <button type='button' onClick={() => setDarkTheme(!darkTheme)} className='text-xl dark:bg-gray-50 text-gray-900 bg-white rounded-full px-2 py-1 hover:shadow-lg'>{darkTheme ? 'Dark 🌙':'Light 💡'}</button>
          </div> 
          <Search></Search>         
      </div>
    </>
  )
}
