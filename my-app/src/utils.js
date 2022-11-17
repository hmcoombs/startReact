// hello = () => 'hello world'

// document.getElementById("demo").innerHTML = hello();
// import PropTypes from 'prop-types'; 

const apiKey = "aae0b53c";
// const API_URL = `http://www.omdbapi.com/?apikey=${apiKey}&`
// const button = document.getElementById("button");
// const input = document.getElementById("input");


// button.addEventListener("click", function() {

  export function getMoviesByName(name) {
    return fetch(
      `http://www.omdbapi.com/?apikey=${apiKey}&s=${name}`
    );
  }
  
  export function getMoviesById() {
    return fetch(
      `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&i=tt0100669`
    );
  }

























// }

// );
// const getMoviesByName = async (title) => {
//     const response = await fetch(`${API_URL}&s=${title}`);
//     const movie = await response.json();
  
//     console.log(movie);
//   }
  
  
//   useEffect(() => {
//     getMoviesByName('spiderman');
//   }, [] );

// const getMoviesByName = async (title) => {
//     const result = await fetch(`http://www.omdbapi.com/?t=${title}&apikey=${apiKey}&`);
//     const movie = await result.json();
//     console.log (movie);
// };

// getMoviesByName('batman');

    



    

// const getMoviesById = async (ID) => {
//     const result = await fetch(`http://www.omdbapi.com/?i=${ID}&apikey=${apiKey}&`);
//     const movie = await result.json();
//     console.log (movie);
// };
// getMoviesById('tt0094963');





// export {getMoviesById, getMoviesByName}


// function getMoviesByName() {
//     let title = convertString(movieInput.value);
//     movieInput.value = "";
//     movieInput.focus();
    
//     const BASE_URL = `http://www.omdbapi.com/?t=${title}&apikey=${apiKey}`;

//     fetch(BASE_URL)
//         .then(res => res.json())
//         .then(data =>
//             {
//                 console.log(data);
//                 poster.src = data.Poster;
//                 description.innerHTML = `
//                 Title: ${data.Title} <br>
//                 Director: ${data.Director} <br>
//                 Rated: ${data.Rated} <br>
//                 Released: ${data.Released} <br>
//                 imdbRating: ${data.imdbRating} <br>
//                 `
//             })
//         .catch(error => console.log(error));
// };
// getMoviesByName("batman");



export default getMoviesByName
