import React from "react";
import { useTheme } from "../context/ThemeContext";

function Dashboard() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div style={{ padding: '0.5rem' }}>
      <h2 style={{ padding: '0.5rem' }}>Current Theme: {theme}</h2>
      <button onClick={toggleTheme} style={{ margin: '0.5rem' , padding: '0.5rem'  }}>
        {theme === 'light' ? '🌙 Dark' : '🔆 Light'}
      </button>
    </div>
  );
}

export default Dashboard;
