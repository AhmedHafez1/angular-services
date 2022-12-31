import { Reader } from "./../models/reader";
import { DataService } from "app/core/data.service";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ReaderService extends DataService<Reader> {
  protected apiUrl = "/api/readers/";

  logRecommendedAuthor(id: number): Promise<string> {
    return new Promise((res, rej) => {
      setTimeout(() => {
        if (id > 0) res("Mr. Ahmed");
        else rej(new Error("Not valid id"));
      }, 3000);
    });
  }
}
