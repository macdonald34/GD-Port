import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import React from 'react';    
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Designs from './components/Designs';
import Photos from './components/Photos';
import Skills from './components/Skills';
import Typography from './components/Skills';
import Footer from './components/Footer';

function App() {
  return(
    <Router>
      <Header/>
      <Routes>
        <Route path="/aboutme" element={<AboutMe/>}/>
        <Route path="/designs" element={<Designs/>}/>
        <Route path="/photos" element={<Photos/>}/>
        <Route path="/skills" element={<Skills/>}/>
        <Route path="/typography" element={<Typography/>}/>   
         
        </Routes>
    </Router>
  );
}

export default App;