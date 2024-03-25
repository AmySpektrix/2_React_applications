import React, {useState, useEffect} from "react";

const Joke = () => {
    const [joke, setJoke] = useState([])
    const [showPunchline, setShowPunchline] = useState(false);

    useEffect(() => {
        fetch("https://official-joke-api.appspot.com/random_joke")
            .then((response)=> {return response.json();})
            .then((joke) => {
                setJoke(joke)})
        }, []);
    
    const togglePunchline = () => {
        setShowPunchline(!showPunchline);
        };
    
    return (
        <>
        <div className="componentHolder">
        <h2 className="componentTitle">Joke component</h2>
            <strong><p id="joke_setup">{joke.setup}</p></strong>
            {showPunchline && <p id="joke_punchline">{joke.punchline}</p>}
            <button id="show punchline" onClick={togglePunchline}>Show Punchline</button>
        </div>
        </>
    )
}

export default Joke;