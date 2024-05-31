import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header'
import Home from './components/Home';
import Catalog from './components/catalog';
import News from './components/News';
import Single from './components/single';
import AboutUs from './components/AboutUs';
import Arcana from './components/Arcana';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/final" element={<Home />} />
          <Route path="/character/:id" element={<Single />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/news" element={<News />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/arcana" element={<Arcana />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;