import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

// Define the main App component
function App() {
  // Define a state variable 'movies' and a function 'setMovies' to manage it
  const [movies, setMovies] = useState([]);

  // Define an asynchronous function to fetch movies data from an external API
  async function fetchMoviesHandler() {
    // Send an HTTP GET request to the SWAPI (Star Wars API) to retrieve movie data
    const response = await fetch("https://swapi.dev/api/films");

    // Parse the response data as JSON (assuming the API returns JSON data)
    const data = await response.json();

    // Transform the retrieved movie data into a more usable format
    const transformedMovies = data.results.map((movieData) => {
      return {
        id: movieData.episode_id,
        title: movieData.title,
        openingText: movieData.opening_crawl,
        releaseDate: movieData.release_date,
      };
    });

    // Update the 'movies' state with the transformed movie data
    setMovies(transformedMovies);
  }

  // Render the App component
  return (
    <React.Fragment>
      <section>
        {/* Render a button that, when clicked, triggers the 'fetchMoviesHandler' function */}
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {/* Render the MoviesList component, passing in the 'movies' state as a prop */}
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;
