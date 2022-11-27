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
                setWord
                }){
    
    let wordArray = []
    let hiddenArray = []
            wordArray = word.split("") 
        for (let i = 0; i < wordArray.length; i++){
            hiddenArray.push("_")
        }
    
    function chooseWord(){
        setErrorCount(0)
        setImage(errorCount)
        setInputState(false)
        setLetterState("enabled")
        setButtonState("enabled")
        setWordState("")
        setWord(word)
    }

    return (
        <div className="container">
            <img src={`./assets/forca${image ? image : 0}.png`} alt="forca"/>
            <div className="right_container">
                <button onClick={chooseWord}>Escolher palavra</button>
                {hiddenArray.map((letter, i) =>
                    <ul className={`word`} key={`${word+i}`}>
                        <li className={`${wordState}`} key={`${letter+i}`}>
                            {letter}
                        </li>
                    </ul>
            )}
            </div>
            
        </div>
    )
}

export default Game