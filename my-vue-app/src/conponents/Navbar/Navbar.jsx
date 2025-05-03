import React from 'react';
import { Link } from 'react-router-dom'; // Add this
import '../Navbar/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
    <div className="navbar-inner">
      <Link to="/" className="navbar-home"><button>Home </button>
      </Link>
      
      <div className="navbar-center">
        <div className="navbar-logo">🎬 Movie Browser</div>
        <div className="navbar-search">
          <input type="text" placeholder="Search movies..." />
          <button style={{borderRadius:99, }}>Search</button>
        </div>
      </div>
      
      <Link to="/favorites" className="navbar-favorites">
        <button>❤️ Favorites</button>
      </Link>
    </div>
  </nav>
);
};

export default Navbar;