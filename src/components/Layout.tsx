import React from 'react'
import { Navbar } from './Navbar'
import { Outlet } from 'react-router-dom'
import { Footer } from './Footer'
import { useThemeContext } from './contexts/ThemeContextProvider'

export const Layout = () => {

    const {darkTheme, setDarkTheme} = useThemeContext();

  return (
    <>
        <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme}></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
    </>
  )
}
