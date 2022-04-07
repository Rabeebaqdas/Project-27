import React, { useEffect, useRef } from "react";


import './App.css';

function App() {
  const sliderContainer = useRef(null);
  const slideRight = useRef(null);
  const slideLeft = useRef(null);
  const upButton = useRef(null);
  const downButton = useRef(null);
  const slidesLength = 4;
  let activeSlideIndex = 0;

  useEffect(()=>{

    slideLeft.current.style.top = `-${(slidesLength - 1) * 100}vh`;
  },[])

  const changeSlide = (direction) => {
    const sliderHeight = sliderContainer.current.clientHeight;
    if(direction == "up") {
      activeSlideIndex++;
      if(activeSlideIndex > slidesLength - 1) {
        activeSlideIndex = 0;

      }
    }
    else if(direction == "down"){
      activeSlideIndex--;
      if(activeSlideIndex < 0) {
        activeSlideIndex = slidesLength - 1;

      }
    }
    slideRight.current.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`;
    slideLeft.current.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`;
  }

  return (

    <div className="slider-container" ref={sliderContainer}>
      <div className="left-slide" ref={slideLeft}>
        <div style={{ backgroundColor: '#FD3555' }} >
          <h1>Nature Flower</h1>
          <p>all in pink</p>
        </div>
        <div style={{ backgroundColor: '#2A68BA' }}>
          <h1>Blue Sky </h1>
          <p>With it's mountains</p>
        </div>
        <div style={{ backgroundColor: '#252E33' }}>
          <h1>Lonely Castle</h1>
          <p>in the wilderness</p>
        </div>
        <div style={{ backgroundColor: '#FFB866' }}>
          <h1>Flying Eagle</h1>
          <p>in the sunset</p>
        </div>
      </div>
      <div className="right-slide" ref={slideRight}>
        <div
          style={{ backgroundImage: `url("https://images.unsplash.com/photo-1516584791719-a25cd9203e07?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=957&q=80")` }}
        >
        </div>
        <div style={{ backgroundImage: `url("https://images.unsplash.com/photo-1456072212651-c507cb43b26f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")` }}
        >
        </div>
        <div style={{ backgroundImage: `url("https://images.unsplash.com/photo-1508893269700-a6c62c0610a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80")` }}>
        </div>
        <div style={{ backgroundImage: `url("https://images.unsplash.com/photo-1436891436013-5965265af5fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")` }}>
        </div>

      </div>
      <div className="action-buttons">
        <button className="down-button" onClick={()=>changeSlide("down")}  ref={downButton}>
          <i className="fas fa-arrow-down"></i>
        </button>
        <button className="up-button" onClick={()=>changeSlide("up")} ref={upButton}>
          <i className="fas fa-arrow-up"></i>
        </button>
      </div>

    </div>

  );
}

export default App;

