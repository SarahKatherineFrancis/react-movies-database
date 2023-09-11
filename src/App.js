import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

// Define the main App component
function App() {
  // Define state variables 'movies', 'isLoading', 'error', and functions to manage them
  const [movies, setMovies] = useState([]); // State for storing movie data
  const [isLoading, setIsLoading] = useState(false); // State for managing loading state
  const [error, setError] = useState(null); // State for handling errors during data fetching

  // Define an asynchronous function to fetch movies data from an external API
  async function fetchMoviesHandler() {
    setIsLoading(true); // Set loading state to true while fetching data
    setError(null); // Clear any previous error messages
    try {
      // Send an HTTP GET request to the SWAPI (Star Wars API) to retrieve movie data
      const response = await fetch("https://swapi.dev/api/films");

      if (!response.ok) {
        throw new Error("Something went wrong!"); // Throw an error if the response is not OK
      }

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
    } catch (error) {
      setError(error.message); // Handle and store any errors that occur during data fetching
    }
    setIsLoading(false); // Set loading state back to false after data is fetched
  }

  let content = <p>Found no movies.</p>;

  // Determine the content to render based on the current state
  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  // Render the App component
  return (
    <React.Fragment>
      <section>
        {/* Render a button that, when clicked, triggers the 'fetchMoviesHandler' function */}
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
