import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Pages
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [department, setDepartment] = useState('all');

  useEffect(() => {
    // Load department preference from localStorage
    const savedDept = localStorage.getItem('currentDept') || 'all';
    setDepartment(savedDept);
  }, []);

  const handleDepartmentChange = (dept) => {
    setDepartment(dept);
    localStorage.setItem('currentDept', dept);
  };

  return (
    <Router>
      <ScrollToTop />
      <Header />
      <main style={{ minHeight: '100vh' }}>
        <Routes>
          <Route path="/" element={<Home department={department} onDepartmentChange={handleDepartmentChange} />} />
          <Route path="/about" element={<About department={department} />} />
          <Route path="/services" element={<Services department={department} />} />
          <Route path="/blog" element={<Blog department={department} />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
