"use client";

import React, { useState } from "react";
import BlogCard from "@/components/cardProviders/BlogCard";
import { blogData } from "@/data/bogData";
// import { blogData } from "@/data/blogData";

export default function BlogContent() {
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 10;

  const totalPages = Math.ceil(blogData.length / blogsPerPage);

  const startIndex = (currentPage - 1) * blogsPerPage;
  const endIndex = startIndex + blogsPerPage;
  const currentBlogs = blogData.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="w-full max-w-[800px] mx-auto py-10 space-y-8 px-4">
      {/* Blog Cards */}
      <div className="space-y-6">
        {currentBlogs.map((blog) => (
          <BlogCard
            key={blog.id}
            id={blog.id}
            image={blog.image}
            title={blog.title}
            description={blog.description}
            date={blog.date}
          />
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 flex-wrap pt-4">
          {/* Previous */}
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 rounded-md border border-gray-300 text-sm font-medium disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#FFD700] hover:text-black transition"
          >
            Previous
          </button>

          {/* Page Numbers */}
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`w-10 h-10 rounded-md border text-sm font-medium transition ${
                currentPage === index + 1
                  ? "bg-[#FFD700] text-black border-[#FFD700]"
                  : "border-gray-300 hover:bg-[#FFD700] hover:text-black"
              }`}
            >
              {index + 1}
            </button>
          ))}

          {/* Next */}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 rounded-md border border-gray-300 text-sm font-medium disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#FFD700] hover:text-black transition"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}