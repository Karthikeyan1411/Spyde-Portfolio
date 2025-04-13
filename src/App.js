import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';

import Navbar from './components/index/Navbar';
import Home from './components/index/Home';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Footer from './components/index/Footer';
import Gallery from './components/gallery/Gallery';

import data from './components/data';
import project from './components/project';
import gallery from './components/gallery';

function App() {

  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  // set body class when theme changes
  useEffect(() => {
    document.body.className= isDark ? 'dark-theme': 'light-theme';
  }, [isDark]);

  return (
    <div className="App">
      <Navbar toggleTheme={toggleTheme} isDark={isDark} />
      <Routes>
        <Route 
          path='/' 
          element= { 
          <Home 
            logoData = {data}
          /> } 
        />
        <Route 
          path='/projects' 
          element= {
            <Projects 
              projectData = {project}
            />
          } 
        />
        <Route path='/contact' element={<Contact />} />
        <Route 
          path='/gallery' 
          element=
          {
            <Gallery 
              galData = {gallery}
            />
          } 
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
