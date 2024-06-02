const modal = document.getElementsByClassName('modal');
const button = document.querySelector('header button');
const backdrop = document.getElementById('backdrop');
const cancelButtonModal = document.querySelector('.btn--passive');
const addButtonModal = cancelButtonModal.nextElementSibling;
const userInputs = document.getElementById('add-modal').querySelectorAll('input');
const entryTextSection = document.getElementById('entry-text');
const deleteMovieModal = document.getElementById('delete-modal');


const movies = [];

const updateUI = () => {
    if (movies.length === 0) {
        entryTextSection.style.display = 'block';
    } else {
        entryTextSection.style.display = 'none';
    }
};

const renderMovie = (id, title, imageUrl, rating) => {
    const newMovieElement = document.createElement('li');
    newMovieElement.className  = 'movie-element';
    newMovieElement.innerHTML = `
        <div class="movie-element__image">
            <img src="${imageUrl} alt="${title}">
        </div>
        <div class="movie-element__info">
            <h2>${title}</h2>
            <p>${rating}/5 Stars</p>
        </div>
    `;
    newMovieElement.addEventListener('click', deleteMovieHandler.bind(null, id));
    const listRoot = document.getElementById('movie-list');
    listRoot.append(newMovieElement);
};

const backdropSwitch = () => {
    backdrop.classList.toggle('visible');
};

const closeMovieModal = () => {
    modal[0].classList.remove('visible');
};

const showMovieModal = () => {
    modal[0].classList.toggle('visible');
    backdropSwitch();
};

const backdropClickHandler = () => {
    closeMovieModal();
    cancelMovieDeletion();
    clearInputs();
};

const cancelAddMovie = () => {
    closeMovieModal();
    clearInputs();
    backdropSwitch();
};

const deleteMovie = (movieId) => {
    let movieIndex = 0;
    for(const movie of movies) {
        if(movie.id === movieId) {
            break;
        }
        movieIndex++;
    }

    movies.splice(movieIndex, 1);
    const listRoot = document.getElementById('movie-list');
    listRoot.children[movieIndex].remove(); 
    cancelMovieDeletion();
    updateUI();
};

const cancelMovieDeletion = () => {
    backdropSwitch();
    deleteMovieModal.classList.remove('visible');
};

const deleteMovieHandler = (movieId) => {
    deleteMovieModal.classList.add('visible');
    backdropSwitch(); 
    const cancelDeletionButton = deleteMovieModal.querySelector('.btn--passive');
    let confirmDeletionButton = deleteMovieModal.querySelector('.btn--danger');

    confirmDeletionButton.replaceWith(confirmDeletionButton.cloneNode(true));

    confirmDeletionButton = deleteMovieModal.querySelector('.btn--danger');

    cancelDeletionButton.removeEventListener('click', cancelMovieDeletion);

    cancelDeletionButton.addEventListener('click', cancelMovieDeletion);
    confirmDeletionButton.addEventListener(
        'click', 
        deleteMovie.bind(null, movieId)
    );
};

const addButtonModalHandler = () => {
    let titleName = userInputs[0].value;
    let imageUrl = userInputs[1].value;
    let rating = userInputs[2].value;

    if(
        titleName.trim() === '' ||
        imageUrl === '' ||
        rating.trim() === '' ||
        parseInt(rating) < 1 ||
        parseInt(rating) > 5
    ) {
        alert("Plese Enter Valid Value");
        return;
    }

    const newMovie = {
        id : Math.random().toString(),
        title : titleName,
        imgUrl : imageUrl,
        rate : rating
    };

    movies.push(newMovie);
    console.log(movies);
    clearInputs();
    closeMovieModal();
    backdropSwitch();
    updateUI();
    renderMovie(newMovie.id , newMovie.title, newMovie.imgUrl, newMovie.rate);
};

const clearInputs = () => {
    for(const usrInput of userInputs){
        usrInput.value = '';
    }
};

button.addEventListener('click', showMovieModal);
backdrop.addEventListener('click', backdropClickHandler);
cancelButtonModal.addEventListener('click', cancelAddMovie);
addButtonModal.addEventListener('click', addButtonModalHandler)
