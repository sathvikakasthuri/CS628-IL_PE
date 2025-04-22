import React, { useState } from "react";
import "./MovieList.css";

 //function to reterive movie data
function MovieList() {   
  function getMovies() {
    return [
      { title: "Gabbar singh", genre: "Comedy", releaseYear: 2012 },
      { title: "Race Gurram", genre: "Drama", releaseYear: 2015 },
      { title: "RRR", genre: "Action", releaseYear: 2022 },
    ];
  }
  
  const [currentGenre, setCurrentGenre] = useState("All Genres");
   // function to retrieve unique movie categories
  function getGenres() {
    const movies = getMovies();
    return ["All Genres", ...new Set(movies.map((movie) => movie.genre))];
  }
   // function to retrieve unique movie categories
  function getFilteredMovies() { 
    const movies = getMovies();
    if (currentGenre == "All Genres") {
      return movies;
    }
    return movies.filter((movie) => movie.genre == currentGenre);
  }
  function handleMovieClick(title) {
    alert(`You clicked: ${title}`);
  }

  return (
    <div className="movie-list">
      <h1>Movie List</h1>
      <select
      // Bind the dropdown's selected value to the currentGenre state and update with the selected value
        value={currentGenre} onChange={(e) => setCurrentGenre(e.target.value)}>
        {getGenres().map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </select>
      <div className="movies">
        {getFilteredMovies().map((movie) => (
          <div
            key={movie.title}
            className="movie-card"
            onClick={() => handleMovieClick(movie.title)}
          >
            <h2>{movie.title}</h2>
            <p>{movie.genre}</p>
            <p>Released: {movie.releaseYear}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default MovieList;
