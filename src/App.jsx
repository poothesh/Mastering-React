import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Dashboard from './components/DashBoard';
import Profile from './components/Profile';
import { ThemeContext } from './context/ThemeContext';
import NameAge from './components/NameAge';
import UseToggle from './components/useToggle';

const App = () => {
  const { theme } = useContext(ThemeContext);

  const appStyle = {
    backgroundColor: theme === 'dark' ? '#1e1e1e' : '#f5f5f5',
    color: theme === 'dark' ? '#fff' : '#000',
    minHeight: '100vh',
  };

  return (
    <div style={appStyle}>
      <Router>
        <Navbar />
        <div style={{ padding: '2rem' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/nameage" element={<NameAge />} />
            <Route path="/toggle" element={<UseToggle />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
