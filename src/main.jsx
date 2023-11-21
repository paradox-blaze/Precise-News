import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/Home.jsx'
import './index.css'
import Navbar from './components/Navbar.jsx'
import Business from './routes/Business.jsx'
import Technology from './routes/Technology.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import US from './routes/US.jsx'
import Sports from './routes/Sports.jsx'
import Footer from './components/Footer.jsx'
import Wordle from './routes/Wordle.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <div className='bg-white dark:bg-black'>
      <Navbar />
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/business' element={<Business />} />
        <Route path='/technology' element={<Technology />} />
        <Route path='/us' element={<US />} />
        <Route path='/sports' element={<Sports />} />
        <Route path='/wordle' element={<Wordle />} />
      </Routes>
      <Footer />
    </div>
  </BrowserRouter>
)
