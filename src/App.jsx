import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import { AuthProvider } from './context/AuthContext'
import Navbar from './components/common/Navbar'
// import Footer from './components/common/Footer'
// import Home from './pages/Home'
// import About from './pages/About'
// import Quiz from './pages/Quiz'
// import Blog from './pages/Blog'
// import Leaderboard from './pages/Leaderboard'
// import Profile from './pages/Profile'
// import Login from './pages/Login'
// import Signup from './pages/Signup'
// import AchievementGallery from './pages/AchievementGallery'
// import Challenge from './pages/Challenge'

function App() {
  return (

      <Router>
        <div className="app">
          <Navbar />
          {/* <main className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/quizzes" element={<Quiz />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/achievements" element={<AchievementGallery />} />
              <Route path="/challenge" element={<Challenge />} />
            </Routes>
          </main>
          <Footer /> */}
        </div>
      </Router>

  )
}

export default App