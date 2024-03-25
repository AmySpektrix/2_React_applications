import React, { useState } from "react"; // Remember to import useState from react!

const CountDisplay = (props) => {
  return <h1 data-testid="counter" >{props.count}</h1>;
};

const CountButton = (props) => {
  const incrementCounter = () => {
    props.setCount(props.count + props.incrementBy);
  };

  return (
  <button data-testid={props.testid} onClick={incrementCounter}>{props.buttonName}</button>
  );
};;


const Counter = () => {     //create Counter component
    const [count, setCount] = useState(0);  //// call the useState function and set the two constants to be count and setCount  
    return (
      <div className="componentHolder">
        <h2 className="componentTitle">Counter component</h2>
          <CountDisplay count={count} />
          <div>
          <p>Add</p>
          <CountButton setCount={setCount} count={count} incrementBy={1} buttonName="+1" testid="up1" />
          <CountButton setCount={setCount} count={count} incrementBy={2} buttonName="+2" testid="up2"/>
          </div>
          <div>
          <p>Subtract</p>  
          <CountButton setCount={setCount} count={count} incrementBy={-1} buttonName="-1" testid="down1"/>
          <CountButton setCount={setCount} count={count} incrementBy={-2} buttonName="-2" testid="down2"/>
          </div>
      </div> 
      // this returns the count value in big and then has a button which uses onClick to trigger the above increment counter function
    ); 
  };

export default Counter;