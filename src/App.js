import React,{useState} from "react";
import './App.css';
import Header from "./components/Header";
// import List from "./components/Header";
// import fs from "./assets/fs.png";
// import aws from "./assets/aws.png";

function App() {

  const[counter,setCounter] = useState(0)

  return (
    <div className="App">
      
      <Header />
      <p>Counter: {counter}</p>
      <button onClick={() => setCounter(counter+1)}>Increase</button>

    </div>
  );
}

export default App;
