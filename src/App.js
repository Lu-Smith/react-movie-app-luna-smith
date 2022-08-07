import React, {useState, useEffect} from 'react';
import './App.css';
import SearchLogo from "./search.svg";
import MovieCard from "./MovieCard";
import Footer from "./Footer";

const API_URL = "http://www.omdbapi.com/?apikey=34a42400&";

function App() {
const [searchMovie, setSearchMovie] = useState("");
const [movies, setMovies] = useState([]);

useEffect(() => {
  chooseMovies("SpiderMan");
}, []);

const chooseMovies = async (title) => {
  const response = await fetch(`${API_URL}&s=${title}`);
  const data = await response.json();

  setMovies(data.Search);
}
  return (
    <div className="App">
         <div className="header">
            <span>📽️</span>
            <h1>MovieIsland</h1>
         </div>
         <div className="search">
           <input type="text" value={searchMovie} placeholder='Enter your movie...' onChange={(e) => setSearchMovie(e.target.value)}/>
           <img src={SearchLogo} alt="search logo" onClick={() => {chooseMovies(searchMovie)}}/>
         </div>
         {movies?.length > 0 ? (
          <div className='results'>
            {movies.map((movie) => (
               <MovieCard movie={movie}/>)
            )}
          </div>
         ) : (
          <div className='noResults'>
            <h2>No results found</h2>
          </div>
         )}


         
         <Footer />
    </div>
  );
}

export default App;
