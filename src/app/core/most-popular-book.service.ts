import { Injectable } from "@angular/core";
import { allBooks } from "app/data";
import { Book } from "app/models/book";

@Injectable({
  providedIn: "root",
})
export class MostPopularBookService {
  constructor() {}

  private _mostPopularBook: Book = allBooks[0];

  public get mostPopularBook(): Book {
    return this._mostPopularBook;
  }

  public set mostPopularBook(v: Book) {
    this._mostPopularBook = v;
  }
}
