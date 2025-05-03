import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from '../components/MovieCard.css'; // Fixed path & extension

const MovieCard = ({ movie }) => {
  const handleImageError = (e) => {
    e.target.src = '/placeholder-movie.jpg';
  };

  return (
    <div className={styles.card}>
      <img 
        src={movie.Poster !== 'N/A' ? movie.Poster : '/placeholder-movie.jpg'}
        alt={`Poster for ${movie.Title}`}
        className={styles.poster}
        width="200"
        height="300"
        onError={handleImageError}
        loading="lazy"
      />
      <div className={styles.info}>
        <h3>{movie.Title}</h3>
        <p>{movie.Year}</p>
        <Link 
          to={`/movie/${movie.imdbID}`} 
          className={styles.detailsLink}
          aria-label={`More info about ${movie.Title}`}
        >
          More Info
        </Link>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Year: PropTypes.string.isRequired,
    Poster: PropTypes.string,
    imdbID: PropTypes.string.isRequired
  }).isRequired
};

export default MovieCard;