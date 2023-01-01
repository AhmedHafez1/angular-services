import { bookServiceFactory } from "./core/data.service.factory";
import { DataService } from "app/core/data.service";
import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { AddBookComponent } from "./add-book/add-book.component";
import { AddReaderComponent } from "./add-reader/add-reader.component";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { EditReaderComponent } from "./edit-reader/edit-reader.component";
import { EditBookComponent } from "./edit-book/edit-book.component";
import { CentralizedErrorHandlerService } from "./core/centralized-error-handler.service";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AddBookComponent,
    EditReaderComponent,
    EditBookComponent,
    AddReaderComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  bootstrap: [AppComponent],
  providers: [
    { provide: ErrorHandler, useClass: CentralizedErrorHandlerService },
  ],
})
export class AppModule {}
