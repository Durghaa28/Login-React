
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import App from './App.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Success from './success'
import Fail from './fail'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/success' element={<Success />} />
      <Route path='/fail' element={<Fail />} />
    </Routes>
  </BrowserRouter>
)

