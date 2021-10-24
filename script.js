

/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

// Код возьмите из предыдущего домашнего задания
'use strict';


const  numberOfFilms = prompt("сколько фильмов вы уже посмотрели?","");

console.log(numberOfFilms);
const personalMovieDB = {
    count : numberOfFilms,
    movies : {} ,
    actors : {} ,
    genres : [],
    privat : false 
};

for (let i =0;i<2;i++) {     
    const a = prompt("Один из последних просмотренных фильмов?", '');
    const b = prompt("На сколько оцените его?","");
    if (a!= null && b!=null && a!='' && b!=null && a.length<50) {
        personalMovieDB.movies[a] = b;
    }
    else {
        i--;
    }
    }
//const a = prompt("Один из последних просмотренных фильмов?", '');
//const b = prompt("На сколько оцените его?","");
//const c = prompt("Один из последних просмотренных фильмов?", '');
//const d = prompt("На сколько оцените его?","");
//personalMovieDB.movies[a] = b;
//personalMovieDB.movies[c] = d;
console.log(personalMovieDB);
if (personalMovieDB.count<10){
    console.log("Просмотрено довольно мало фильмов");
}
else if (personalMovieDB>10 && personalMovieDB<30){
    console.log("Вы классический зритель");
}
else if (personalMovieDB>30){
    console.log("Вы киноман");
}
else {
    console.log("произошла ошибка");
}
