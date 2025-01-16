import { useEffect, useState } from 'react'
import HomePage from './pages/homepage'
import Newspage from './pages/newspage'
import SportPage from "./pages/sportspage"
import Bussiness from './pages/bussiness'
import HealthPage from './pages/health'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './pages/NavBar'


function App() {
  
  
   return(
  
    
    <main>
      <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/news" element={<Newspage />} />
          <Route path="/sport" element={<SportPage/>} />
          <Route path="/bussiness" element={<Bussiness/>} />
          <Route path="/health" element={<HealthPage/>} />
          
      </Routes>
      </BrowserRouter>
    </main>
    
  
  
  )
    

    

  
}

export default App
