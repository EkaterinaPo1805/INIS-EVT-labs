var numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');
var personalMovieDB = {
    count: numberOfFilms,
    movies:{}
};
do{
var lastFilmCheck1 = prompt( 'Один из последних просмотренных фильмов?'),
rateCheck1 = prompt( 'На сколько оцените его?');
} while (lastFilmCheck1=="" || lastFilmCheck1==null || lastFilmCheck1.length>50 || !isFinite(rateCheck1) || rateCheck1<0 || rateCheck1>10);
do{
    var lastFilmCheck2 = prompt( 'Один из последних просмотренных фильмов?'),
    rateCheck2 = prompt( 'На сколько оцените его?');
} while (lastFilmCheck2==="" || lastFilmCheck2===null || lastFilmCheck2.length>50 || !isFinite(rateCheck2) || rateCheck2<0 || rateCheck2>10);
personalMovieDB.movies.arr = [{lastFilmCheck1, rateCheck1},{lastFilmCheck2, rateCheck2}];
console.log(personalMovieDB);
console.log ("Просмотрено "+personalMovieDB.count+" фильмов. Один из последних просмотренных фильмов - "+personalMovieDB.movies.arr[0].lastFilmCheck1+". Оценен на "+personalMovieDB.movies.arr[0].rateCheck1+
". Один из последних просмотренных фильмов - "+personalMovieDB.movies.arr[1].lastFilmCheck2+". Оценен на "+personalMovieDB.movies.arr[1].rateCheck2+".");

