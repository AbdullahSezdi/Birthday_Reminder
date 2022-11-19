import { useState } from "react";
import "./app.css"
import List from "./components/list";
import Data from "./data";

function App() {

  const[people,setPeople]=useState(Data)
  
  return (
    <div className="App">

        <div className="container">
        <h3>Birthdays today</h3>
        <List people={people}></List>
        <button >Clear All</button>

        
        
        </div>


    </div>
  );
}

export default App;
