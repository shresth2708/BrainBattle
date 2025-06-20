import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar'; 
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Footer from './Components/Footer/Footer';  
import Contact from './pages/Contact';
import Services from './pages/Services';
import Quiz from './pages/Quiz';
import './App.css'; 


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quizzes" element={<Quiz />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;