class BookDto {
  constructor(id, title, author) {
    this.id = id;
    this.title = title;
    this.author = author;
  }

  static fromModel(book) {
    return new BookDto(book._id, book.title, book.author);
  }
}

module.exports = BookDto;
