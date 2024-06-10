import React, { useState } from 'react';
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Card from "../components/Card";
import funko from "../data/funko.json";

const ITEMS_PER_PAGE = 10;

export default function Funko() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(funko.length / ITEMS_PER_PAGE);

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0); // Scrolla in cima alla pagina quando si cambia pagina
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo(0, 0);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo(0, 0);
    }
  };

  const currentItems = funko.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const renderPageNumbers = () => {
    const pageNumbers = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pageNumbers.push(1, 2, 3, 4, '...', totalPages);
      } else if (currentPage > 3 && currentPage < totalPages - 2) {
        pageNumbers.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
      } else {
        pageNumbers.push(1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      }
    }

    return pageNumbers;
  };

  return (
    <div>
      <Nav />
      <div className="flex flex-col gap-10 items-center justify-center my-10">
        <h1 className="text-center text-7xl font-bold font-nuku my-5 pt-4">Catalogo - Funko Pop</h1>
        <div className="cursor-pointer grid grid-cols-5 justify-center gap-[70px]">
          {currentItems.map((volume, index) => (
            <Card key={index} img={volume.img} title={volume.title} vol={volume.vol} price={volume.price} />
          ))}
        </div>
        <div className="flex gap-2 mt-5 items-center">
          <button
            className="text-xl font-semibold text-black-japan px-4 py-2 hover:text-white hover:bg hover:bg-blue-japan rounded-xl"
            onClick={handlePrevious}
            disabled={currentPage === 1}
          >
            &lt; Precedente
          </button>
          {renderPageNumbers().map((pageNumber, index) => (
            <button
              key={index}
              className={`text-black-japan text-xl px-4 py-2 ${currentPage === pageNumber ? 'text-white rounded-lg bg-blue-japan' : 'bg-white'}`}
              onClick={() => handleClick(pageNumber)}
              disabled={pageNumber === '...'}
            >
              {pageNumber}
            </button>
          ))}
          <button
            className="text-xl font-semibold text-black-japan px-4 py-2 hover:text-white hover:bg hover:bg-blue-japan rounded-lg"
            onClick={handleNext}
            disabled={currentPage === totalPages}
          >
            Successivo &gt;
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}