import { TrackerError } from "./../models/trackerError";
import { ErrorHandler, Injectable } from "@angular/core";

@Injectable()
export class CentralizedErrorHandlerService implements ErrorHandler {
  handleError(error: any): void {
    const errorObj: TrackerError = {
      message: (<Error>error).message,
      errorNumber: 300,
      userMessage: "An error occured, Please try again.",
    };

    console.log(errorObj);
  }
}
