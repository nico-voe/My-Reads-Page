import Cover from "./BookCover.js";
import Dropdown from "./Dropdown.js";

const SearchBook = ({ books, update, backendBooks }) => {

  const findBooks = (books) => (id) => books.find((b) => b.id === id);
  const findBookById = findBooks(backendBooks);

  const withShelf = (obj) => {
    obj.shelf = "none";
    return obj;
  };

  let comparedBooks = [];

  if (books && books.length > 0) {
    books.forEach((a) => {
      const found = findBookById(a.id);
      comparedBooks.push(found !== undefined ? found : withShelf(a));
    });
  }

  // handling dropdown selection
  const handleShelf = (event, book) => {
    const selectedShelf = event.target.value;
    update(book, selectedShelf);
  };

  return (
    <>
      {comparedBooks && comparedBooks.length > 0 ? (
        comparedBooks.map((book) => {
          if (book.imageLinks) {
            return (
              <li key={book.id}>
                <div className="book">
                  <div className="book-top">
                    <Cover link={book.imageLinks.smallThumbnail} />
                    <Dropdown handleShelf={handleShelf} book={book} />
                  </div>
                  <div className="book-title">{book.title}</div>
                  <div className="book-authors">
                    {book.authors
                      ? book.authors.map((author, index) => {
                        return <div key={index}>{author}</div>;
                      })
                      : "no author"}
                  </div>
                </div>
              </li>
            );
          } else {
            return "";
          }
        })
      ) : (
        <p><b>No books match your input. Try something else!</b></p>
      )}
    </>
  );
};

export default SearchBook;