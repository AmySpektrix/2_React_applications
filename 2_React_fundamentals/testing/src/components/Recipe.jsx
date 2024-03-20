import React from "react";

const Recipe = (props) => {
    return(
    <div className="recipe">    
        <h1 data-testid="title">{props.title}</h1>
        <p data-testid="type">{props.type}</p>
        <p data-testid="duration">{props.duration}</p>
    </div>
    );
}

export default Recipe;