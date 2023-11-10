import { useState } from 'react'
import './App.css'
import Header from './Header.jsx'

function App() {
  const [winCount, setWinCount] = useState(10)
  const [loseCount, setLoseCount] = useState(5)

  return (
    <>
    <Header />
      <div className='score-board'>
        <div id='win-label' className='badge'>win</div>
        <div id='lose-label' className='badge'>lose</div>
        <span id="win-score">{winCount}</span>:<span id='lose-score'>{loseCount}</span>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((winCount) => winCount + 1)}>
          count is {winCount}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click an option!
      </p>
    </>
  )
}

export default App
