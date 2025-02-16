import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../src/frontend/pages/home';
import About from './frontend/pages/about';
import Project from './frontend/pages/project';
import Contact from './frontend/pages/contact';
import Portofolio from './frontend/pages/portofolio';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/project' element={<Project />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/portofolio' element={<Portofolio />} />
      </Routes>
    </Router>
  )
}

export default App
