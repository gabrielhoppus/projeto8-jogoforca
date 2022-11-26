import Guess from "./Guess.js"
import Game from "./Game.js"
import Letters from "./Letters.js"
import palavras from "../palavras.js"

function App() {
  return (
    <div>
      <Game />
      <Letters />
      <Guess />
    </div>
  );
}

export default App;
