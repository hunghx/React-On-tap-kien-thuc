import React from 'react'
import { Outlet } from 'react-router'

export const Home = () => {
  return (
    <div>
        <h1> Đây là trang cho người dùng</h1>
        <Outlet/>
    </div>
  )
}
