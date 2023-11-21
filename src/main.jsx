import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/Home.jsx'
import './index.css'
import Navbar from './components/Navbar.jsx'
import Cricket from './routes/Cricket.jsx'
import International from './routes/international.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import US from './routes/Us.jsx'
import Sports from './routes/sports.jsx'
import Weather from './routes/Weather.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <div className='  dark:bg-black'>
      <Navbar />
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/cricket' element={<Cricket />} />
        <Route path='/international' element={<International />} />
        <Route path='/us' element={<US />} />
        <Route path='/sports' element={<Sports />} />
        <Route path='/weather' element={<Weather />} />
      </Routes>
    </div>
  </BrowserRouter>
)
