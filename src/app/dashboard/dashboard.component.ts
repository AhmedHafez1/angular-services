import { MostPopularBookService } from "./../core/most-popular-book.service";
import { ReaderService } from "./../core/reader.service";
import { BookService } from "./../core/book.service";
import { Component, OnInit, VERSION } from "@angular/core";
import { Title } from "@angular/platform-browser";

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
    private mostPopularBookService: MostPopularBookService,
    private title: Title
  ) {}

  ngOnInit() {
    this.bookService.getAll().subscribe((data) => (this.allBooks = data));
    this.readerService.getAll().subscribe((data) => (this.allReaders = data));
    this.mostPopularBook = this.mostPopularBookService.mostPopularBook;

    this.getAuthorRecommendationAsync(7);

    this.title.setTitle(`Book Tracker v${VERSION.full}`);

    console.log("ngOnInit executed");
  }

  private async getAuthorRecommendationAsync(id: number): Promise<void> {
    try {
      const author = await this.readerService.logRecommendedAuthor(id);
      console.log("Success: " + author);
    } catch (e) {
      console.error("Fail: " + e);
    }
  }

  deleteBook(bookID: number): void {
    console.warn(`Delete book not yet implemented (bookID: ${bookID}).`);
  }

  deleteReader(readerID: number): void {
    console.warn(`Delete reader not yet implemented (readerID: ${readerID}).`);
  }
}
