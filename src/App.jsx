import { useState } from 'react'
import './App.css'

function App() {
  const [clicks, setClicks] = useState(0)

  return (
    <div className="app">
      <h1>Hello, World!</h1>
      <p>Welcome to the <strong>Ppp</strong> React app.</p>
      <button onClick={() => setClicks(c => c + 1)}>
        Clicked {clicks} {clicks === 1 ? 'time' : 'times'}
      </button>
    </div>
  )
}

export default App
