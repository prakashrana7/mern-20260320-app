"use client";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Pagination = ({
  currentPage,
  totalItems,
  itemsPerPage = 10,
  onPageChange,
}) => {
  const totalPages = Math.ceil(
    totalItems / itemsPerPage
  );

  if (totalPages <= 1) {
    return null;
  }

  const getPageNumbers = () => {
    const pages = [];

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }

      return pages;
    }

    pages.push(1);

    if (currentPage > 3) {
      pages.push("...");
    }

    const startPage = Math.max(
      2,
      currentPage - 1
    );

    const endPage = Math.min(
      totalPages - 1,
      currentPage + 1
    );

    for (
      let i = startPage;
      i <= endPage;
      i++
    ) {
      pages.push(i);
    }

    if (currentPage < totalPages - 2) {
      pages.push("...");
    }

    pages.push(totalPages);

    return pages;
  };

  return (
    <ul className="inline-flex items-stretch -space-x-px">

      {/* Previous */}
      <li>
        <button
          type="button"
          disabled={currentPage === 1}
          onClick={() =>
            onPageChange(currentPage - 1)
          }
          className={`flex items-center justify-center h-full py-1.5 px-3 ml-0 rounded-l-lg border border-gray-300 ${
            currentPage === 1
              ? "cursor-not-allowed text-gray-300 bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-600"
              : "cursor-pointer text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          }`}
        >
          <span className="sr-only">
            Previous
          </span>

          <FaChevronLeft className="w-3 h-3" />
        </button>
      </li>

      {/* Page Numbers */}
      {getPageNumbers().map((page, index) => (
        <li key={`${page}-${index}`}>
          {page === "..." ? (
            <span className="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 bg-white border border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400">
              ...
            </span>
          ) : (
            <button
              type="button"
              onClick={() =>
                onPageChange(page)
              }
              aria-current={
                currentPage === page
                  ? "page"
                  : undefined
              }
              className={`flex cursor-pointer items-center justify-center px-3 py-2 text-sm leading-tight border ${
                currentPage === page
                  ? "z-10 text-primary dark:border-gray-700 dark:bg-gray-700 "
                  : "text-gray-500 bg-white border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              }`}
            >
              {page}
            </button>
          )}
        </li>
      ))}

      {/* Next */}
      <li>
        <button
          type="button"
          disabled={
            currentPage === totalPages
          }
          onClick={() =>
            onPageChange(currentPage + 1)
          }
          className={`flex items-center justify-center h-full py-1.5 px-3 leading-tight rounded-r-lg border border-gray-300 ${
            currentPage === totalPages
              ? "cursor-not-allowed text-gray-300 bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-600"
              : "cursor-pointer text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          }`}
        >
          <span className="sr-only">
            Next
          </span>

          <FaChevronRight className="w-3 h-3" />
        </button>
      </li>

    </ul>
  );
};

export default Pagination;