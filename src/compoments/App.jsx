import React, { useContext, useState } from "react";
import ReactPaginate from "react-paginate";
import BookSection from "./BookSection";
import BreakHeader from "./BreakHeader";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import Loading from "./Loading";
import Navbar from "./Navbar";
import TitleSection from "./TitleSection";
import { useNavigate } from "react-router-dom";
import { booksContext } from "./Store";

function App() {
  let { item, isLoading, handelPageChange, saveBooks } =
    useContext(booksContext);
  //This is the main component that contains all project or all other components.
  const navigateBook = useNavigate();
  const [bookFind, setBookFind] = useState("");
  //arr is used to store every single book when click on read more.
  const arr = [];
  function showBooks(id) {
    for (let i = 0; i < item.length; i++) {
      if (i === id) {
        arr.push(item[i]);
        localStorage.setItem("book", JSON.stringify(arr));
        saveBooks();
      }
    }
    navigateBook("/bookshow");
  }

  //for handel search bar.
  const handelSearch = (e) => {
    setBookFind(e.target.value);
  };

  return (
    <div className="app">
      <Navbar />
      <Header />
      <BreakHeader />
      <BookSection />
      <div className="input-sec">
        <input
          type="text"
          placeholder="search for book"
          onChange={handelSearch}
        />
      </div>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="book-card">
          {item
            .filter((book) => {
              if (bookFind === "") {
                return book;
              } else if (
                book.title.toLowerCase().includes(bookFind.toLowerCase())
              ) {
                return book;
              }
            })
            .map((book, index) => {
              return (
                <div
                  key={index}
                  id={index}
                  className="bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4 basis-1/3 book-view"
                >
                  <a href="#">
                    <img
                      className="rounded-t-lg"
                      src={`https://www.gutenberg.org/cache/epub/${book.id}/pg${book.id}.cover.medium.jpg`}
                      alt=""
                    />
                  </a>
                  <div className="p-5">
                    <a href="#">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {book.title}
                      </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      <span>Catigories :</span> {book.bookshelves}
                    </p>

                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      <span>Authors:</span> {book.authors[0]?.name}
                    </p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      <span>Authors birth year : </span>
                      {book.authors[0]?.birth_year}
                    </p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      <span>Authors death year : </span>
                      {book.authors[0]?.death_year}
                    </p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      <span>Subjects : </span>
                      {book.subjects}
                    </p>
                    <a
                      className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 point"
                      onClick={() => showBooks(index)}
                    >
                      Read more
                      <svg
                        aria-hidden="true"
                        className="ml-2 -mr-1 w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              );
            })}
        </div>
      )}
      <div className="flex justify-center mb-5 paginate">
        <ReactPaginate
          previousLabel={"previous"}
          nextLabel={"next"}
          breakLabel={"..."}
          pageCount={2145}
          marginPagesDisplayed={3}
          pageRangeDisplayed={3}
          onPageChange={handelPageChange}
          containerClassName={
            "relative z-0 inline-flex rounded-md shadow-sm -space-x-px cont-pageinate"
          }
          pageClassName={
            "relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 page-link"
          }
          previousClassName={
            "relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
          }
          previousLinkClassName={
            "relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
          }
          nextClassName={
            "relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 next"
          }
          nextLinkClassName={
            "relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 "
          }
          breakClassName={
            "relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700"
          }
          activeClassName={
            "z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
          }
        />
      </div>
      <TitleSection />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
