import React from "react";
import ReactDOM from "react-dom";
import { Route, Routes, HashRouter } from "react-router-dom";
import App from "./compoments/App";
import BookRoute from "./compoments/RoutePages/BookRoute";
import SearchBar from "./compoments/SearchPage/SearchBar";
import { BooksContextProvider } from "./compoments/Store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BooksContextProvider>
    <HashRouter>
      <Routes>
        <Route element={<App />} path="/" />
        <Route element={<BookRoute />} path="book-show" />
        <Route element={<SearchBar />} path="search" />
      </Routes>
    </HashRouter>
  </BooksContextProvider>
);
