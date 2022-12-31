import { ReaderService } from "./../core/reader.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Reader } from "app/models/reader";

@Component({
  selector: "app-edit-reader",
  templateUrl: "./edit-reader.component.html",
  styles: [],
})
export class EditReaderComponent implements OnInit {
  selectedReader: Reader = new Reader();

  constructor(
    private route: ActivatedRoute,
    private readerService: ReaderService
  ) {}

  ngOnInit() {
    let readerID: number = parseInt(this.route.snapshot.params["id"]);
    this.readerService
      .getById(readerID)
      .subscribe((data) => (this.selectedReader = data));
  }

  saveChanges() {
    console.warn("Save reader not yet implemented.");
  }
}
