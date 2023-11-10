import { useState } from 'react'
import './App.css'
import Header from './Header.jsx'
import Words from '../data/data.json'
//import useFetch from './useFetch';

function App() {
  const [winCount, setWinCount] = useState(0);
  const [loseCount, setLoseCount] = useState(0);
  
  const getRandomWord = (wordLength) => {
    const randomWord = Words[wordLength][Math.floor(Math.random()*Words[wordLength].length)];
    return [randomWord.word,randomWord.clues];
  }

  // generate words from length 3 to 15 inclusive
  const maxLength = 13;
  let wordLength = (Math.ceil(Math.random()*maxLength))+2;

  const getWord = getRandomWord(wordLength);
  const currentWord = getWord[0];
  const currentClues = getWord[1];

  // generate random placement for answer in position
  const winPosition = Math.ceil(Math.random()*4);
  
  let buttonDiv = (win = 0, winWord = "") => {
    if (win) {
      return (
      
          <button className='correctAns' onClick={() => setWinCount((winCount) => winCount + 1)}>
              {winWord}
          </button>
      )
    }
    else {
      return (
          <button onClick={() => setLoseCount((loseCount) => loseCount + 1)}>
              {getRandomWord(wordLength)[0]}
          </button>
      )
    }
  };

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
          {winPosition == 0 ? buttonDiv(1, currentWord) : buttonDiv(0, "")}
        </div>
        <div className="btn">
          {winPosition == 1 ? buttonDiv(1, currentWord) : buttonDiv(0, "")}
        </div>
        <div className="btn">
          {winPosition == 2 ? buttonDiv(1, currentWord) : buttonDiv(0, "")}
        </div>
        <div className="btn">
          {winPosition == 3 ? buttonDiv(1, currentWord) : buttonDiv(0, "")}
        </div>
        
      </div>
      
      <p className="read-the-docs">
        Click an option!
      </p>
    </>
  )
}

export default App
