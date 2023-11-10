import { useState } from 'react'
import './App.css'
import Header from './Header.jsx'
import Words from '../data/data.json'
import { random } from 'lodash';
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
  const getMaxLength = (maxLength) => {return (Math.ceil(Math.random()*maxLength))+2};
  const [wordLength, getWordLength] = useState(getMaxLength(maxLength));

  // consists of a 4-element array of an array. At index getWordIndex[i] (0<=i<=3), 
  // getWordIndex[i][0] is the word, getWordIndex[i][1] is an array of clues for that word 
  const getRandomWords = (wordLength) => {
    return [getRandomWord(wordLength),getRandomWord(wordLength),getRandomWord(wordLength),getRandomWord(wordLength)]
  };
  const [wordsAndClues, getNewWords] = useState(getRandomWords(wordLength));

  // generate random placement for answer in position
  const getWinPosition = () => {return Math.floor(Math.random()*4)};
  const [winPosition, getNewWinPosition] = useState(getWinPosition);

  // generate random placement for answer in position
  const setupNextWord = () => {
    let buttons = document.querySelectorAll('button');
      // buttons.forEach(btn => {
      //   btn.disable;
      // });
    setTimeout(() => {
      getWordLength((wordLength) => wordLength = getMaxLength(maxLength));
      getNewWords((wordsAndClues) => wordsAndClues = getRandomWords(wordLength));
      getNewWinPosition((winPosition) => winPosition = getWinPosition());
      buttons.forEach(btn => {
        btn.blur();
       //btn.enable;
        
      });
    }, 1500);
  };

  let buttonDiv = (win = 0, index) => {
    if (win) {
      return (
          <button className='correctAns' 
            onClick={() => {
                  setWinCount((winCount) => winCount + 1);
                  setupNextWord();
          }}>
          {wordsAndClues[index][0]} 
          </button>
      )
    }
    else {
      return (
          <button onClick={() => {
            setLoseCount((loseCount) => loseCount + 1)
            setupNextWord();
          }}>
          {wordsAndClues[index][0]}
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
      <h1>{wordsAndClues[winPosition][0]}</h1>
      
      <div className="buttons-container">
        <div className="btn">
          {winPosition == 0 ? buttonDiv(1, 0) : buttonDiv(0, 0)}
        </div>
        <div className="btn">
          {winPosition == 1 ? buttonDiv(1, 1) : buttonDiv(0, 1)}
        </div>
        <div className="btn">
          {winPosition == 2 ? buttonDiv(1, 2) : buttonDiv(0, 2)}
        </div>
        <div className="btn">
          {winPosition == 3 ? buttonDiv(1, 3) : buttonDiv(0, 3)}
        </div>
        
      </div>
      
      <p className="read-the-docs">
        Click an option!
      </p>
    </>
  )
}

export default App
