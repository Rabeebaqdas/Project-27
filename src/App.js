import React, { useEffect, useState } from "react";
import './App.css';

function App() {
  const [count, setCount] = useState({
    count1: false,
    count2: false,
    count3: false,
    count4: false,
    count5: false,
    count6: false,
    count7: false,
    count8: false,
  })
 
  const handleChange = (e) => {
    
    if(e.target.id == "div1"){
      setCount({
        count1: !count.count1,
      })
  
    }
    if (e.target.id == "div2") {
      setCount({
        count1: true,
        count2: !count.count2,
      })
    }
    if (e.target.id == "div3") {
      setCount({
        count1: true,
        count2: true,
        count3: !count.count3
      })
    }
    if (e.target.id == "div4") {
      setCount({
        count1: true,
        count2: true,
        count3: true,
        count4: !count.count4
      })
    }
    if (e.target.id == "div5") {
      setCount({

        count1: true,
        count2: true,
        count3: true,
        count4: true,
        count5: !count.count5
      })
    }
    if (e.target.id == "div6") {
      setCount({
        count1: true,
        count2: true,
        count3: true,
        count4: true,
        count5: true,
        count6: !count.count6
      })
    }
    if (e.target.id == "div7") {
      setCount({
        count1: true,
        count2: true,
        count3: true,
        count4: true,
        count5: true,
        count6: true,
        count7: !count.count7
      })
    }
    if (e.target.id == "div8") {
      setCount({
        count1: true,
        count2: true,
        count3: true,
        count4: true,
        count5: true,
        count6: true,
        count7: true,
        count8: !count.count8
      })
    }
  }

  useEffect(()=>{
    const handleBig = () => {
     const fullCups = document.querySelectorAll('.cup-small.full').length;
     const samllCups = document.querySelectorAll(".cup-small").length;
     const remained = document.getElementById('remained');
     const liters = document.getElementById("liters");
   const percentage = document.getElementById("percentage");
      if(fullCups === 0) {
        percentage.style.visibility = "hidden"
        percentage.style.height = 0
      }else{
        percentage.style.visibility = "visible"
        percentage.style.height = `${fullCups / samllCups * 330}px`
        percentage.innerText =  `${fullCups / samllCups * 100}%`
      }
      if(fullCups === samllCups) {
        remained.style.visibility = "hidden"
        remained.style.height = 0
      }else{
        remained.style.visibility = "visible"
        liters.innerText = `${2 - (250 * fullCups) /1000}L`
      }

    }
    handleBig()
  })


  return (

    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h1>Drink water</h1>
      <h3>Goal: 2 liters</h3>
      <div className="cup">
        <div className="remained" id="remained">
          <span id="liters"></span>
          <small>Remained</small>
        </div>
        <div className="percentage" id="percentage"></div>
      </div>

      <p className="text">Select how many glasses of water that you have drank</p>

      <div className="cups">
        <div className={`cup cup-small ${count.count1 ? "full" : ""}`} id="div1" onClick={(e) => handleChange(e)}>250 ml</div>
        <div className={`cup cup-small ${count.count2 ? "full" : ""}`} id="div2" onClick={(e) => handleChange(e)}>250 ml</div>
        <div className={`cup cup-small ${count.count3 ? "full" : ""}`} id="div3" onClick={(e) => handleChange(e)}>250 ml</div>
        <div className={`cup cup-small ${count.count4 ? "full" : ""}`} id="div4" onClick={(e) => handleChange(e)}>250 ml</div>
        <div className={`cup cup-small ${count.count5 ? "full" : ""}`} id="div5" onClick={(e) => handleChange(e)}>250 ml</div>
        <div className={`cup cup-small ${count.count6 ? "full" : ""}`} id="div6" onClick={(e) => handleChange(e)}>250 ml</div>
        <div className={`cup cup-small ${count.count7 ? "full" : ""}`} id="div7" onClick={(e) => handleChange(e)}>250 ml</div>
        <div className={`cup cup-small ${count.count8 ? "full" : ""}`} id="div8" onClick={(e) => handleChange(e)}>250 ml</div>

      </div>
    </div>
  );
}

export default App;

