import React, { useContext, useState } from "react";
import { booksContext } from "../Store";
import { useNavigate } from "react-router-dom";
function SearchBar() {
  let { item } = useContext(booksContext);
  const [search, setSearch] = useState("");

  const handelInput = (e) => {
    setSearch(e.target.value);
  };
  const navBack = useNavigate();
  const navHome = () => {
    navBack("/");
  };
  return (
    <div className="search-sec">
      <h1>Search for books</h1>
      <input type="text" placeholder="book title" onChange={handelInput} />
      <br />
      <button
        type="button"
        onClick={navHome}
        className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
      >
        back to home
      </button>
      <div className="item-sec">
        {item
          .filter((val) => {
            if (search === "") {
              return "";
            } else if (val.title.toLowerCase().includes(search.toLowerCase())) {
              return val;
            }
          })
          .map((val, i) => {
            return (
              <div key={i} className="search-card">
                <img
                  src={`https://www.gutenberg.org/cache/epub/${val.id}/pg${val.id}.cover.medium.jpg`}
                  alt="book"
                />
                <h2>{val.title}</h2>
                <p>{val.authors[0]?.name}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default SearchBar;
