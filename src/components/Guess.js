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
                    setColor
                    }){

    let correctGuess = [...targetPuzzle];
    const correctWordArray = [...targetWord];
    const wordComparison = word;
    



    function makeGuess(){
        if (guessInput === wordComparison){
            correctGuess = correctWordArray;
            setPuzzle(correctGuess);
            setLetterState("disabled");
            setButtonState("disabled");
            setInputState(true);
            setColor("win");
        }else{
            setErrorCount(6);
            setPuzzle(correctWordArray);
            setLetterState("disabled");
            setButtonState("disabled");
            setInputState(true);
            setColor("loss");
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