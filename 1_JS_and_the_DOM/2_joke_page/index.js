document.addEventListener("DOMContentLoaded", function() {
    const punchlineButton = document.querySelector("#punchline_button");
    const jokeSetup = document.querySelector("p#joke_setup");
    const jokePunchline = document.querySelector("p#joke_punchline");

    const getJoke = fetch("https://official-joke-api.appspot.com/random_joke")
        .then((response)=> {return response.json();})
        .then((joke) => {
            getSetup= joke.setup;
            getPunchline = joke.punchline;
            jokeSetup.textContent = getSetup;
            punchlineButton.addEventListener("click", () => {
                jokePunchline.textContent = getPunchline;
            });
            });
});