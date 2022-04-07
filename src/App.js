import React,{useEffect,useRef} from "react";


import './App.css';

function App() {
const navBar = useRef(null);

useEffect(()=>{

  const nav = navBar.current;
  
  const fixNav = () => {
    if(window.scrollY > nav.offsetHeight){
      nav.classList.add("active");
    }
    else{
      nav.classList.remove("active")
    }
  }
  
  window.addEventListener("scroll",fixNav);
},[])

  return (
    <div>
        <nav className='nav' ref={navBar}>
            <div className="container">
                <h1 className="logo">
                    <a href="./App.jsx">My Website</a>
                </h1>
                <ul>
                    <li><a href="#" className='current'>Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        </nav>
        <div className="hero">
            <div className="container">
                <h1>Welcome to my Website</h1>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, eum.</p>

            </div>
        </div>
        <section className="container content">
            <h2>Content One</h2>   
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque doloremque exercitationem debitis ducimus numquam a quod illo repudiandae quidem, nostrum dolore reprehenderit illum nobis maiores, beatae aliquam animi necessitatibus facilis.Cumque doloremque exercitationem debitis ducimus numquam a quod illo repudiandae quidem, nostrum dolore reprehenderit illum nobis maiores, beatae aliquam animi necessitatibus facilis,Cumque doloremque exercitationem debitis ducimus numquam a quod illo repudiandae quidem, nostrum dolore reprehenderit illum nobis maiores, beatae aliquam animi necessitatibus facilis,Cumque doloremque exercitationem debitis ducimus numquam a quod illo repudiandae quidem, nostrum dolore reprehenderit illum nobis maiores, beatae aliquam animi necessitatibus facilis,Cumque doloremque exercitationem debitis ducimus numquam a quod illo repudiandae quidem, nostrum dolore reprehenderit illum nobis maiores, beatae aliquam animi necessitatibus facilis,Cumque doloremque exercitationem debitis ducimus numquam a quod illo repudiandae quidem, nostrum dolore reprehenderit illum nobis maiores, beatae aliquam animi necessitatibus facilis,Cumque doloremque exercitationem debitis ducimus numquam a quod illo repudiandae quidem, nostrum dolore reprehenderit illum nobis maiores, beatae aliquam animi necessitatibus facilis.</p> 
            <h3>Content Two</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem voluptatum molestiae eaque illo aliquam, illum neque dolor, doloremque, voluptate voluptatem recusandae culpa accusamus exercitationem! Nihil quis perferendis officia? Optio, iure.</p>
        </section>
    </div>
  );
}

export default App;

