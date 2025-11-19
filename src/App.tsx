import './App.css'
import { Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Services from './pages/Services'
import Contact from './pages/Contact'
import AboutUs from './pages/About'
import References from './pages/References'
import WorkingModels from './pages/WorkingModels'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <NavBar />
      <main className="w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/references" element={<References />} />
          <Route path="/working-models" element={<WorkingModels />} />
        </Routes>
        <Footer />
      </main>
    </div>
  )
}

export default App
