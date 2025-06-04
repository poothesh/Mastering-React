import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Intro from './components/Intro.jsx'
import { ThemeProvider } from './context/ThemeContext';
import { UserProvider } from './context/UserContext';


createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <UserProvider>
      <App />
    </UserProvider>
  </ThemeProvider>
)
