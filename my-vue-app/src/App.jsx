import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import SearchPage from './pages/SearchPage';
import MovieDetails from './pages/MovieDetails';
import Favorites from './pages/Favorite'

const App = () => {
  return (
      <Router>
        <div style={{ minHeight: '100vh' }}> {/* Add this wrapper */}
          <Navbar />
          <div style={{ paddingTop: '80px' }}> {/* Add padding to prevent content hiding */}
            <Routes>
              <Route path="/" element={<SearchPage />} />
              <Route path="/movie/:id" element={<MovieDetails />} />
              <Route path="/favorites" element={<Favorites />} />
            </Routes>
          </div>
        </div>
      </Router>
    );
  };

export default App;