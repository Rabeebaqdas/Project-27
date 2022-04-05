import React, { useEffect, useState } from "react";
import './App.css';

function App() {
  const [count,setCount] = useState({count:0});

  const handleLeft = () => {
    if(count.count == 0 ){
      setCount({
        count:3
      })
      return;
    }

    setCount({
      count:count.count-1
    })
 
  }

  const handleRight = () => {

    if(count.count == 3 ){
      setCount({
        count:0
      })
      return;
    }
    setCount({
      count:count.count+1
    })
 
   
  }

  useEffect(()=>{
    const body = document.body;
    const slides = document.querySelectorAll('.slide')
    const bg = () =>{
      body.style.backgroundImage = slides[count.count].style.backgroundImage;
    }
    bg();

  },[count.count])

 

  return (
    <>
      <div className="slider-container">
        <div
          className={`slide ${count.count==0 ? "active" : ""}`}
          style={{ backgroundImage: `url(https://images.unsplash.com/photo-1649004542972-9a70c13d875f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=963&q=80)` }}
        ></div>
        <div
          className={`slide ${count.count==1 ? "active" : ""}`}
          style={{ backgroundImage: `url(https://images.unsplash.com/photo-1649011525614-6a97c8f8889e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)` }}
        ></div>
        <div
          className={`slide ${count.count==2 ? "active" : ""}`}
          style={{ backgroundImage: `url(https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)` }}
        ></div>
        <div
          className={`slide ${count.count==3 ? "active" : ""}`}
          style={{ backgroundImage: `url(https://images.unsplash.com/photo-1648737154547-b0dfd281c51e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)` }}
        ></div>
        <button className="arrow left-arrow" id="left" onClick={handleLeft}>
            <i className="fas fa-arrow-left"></i>
        </button>
        <button className="arrow right-arrow" id="right" onClick={handleRight}>
            <i className="fas fa-arrow-right"></i>
        </button>
      </div>
    </>
  );
}

export default App;

