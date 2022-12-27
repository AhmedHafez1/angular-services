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
