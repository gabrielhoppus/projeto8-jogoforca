function Letters({  setLetter,
                    selectedLetter,
                    targetWord,
                    targetPuzzle,
                    setPuzzle,
                    setErrorCount,
                    errorCount,
                    setLetterState,
                    setButtonState,
                    setInputState,
                    setColor,
                    letterState,
                    visualState,
                    setVisualState,
                    setVisualButton
                }){

    const alphabet = [  "a", "b", "c", "d", "e", "f", "g", "h", "i",
                        "j", "k", "l", "m", "n", "o", "p", "q", "r",
                        "s", "t", "u", "v", "w", "x", "y", "z"
                        ];

    const newTarget = [...targetWord];
    const newPuzzle = [...targetPuzzle];
    let newErrorCount = errorCount;
                        
    function clickedLetter(letter){
        if (!selectedLetter.includes(letter)){
            const letters = [...selectedLetter, letter];
            setLetter(letters);
        }
        if(newTarget.includes(letter)){
            for (let i = 0; i < newTarget.length; i++){
                if (newTarget[i] === letter){
                    newPuzzle[i] = letter;
                }
            }
            setPuzzle(newPuzzle);
        }else{
            if(newErrorCount <= newTarget.length || newErrorCount < 6){
                newErrorCount++;
                setErrorCount(newErrorCount);
            }
        }
        if (newErrorCount === 6){
            setPuzzle(newTarget);
            setLetterState(true);
            setVisualState("disabled");
            setVisualButton("disabled");
            setButtonState("disabled");
            setInputState(true);
            setColor("loss");
        }else if(newPuzzle.toString() === newTarget.toString()){
            setLetterState(true);
            setVisualState("disabled");
            setVisualButton("disabled");
            setButtonState("disabled");
            setInputState(true);
            setColor("win");
        }
    }

    return (
        <div className={`buttons`}>
            {alphabet.map((letter) => 
                <button
                    disabled={!selectedLetter.includes(letter)? letterState : true}
                    data-test="letter"
                    className={`letters ${selectedLetter.includes(letter) ? "disabled" : visualState}`}
                    onClick={() => clickedLetter(letter)}
                    key={letter}>
                    {letter.toUpperCase()}
                </button>
                )}
        </div>
    )
};

export default Letters;