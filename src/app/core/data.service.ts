import { allBooks } from "app/data";
import { allReaders } from "./../data";

import { Reader } from "app/models/reader";
import { Injectable } from "@angular/core";
import { Book } from "app/models/book";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class DataService {
  constructor(private http: HttpClient) {}

  private _mostPopularBook: Book = allBooks[0];

  public get mostPopularBook(): Book {
    return this._mostPopularBook;
  }

  public set mostPopularBook(v: Book) {
    this._mostPopularBook = v;
  }

  getReaders(): Observable<Reader[]> {
    return this.http.get<Reader[]>("/api/readers");
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
