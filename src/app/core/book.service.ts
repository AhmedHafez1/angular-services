import { Book } from "./../models/book";
import { DataService } from "app/core/data.service";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class BookService extends DataService<Book> {
  protected apiUrl = "/api/books/";
}
