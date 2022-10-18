import { useState } from "react";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MovieCard from "./MovieCard";

const API_URL = "http://www.omdbapi.com/?apikey=36417dcd";

// const movie1 = {
//     "Title": "Interstellar",
//     "Year": "2014",
//     "imdbID": "tt0816692",
//     "Type": "movie",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
// }

const App = () => {

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState([]);

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    }

    // useEffect(() => {
    //     searchMovies("Spiderman No way Home");
    // }, []);

    return (
        <div className="app">
            <div className="container-xl">
                <h1 className="text-center py-3">MovieLand</h1>
                <div className="input-group mx-auto w-50 d-flex align-items-center">
                    <input type="text" className="form-control" placeholder="Search for movies" value={searchTerm} onChange={(e) => { setSearchTerm(e.target.value) }} />
                    <span role="button" className="search_button input-group-text bg-light" onClick={() => { searchMovies(searchTerm) }}><i className="bi bi-search"></i></span>
                </div>

                {movies?.length > 0 ? (
                    <div className="movies my-5">
                        {movies.map((movie) => (
                            <MovieCard movie={movie} />
                        ))}
                    </div>
                ) : (
                    <div style={{ height: "80vh" }} className="empty lh-1 d-flex flex-column justify-content-center align-items-center">
                        <h3 className="">No Movies Found</h3>
                        <p style={{ fontSize: "14px" }}>Search with appropriate term!</p>
                    </div>
                )}

                <div className="footer">
                    <p className="text-center mb-3">App created with 💗 by Ahsan Habib</p>
                </div>
            </div>
        </div >
    );
}

export default App; 