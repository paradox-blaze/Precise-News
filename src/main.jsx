import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/Home.jsx'
import './index.css'
import Navbar from './components/Navbar.jsx'
import Cricket from './routes/Cricket.jsx'
import International from './routes/International.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import US from './routes/US.jsx'
import Sports from './routes/Sports.jsx'
import Weather from './routes/Weather.jsx'
import Wordle from './routes/Wordle.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <div className='bg-white dark:bg-black'>
      <Navbar />
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/cricket' element={<Cricket />} />
        <Route path='/international' element={<International />} />
        <Route path='/us' element={<US />} />
        <Route path='/sports' element={<Sports />} />
        <Route path='/wordle' element={<Wordle />} />
      </Routes>
    </div>
  </BrowserRouter>
)
