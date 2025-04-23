import React, { useState } from 'react';
import './App.css'; // Optional, if you add extra styles

export default function App() {
  const [isFocused, setIsFocused] = useState(false);
  const [hoveredElement, setHoveredElement] = useState(null);

  return (
    <div className="p-8">
      <h2
        tabIndex={0}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onMouseEnter={() => setHoveredElement('text')}
        onMouseLeave={() => setHoveredElement(null)}
        className={`text-2xl font-bold mb-4 ${
          isFocused ? 'outline outline-2 outline-green-500 bg-green-100' : ''
        } ${hoveredElement === 'text' ? 'blur-sm' : ''}`}
      >
        Click here to focus
      </h2>

      <img
        src="https://via.placeholder.com/150"
        alt="Sample"
        onMouseEnter={() => setHoveredElement('image')}
        onMouseLeave={() => setHoveredElement(null)}
        className={`w-40 h-40 ${hoveredElement === 'image' ? 'blur-sm' : ''}`}
      />
    </div>
  );
}
