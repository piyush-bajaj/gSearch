import React from 'react'
import { Routes as DomRoute, Route } from 'react-router-dom'
import { Results } from './Results'
import { Layout } from './Layout'

export const Routes = () => {
  return (
    <div className='p-4'>
        <DomRoute>
            <Route path='/' element={<Layout />}>
                <Route index element={<Results />}/>
                <Route path='search' element={<Results />}/>
                <Route path='videos'  element={<Results />}/>
                <Route path='images'  element={<Results />}/>
            </Route>
        </DomRoute>
    </div>
  )
}
