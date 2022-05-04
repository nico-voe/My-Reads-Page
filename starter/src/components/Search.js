import { useState } from "react";
import { Link } from "react-router-dom";
import { search } from "./../BooksAPI";
import SearchBook from "./SearchBook";

const Search = ({ update, backendBooks }) => {
  const [input, setInput] = useState("");
  const [books, setBooks] = useState([]);

  // searching books by input
  const searchForInput = (e) => {
    const inputValue = e.target.value;
    setInput(inputValue);

    const getBooks = async () => {
      try {
        const booksData = await search(inputValue, 20);
        setBooks(booksData);
      } catch (e) {
        console.log("error in search", e);
        setInput("");
      }
    };

    if (inputValue) getBooks();
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            onChange={searchForInput}
            value={input}
            type="text"
            placeholder="Search by title, author, or ISBN"
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {input ? (
            <SearchBook
              books={books}
              update={update}
              backendBooks={backendBooks}
            />
          ) : (
            <div><b>Type something to find your book</b></div>
          )}
        </ol>
      </div>
    </div>
  );
};

export default Search;