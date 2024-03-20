// import Hello from "./components/Hello";
// import makersLogo from "./assets/Makers-Logo.png";
import "./App.css";
import React from "react";
import Profile from "./components/Profile";
import Product from "./components/Product";
import Counter from "./components/Counter";


function App() {
  return (
    <>
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
      <Product 
        name="Product 2"
        description="Nah I'm the best"
        price={11.99}
      /> 
      <Counter/>
      <Counter/>
</>      
  );
}


export default App;
