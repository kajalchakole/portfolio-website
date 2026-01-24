import './App.css'
import Navbar from './../components/layout/Navbar';
import Hero from '../pages/Hero';
import About from '../pages/About';
import Projects from '../pages/Projects';
import ScrollToTop from '../pages/ScrollToTop';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import { usePageView } from './usePageView';
import CaseStudies from '../pages/CaseStudies';
import IngestionCaseStudy from '../pages/case-studies/IngestionCaseStudy';


function App() {
  usePageView(import.meta.env.VITE_ANALYTICS_URL);

  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/ingestion-case-study" element={<IngestionCaseStudy />} />
      </Routes>
    </>
  )
}

export default App
