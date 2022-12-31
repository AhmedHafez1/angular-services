import { TrackerError } from "./../models/trackerError";
import { Inject, Injectable, InjectionToken } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { EMPTY, Observable } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable()
export abstract class DataService<T> {
  protected abstract apiUrl: string;

  constructor(private http: HttpClient) {}

  getAll(): Observable<T[]> {
    return this.http.get<T[]>(this.apiUrl).pipe(catchError(this.handleError));
  }

  getById(id: number): Observable<T> {
    return this.http.get<T>(this.apiUrl + id);
  }

  handleError(error: HttpErrorResponse): Observable<never> {
    const trackerError: TrackerError = {
      errorNumber: error.status,
      message: error.statusText,
      userMessage: "An error occured while retrieving the data",
    };
    console.log(trackerError);
    return EMPTY;
  }
}
