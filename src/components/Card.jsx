import './card_style.css';

export function Card({ movie }) {
  return (
    <div className="container-card">
      <div className="movie-card">
        <div>
          <h2>{movie.title}</h2>
          <p className="movie-year">{movie.year} • <span className = "star">⭐</span> <span className = "rating">{movie.rating}</span></p>
        </div>
        <span className="movie-genre">{movie.genre}</span>
      </div>
    </div>
  );
}

export default Card;