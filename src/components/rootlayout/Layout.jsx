import React from 'react'
import Menu from '../Menu'
import Footer from '../footer/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
        <Menu/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default Layout