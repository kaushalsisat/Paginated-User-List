import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex justify-center space-x-2 mt-4">
      <button
        className="px-4 py-2 bg-gray-400 rounded disabled:opacity-50"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      {/* previous button end */}

      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index + 1}
          className={`px-3 py-2 rounded ${currentPage === index + 1 ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          onClick={() => onPageChange(index + 1)}
        >
          {index + 1}
        </button>
      ))}

      <button
        className="px-4 py-2 bg-gray-400 rounded disabled:opacity-50"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
      {/* Next button end */}
    </div>
  );
};

export default Pagination;


 