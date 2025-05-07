import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';  // Fixed import path
import Home from './pages/Home/Home';
import Footer from './Components/Footer/Footer';  // Fixed import path

// Create placeholder components for routes that don't have components yet
const Quizzes = () => <div className="container"><h1>Quizzes Page</h1></div>;
const Leaderboard = () => <div className="container"><h1>Leaderboard Page</h1></div>;
const Profile = () => <div className="container"><h1>Profile Page</h1></div>;
const Login = () => <div className="container"><h1>Login Page</h1></div>;
const Signup = () => <div className="container"><h1>Signup Page</h1></div>;
const NotFound = () => <div className="container"><h1>404 - Page Not Found</h1></div>;

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quizzes" element={<Quizzes />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} /> {/* Catch-all route for 404 */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;