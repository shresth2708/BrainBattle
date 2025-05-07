import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        <div className="logo-icon">B</div>
        <span className="logo-text">BrainBattle</span>
      </Link>
      
      <div className="navbar-links">
        <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} end>
          <span className="icon">🏠</span>
          Home
        </NavLink>
        <NavLink to="/quizzes" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          <span className="icon">📋</span>
          Quizzes
        </NavLink>
        <NavLink to="/leaderboard" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          <span className="icon">🏆</span>
          Leaderboard
        </NavLink>
        <NavLink to="/profile" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          <span className="icon">👤</span>
          Profile
        </NavLink>
      </div>
      
      <div className="navbar-auth">
        <Link to="/login" className="login-btn">Login</Link>
        <Link to="/signup" className="signup-btn">Sign Up</Link>
      </div>
    </nav>
  );
};

export default Navbar;