import React, { useState } from 'react';
import mockUsers from '../data/mockUsers';
import TopThree from '../components/TopThree';
import LeaderboardList from '../components/LeaderboardList';
import Pagination from '../components/Pagination';
import "../styles/Leaderboard.css"

const Leaderboard = () => {
  const topThree = mockUsers.slice(0, 3);
  const remainingUsers = mockUsers.slice(3);
  const usersPerPage = 20;
  const totalPages = Math.ceil(remainingUsers.length / usersPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const paginatedUsers = remainingUsers.slice(
    (currentPage - 1) * usersPerPage,
    currentPage * usersPerPage
  );

  return (
    <div className="leaderboard-container">
      <TopThree topThree={topThree} />
      <LeaderboardList paginatedUsers={paginatedUsers} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
};

export default Leaderboard;
