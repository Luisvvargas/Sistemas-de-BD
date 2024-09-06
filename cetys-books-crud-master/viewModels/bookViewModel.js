class BookViewModel {
  constructor(id, title, author, publishedYear, isbn) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.publishedYear = publishedYear;
    this.isbn = isbn;
  }

  static fromModel(book) {
    return new BookViewModel(
      book._id,
      book.title,
      book.author,
      book.publishedYear,
      book.isbn
    );
  }
}

module.exports = BookViewModel;
