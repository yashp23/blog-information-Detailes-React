import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Course from './components/Course';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Blog from './components/Blog';
import BlogDetailes from './components/BlogDetailes';
import Error404 from './components/Error404';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Course" element={<Course />} />
          <Route path="/blog" element={<Blog />} />
          <Route path='/blog/:id' element={<BlogDetailes />} />
          <Route path='*' element={<Error404 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
