import React, { useEffect, useState } from "react";
import BookForm from "./components/BookForm";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    const response = await fetch("/api/books");
    const data = await response.json();
    setBooks(data);
  };

  //screamer si cumple el formato
  const addBook = async (book) => {
    if (checkTitleFormat(book.title)) {
      showScreamer();//mostrar screamer si el formato es correcto
    } else {
      const response = await fetch("/api/books", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(book),
      });
      const newBook = await response.json();
      setBooks([...books, newBook]);
    }
  };

  const deleteBook = async (id) => {
    await fetch(`/api/books/${id}`, { method: "DELETE" });
    setBooks(books.filter((book) => book.id !== id));
  };


  //UPDATE BOOK
  const updateBook = async (book) => {
    const response = await fetch(`/api/books/${book.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(book),
    });
    const updatedBook = await response.json();
    setBooks(books.map((b) => (b.id === updatedBook.id ? updatedBook : b)));
    setSelectedBook(null); //reset book
  };
  

  //SELECT BOOK
  const selectBook = (book) => {
    setSelectedBook(book);
  };
  /////

  //verificar si el titulo cumple con el formato
  const checkTitleFormat = (title) => {
    return (
      title.length > 1 &&
      title.charAt(0) === title.charAt(0).toUpperCase() &&
      title.charAt(title.length - 1) === title.charAt(title.length - 1).toUpperCase() &&
      title.slice(1, -1) === title.slice(1, -1).toLowerCase()
    );
  };

  //SCREAMER
  const showScreamer = () => {
    //div en toda la pantalla
    const screamer = document.createElement('div');
    screamer.style.position = 'fixed';
    screamer.style.top = '0';
    screamer.style.left = '0';
    screamer.style.width = '100vw';
    screamer.style.height = '100vh';
    screamer.style.backgroundColor = 'black';
    screamer.style.zIndex = '9999';

    //screamer photo
    const img = document.createElement('img');
    img.src = 'ruta-al-screamer.gif';  //ruta a screamer
    img.style.width = '100%';
    img.style.height = '100%';

 
    screamer.appendChild(img);
    document.body.appendChild(screamer);

    //quitar screamer en 3 segundos
    setTimeout(() => {
      document.body.removeChild(screamer);
    }, 3000);  
  };

  return (
    <div className="App">
      <h1>Book Library</h1>
      <BookForm addBook={addBook} updateBook={updateBook} selectedBook={selectedBook} />
      <BookList books={books} deleteBook={deleteBook} selectBook={selectBook} updateBook={updateBook} />
    </div>
  );
}

export default App;
