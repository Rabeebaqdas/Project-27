import React from "react";

import './App.css';

function App() {



  return (
    <div className="card">
    <div className="card-header animated-bg" id="header">
        <img src="https://images.unsplash.com/photo-1648659170064-d7f71d924fae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=813&q=80"/>
    </div>
    <div className="card-content">
        <h3 className="card-title animated-bg animated-bg-text" id='title'>
            Lorem ipsum dolor sit amet.
        </h3>
        <p className="card-excerpt" id="excerpt">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, ullam!
            <span className="animated-bg animated-bg-text">
                &nbsp;
            </span>
            <span className="animated-bg animated-bg-text">
                &nbsp;
            </span>
            <span className="animated-bg animated-bg-text">
                &nbsp;
            </span>
        </p>
        <div className="author">
            <div className="profile-img animated-bg" id="profile_img">
                <img src="https://images.unsplash.com/photo-1648786220970-bde7e3d2fe22?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80" alt="" />
            </div>
            <div className="author-info">
                 <strong className="animated-bg animated-bg-text" id='name'>
                        Alexa white
                 </strong>
                 <small className="animated-bg animated-bg-text" id="date">
                     Oct 08, 2022 
                 </small>
            </div>
        </div>
    </div>
  </div>
  );
}

export default App;

