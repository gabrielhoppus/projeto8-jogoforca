function Guess({inputState, buttonState}){
    return (
        <div className="input_container">
            <span>Já sei a palavra!</span>
            <input disabled={inputState ? inputState : false}></input>
            <button className={buttonState}>Chutar</button>
        </div>
    )
}

export default Guess