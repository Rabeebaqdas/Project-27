import './App.css';
import React,{useRef} from 'react';



function App() {


  const toasts = useRef(null);

  const messages = [
    "Message One",
    "Message Two",
    "Message Three",
    "Message Four",
    "Message Five"
  ]

  const types = [
    "info",
    "success",
    "error"
  ]

const createNotification = (message = null , type = null) => {
  const notif = document.createElement("div");
  notif.classList.add("toast")
  notif.classList.add(type ? type : getRandomType())
  notif.innerText = message ? message: getRandomMessage();
  toasts.current.appendChild(notif);
  setTimeout(()=>{
    notif.remove()
  },3000)
}

const getRandomMessage = () => {
  return messages[Math.floor(Math.random() * messages.length)]
}
const getRandomType = () => {
  return types[Math.floor(Math.random() * types.length)]
}

  return (
    <div>
        <div id="toasts" ref={toasts}>
        </div>
        <button className="btn" onClick={()=>createNotification()}>Show Notification</button>
    </div>
  )
}

export default App;
