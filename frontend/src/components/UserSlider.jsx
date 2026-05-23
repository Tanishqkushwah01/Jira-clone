import React, { useState, useEffect } from 'react';
import './UserSlider.css';

// Map actual user count to slider value (0 - 100)
const usersToVal = (users) => {
  if (users <= 10) {
    return (users - 1) * (20 / 9); // 0 to 20
  } else if (users <= 100) {
    return 20 + (users - 10) * (20 / 90); // 20 to 40
  } else if (users <= 1000) {
    return 40 + (users - 100) * (20 / 900); // 40 to 60
  } else if (users <= 10000) {
    return 60 + (users - 1000) * (20 / 9000); // 60 to 80
  } else {
    return 80 + (users - 10000) * (20 / 40000); // 80 to 100
  }
};

// Map slider value (0 - 100) to actual user count
const valToUsers = (val) => {
  if (val <= 20) {
    return Math.round(1 + val * (9 / 20));
  } else if (val <= 40) {
    return Math.round(10 + (val - 20) * (90 / 20));
  } else if (val <= 60) {
    return Math.round(100 + (val - 40) * (900 / 20));
  } else if (val <= 80) {
    return Math.round(1000 + (val - 60) * (9000 / 20));
  } else {
    return Math.round(10000 + (val - 80) * (40000 / 20));
  }
};

const UserSlider = ({ users, onChange }) => {
  const [sliderVal, setSliderVal] = useState(usersToVal(users));
  const [inputText, setInputText] = useState(users.toString());

  useEffect(() => {
    setSliderVal(usersToVal(users));
    setInputText(users.toString());
  }, [users]);

  const handleSliderChange = (e) => {
    const val = parseFloat(e.target.value);
    setSliderVal(val);
    const calculatedUsers = valToUsers(val);
    onChange(calculatedUsers);
  };

  const handleInputChange = (e) => {
    const val = e.target.value;
    setInputText(val);
    
    // Parse the value only if it's a valid integer
    const parsed = parseInt(val, 10);
    if (!isNaN(parsed) && parsed >= 1) {
      const clamped = Math.min(Math.max(parsed, 1), 50000);
      onChange(clamped);
    }
  };

  const handleInputBlur = () => {
    // Revert input text to matching user count on blur to clean up incomplete text input
    setInputText(users.toString());
  };

  const setFixedUsers = (target) => {
    onChange(target);
  };

  return (
    <div className="user-slider-container">
      <div className="slider-header">
        <span className="slider-title">How many users do you have?</span>
        <div className="input-wrapper">
          <input
            type="text"
            className="user-number-input"
            value={inputText}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            aria-label="User count input"
          />
          <span className="input-suffix">users</span>
        </div>
      </div>

      <div className="slider-track-wrapper">
        <input
          type="range"
          min="0"
          max="100"
          step="0.1"
          value={sliderVal}
          onChange={handleSliderChange}
          className="custom-range-slider"
          style={{
            background: `linear-gradient(to right, var(--color-primary) 0%, var(--color-primary) ${sliderVal}%, var(--color-border) ${sliderVal}%, var(--color-border) 100%)`
          }}
          aria-label="User count slider"
        />
      </div>

      <div className="slider-ticks">
        <button type="button" onClick={() => setFixedUsers(10)} className={`tick-btn ${users === 10 ? 'active' : ''}`}>10</button>
        <button type="button" onClick={() => setFixedUsers(100)} className={`tick-btn ${users === 100 ? 'active' : ''}`}>100</button>
        <button type="button" onClick={() => setFixedUsers(1000)} className={`tick-btn ${users === 1000 ? 'active' : ''}`}>1,000</button>
        <button type="button" onClick={() => setFixedUsers(10000)} className={`tick-btn ${users === 10000 ? 'active' : ''}`}>10,000</button>
        <button type="button" onClick={() => setFixedUsers(50000)} className={`tick-btn ${users === 50000 ? 'active' : ''}`}>50,000</button>
      </div>
    </div>
  );
};

export default UserSlider;
