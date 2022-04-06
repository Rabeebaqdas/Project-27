import React, { useEffect,useState,useRef} from "react";

import './App.css';

function App() {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const [isDraw,setDraw] = useState(false);
  const [color,setColor] = useState();
  const [count,setCount] = useState(0);

useEffect(()=>{
  if(count <= 0) {
    setCount(1)
  }
  const canvas = canvasRef.current;
  const context = canvas.getContext('2d');
  context.scale =(2,2)
  context.strokeStyle = `${color}`
  context.lineWidth = count;
  contextRef.current = context;
 

},[count,color])



const startDrawing = ({nativeEvent})=> {
const {offsetX,offsetY} = nativeEvent;
contextRef.current.beginPath();
contextRef.current.moveTo(offsetX,offsetY);
setDraw(true);
}


const finishDrawing = ()  => {
  contextRef.current.closePath();
  setDraw(false);
}

const draw = ({nativeEvent}) => {
  
  if(!isDraw){
    return
  }
  const {offsetX,offsetY} = nativeEvent;
  contextRef.current.lineTo(offsetX,offsetY);
  contextRef.current.stroke()
}
  
const clear = () => {
  contextRef.current.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
}




  return (
 <>
    <canvas width="800" height="460" ref={canvasRef} onMouseDown={startDrawing} onMouseUp={finishDrawing} onMouseMove={draw} ></canvas>
   <div className="toolbox">
       <button id="decrease" onClick={()=>setCount(count-1)}>-</button>
       <span id="size">{count}</span>
       <button id="increase" onClick={()=>setCount(count+1)}>+</button>
       <input type="color" onChange={(e)=>setColor(e.target.value)} />
       <button id="clear" onClick={clear}>X</button>
   </div>
   </>
  );
}

export default App;

