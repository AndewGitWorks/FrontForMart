import React from 'react'
import NavigationBar from '../components/NavigationBar'
import { Outlet } from 'react-router'
import AuthModal from '../pages/AuthModal'
import { useState } from 'react'
const RootLayout = () => {
  const [authOpen, setAuthOpen] = useState(false);
  return (
    <div>
        <NavigationBar onLoginClick={()=>setAuthOpen(true)}/>
        {authOpen && (
        <AuthModal onClose={() => setAuthOpen(false)} />)}
        <div className="container-global">
        <Outlet/>
        </div>
    </div>
  )
}

export default RootLayout