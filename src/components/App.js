import Guess from "./Guess.js";
import Game from "./Game.js";
import Letters from "./Letters.js";
import palavras from "../palavras.js";
import { useState } from "react";

function App() {

  const [errorCount, setErrorCount] = useState(0);
  const [image, setImage] = useState(errorCount);
  const [inputState, setInputState] = useState(true);
  const [letterState, setLetterState] = useState("disabled");
  const [buttonState, setButtonState] = useState("disabled");
  const [wordState, setWordState] = useState("hidden");
  const [wordList] = useState(palavras)
  const [wordSeed, setSeed] = useState(Math.floor(Math.random() * palavras.length))
  const [word, setWord] = useState("");
  const [selectedLetter, setLetter] = useState([])
  const [targetWord, setTarget] = useState([])
  const [targetPuzzle, setPuzzle] = useState([])
  const [guessInput, setInput] = useState("")
  const [statusColor, setColor] = useState("neutral")
  const [visualState, setVisualState] = useState("disabled")

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
      wordSeed={wordSeed}
      setSeed={setSeed}
      wordList={wordList}
      selectedLetter={selectedLetter}
      setTarget={setTarget}
      setPuzzle={setPuzzle}
      targetPuzzle={targetPuzzle}
      statusColor={statusColor}
      setColor={setColor}
      setInput={setInput}
      setLetter={setLetter}
      setVisualState={setVisualState}
      />
      <Letters 
      letterState={letterState}
      setLetterState={setLetterState}
      selectedLetter={selectedLetter}
      setLetter={setLetter}
      targetWord={targetWord}
      targetPuzzle={targetPuzzle}
      setPuzzle={setPuzzle}
      setErrorCount={setErrorCount}
      errorCount={errorCount}
      setButtonState={setButtonState}
      setInputState={setInputState}
      setColor={setColor}
      visualState={visualState}
      setVisualState={setVisualState}
      />
      <Guess
      inputState={inputState}
      buttonState={buttonState}
      guessInput={guessInput}
      setInput={setInput}
      word={word}
      targetPuzzle={targetPuzzle}
      targetWord={targetWord}
      setPuzzle={setPuzzle}
      setErrorCount={setErrorCount}
      setLetterState={setLetterState}
      setButtonState={setButtonState}
      setInputState={setInputState}
      setColor={setColor}
      />
    </div>
  );
}

export default App;
