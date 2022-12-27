import { allBooks } from "app/data";
import { allReaders } from "./../data";

import { Reader } from "app/models/reader";
import { Injectable } from "@angular/core";
import { Book } from "app/models/book";

@Injectable({
  providedIn: "root",
})
export class DataService {
  constructor() {}

  private _mostPopularBook: Book = allBooks[0];

  public get mostPopularBook(): Book {
    return this._mostPopularBook;
  }

  public set mostPopularBook(v: Book) {
    this._mostPopularBook = v;
  }

  getReaders(): Reader[] {
    return allReaders;
  }

  getReaderById(id: number): Reader {
    return allReaders.find((reader) => reader.readerID === id);
  }

  getBooks(): Book[] {
    return allBooks;
  }

  getBookById(id: number): Book {
    return allBooks.find((book) => book.bookID === id);
  }
}
