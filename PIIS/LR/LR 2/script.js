
let personalMovieDB = {
    privat: Boolean,
    movies: {
    'A Monster Calls': 9,
    'Barbie': 3,
    'Harry Potter': 9
    }
};
privat=false;
if (privat)
        console.log("Privat is true");
    else
        table();

function table(){  
document.querySelector('.content').innerHTML=`<table class="movies"></table>`
for (key in personalMovieDB.movies){
    let row=document.createElement('tr')
    row.innerHTML = `<td>${key}</td>
    <td>${personalMovieDB.movies[key]}</td>`
    document.querySelector('.movies').appendChild(row)
    }
}