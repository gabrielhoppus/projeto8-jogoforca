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
                targetPuzzle,
                statusColor,
                setColor,
                setInput,
                setLetter
                }){
    
    let wordArray = [];
    let hiddenArray = [];
    const newWordList = [...wordList]
    const newTargetPuzzle = [...targetPuzzle]
    const randomSeed = Math.floor(Math.random() * newWordList.length)

    function chooseWord(){
        setErrorCount(0);
        setImage(errorCount);
        setInputState(false);
        setLetterState("enabled");
        setLetter([])
        setButtonState("enabled");
        setWordState("");
        setSeed(randomSeed);
        setWord(newWordList[wordSeed]);
        setTarget(wordArray);
        setPuzzle(hiddenArray);
        setColor("neutral");
        setInput("");
        console.log(wordArray);
        console.log(hiddenArray);
        console.log(word)
        console.log(word.length)        
    }

    wordArray = word.split("");
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
                        <li className={`${wordState} ${statusColor}`} key={`${letter+i}`}>
                            {letter ? newTargetPuzzle[i] : hiddenArray[i]}
                        </li>
                    </ul>
            )}
            </div>
        </div>
    )
};

export default Game;