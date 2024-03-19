import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Paginas/Home.jsx'
import Projects from './Paginas/Projects.jsx';
import Resume from './Paginas/Resume.jsx'


function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />  
          <Route path="/projects" element={<Projects />} />  
          <Route path="/resume" element={<Resume />} />        
        </Routes>        
      </Router>
    </>
  )
}

export default App
