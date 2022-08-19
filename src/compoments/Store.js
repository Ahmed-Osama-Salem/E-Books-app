import React, { createContext, useState, useEffect } from "react";

export let booksContext = createContext();
//i made this component for make all fetch API Globle for all Components.
export function BooksContextProvider(props) {
  // item is an array that saves the data of API.
  const [item, setItem] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  //fetch APIs from gutendex and save in item state.
  const getBooks = async () => {
    setIsLoading(true);
    const res = await fetch("https://gutendex.com/books/?page=1");
    const data = await res.json();
    if (data) {
      setIsLoading(false);
      setItem(data.results);
    }
  };
  //using useEffect to fetch data every time.
  useEffect(() => {
    getBooks();
  }, []);

  //fetch data of next pages
  const fetchPages = async (currentPage) => {
    const response = await fetch(
      `https://gutendex.com/books/?page=${currentPage}`
    );
    const dataPage = await response.json();
    return dataPage.results;
  };
  //handel Paginate to view 35 book on evey page
  async function handelPageChange(data) {
    let currentPage = data.selected + 1;
    const viewPages = await fetchPages(currentPage);
    setItem(viewPages);
  }

  const [bookData, setBookData] = useState([]);

  // function saves the data inside array and localstorage every time
  const saveBooks = () => {
    const localData = JSON.parse(localStorage.getItem("book"));
    //send book data to viewBooks
    setBookData(localData);
  };

  return (
    <booksContext.Provider
      value={{ item, isLoading, handelPageChange, bookData, saveBooks }}
    >
      {props.children}
    </booksContext.Provider>
  );
}
