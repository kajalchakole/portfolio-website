import './App.css'
import Navbar from './../components/layout/Navbar';
import Hero from '../pages/Hero';
import About from '../pages/About';
import Projects from '../pages/Projects';
import ScrollToTop from '../pages/ScrollToTop';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';


function App() {

  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
    </>
  )
}

export default App
