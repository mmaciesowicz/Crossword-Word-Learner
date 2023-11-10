import { useState } from 'react'
import './App.css'
import Header from './Header.jsx'

function App() {
  const [winCount, setWinCount] = useState(0)
  const [loseCount, setLoseCount] = useState(0)
  const currentClue = "CLUE"
  return (
    <>
    <Header />
      <div className='score-board'>
        <div id='win-label' className='badge'>win</div>
        <div id='lose-label' className='badge'>lose</div>
        <span id="win-score">{winCount}</span>:<span id='lose-score'>{loseCount}</span>
      </div>
      <h1>{currentClue}</h1>
      <div className="buttons-container">
        <div className="btn">
          <button className='correctAns' onClick={() => setWinCount((winCount) => winCount + 1)}>
              count is {winCount}
          </button>
        </div>
          
        <div className="btn">
          <button onClick={() => setLoseCount((winCount) => winCount + 1)}>
              count is {winCount}
          </button>
        </div>

        <div className="btn">
          <button onClick={() => setLoseCount((winCount) => winCount + 1)}>
              count is {winCount}
          </button>
        </div>

        <div className="btn">
          <button onClick={() => setLoseCount((winCount) => winCount + 1)}>
              count is {winCount}
          </button>
        </div>
      </div>
      
        
        
      <p className="read-the-docs">
        Click an option!
      </p>
    </>
  )
}

export default App
