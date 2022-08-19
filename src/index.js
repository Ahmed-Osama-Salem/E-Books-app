import React from "react";
import ReactDOM from "react-dom";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import App from "./compoments/App";
import BookRoute from "./compoments/RoutePages/BookRoute";
import SearchBar from "./compoments/SearchPage/SearchBar";
import { BooksContextProvider } from "./compoments/Store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BooksContextProvider>
    <BrowserRouter>
      <Routes>
        <Route element={<App />} path="/" />
        <Route element={<BookRoute />} path="book-show" />
        <Route element={<SearchBar />} path="search" />
      </Routes>
    </BrowserRouter>
  </BooksContextProvider>
);
