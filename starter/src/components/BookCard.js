import ShelfChanger from "./ShelfChanger";

const Books = ({ book, updateBook }) => {
  console.log("- book", book);
  const { title, imageLinks, authors } = book;
  console.log(book)

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage:
                `url(${imageLinks.thumbnail})`,
            }}
          ></div>
          <ShelfChanger book={book} updateBook={updateBook} />
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{authors.map(author => {
          return <span className='space'>{author} </span>
        })}
        </div>
      </div>
    </li>
  )
}

export default Books