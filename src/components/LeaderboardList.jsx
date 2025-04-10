
import React from 'react';
import "../styles/LeaderboardList.css"
import { FaStar } from 'react-icons/fa';


const LeaderboardList = ({ paginatedUsers }) => {
  return (
    <div className="leaderboard-list">
      {paginatedUsers.map((user, index) => {
        const avatarUrl = `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(user.name)}`;
        return(
            
        <div key={user.id} className="user-row">
          <div className="user-rank">{user.rank}</div>
          <div className="user-avatar">
            <img src={avatarUrl} alt={user.name} />
          </div>
          <div className="user-info">
            <div className="user-name">{user.name}</div>
            <div className="user-points">{user.points} <FaStar className='star' /></div>
          </div>
        </div>
     )})}
    </div>
  );
};

export default LeaderboardList;
