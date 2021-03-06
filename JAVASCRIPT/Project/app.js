'use strict';
let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?")

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}
// 1) Автоматизировать вопросы пользователю про фильмы при помощи цикла
for (let i = 0; i < 2; i++) {
   const a = prompt("Один из последних просмотренных фильмов")
   const b = +prompt("На сколько оцените его?")
   // если пользователь нажал отмена это null.
   // проверяем нажал ли пользователь отмену в первом и втором вопросе 
   // проверяем пустые ли строки и на макс кол-во введенных символов
   // чтобы вернуться в цикле на 1 вопрос назад, делаем декримент i
   if (a != null && b != null && a != '' && b != '' && a.length < 50) {
      personalMovieDB.movies[a] = b
      console.log('done');
   } else {
      console.log('error');
      i--;
   }
}

if (personalMovieDB.count < 10) {
   console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
   console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30){
   console.log("Вы киноман");
} else {
   console.log("Произошла ошибка");
}

console.log(personalMovieDB);



