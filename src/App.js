import React, { useEffect,useState} from "react";

import './App.css';

function App() {

  useEffect(()=>{
    const fill = document.querySelector('.fill');
    const empties = document.querySelectorAll('.empty');
   
    
    function dragStart() {
      fill.className += " hold"
      setTimeout(()=>fill.className = "invisible",0)

    }
  
    function dragEnd() {
  fill.className = 'fill'
    }
  
    function dragOver(e) {
      e.preventDefault()
  
    }
    function dragEnter(e) {
      e.preventDefault()
      this.className += " hovered"
    }
    function dragLeave() {
      this.className = "empty"
    }
    function dragDrop() {
      empties.className = 'empty';
     this.append(fill)
    }
  
    fill.addEventListener('dragstart',dragStart)
    fill.addEventListener("dragend",dragEnd)
    for(const empty of empties) {
      empty.addEventListener("dragover",dragOver)
      empty.addEventListener("dragenter",dragEnter)
      empty.addEventListener("dragleave",dragLeave)
      empty.addEventListener("drop",dragDrop)
    }

  },[])
  
  
  return (
    <div className="main">
    <div className="empty">
        <div className="fill" draggable="true">
        </div>
    </div>
  <div className="empty" ></div>
  <div className="empty" ></div>
  <div className="empty" ></div>
  <div className="empty" ></div>
</div>
  );
}

export default App;

