// Add this code to your existing JavaScript or script.js

const loader = document.querySelector('.loader');
const content = document.querySelector('.content');
let searchBtn = document.getElementById("search-btn");


let result = document.getElementById('result')
let title = document.getElementById('title');
let collection = document.getElementById('collection');
let genre = document.getElementById('genre');
let desc = document.getElementById('desc');
let date = document.getElementById('date');
let director = document.getElementById('director');
let actors = document.getElementById('actors');
let awards = document.getElementById('awards');
let ratings = document.getElementById('ratings');
let poster = document.getElementById('poster');
let writer = document.getElementById('writer');

let api = 'https://www.omdbapi.com/?apikey=c32b3953&t='

function showLoader() {
    loader.style.display = 'block';
}

function hideLoader() {
    loader.style.display = 'none';
}

let searchMovie = () => {
    showLoader();

    setTimeout(() => {

        result.innerHTML = `<img src="https://source.unsplash.com/1200x1200/?films" class="profile-bg" alt="">`;

        let movieName = document.getElementById('movieName')
        let url = api + movieName.value;

        if (movieName.length <= 0) {
            result.innerHTML = `<h3 class="msg">Please Enter A Movie Name</h3>`;
        }
        else {
            fetch(url).then((data) => {
                // console.log(data)
                return data.json()
            }).then((data) => {
                if (data.Response == "True") {
                    result.innerHTML = `
            <div class="movie-container">
    
                <div>
            <h1 class="mt0" id="title">${data.Title}</h1>
            <p>Box office collection: ${data.BoxOffice} </p>
            <p>Desc: ${data.Plot}</p>
            <p>Genre: ${data.Genre}</p>
            <p>Release date: ${data.Released}</p>
            <p>Director: ${data.Director}</p>
            <p>Actors: ${data.Actors}</p>
            <p>Writer: ${data.Writer}</p>
            <p>Awards: ${data.Awards}</p>
            <p>IMDB Ratings: ${data.imdbRating}</p>

        </div>
        <img id="poster"
            src=${data.Poster}
            alt="">
    </div>`
                }
                // else {
                //     result.innerHTML = `<h3 class='msg'>${data.Error}</h3>`; 
                // }
            })
            .catch(() => {
                result.innerHTML = `<h3 class="msg">Error Occured</h3>`;
              });
         }
    hideLoader();
}, 2000); 
}
searchBtn.addEventListener("click", searchMovie)
window.addEventListener("load", searchMovie)














