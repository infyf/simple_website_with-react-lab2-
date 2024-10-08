import React, { useEffect } from 'react';
import './DebugWindow.css'; 

function DebugWindow({ history, onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(); 
    }, 45000); 
    return () => clearTimeout(timer); 
  }, [onClose]);

  return (
    <div className="debug-window">
      <h2>Історія переміщень:</h2>
      <ul>
        {history.map((path, index) => (
          <li key={index}>{path}</li>
        ))}
      </ul>

    </div>
  );
}

export default DebugWindow;
