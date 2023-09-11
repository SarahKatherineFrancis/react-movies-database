import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

// Define the main App component
function App() {
  // Define state variables 'movies' and 'isLoading' and functions to manage them
  const [movies, setMovies] = useState([]); // State for storing movie data
  const [isLoading, setIsLoading] = useState(false); // State for managing loading state

  // Define an asynchronous function to fetch movies data from an external API
  async function fetchMoviesHandler() {
    setIsLoading(true); // Set loading state to true while fetching data
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
    setIsLoading(false); // Set loading state back to false after data is fetched
  }

  // Render the App component
  return (
    <React.Fragment>
      <section>
        {/* Render a button that, when clicked, triggers the 'fetchMoviesHandler' function */}
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {/* Conditional rendering based on loading and movie data availability */}
        {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {!isLoading && movies.length === 0 && <p>Found no movies.</p>}
        {isLoading && <p>Loading...</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
