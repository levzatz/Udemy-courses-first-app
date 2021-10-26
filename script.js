
'use strict';
/* Задание на урок:
1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы
2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.
3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

let  numberOfFilms;



const personalMovieDB = {
    count : numberOfFilms,
    movies : {} ,
    actors : {} ,
    genres : [],
    privat : false ,
    start: function start(){
        numberOfFilms = +prompt("сколько фильмов вы уже посмотрели?","");
        while(numberOfFilms =='' ||numberOfFilms ==null ||isNaN(numberOfFilms)){
            numberOfFilms = +prompt("сколько фильмов вы уже посмотрели?","");
        }
        
    },
    RememberMyFilms:function RememberMyFilms(){
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
    },
    detectPersonalLevel:function detectPersonalLevel(){
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
    
    },
    showMyDB: function showMyDB(){
        if (personalMovieDB.privat == false){
            console.log(personalMovieDB);
        }
    },
    writeYourGenres:function writeYourGenres(){
        for (let i = 0;i<3;i++){
            personalMovieDB.genres[i] = prompt('Ваш любимый жанр под номером '+(i+1));
            if (personalMovieDB.genres[i]==='' || personalMovieDB.genres[i]===null){
                i--;
            }
        }
        personalMovieDB.genres.forEach(function(genre, i, genres){
            console.log("Любимый жанр #"+(i+1)+" - это "+genres[i]);
        });
    },
    toggleVisibleMyDB:function toggleVisibleMyDB(){
        if (personalMovieDB.privat === true){
            personalMovieDB.privat = false; 
        }
        else {
            personalMovieDB.privat = true;
        }
    }

};
personalMovieDB.start();


personalMovieDB.RememberMyFilms();


personalMovieDB.detectPersonalLevel();

personalMovieDB.showMyDB();

personalMovieDB.writeYourGenres();
personalMovieDB.toggleVisibleMyDB();



