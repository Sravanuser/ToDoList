import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './Home.jsx'
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider} from "react-router-dom"

const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path = "/" element={<App/>}>
        <Route path = "/" element={<Home/>}/>
      </Route>
    )
)
createRoot(document.getElementById('root')).render(
      <RouterProvider router={router}/>
)