import { useState } from 'react'
import './App.css'
import { Square } from './components/Square'
import { Input } from './components/Input';

function App() {

  const wordList = ['apple', 'train', 'react', 'hello', 'world', 'peace', 'water', 'dance', 'study', 'happy'];

  const [word, setWord] = useState(() => {
      const randomWord = Math.floor(Math.random() * wordList.length); 
      return wordList[randomWord].split(''); 
  });

  const squares = word.map((letter, index) => (
    <Square key={index}>
      {letter}
    </Square>
  ))

  return (
    <>
      <h1>jueguito del ahorcao</h1>
      <div className='squares'>
        {squares}
      </div>

    </>
  )
}

export default App
