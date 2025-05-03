import React from 'react';
import MovieCard from '../Moviecard/MovieCard';
import styles from '../SearchResults/SearchResult.css'; // We'll create this CSS next

const SearchResults = ({ movies }) => {
  return (
    <div className={styles.resultsContainer}>
      {movies.length > 0 ? (
        <div className={styles.moviesGrid}>
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      ) : (
        <p className={styles.noResults}>No movies found. Try another search!</p>
      )}
    </div>
  );
};

export default SearchResults;