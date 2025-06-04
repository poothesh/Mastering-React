import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext'; 

const linkStyle = {
  padding: '10px 20px',
  borderRadius: '20px',
  textDecoration: 'none',
  margin: '0 10px',
  fontWeight: 'bold',
  transition: '0.3s',
};

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem',
      backgroundColor: '#1a1332',
      borderRadius: '0 0 30px 30px',
    }}>
      <h2 style={{ color: '#fff', margin: 0 }}>🚀 My App</h2>

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <NavLink
          to="/"
          style={({ isActive }) => ({
            ...linkStyle,
            color: isActive ? '#fff' : '#ddd',
            backgroundColor: isActive ? '#4e4ec8' : 'transparent'
          })}
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          style={({ isActive }) => ({
            ...linkStyle,
            color: isActive ? '#fff' : '#ddd',
            backgroundColor: isActive ? '#4e4ec8' : 'transparent'
          })}
        >
          About
        </NavLink>

        <NavLink
          to="/contact"
          style={({ isActive }) => ({
            ...linkStyle,
            color: isActive ? '#fff' : '#ddd',
            backgroundColor: isActive ? '#4e4ec8' : 'transparent'
          })}
        >
          Contact
        </NavLink>

        <NavLink
          to="/DashBoard"
          style={({ isActive }) => ({
            ...linkStyle,
            color: isActive ? '#fff' : '#ddd',
            backgroundColor: isActive ? '#4e4ec8' : 'transparent'
          })}
        >
          DashBoard
        </NavLink>
        <NavLink
          to="/profile"
          style={({ isActive }) => ({
            ...linkStyle,
            color: isActive ? '#fff' : '#ddd',
            backgroundColor: isActive ? '#4e4ec8' : 'transparent'
          })}
        >
          Profile
        </NavLink>
        <button
          onClick={toggleTheme}
          style={{
            marginLeft: '10px',
            padding: '8px 12px',
            borderRadius: '10px',
            border: 'none',
            cursor: 'pointer',
            backgroundColor: theme === 'dark' ? '#fff' : '#ffd43b',
            fontWeight: 'bold'
          }}
        >
          {theme === 'dark' ? '🌞' : '🌙'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
