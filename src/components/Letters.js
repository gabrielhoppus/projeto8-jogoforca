function Letters({  letterState,
                    setLetter,
                    selectedLetter,
                    targetWord,
                    targetPuzzle,
                    setPuzzle,
                    setErrorCount,
                    errorCount
                }){

    const alphabet = [  "a", "b", "c", "d", "e", "f", "g", "h", "i",
                        "j", "k", "l", "m", "n", "o", "p", "q", "r",
                        "s", "t", "u", "v", "w", "x", "y", "z"
                        ];

    const newTarget = [...targetWord]
    const newPuzzle = [...targetPuzzle]
    let newErrorCount = errorCount
                        
    function clickedLetter(letter){
        if (!selectedLetter.includes(letter)){
            const letters = [...selectedLetter, letter];
            setLetter(letters)
        }
        if(newTarget.includes(letter)){
            for (let i = 0; i < newTarget.length; i++){
                if (newTarget[i] === letter){
                    newPuzzle[i] = letter
                }
            }
            setPuzzle(newPuzzle)
        }else{
            if(newErrorCount <= newTarget.length){
                newErrorCount++
                setErrorCount(newErrorCount)
            }
        }
    }

    return (
        <div className={`buttons`}>
            {alphabet.map((letter) => 
                <button 
                    className={`letters ${selectedLetter.includes(letter) ? "disabled" : letterState}`} 
                    onClick={() => clickedLetter(letter)} 
                    key={letter}>
                    {letter.toUpperCase()}
                </button>
                )}
        </div>
    )
};

export default Letters;