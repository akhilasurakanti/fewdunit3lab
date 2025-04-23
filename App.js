import React, { useState } from 'react';

export default function FocusBlurComponent() {
  const [isFocused, setIsFocused] = useState(false);
  const [hoveredElement, setHoveredElement] = useState(null);
  const [text, setText] = useState('Click here to focus');

  const handleButtonClick = () => {
    setText('Text updated after button click!');
  };

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
        {text}
      </h2>

      <img
        src="https://via.placeholder.com/150"
        alt="Sample"
        onMouseEnter={() => setHoveredElement('image')}
        onMouseLeave={() => setHoveredElement(null)}
        className={`w-40 h-40 ${hoveredElement === 'image' ? 'blur-sm' : ''}`}
      />

      <button
        onClick={handleButtonClick}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Update Text
      </button>
    </div>
  );
}
