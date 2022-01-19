const addMovieModal = document.getElementById("add-modal");  // const for selecting modal for adding movie

const startAddMovieButton = document.querySelector("header button");  // access to ADD MOVIE button

const backdrop = document.getElementById("backdrop"); // selecting div and styling background after showing modal

const cancelAddMovieButton = addMovieModal.querySelector(".btn--passive"); // access to CANCEL movie button

const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling; // access to ADD movie button

const userInputs = addMovieModal.querySelectorAll("input"); // selecting all elements with input tag, and putting them in node list

const entryTexySection = document.getElementById("entry-text"); // access to entry text ("Your personal movie database!") section 

const movies = [];  // constant - empty array for storing user inputs as object

const updateUI =  () =>{   // removing starting box if we have movies and adding movie box instead
    if (movies.length === 0){  // checking for length of movies array of objects 
        entryTexySection.style.display = "block";
    }else{
        entryTexySection.style.display = "none"; // hiding section if length of movies array are not 0
    }
};

const deleteMovieHandler = (movieId) => { // function for deleting movie element
    let movieIndex = 0;
    for (const movie of movies){         //loop trought movies with movie id find index 
        if (movie.id === movieId){
            break;
        }
        movieIndex++;
    }
    movies.splice(movieIndex, 1); // removing from array with spolice method
    const listRoot = document.getElementById("movie-list"); // selecting html element with id movie-list
    listRoot.children[movieIndex].remove();  // removing element at selected index
};

const renderNewMovieElement = (id, title, imageUrl, rating) => {  // const for showing movie element on ui/screen
    const newMovieElement = document.createElement("li");     // creating movie element - list item via DOM
    newMovieElement.className = "movie-element"; // adding class to movie element so he can conect with css class and syling
    newMovieElement.innerHTML = ` 
    <div class="movie-element__image">
        <img src="${imageUrl}" alt="${title}">
    </div>
    <div class="movie-element__info">
        <h2>${title}</h2>
        <p>${rating}/5 stars</p>
    </div>
    `; // ^ adding html contetnt to movie element via DOM
    newMovieElement.addEventListener("click", deleteMovieHandler.bind(null, id)); // click listener for toggling - deleting movie element
    const listRoot = document.getElementById("movie-list"); // selecting html element with id movie-list
    listRoot.append(newMovieElement); // adding our new movie element to list of movies
};

const toggleBackdrop = () => {  // fuction for toggling (in dark transparent) backround
    backdrop.classList.toggle("visible") 
};


const toggleMovieModal = () => {  // standalone function for add movie button event listener
    addMovieModal.classList.toggle("visible"); // part of function which is togling modal from hiden to visible
    toggleBackdrop();   // calling toggleBackdrop function to toggle background
};

const clearMovieInput = () => {  // const for clearing user inputs
    for (const usrInput of userInputs){  // looping trought all input fields an setting them to empty string
        usrInput.value = "";
    }
};

const cancelAddMovieHandler = () =>{  // function for listener of CANCEL button
    toggleMovieModal();  // toogling - hiding movie modal
    clearMovieInput();   // calling const for clearing user inputs
};

const addMovieHandler = () => {   // function for listener of ADD button
    const titleValue = userInputs[0].value;
    const imageUrlValue = userInputs[1].value;
    const ratingValue = userInputs[2].value;

    if (
       titleValue.trim() === " " ||  // checkig empty spaces imput with .trim method whic removes white spaces
       imageUrlValue.trim() === " " ||
       ratingValue.trim() === " " ||
       +ratingValue < 1 ||
       +ratingValue > 5
    ) {
        alert("Please enter valid values (rating between 1 and 5).");
        return; 
    }
    
    const newMovie = {       // JavaScript object for storing user inputs
        id: Math.random().toString(), //creating unique id with Math.random, and converting it to string
        title: titleValue,
        image: imageUrlValue,
        rating: ratingValue
    };

    movies.push(newMovie); // pushing newMovie object in movies array
    console.log(movies);
    toggleMovieModal();    // closing modal after values are inserted/ADD button clicked
    clearMovieInput();   // calling const for clearing user inputs
    renderNewMovieElement(   // calling new movie const to show it on ui, and forwarding data in it
        newMovie.id,
        newMovie.title,
        newMovie.image,
        newMovie.rating
        ); 
    updateUI();       // calling const to check movies array length and update ui
};

const backdropClickHandler = () =>{ // function for togling abckground after clicking on it
    toggleMovieModal();
};

startAddMovieButton.addEventListener("click", toggleMovieModal);  // event listener for ADD MOVIE button
backdrop.addEventListener("click", backdropClickHandler); // listener for togglig background after clicking on it
cancelAddMovieButton.addEventListener("click", cancelAddMovieHandler); // listener for toggling backgrund after clicking on CANCEL button
confirmAddMovieButton.addEventListener("click", addMovieHandler); // listener for ADD button