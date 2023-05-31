
# Movie Search Application Documentation

This documentation provides an overview of a movie search application implemented using HTML, CSS, and JavaScript.




## Table of Contents

- Introduction
- Installation and Usage
- Features
- Code Structure
- CSS Styles
- JavaScript Functions
- Conclusion
## Introduction

The movie search application allows users to search for movie details by entering the movie name. It utilizes the OMDB API to fetch movie data and displays it on the web page.


## Installation and Usage

To use the movie search application, follow these steps:

- Clone or download the application code.
- Open the `index.html` file in a web browser.
- Enter the name of the movie in the search input field and press Enter or click the search button.
- The application will fetch and display the movie details, including the title, description, image, actors, director, awards, box office collection, IMDB rating, and genre.
## Features

- Search input field: Users can enter the name of the movie they want to search for.
- Search button: Users can click the search button to fetch movie details.
-  Enter key press event: Users can press the Enter key to fetch movie details without clicking the search button.
- Loader animation: A loader animation is displayed while fetching movie details to indicate that the application is processing the request.
- Movie details display: The application displays the movie title, description, image, actors, director, awards, box office collection, IMDB rating, and genre on the web page.
- Error handling: If the movie is not found, an error message is displayed.


## Code Structure
The application code consists of the following files:

- `index.html`: The HTML file that defines the structure and content of the web page.
- `style.css`: The CSS file that contains the styles for the web page.
- `app.js`: The JavaScript file that handles the movie search functionality.
## CSS Styles

The `style.css` file contains the CSS styles for the movie search application. It includes styles for the navigation bar, search input field, search button, movie details, error container, loader animation, and mobile responsiveness.
## JavaScript Functions

The `app.js` file contains the JavaScript functions for the movie search functionality. It includes the following functions:

- `checkLoaderStatus()`: This function checks the loading status and updates the loader animation accordingly.

- `fetchMovieDetails()`: This function fetches movie details from the OMDB API based on the entered movie name. It handles the API response and updates the web page with the fetched movie details or displays an error message if the movie is not found.

- Event listener for Enter key press: An event listener is added to the movie name input field to fetch movie details when the Enter key is pressed.
## Conclusion

The movie search application provides a user-friendly interface for searching and displaying movie details. It utilizes the OMDB API to fetch movie data and includes features such as loader animation, error handling, and mobile responsiveness. By following the installation and usage instructions, users can easily search for movie details and access information such as the movie title, description, image, actors, director, awards, box office collection, IMDB rating, and genre.