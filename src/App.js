import TodoApp from './todoComponents';
import { useState, useEffect } from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  useEffect(() => {
    // update mode based on user previous preference
    const mode = localStorage.getItem('mode')
    if (mode) setIsDarkMode(JSON.parse(mode))
  }, [setIsDarkMode])

  return (
    <div className={[isDarkMode ? 'bg-dark' : 'bg-white']}>
      <TodoApp darkModeStatus={[isDarkMode, setIsDarkMode]} />
    </div>
  );
}

export default App;
