import BookCover from "./BookCover.js";
import Dropdown from "./Dropdown.js";

const LibraryBook = ({ books, update }) => {

  const handleShelf = (event, book) => {
    const selectedShelf = event.target.value;
    update(book, selectedShelf);
  };

  return (
    <>
      {books && books.length > 0 ? (
        books.map((book) => {
          return (
            <li key={book.id}>
              <div className="book">
                <div className="book-top">
                  <BookCover link={book.imageLinks.smallThumbnail} />
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
        })
      ) : (
        <p>no books found</p>
      )}
    </>
  );
};

export default LibraryBook;