import React from 'react';
import './movieCard.css';


export default function MovieCard({ title, type, posterUrl }) {
    return (
      <div className="movie-card">
        <img src={posterUrl} alt="Batman" />
        <div className="card-body">
          <h3>Batman v Something</h3>
        </div>
        <button>Movie</button>
      </div>
    );
    
  }

  MovieCard.defaultProps = {
    title: '',
  };
  console.log(MovieCard);


