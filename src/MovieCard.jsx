import React from "react";
import "./MovieCard.css";

const MovieCard = ({movie: { Year, Poster, Title, Type}}) => {
    return (
        <div className="MovieCard">
        <img src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"} alt="movie poster" />
        <div className="bottom-card">
        <h4>{Type}</h4>
        <h2>{Title}</h2>
        <h5>{Year}</h5>
        </div>
        </div>
    );
}

export default MovieCard;