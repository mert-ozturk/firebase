import React from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Main from './pages/Main'
import Login from './pages/Login'
import Navbar from './components/Navbar'
const App = () => {
  return (
      <Router> 
        <Navbar/>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path='/login' element={<Login/>} />
        </Routes>
      </Router>

  )
}

export default App