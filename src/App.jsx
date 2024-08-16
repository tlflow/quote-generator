
import { useState } from 'react'
import generateRandomInt from './utils/generateRandomInt'
import useFetchQuotes from './utils/fetchQuotes';
import Quote from './Quote'
import './App.css'

function App() {
  const [randomInt, setRandomInt] = useState(0);
  const quotes = useFetchQuotes();
  const noQuotes = quotes.length;

  function getRandomInt() {
    setRandomInt(generateRandomInt(0, noQuotes));
  }

  const quote = quotes[randomInt] || {};

  return (
    <div className="app">
      <Quote {...quote} />
      <button onClick={getRandomInt}>New Quote</button>
    </div>
  )
}

export default App
