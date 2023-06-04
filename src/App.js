import React from 'react'
import { BrowserRouter as Router,  Routes, Route, Link} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Profile from './Pages/Profile'
import Bug from './Pages/Bug'

function App() {
  return (
    <Router>
      <nav>
       <Link to="/home">Home</Link>
       <Link to="/profile">Profile</Link>
       <Link to="/about">About</Link>
       <Link to="*">Bug</Link>
      </nav>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/profile/:username" element={<Profile/>}/>
        <Route path="" element={<Bug/>}/>
      
      </Routes>

    </Router>
  )
}

export default App