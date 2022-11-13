import React from 'react';

export default function MovieCard({ title, type, posterUrl }) {
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

  MovieCard.defaultProps = {
    title: '',
  };
  