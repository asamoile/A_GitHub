'use strict';


let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?")


const personalMovieDB = {
    count: numberOfFilms,
    movies: " ",
    actors: " ",
    genres: " ",
    privat: false
}


const movies = {
   
}
movies.whichFilm = prompt("Один из последних просмотренных фильмов")
movies.countFilm = prompt("На сколько оцените его?")
console.log(personalMovieDB);
console.log(movies);

