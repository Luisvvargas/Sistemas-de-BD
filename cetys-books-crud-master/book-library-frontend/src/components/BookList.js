import React from "react";

function BookList({ books, deleteBook, selectBook }) {
  return (
    <div>
      <h2>Book List</h2>
    <ul>
      {books.map((book) => (
        <li key={book.id} style={{ marginBottom: "10px" }}>
          <span style={{ marginRight: "10px" }}>
              <strong>{book.title}</strong> by {book.author}
          </span>
          <button onClick={() => deleteBook(book.id)}>Delete</button>
          <button onClick={() => selectBook(book)}>Update</button> 
        </li>
      ))}
    </ul>
    </div>
  );
}

export default BookList;
