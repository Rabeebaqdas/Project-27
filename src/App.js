import React,{useState} from "react";
import './App.css';
function App() {
 const [count,setCount] = useState(false);
  return (

      <div>
        <nav className={count ? "active" : ""}>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Works</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>

        </ul>
        <button className="icon" onClick={()=>setCount(!count)}>
          <div className="line line1"></div>
          <div className="line line2"></div>
        
        </button>
        </nav>

      </div>
  );
}

export default App;

