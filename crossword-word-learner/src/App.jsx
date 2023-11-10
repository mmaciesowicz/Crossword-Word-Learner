import { useState } from 'react'
import './App.css'
import Header from './Header.jsx'
import Words from '../../data/data.json'
//import useFetch from './useFetch';

function App() {
  const [winCount, setWinCount] = useState(0)
  const [loseCount, setLoseCount] = useState(0)
  
  // console.log(Words[4][20])
  // const getRandomWord = (wordLength) => {
  //   return Words[wordLength][]
  // }
  
  let currentClue = "HI"
  //const {data: word, isPending, error} = useFetch('http://localhost:3000')

  //console.log(word[0]);

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
