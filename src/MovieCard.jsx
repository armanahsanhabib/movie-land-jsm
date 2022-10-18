import React from "react";

const MovieCard = ({ movie }) => {
    return (
        <div className="movie card">
            <img src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/400"} className="card-img-top" alt={movie.Title} />
            <div className="card-body">
                <h6 className="card-title">{movie.Title}</h6>
                <p className="m-0 text-secondary">
                    <span className="badge bg-light text-secondary text-uppercase">{movie.Type}</span>
                    <i className="bi bi-dot"></i>
                    {movie.Year}
                </p>
            </div>
        </div>
    );
}

export default MovieCard; 