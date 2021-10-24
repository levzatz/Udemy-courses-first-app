
'use strict';


let  numberOfFilms;
function start(){
    numberOfFilms = +prompt("сколько фильмов вы уже посмотрели?","");
    while(numberOfFilms =='' ||numberOfFilms ==null ||isNaN(numberOfFilms)){
        numberOfFilms = +prompt("сколько фильмов вы уже посмотрели?","");
    }
    
}
start();

const personalMovieDB = {
    count : numberOfFilms,
    movies : {} ,
    actors : {} ,
    genres : [],
    privat : false 
};

function RememberMyFilms(){
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
}
RememberMyFilms();

function detectPersonalLevel(){
    if (personalMovieDB.count<10){
        console.log("Просмотрено довольно мало фильмов");
    }
    else if (personalMovieDB.count>10 && personalMovieDB.count<30){
        console.log("Вы классический зритель");
    }
    else if (personalMovieDB.count>=30){
        console.log("Вы киноман");
    }
    else {
        console.log("произошла ошибка");
}

}
detectPersonalLevel();
function showMyDB(){
    if (personalMovieDB.privat == false){
        console.log(personalMovieDB);
    }
}
showMyDB();
function writeYourGenres(){
    for (let i = 0;i<3;i++){
        personalMovieDB.genres[i] = prompt('Ваш любимый жанр под номером '+(i+1));
    }
}
writeYourGenres();
