import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import News from './pages/News'
import Register from './pages/Register'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<News />}></Route>
        <Route path='/news' element={<News />}></Route>
        <Route path='/register' element={<Register />}></Route>
      </Routes>
      <Footer />
    </Router>
    </>
  )
}

export default App
