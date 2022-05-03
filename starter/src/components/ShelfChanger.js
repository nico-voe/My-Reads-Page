const ShelfChanger = ({ book, updateLibrary, updateBook, setBookShelf }) => {
  console.log("- bookSelect", book);

  return (

    <div className="book-shelf-changer">

      <select value={book.shelf} defaultValue={book.shelf} onChange={(e) => updateBook(book, e)}>

        <option value="none" disabled>
          Move to...
        </option>
        <option value="currentlyReading">
          Currently Reading
        </option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>

      </select>
    </div>

  )
}

export default ShelfChanger