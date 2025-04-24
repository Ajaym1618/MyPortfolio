import React, { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';

function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, []);

  const handleToggle = () => {
    setIsDark(!isDark);
    if (!isDark) {
      localStorage.setItem('theme', 'dark');
      document.documentElement.classList.add('dark');
    } else {
      localStorage.setItem('theme', 'light');
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <button
      onClick={handleToggle}
      className="w-16 h-8 flex items-center justify-between px-1 rounded-full transition-colors duration-300"
      style={{
        backgroundColor: isDark ? '#1f2d3a' : '#f5eaea',
      }}
    >
      <div
        className={`w-6 h-6 rounded-full flex items-center justify-center transition-transform duration-300
          ${isDark ? 'translate-x-8' : 'translate-x-0'}
        `}
        style={{
          backgroundColor: '#ffffff',
        }}
      >
        {isDark
          ? <Moon size={16} className="text-[#c12f2f]" />
          : <Sun size={16} className="text-[#0275a4]" />
        }
      </div>
    </button>
  );
}

export default ThemeToggle;
