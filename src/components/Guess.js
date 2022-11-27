function Guess({inputState, buttonState, guessInput, setInput, word, targetPuzzle, targetWord, setPuzzle, setErrorCount}){

    let correctGuess = [...targetPuzzle]
    const correctWordArray = [...targetWord]
    const wordComparison = word
    



    function makeGuess(){
        if (guessInput === wordComparison){
            correctGuess = correctWordArray
            setPuzzle(correctGuess)
        }else{
            setErrorCount(6)
            setPuzzle(correctWordArray)
        }
    }

    return (
        <div className="input_container">
            <span>Já sei a palavra!</span>
            <input 
                disabled={inputState ? inputState : false} 
                value={guessInput}
                onChange={e => setInput(e.target.value)}
                >                
            </input>
            <button onClick={makeGuess} className={buttonState}>Chutar</button>
        </div>
    )
};

export default Guess;