"use client";

import Link from "next/link";
import ProductsTable from "./_components/Table";
import { PRODUCT_MANAGEMENT_ROUTE } from "@/constants/routes";
import { FaPlus } from "react-icons/fa";
import { useState } from "react";
import Pagination from "../_components/Pagination";

const PRODUCTS_PER_PAGE = 10;

const ProductManagementPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0);

  const totalPages = Math.ceil(
    totalProducts / PRODUCTS_PER_PAGE
  );

  const handleTotalChange = (total) => {
    setTotalProducts(total);

    const newTotalPages = Math.ceil(
      total / PRODUCTS_PER_PAGE
    );

    // If the current page becomes invalid after deleting
    // a product, move to the last available page.
    if (
      newTotalPages > 0 &&
      currentPage > newTotalPages
    ) {
      setCurrentPage(newTotalPages);
    }
  };

  const handlePageChange = (page) => {
    if (page < 1) return;

    if (totalPages > 0 && page > totalPages) {
      return;
    }

    setCurrentPage(page);
  };

  const startItem =
    totalProducts === 0
      ? 0
      : (currentPage - 1) * PRODUCTS_PER_PAGE + 1;

  const endItem = Math.min(
    currentPage * PRODUCTS_PER_PAGE,
    totalProducts
  );
  return (
<section className="py-3">
    <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Product Management</h2>
    <div className="relative overflow-hidden bg-white shadow-md dark:bg-gray-900 sm:rounded-lg">
      <div className="flex flex-col px-4 py-3 space-y-3 lg:flex-row lg:items-center lg:justify-between lg:space-y-0 lg:space-x-4">
        <div className="flex items-center flex-1 space-x-4">
          <h5>
            <span className="text-gray-500">All Products:{" "}</span>
            <span className="dark:text-white">{totalProducts}</span>
          </h5>
        </div>
        <div className="flex flex-col shrink-0 space-y-3 md:flex-row md:items-center lg:justify-end md:space-y-0 md:space-x-3">
          <Link href={`${PRODUCT_MANAGEMENT_ROUTE}/add`} className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white rounded-lg bg-primary hover:bg-primary/90 focus:ring-4 focus:ring-primary/30 focus:outline-none">
            <FaPlus className="mr-2"/>Add New Product
          </Link>
        </div>
      </div>
      <ProductsTable 
      currentPage={currentPage}
      productsPerPage={PRODUCTS_PER_PAGE}
      onTotalChange={handleTotalChange}
      />

      {/* Pagination */}
      <nav className="flex flex-col items-start justify-between p-4 space-y-3 md:flex-row md:items-center md:space-y-0" aria-label="Table navigation">
        <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
          Showing{" "}
          <span className="font-semibold text-gray-900 dark:text-white">{startItem}-{endItem}</span>{" "}
          of{" "}
          <span className="font-semibold text-gray-900 dark:text-white">{totalProducts}</span>
        </span>
        <Pagination
        currentPage={currentPage}
        totalItems={totalProducts}
        itemsPerPage={PRODUCTS_PER_PAGE}
        onPageChange={handlePageChange}
          />
      </nav>
    </div>
</section>
  );
};

export default ProductManagementPage;
