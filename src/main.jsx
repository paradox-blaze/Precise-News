import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/Home.jsx'
import './index.css'
import Navbar from './components/Navbar.jsx'
import Cricket from './routes/Cricket.jsx'
import International from './routes/international.jsx'
import Wordle from './routes/wordle.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <div className='  dark:bg-black'>
      <Navbar />
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/cricket' element={<Cricket />} />
        <Route path='/international' element={<International />} />
        <Route path='/wordle' element={<Wordle />} />
      </Routes>
    </div>
  </BrowserRouter>
)
