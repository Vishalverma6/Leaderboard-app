import React, { useState } from 'react';
import "../styles/TopThree.css";
import { FaCrown, FaStar } from 'react-icons/fa';

const TopThree = ({ topThree }) => {
  const [mode, setMode] = useState('monthly'); // default is monthly

  // Function to get crown color based on index
  const getCrownColor = (index) => {
    switch (index) {
      case 0:
        return 'gold';
      case 1:
        return 'silver';
      case 2:
        return '#cd7f32'; // bronze
      default:
        return 'gray';
    }
  };

  return (
    <div className="top-three-wrapper">
      
      <div className="toggle-buttons">
        <button
          className={mode === 'daily' ? 'active' : ''}
          onClick={() => setMode('daily')}
        >
          Daily
        </button>
        <button
          className={mode === 'monthly' ? 'active' : ''}
          onClick={() => setMode('monthly')}
        >
          Monthly
        </button>
      </div>

      <div className="top-three-cards">
        {topThree.map((user, index) => {
          const avatarUrl = `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(user.name)}`;
          return (
            <div key={user.id} className={`top-card position-${index + 1}`}>
              <FaCrown
                className='crown'
                style={{ color: getCrownColor(index) }}
              />
              <div className="avatar">
                <img src={avatarUrl} alt={user.name} />
              </div>
              <div className="name">{user.name}</div>
              <div className="points">{user.points} <FaStar className='star' /></div>
              <div className="rank-badge">
                {index === 0 ? '🥇' : index === 1 ? '🥈' : '🥉'}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopThree;
