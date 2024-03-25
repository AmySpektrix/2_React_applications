const InputListener = () =>{
    const inputLogger = (event) => {
        console.log(event.target.value);
    };
    return (
        <div className="componentHolder">
        <h2 className="componentTitle">InputListener component</h2>
        <input type= "text" placeholder = "text to log here" onChange={inputLogger}/>
    </div>
    )
}

export default InputListener;