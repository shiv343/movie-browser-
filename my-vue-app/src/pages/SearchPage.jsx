import { useState } from 'react';
import { searchMovies } from '../services/omdb';
import SearchResults from '../conponents/SearchResults/SearchResults';

const SearchPage = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    const results = await searchMovies(query);
    setMovies(results);
  };

  return (
    <div className="search-page">
      <form onSubmit={handleSearch}>
        <input 
          type="text" 
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search movies..."
        />
        <button type="submit">Search</button>
      </form>
      <SearchResults movies={movies} />
    </div>
  );
};

export default SearchPage;