// API URL for fetching movie details
let API = "http://www.omdbapi.com/?apikey=e73b8e6f&t=";

// Variable to track the loading status
let loadingStatus = false;

// Get references to the HTML elements
let title = document.getElementById('title');
let desc = document.getElementById('desc');
let img = document.getElementById('movie-img');
let actors = document.getElementById('actors');
let director = document.getElementById('director');
let awards = document.getElementById('awards');
let collection = document.getElementById('collection');
let imdbRating = document.getElementById('imdbRating');
let genre = document.getElementById('genre');
let movieContainer = document.getElementById('movieContainer');
let errorContainer = document.getElementById('errorContainer');

// Add 'd-none' class to hide movieContainer and errorContainer initially
movieContainer.classList.add("d-none");
errorContainer.classList.add("d-none");

// Function to check and update loader status
function checkLoaderStatus() {
   let intro = document.getElementById("intro");
   intro.style.display = 'none';

   let loader = document.getElementById("loader");
   if (loadingStatus == true) {
    loader.classList.add('loader');
   } else {
    loader.classList.remove('loader');
   } 
}

// Function to fetch movie details
function fetchMovieDetails() {
    loadingStatus = true;
    checkLoaderStatus();

    let movieName = document.getElementById("movieName");
    let apiQuery = API + movieName.value;

    fetch(apiQuery)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);

            if (data.Error != "Movie not found!") {
                loadingStatus = false;
                checkLoaderStatus();

                // Update the HTML elements with fetched movie details
                title.innerText = data.Title;
                desc.innerText = data.Plot;
                img.src = data.Poster;
                actors.innerText = data.Actors;
                director.innerText = data.Director;
                awards.innerText = data.Awards;
                collection.innerText = data.BoxOffice;
                imdbRating.innerText = data.imdbRating;
                genre.innerText = data.Genre;

                // Show movieContainer and hide errorContainer
                movieContainer.classList.remove("d-none");
                errorContainer.classList.add("d-none");
            } 
            else {
                loadingStatus = false;
                checkLoaderStatus();

                // Hide movieContainer and show errorContainer
                movieContainer.classList.add("d-none");
                errorContainer.classList.remove("d-none");
            }   
        });
}

// Get movieName input field
let movieNameInput = document.getElementById('movieName');

// Add event listener for the Enter key press
movieNameInput.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    fetchMovieDetails();
  }
});
