import React, { useState, useEffect, useCallback } from "react";

import MoviesList from "./components/MoviesList";
import AddMovie from "./components/AddMovie";
import "./App.css";

// Define the main App component
function App() {
  // Define state variables 'movies', 'isLoading', 'error', and functions to manage them
  const [movies, setMovies] = useState([]); // State for storing movie data
  const [isLoading, setIsLoading] = useState(false); // State for managing loading state
  const [error, setError] = useState(null); // State for handling errors during data fetching

  // Define an asynchronous function to fetch movies data from an external API
  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true); // Set loading state to true while fetching data
    setError(null); // Clear any previous error messages
    try {
      // Send a GET request to the Firebase API to retrieve movie data
      const response = await fetch(
        "https://react-http-9b836-default-rtdb.firebaseio.com/movies.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong!"); // Throw an error if the response is not OK
      }

      // Parse the response data as JSON (assuming the API returns JSON data)
      const data = await response.json();

      const loadedMovies = [];

      // Transform the data into an array of movie objects
      for (const key in data) {
        loadedMovies.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate,
        });
      }

      // Update the 'movies' state with the transformed movie data
      setMovies(loadedMovies);
    } catch (error) {
      setError(error.message); // Handle and store any errors that occur during data fetching
    }
    setIsLoading(false); // Set loading state back to false after data is fetched
  }, []);

  useEffect(() => {
    fetchMoviesHandler(); // Trigger the data fetching function when the component mounts
  }, [fetchMoviesHandler]);

  async function addMovieHandler(movie) {
    // Send a POST request to add a new movie to the Firebase API
    const response = await fetch(
      "https://react-http-9b836-default-rtdb.firebaseio.com/movies.json",
      {
        method: "POST",
        body: JSON.stringify(movie),
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
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
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        {/* Render a button that, when clicked, triggers the 'fetchMoviesHandler' function */}
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
