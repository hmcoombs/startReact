import React from 'react';

function MovieCard({ title, type, posterUrl }) {
    return (
      <div className="movie-card">
        <img src="#" alt="Batman" />
        <div className="card-body">
          <h3>Batman v Something</h3>
        </div>
        <button>Movie</button>
      </div>
    );
  }

  function MovieDetails ({posterUrl, title, rated, runtime, genre, plot, actors, rating}) {
    return(
        <div className='movie-card'>
            <img src='#' alt='movie-title'></img>
            <div className='card-body'>
                <h2>Movie title</h2>
                

            </div>

        </div>
    );
  }