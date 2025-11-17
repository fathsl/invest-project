import './App.css'
import { Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Services from './pages/Services'
import Contact from './pages/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <NavBar />
      <main className="w-full px-4 sm:px-6 lg:px-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </main>
    </div>
  )
}

export default App
