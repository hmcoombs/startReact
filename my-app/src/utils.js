// hello = () => 'hello world'

// document.getElementById("demo").innerHTML = hello();
// import PropTypes from 'prop-types'; 

const apiKey = "aae0b53c";
const button = document.getElementById("button");
const input = document.getElementById("input");


button.addEventListener("click", function() {


}

);

const getMoviesByName = async (title) => {
    const result = await fetch(`http://www.omdbapi.com/?t=${title}&apikey=${apiKey}&`);
    const movie = await result.json();
    console.log (movie);
};

    demo.innerHTML = getMoviesByName('batman');

    

const getMoviesById = async (ID) => {
    const result = await fetch(`http://www.omdbapi.com/?i=${ID}&apikey=${apiKey}&`);
    const movie = await result.json();
    console.log (movie);
};
getMoviesById('tt0094963');





export {getMoviesById, getMoviesByName}


