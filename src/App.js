import React,{useEffect} from "react";
import './App.css';

function App() {
useEffect(()=>{
  const counter = document.querySelectorAll('.counter');

    counter.forEach(count=>{
      count.innerHTML = '0'
      
      const updateCounter = () => {
        const target = count.getAttribute('data-target')
        const c = +count.innerText
        const increment = target / 200
        if(c < target) {
          count.innerText = `${Math.ceil(c + increment)}`
          setTimeout(updateCounter,1)
        }else{
          count.innerText = target
        }
      }
      updateCounter()
    })
    
},[])

  return (

    <div className="main" style={{display:"flex"}}>
    <div className="counter-container">
        <i className="fab fa-twitter fa-3x"></i>
        <div className="counter" data-target="12000"></div>
        <span>Twitter followers</span>
        
    </div>
    <div className="counter-container">
        <i className="fab fa-youtube fa-3x"></i>
        <div className="counter" data-target="5000"></div>
        <span>Youtube subscribers</span>
        
    </div>
    <div className="counter-container">
        <i className="fab fa-facebook fa-3x"></i>
        <div className="counter" data-target="7500"></div>
        <span>Facebook fans</span>
        
    </div>
</div>  
);
}

export default App;

