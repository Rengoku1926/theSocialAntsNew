import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Layout from './Layout.jsx'
import Home from './Components/Layout/Home/Home.jsx'
import AboutUs from './Components/Layout/AboutUs/AboutUs.jsx'
import ContactUs from './Components/Layout/ContactUs/ContactUs.jsx'
import OurWork from './Components/Layout/OurWork/OurWork.jsx'
import OurServices from './Components/Layout/Services/OurServices.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<AboutUs/>}/>
      <Route path='ourWork' element={<OurWork/>}/>
      <Route path='services' element={<OurServices/>}/>
      <Route path='contactUs' element={<ContactUs/>}/>

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
