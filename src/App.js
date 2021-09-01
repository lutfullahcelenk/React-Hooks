import React,{useState, useEffect} from "react";
import './App.css';
import Header from "./components/Header";
import List from "./components/Header";
import fs from "./assets/fs.png";
import aws from "./assets/aws.png";
import axios from "axios";

function App() {

  const[counter,setCounter] = useState(0);
  const[img,setImg] = useState();
  const[studentList,setStudentList] = useState();

  useEffect(() => {
      axios.get("https://jsonplaceholder.typicode.com/users")
      // .then(res => console.log(res))
      .then((res) => setStudentList(res.data))
  })


  return (
    <div className="App">
      
      <Header img={img} />
      <p>Counter: {counter}</p>
      <button onClick={() => setCounter(counter+1)}>Increase</button>
      <button onClick={() => setImg(fs)}>FS</button>
      <button onClick={() => setImg(aws)}>AWS</button>
      <button onClick={() => setImg("")}>RESET</button>
      <hr />

      <List studentList={studentList}/>
    </div>
  );
}

export default App;
