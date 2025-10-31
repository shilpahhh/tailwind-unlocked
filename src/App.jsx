
import { useState } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter, Route, Router, Routes} from 'react-router-dom';
import Nav from '../Nav';
import Launch from './Launch';
import Home from './home';
import About from './About';
import Footer from './Footer';




function App() {
  
  

  return (
    
      <>
      

      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/launch" element={<Launch/>}/>
        <Route path="/footer" element={<Footer/>}/>
      </Routes>
     </BrowserRouter>
    </>


  
  )
}

export default App
