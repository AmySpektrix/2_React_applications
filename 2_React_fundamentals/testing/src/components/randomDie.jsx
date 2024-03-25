import React, { useState } from "react"; // Remember to import useState from react!



const Die = () => {     //create Counter component
    const [count, setCount] = useState(0);  //// call the useState function and set the two constants to be count and setCount
    const randomDie = () => {
        let randomNumber = Math.ceil(Math.random() * 6);
      setCount(randomNumber);
    };  //create a function to implement the new setCount function - this just adds 1 to the existing count and sets the count as that value
    
    return (
        <div className="componentHolder">
        <h2 className="componentTitle">RandomDie component</h2>
        <h1>{count}</h1> 
        <button onClick={randomDie}>Roll Dice </button>
      </div> 
      // this returns the count value in big and then has a button which uses onClick to trigger the above increment counter function
    ); 
  };

export default Die;