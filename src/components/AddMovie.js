import React, { useRef } from "react";

import classes from "./AddMovie.module.css";

// Define the AddMovie component
function AddMovie(props) {
  // Create three references for input fields to access their values
  const titleRef = useRef(""); // Reference for the movie title input
  const openingTextRef = useRef(""); // Reference for the opening text input
  const releaseDateRef = useRef(""); // Reference for the release date input

  // Function to handle form submission
  function submitHandler(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Create a movie object with values from the input fields
    const movie = {
      title: titleRef.current.value,
      openingText: openingTextRef.current.value,
      releaseDate: releaseDateRef.current.value,
    };

    // Call the 'onAddMovie' prop function to add the movie to the list
    props.onAddMovie(movie);
  }

  // Render the AddMovie component
  return (
    <form onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" ref={titleRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="opening-text">Opening Text</label>
        <textarea rows="5" id="opening-text" ref={openingTextRef}></textarea>
      </div>
      <div className={classes.control}>
        <label htmlFor="date">Release Date</label>
        <input type="text" id="date" ref={releaseDateRef} />
      </div>
      <button>Add Movie</button>
    </form>
  );
}

export default AddMovie;
