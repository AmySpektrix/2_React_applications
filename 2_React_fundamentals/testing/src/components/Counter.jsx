import React, { useState } from "react"; // Remember to import useState from react!



const Counter = () => {     //create Counter component
    const [count, setCount] = useState(0);  //// call the useState function and set the two constants to be count and setCount
    const incrementCounter = () => {
      setCount(count + 1);
    };  //create a function to implement the new setCount function - this just adds 1 to the existing count and sets the count as that value
    const deincrementCounter = () => {
      setCount(count - 1);
    };  
    
    return (
      <div>
        <h1>{count}</h1> 
        <button onClick={incrementCounter}>Increment </button>
        <button onClick={deincrementCounter}>De-increment</button>
      </div> 
      // this returns the count value in big and then has a button which uses onClick to trigger the above increment counter function
    ); 
  };

export default Counter;