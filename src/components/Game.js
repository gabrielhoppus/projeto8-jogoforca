function Game({ image, 
                setImage, 
                setErrorCount, 
                errorCount, 
                setInputState, 
                setLetterState, 
                setButtonState, 
                wordState, 
                setWordState,
                word,
                setWord,
                wordList,
                setPuzzle,
                setTarget,
                statusColor,
                setColor,
                setInput,
                setLetter,
                targetPuzzle,
                setVisualState
                }){
    
    let wordArray = [];
    let hiddenArray = [];
    const newWordList = [...wordList]
    

    function getWord(){
        const randomSeed = Math.floor(Math.random() * newWordList.length)
        const chosenWord = newWordList[randomSeed]
        wordArray = chosenWord.split("");
        for (let i = 0; i < wordArray.length; i++){
            hiddenArray.push("_")
        };
        const hiddenWord = hiddenArray.join(" ")
        setPuzzle(hiddenWord)
        setWord(chosenWord)
    }

    function chooseWord(){
        getWord();
        setErrorCount(0);
        setImage(errorCount);
        setInputState(false);
        setLetterState(false);
        setVisualState("enabled");
        setLetter([]);
        setButtonState("enabled");
        setWordState("");
        setTarget(wordArray);
        setPuzzle(hiddenArray);
        setColor("neutral");
        setInput("");
    }

    




    return (
        <div className="container">
            <img data-test="game-image" className={`hanging ${wordState}`} src={`./assets/forca${image ? errorCount : errorCount}.png`} alt="forca"/>
            <div className="right_container">
                <button data-test="choose-word" onClick={chooseWord}>Escolher palavra</button>
                <p data-test="word" data-answer={`${word}`} className={`word ${wordState} ${statusColor}`} key={`${word}`}>
                    {targetPuzzle}
                </p>
            </div>
        </div>
    )
};

export default Game;