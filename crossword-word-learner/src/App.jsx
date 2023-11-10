import { useState } from 'react'
import './App.css'
import Header from './Header.jsx'
import Words from '../../data/data.json'
//import useFetch from './useFetch';

function App() {
  const [winCount, setWinCount] = useState(0);
  const [loseCount, setLoseCount] = useState(0);
  
  const getRandomWord = (wordLength) => {
    const randomWord = Words[wordLength][Math.floor(Math.random()*Words[wordLength].length)];
    return [randomWord.word,randomWord.clues];
  }

  // generate words from length 2 to 10 inclusive
  const maxLength = 9;
  let wordLength = (Math.ceil(Math.random()*maxLength))+1;

  let currentWord = getRandomWord(wordLength)[0];
  let currentClues = getRandomWord(wordLength)[1];

  // generate random placement for answer in position
  const randomPosition = Math.ceil(Math.random()*4);
  
  //const {data: word, isPending, error} = useFetch('http://localhost:3000')

  return (
    <>
    <Header />
      <div className='score-board'>
        <div id='win-label' className='badge'>win</div>
        <div id='lose-label' className='badge'>lose</div>
        <span id="win-score">{winCount}</span>:<span id='lose-score'>{loseCount}</span>
      </div>
      <h1>{currentClues[0]}</h1>
      
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
