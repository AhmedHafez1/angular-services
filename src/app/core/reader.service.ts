import { Reader } from "./../models/reader";
import { DataService } from "app/core/data.service";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ReaderService extends DataService<Reader> {
  protected apiUrl = "/api/readers/";
}
