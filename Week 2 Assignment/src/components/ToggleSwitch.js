import React from 'react';

function ToggleSwitch({ isDarkMode, toggleDarkMode }) {
  return (
    <div className="toggle-switch">
      <input
        type="checkbox"
        checked={isDarkMode}
        onChange={toggleDarkMode}
      />
      <span>{isDarkMode ? 'Dark Mode' : 'Light Mode'}</span>
    </div>
  );
}

export default ToggleSwitch;
