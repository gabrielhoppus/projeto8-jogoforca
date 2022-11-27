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
                wordSeed,
                setSeed,
                wordList,
                setPuzzle,
                setTarget,
                targetPuzzle
                }){
    
    let wordArray = [];
    let hiddenArray = [];
    const newWordList = [...wordList]
    const newTargetPuzzle = [...targetPuzzle]

    function getWord(){
        setSeed(Math.floor(Math.random() * newWordList.length));
        setWord(newWordList[wordSeed]);
    }
    
    function chooseWord(){
        setErrorCount(0);
        setImage(errorCount);
        setInputState(false);
        setLetterState("enabled");
        setButtonState("enabled");
        setWordState("");
        getWord()
        setTarget(wordArray)
        setPuzzle(hiddenArray)
        console.log(wordArray)
    }
    
    wordArray = word.split("")
    for (let i = 0; i < wordArray.length; i++){
        hiddenArray.push("_")
    };

    return (
        <div className="container">
            <img className={`hanging ${wordState}`} src={`./assets/forca${image ? errorCount : errorCount}.png`} alt="forca"/>
            <div className="right_container">
                <button onClick={chooseWord}>Escolher palavra</button>
                {hiddenArray.map((letter, i) =>
                    <ul className={`word`} key={`${word+i}`}>
                        <li className={`${wordState}`} key={`${letter+i}`}>
                            {letter ? newTargetPuzzle[i] : hiddenArray[i]}
                        </li>
                    </ul>
            )}
            </div>
        </div>
    )
};

export default Game;