# Movie Database App

This is a simple React application that allows you to manage a list of movies. You can view a list of movies, add new movies to the list, and fetch movies from an external API.

## Installation
To run this application on your local machine, follow these steps:

1.Clone this repository to your local machine:
git clone https://github.com/SarahKatherineFrancis/react-movie-database.git

2.Change into the project directory:
cd react-movie-database

3.Install the required dependencies:
npm install

4.Start the development server:
npm start

## Usage
This application allows you to perform the following actions:

1. View Movie List
When you open the application, you will see a list of movies displayed on the screen.

3. Add a New Movie
You can add a new movie to the list by clicking the "Add Movie" button and filling out the required information in the form.

5. Fetch Movies from API
Click the "Fetch Movies" button to fetch movies from an external API and update the movie list.

## Components
The application is structured into several React components:

App.js: The main component that manages the state of movies, loading, and errors. It also handles fetching movies and rendering the movie list.

MoviesList.js: Renders the list of movies passed as props.

AddMovie.js: Provides a form for adding a new movie to the list. It also handles the submission of new movie data.

Movie.js: Represents an individual movie item within the list.

## API Integration
The application fetches movie data from an external API using the fetchMoviesHandler function. The API URL is:
https://react-http-9b836-default-rtdb.firebaseio.com/movies.json

When fetching movies, the application sends GET requests to this URL and updates the movie list based on the response data.

To add a new movie, the application sends a POST request to the same API URL with the movie data in JSON format.

## Contributing
If you would like to contribute to this project, please follow these steps:

1.Fork the repository.

2.Create a new branch for your feature or bug fix:
git checkout -b feature/your-feature-name

3.Make your changes and commit them:
git commit -m "Add your commit message here"

4.Push your changes to your fork:
git push origin feature/your-feature-name

5.Create a pull request to the main repository.

6.Your pull request will be reviewed, and your changes may be merged into the main branch.
