import React from 'react'
import { Navber } from '../components/Shared/Navber/Navber'
import { Outlet } from 'react-router'

export const MainLayout = () => {
  return (
    <div>
      <Navber/>
      <Outlet/>
    </div>
  )
}
