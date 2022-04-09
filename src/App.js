import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios'


function App() {

  const [apiData, setapiData] = useState();
  const [filterapi, setfilterapi] = useState();
  const [state, setState] = useState({
    value: '',
    show: ''
  });


  const handleChange = (e) => {
    setState({ value: e.target.value })
  }

  const submit = (e) => {
    e.preventDefault()
    setState({ show: state.value })
    console.log(state.value)

  }


  const Image_path = 'https://image.tmdb.org/t/p/w1280';
  const SEARCH_URL = 'https://api.themoviedb.org/3/search/movie?api_key=fbffc89359898a66e6ba200f3e92b611&query="';

  useEffect(() => {

    const getProducts = async () => {
      try {
      
        const res = await axios.get("https://api.themoviedb.org/3/discover/movie?sort_bypopularity.desc&api_key=fbffc89359898a66e6ba200f3e92b611");
        setapiData(res.data)
      
      
      }
      catch (err) {
        console.log(err)
      }
    };
    getProducts();
  }, [])

  useEffect(() => {

    const filteredProduct = async () => {
      try {
      
        const res = await axios.get(SEARCH_URL + state.show);
  
        setfilterapi(res.data)
      }
      catch (err) {
        console.log(err)
      }
    };
    filteredProduct();
  }, [state.show])


  return (
    <>
      <header>
        <form id="form">
          <input type="search" id="search" className='search' placeholder='search' value={state.value} onChange={(e) => handleChange(e)} />
          <button type="submit" onClick={(e) => submit(e)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </button>
        </form>
      </header>
      <main id="main">

        {
          state.show && filterapi.results != null ?
            filterapi
              ?
              filterapi.results.map((apiObj) => {
      
                return (
                  <div className="movie">
                    <img src={Image_path + apiObj.backdrop_path}
                      alt="" />
                    <div className="movie-info">
                      <h3>{apiObj.original_title}</h3>
                      <span className='green'>{apiObj.vote_average}</span>
                    </div>
                    <div className="overview">
                      <h3>overview</h3>
                      {apiObj.overview}
                    </div>
                  </div>
                )
              })
              :
              <h1>
                data is comming
              </h1>
            :
            apiData
              ?
              apiData.results.map((apiObj) => {
              
                return (
                  <div className="movie">
                    <img src={Image_path + apiObj.backdrop_path}
                      alt="" />
                    <div className="movie-info">
                      <h3>{apiObj.original_title}</h3>
                      <span className={apiObj.vote_average > 7 ? 'green' : apiObj.vote_average > 4 ? "orange" : "red"}>{apiObj.vote_average}</span>
                    </div>
                    <div className="overview">
                      <h3>overview</h3>
                      {apiObj.overview}
                    </div>
                  </div>
                )
              })
              :
              <h1>
                data is comming
              </h1>
        }



      </main>
    </>
  )
}

export default App;
