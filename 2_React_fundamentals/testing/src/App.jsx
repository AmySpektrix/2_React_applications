// import Hello from "./components/Hello";
// import makersLogo from "./assets/Makers-Logo.png";
import "./App.css";
import React from "react";
import Profile from "./components/Profile";
import Product from "./components/Product";
import Counter from "./components/Counter";
import ClickListener from "./components/ClickListener";
import InputListener from "./components/InputListener";
import Die from "./components/randomDie";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import Joke from "./components/Joke";

function App() {
  return (
    <>
    <h1>Examples for Testing</h1>
    <div className="container">
          <Profile 
            name="Quackie Makers"
            job="Makers' favourite rubber duck"
            birthdate={2023}
          />
      <Product 
        name="Product 1"
        description="Wow its great"
        price={10.99}
      />
      </div>
      <div className="container">
      <ClickListener/>
      <br></br>
      <InputListener/>
      </div>
      <div className="container">
      <Counter/>
      <br></br>
      <Die/>
      </div>
      <div className="container">
      <Form/>
      <br></br>
      <TodoList tag="food"/>
      </div>
      <div className="container">
      <Joke/>
      <br></br>
      </div>
</>      
  );
}


export default App;
