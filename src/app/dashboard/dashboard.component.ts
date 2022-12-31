import { MostPopularBookService } from "./../core/most-popular-book.service";
import { ReaderService } from "./../core/reader.service";
import { BookService } from "./../core/book.service";
import { Component, OnInit } from "@angular/core";

import { Book } from "app/models/book";
import { Reader } from "app/models/reader";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styles: [],
})
export class DashboardComponent implements OnInit {
  allBooks: Book[];
  allReaders: Reader[];
  mostPopularBook: Book;

  constructor(
    private bookService: BookService,
    private readerService: ReaderService,
    private mostPopularBookService: MostPopularBookService
  ) {}

  ngOnInit() {
    this.bookService.getAll().subscribe(
      (data) => (this.allBooks = data),
      (error) => console.log(error)
    );
    this.readerService.getAll().subscribe(
      (data) => (this.allReaders = data),
      (error) => console.log(error)
    );
    this.mostPopularBook = this.mostPopularBookService.mostPopularBook;
  }

  deleteBook(bookID: number): void {
    console.warn(`Delete book not yet implemented (bookID: ${bookID}).`);
  }

  deleteReader(readerID: number): void {
    console.warn(`Delete reader not yet implemented (readerID: ${readerID}).`);
  }
}
