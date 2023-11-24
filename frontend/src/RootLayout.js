import React from 'react'
import { Outlet } from 'react-router-dom'
import NavigationBar from './components/navigationbar/NavigationBar'
import Footer from './components/footer/Footer'
function RootLayout() {
  return (
    <div>

    {/*NagivationBar */}
    <NavigationBar />
    {/*Placeholder */}
    <Outlet />
    {/*Footer */}
    <Footer />
    
    </div>

  )
}

export default RootLayout
