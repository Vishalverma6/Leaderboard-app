import React, { useState } from 'react';
import "../styles/TopThree.css";

const TopThree = ({ topThree }) => {
  const [mode, setMode] = useState('monthly'); // default is monthly

//   const topThree = mode === 'monthly' ? monthlyTopThree : dailyTopThree;

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
              <div className="avatar">
                <img src={avatarUrl} alt={user.name} />
              </div>
              <div className="name">{user.name}</div>
              <div className="points">{user.points}</div>
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
