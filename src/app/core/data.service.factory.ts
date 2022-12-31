import { BookService } from "./book.service";
import { HttpClient } from "@angular/common/http";

export const bookServiceFactory = (http: HttpClient) => {
  const dataService = new BookService(http);
  return dataService;
};
