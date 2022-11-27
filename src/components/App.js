import Guess from "./Guess.js"
import Game from "./Game.js"
import Letters from "./Letters.js"
import palavras from "../palavras.js"
import { useState } from "react"

function App() {

  const [errorCount, setErrorCount] = useState(0)
  const [image, setImage] = useState(errorCount)
  const [inputState, setInputState] = useState(true)
  const [letterState, setLetterState] = useState("disabled")
  const [buttonState, setButtonState] = useState("disabled")
  const [wordState, setWordState] = useState("hidden")
  const randomWord = Math.floor(Math.random() * palavras.length)
  const [word, setWord] = useState(palavras[randomWord])

  return (
    <div>
      <Game 
      image={image}
      setImage={setImage}
      setErrorCount={setErrorCount}
      errorCount={errorCount}
      setInputState={setInputState}
      setLetterState={setLetterState}
      setButtonState={setButtonState}
      setWordState={setWordState}
      wordState={wordState}
      word={word}
      setWord={setWord}
      />
      <Letters 
      letterState={letterState}
      />
      <Guess
      inputState={inputState}
      buttonState={buttonState}
      />
    </div>
  );
}

export default App;
