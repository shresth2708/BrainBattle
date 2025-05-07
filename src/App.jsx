import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './components/common/Navbar'

import Home from './pages/home/home.jsx'


function App() {
  return (

      <Router>
        <div className="app">
          <Navbar />
          <main className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              
            </Routes>
          </main>
          {/* <Footer /> */}
        </div>
      </Router>

  )
}

export default App