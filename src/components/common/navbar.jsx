import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="brand">Brain Battle</div>
      <div className="nav-links">
        <Link to="/" className="nav-item">Home</Link>
        <Link to="/leaderboard" className="nav-item">Leaderboard</Link>
        <Link to="/quizzes" className="nav-item">Quizzes</Link>
        <Link to="/profile" className="nav-item">Profile</Link>
      </div>
      <div className="auth-buttons">
        <Link to="/login" className="auth-btn">Login</Link>
        <Link to="/signup" className="auth-btn">Sign Up</Link>
      </div>
    </nav>
  );
};

export default Navbar;