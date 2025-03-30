import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ReactDom from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import React from 'react'
import Contact from './components/Contact/Contact.jsx'
import Github from './components/Github/GIthub.jsx'



// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
// {
//   path: "",
//   element: <Home />,
// },
// {
//   path: "about",
//   element:<About/>,
// },
// {
//   path: "contact",
//   element:<Contact/>,
// }

//     ]

//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = '/' element= {<Layout/>}>
      <Route path = "" element = {<Home/>}/>
      <Route path = "about" element = {<About/>}/>
      <Route path = "contact" element = {<Contact/>}/>
      <Route path= "github" element = {<Github/>}/>
    </Route>

  )


)
ReactDom.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
