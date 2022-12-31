import { MostPopularBookService } from "./../core/most-popular-book.service";
import { BookService } from "./../core/book.service";
import { DataService } from "./../core/data.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Book } from "app/models/book";

@Component({
  selector: "app-edit-book",
  templateUrl: "./edit-book.component.html",
  styles: [],
})
export class EditBookComponent implements OnInit {
  selectedBook: Book = new Book();

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private mostPopularBookService: MostPopularBookService
  ) {}

  ngOnInit() {
    let bookID: number = parseInt(this.route.snapshot.params["id"]);
    this.bookService
      .getById(bookID)
      .subscribe((data) => (this.selectedBook = data));
  }

  setMostPopular(): void {
    this.mostPopularBookService.mostPopularBook = this.selectedBook;
  }

  saveChanges(): void {
    console.warn("Save changes to book not yet implemented.");
  }
}
