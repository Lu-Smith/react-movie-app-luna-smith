import React, {useState, useEffect} from 'react';
import './App.css';
import SearchLogo from "./search.svg";
import MovieCard from "./MovieCard";
import Footer from "./Footer";

const API_URL = "http://www.omdbapi.com/?apikey=34a42400&";

function App() {

useEffect(() => {
  searchMovies("SpiderMan");
}, []);

const searchMovies = async (title) => {
  const response = await fetch(`${API_URL}&s=${title}`);
  const data = await response.json();

  console.log(data.Search);
}
  return (
    <div className="App">
         <div className="header">
            <span>📽️</span>
            <h1>MovieIsland</h1>
         </div>
         <div className="search">
           <input type="text" placeholder='Enter your movie...' />
           <img src={SearchLogo} alt="search logo" />
         </div>
         <MovieCard />
         <Footer />
    </div>
  );
}

export default App;
