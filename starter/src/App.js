import "./App.css";
import { useState, useEffect } from "react";
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import BookCard from './components/BookCard'
import BookShelf from "./components/BookShelf";
import { get, getAll, update } from './BooksAPI'

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);
  const [data, setData] = useState([])
  const [open, setOpen] = useState(false)
  const [callApi, setCallApi] = useState(false)

  useEffect(() => {

    const fetchData = async () => {
      const getAllBooks = await getAll()
      setData(getAllBooks)
      console.log("- getAllBooks", getAllBooks);
    }
    fetchData()
  }, [callApi])

  const updateBook = async (book, e) => {
    console.log("- book", book);
    const bookShelf = e.target.value
    setCallApi(!callApi)
    await update(book, bookShelf)
  }

  const onClick = () => setOpen(!open)

  return (
    <div className="app">
      {showSearchPage ? (
        <div className="search-books">
          <div className="search-books-bar">
            <span
              className="close-search"
              onClick={() => setShowSearchpage(!showSearchPage)}
            >
              Close
            </span>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title, author, or ISBN"
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid"></ol>
          </div>
        </div>
      ) : (
        <div className="list-books">

          <Header />

          <button onClick={() => onClick()}> hola</button>

          {open && <p>alo mere dost</p>}

          <div className="list-books-content">


            <BookShelf title="Currently Reading">
              {
                data.map(book => {
                  if (book.shelf === 'currentlyReading') {
                    return (
                      <BookCard book={book} key={book.id} updateBook={updateBook} />
                    )
                  }
                })
              }
            </BookShelf>

            <BookShelf title="Want to Read">
              {
                data.map(book => {
                  if (book.shelf === "wantToRead") {
                    return (
                      <BookCard book={book} key={book.id} updateBook={updateBook} />
                    )
                  }
                })
              }
            </BookShelf>

            <BookShelf title="Read">
              {
                data.map(book => {
                  if (book.shelf === 'read') {
                    return <BookCard book={book} key={book.id} updateBook={updateBook} />
                  }
                })
              }
            </BookShelf>

            <BookShelf title="None">
              {
                data.map(book => {
                  if (book.shelf === 'none') {
                    return <BookCard book={book} key={book.id} updateBook={updateBook} />
                  }
                })
              }
            </BookShelf>


          </div>
          <div className="open-search">
            <a onClick={() => setShowSearchpage(!showSearchPage)}>Add a book</a>
          </div>
        </div>
      )
      }
    </div >
  );
}

export default App;
