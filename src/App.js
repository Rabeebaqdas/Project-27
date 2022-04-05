import React, { useEffect, useState } from "react";
import './App.css';

function App() {
 
  const body = document.body;
  function color () {
    body.style.backgroundColor = theme?body.style.backgroundColor="#111":body.style.backgroundColor="white"
  }
const [theme,setTheme] = useState(false)
const [min,setMin] = useState('')
const [hours,setHours] = useState('')
const [ampm,setampm] = useState('')
const[day,setDay] = useState({
  day:'',
  month:''
})
const days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
const months = ["Jan","Feb","Mar","Apr","May","Jun","July","Aug","Sep","Oct","Nov","Dec"];
useEffect(()=>{
  const scale = (num,in_min,in_max,out_min,out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
  }
  const hourEL= document.querySelector('.hour');
  const minEL= document.querySelector('.minute');
  const secEL= document.querySelector('.second');
  const timeEl= document.querySelector('.time');
  const dateEL= document.querySelector('.date');
  function setTime(){
    const time = new Date()
    const month = time.getMonth()
    const day = time.getDay()
    const hours = time.getHours()
    const hourForClock = hours % 12
    const mins = time.getMinutes()
    const sec = time.getSeconds()
   setDay({
     day:day,
     month:month
   })
 
    setampm(hours)
    setMin(mins)
    setHours(hourForClock)
    hourEL.style.transform = `translate(-50%, -100%) rotate(${scale(hourForClock,0,11,0,360)}deg)`
    minEL.style.transform = `translate(-50%, -100%) rotate(${scale(mins,0,59,0,360)}deg)`
    secEL.style.transform = `translate(-50%, -100%) rotate(${scale(sec,0,59,0,360)}deg)`
  }

  setInterval(setTime,1000)
},[])


color()
  return (
    <>
    <button className="toggle" style={{backgroundColor:theme ? "white" : "black", color:theme ? "black" : "white"} } onClick={()=>setTheme(!theme)}>{theme ? "Light mode" : "Dark mode"}</button>
    <div className={`clock-container ${theme ? "dark" : ""} `}>
        <div className="clock">
            <div className="needle hour"></div>
            <div className="needle minute"></div>
            <div className="needle second"></div>
            <div className="center-point"></div>

        </div>
        <div className="time" style={{color:theme ? "white" :"black"}}>{`${hours}:${min < 10 ? `0${min}` : min}`}{`${ampm >= 12 ? " PM" : " AM" }`}</div>
        <div className="date">{`${days[day.day]}`}, {`${months[day.month]}`}<span className="circle" style={{backgroundColor:theme ? "white" :"black",color:theme ? "black" :"white"}} >{`${day.day}`}</span></div>
    </div>
</>
  );
}

export default App;

