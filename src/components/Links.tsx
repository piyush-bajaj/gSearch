import React from 'react'
import { NavLink } from 'react-router-dom'

const Links = () => {

    const links = [
        {url:'/search', text:'🔍 All'},
        // {url:'/news', text:'📰 News'},
        {url:'/images', text:'📸 Images'},
        {url:'/videos', text:'🎥 Videos'}
    ]
  return (
    <div className='flex items-center mt-4'>
        {links.map(({url, text}, index) => (
            <NavLink key={index} to={url} end className={({isActive}) => isActive ? 'mb-0 m-2 text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2' : 'mb-0 m-2'}>
                {text}
            </NavLink>
        ))}
    </div>
  )
}

export default Links