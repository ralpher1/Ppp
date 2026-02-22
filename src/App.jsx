import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import About from './pages/About'
import './App.css'

function Home() {
  const [clicks, setClicks] = useState(0)

  return (
    <div className="home">
      <h1>Hello, World!</h1>
      <p>Welcome to the <strong>Ppp</strong> React app.</p>
      <button onClick={() => setClicks(c => c + 1)}>
        Clicked {clicks} {clicks === 1 ? 'time' : 'times'}
      </button>
    </div>
  )
}

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}

export default App
