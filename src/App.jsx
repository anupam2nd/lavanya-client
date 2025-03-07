import React from 'react'
import Home from './pages/Home'
import Navbar from './component/Navbar'
import { RouterProvider } from 'react-router-dom'
import router from './router'
 

export default function App() {
  return <RouterProvider router={router} />
}
