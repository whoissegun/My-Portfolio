import { useState } from 'react'
import Navbar from './Components/Navbar'
import './App.css'
import Hero from './Components/Hero'
import Skills from './Components/Skills'
import Projects from './Components/Project'
function App() {

  return (
    <div className='bg-[#082f49] text-white'>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" />
      <link href="https://fonts.googleapis.com/css2?family=Montserrat&family=Poppins&family=Sofia&display=swap" rel="stylesheet"></link>
      <Navbar /> 
      <Hero />
      <Skills />
      <Projects />
    </div>
  )
}

export default App
