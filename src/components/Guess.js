function Guess({    inputState,
                    buttonState,
                    guessInput,
                    setInput,
                    word,
                    targetPuzzle,
                    targetWord,
                    setPuzzle,
                    setErrorCount,
                    setButtonState,
                    setLetterState,
                    setInputState,
                    setColor,
                    setVisualButton,
                    visualButton,
                    setVisualState
                    }){

    let correctGuess = [...targetPuzzle];
    const correctWordArray = [...targetWord];
    const wordComparison = correctWordArray.join("")
    
    function makeGuess(){
        if (guessInput === wordComparison){
            correctGuess = correctWordArray;
            setPuzzle(correctGuess);
            setLetterState("disabled");
            setVisualState("disabled")
            setVisualButton("disabled");
            setButtonState(true);
            setInputState(true);
            setColor("win");
        }else{
            setErrorCount(6);
            setPuzzle(correctWordArray);
            setVisualButton("disabled");
            setVisualState("disabled")
            setLetterState("disabled");
            setButtonState(true);
            setInputState(true);
            setColor("loss");
        }
    }

    return (
        <div className="input_container">
            <span>Já sei a palavra!</span>
            <input
                data-test="guess-input"
                disabled={inputState ? inputState : false} 
                value={guessInput}
                onChange={e => setInput(e.target.value)}
                >                
            </input>
            <button data-test="guess-button" onClick={makeGuess} className={visualButton} disabled={buttonState}>Chutar</button>
        </div>
    )
};

export default Guess;