import React, { useContext } from "react";
import { booksContext } from "../Store";
import { useNavigate } from "react-router-dom";

function BookRoute() {
  let { bookData } = useContext(booksContext);
  //this component for show every single book in one page.
  let nav = useNavigate();
  function backNav() {
    nav("/");
  }
  return (
    <div className="book-Route">
      <a
        href="#"
        class="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 book-render"
      >
        <img
          class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src={`https://www.gutenberg.org/cache/epub/${bookData[0].id}/pg${bookData[0].id}.cover.medium.jpg`}
          alt=""
        />
        <div class="flex flex-col justify-between p-4 leading-normal">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {bookData[0].title}
          </h5>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            <span>Catigories :</span> {bookData[0].bookshelves}
          </p>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            <span>authors :</span> {bookData[0].authors[0]?.name}
          </p>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            <span>Authors birth year : </span>
            {bookData[0].authors[0]?.birth_year}
          </p>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            <span>Authors death year : </span>
            {bookData[0].authors[0]?.death_year}
          </p>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            <span>Subjects : </span>
            {bookData[0].subjects}
          </p>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            <span>languages : </span>
            {bookData[0].languages}
          </p>
        </div>
      </a>
      <button
        onClick={backNav}
        className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
      >
        Back to Home
      </button>
    </div>
  );
}

export default BookRoute;
