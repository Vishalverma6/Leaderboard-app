
import React from 'react';
import "../styles/Pagination.css"
import { GrLinkNext, GrLinkPrevious } from 'react-icons/gr';


const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="pagination">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <GrLinkPrevious className='previous' />
         Prev
      </button>
      <span>
        Page {currentPage} / {totalPages}
      </span>
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next <GrLinkNext className='next' />
      </button>
    </div>
  );
};

export default Pagination;
