import { Link } from 'react-router-dom';
import styles from '../Moviecard/MovieCard.css'; // Create this file

const MovieCard = ({ movie }) => {
  return (
    <div className={styles.card}>
      <img 
        src={movie.Poster !== 'N/A' ? movie.Poster : '/placeholder-movie.jpg'} 
        alt={movie.Title}
        className={styles.poster}
      />
      <div className={styles.info}>
        <h3>{movie.Title}</h3>
        <p>{movie.Year}</p>
        <Link to={`/movie/${movie.imdbID}`} className={styles.detailsLink}>
          More Info
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;