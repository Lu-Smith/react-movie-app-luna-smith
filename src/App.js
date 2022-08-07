
import './App.css';
import SearchLogo from "./search.svg";
import MovieCard from "./MovieCard";

function App() {
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
    </div>
  );
}

export default App;
